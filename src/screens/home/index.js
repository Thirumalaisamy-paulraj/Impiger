import React,{Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { blogdata } from "../../api_helpers/slice/homeSlice";
import "./index.css";
import {NewCard} from "../../component"
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            blog_list:[],
            modify:false
        }
    }

    componentDidMount(){
        const {dispatch,modify}=this.props;
        dispatch(blogdata(modify))
    }


    render(){
        const{home}=this.props;
        console.log("home",home)
        return(
            <div>
                <div>
                <h1 style={{textDecorationColor:"blue",textAlign:"center"}}>Your Blog List</h1>
                <button  className="addnewbutton"style={{backgroundColor:"#26d493"}}><a href="/" style={{textDecoration:"none",color:"#fff"}}><i class="material-icons">post_add</i>Create New Blog</a></button>
                </div>
                {home.status==="Success" &&home.data.blog.contents.datas.map(i=>{ return(<NewCard content={i.content}/>)})}
                </div>
           
        )
    }
}

function mapStateToProps(state){
    const {home}=state;
    console.log("state",state)
    return {
        home
    }
  }
  
  export default withRouter(connect(mapStateToProps)(Home)) 