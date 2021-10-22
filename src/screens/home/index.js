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
            modify:true,
            processing:false,
            title_blog:"",
            page_content:"",
            Designation:"",
            datetime:""
        }
    }

    onChange=e=>{
        this.setState({[e.target.name]:e.target.value});
     }
    componentDidMount(){
        const {dispatch,modify}=this.props;
        dispatch(blogdata(modify))
    }

    onSubmit=()=>{
        const {dispatch}=this.props;
        let payload=[];
        payload=[
            {
                title_blog:this.state.title_blog,
                page_content:this.state.page_content,
                Designation:this.state.Designation,
                datetime:this.state.datetime,
                is_Active:true
            }
        
        ]
        this.setState({processing:false,modify:true})
        console.log("dtttt",payload)
        dispatch(blogdata(this.state.modify,payload));
    }


    render(){
        const{home}=this.props;
        console.log("home",home)
        return(
            <div>
                <div>
                <h1 style={{textDecorationColor:"blue",textAlign:"center"}}>Your Blog List</h1>
                {!this.state.processing && <button  className="addnewbutton"style={{backgroundColor:"#26d493"}} onClick={()=>{this.setState({processing:"true"})}}><i class="material-icons">post_add</i>Create New Blog</button>}
                {this.state.processing && <button  className="addnewbutton"style={{backgroundColor:"#26d493"}} onClick={()=>{this.onSubmit()}}>Post the blog <i class="material-icons">post_add</i></button>}
                  {this.state.processing &&
                     <div>
                         <p style={{bottom:0,marginTop:"5rem",fontSize:"1rem"}}>Write Your Blog Title Here</p>
                             <input
                              type={"text"}
                               name="title_blog"
                               style={{width:"100%",marginTop:0,height:"50px"}}
                              onChange={(e) => this.onChange(e)}
                              value={this.state.title}/>
                        <p style={{bottom:0,marginTop:"2rem",fontSize:"1rem"}}>Write Your Blog Content</p>
                             <input
                              type={"text"}
                               name="page_content"
                               style={{width:"100%",marginTop:0,height:"50px"}}
                              onChange={(e) => this.onChange(e)}
                              value={this.state.content}/>
                         <p style={{bottom:0,marginTop:"2rem",fontSize:"1rem"}}>Select your destingation</p>
                       <select name="Designation" onChange={(e) => this.onChange(e)} value={this.state.designation}>
                        <option value="Fresher">Fresher</option>
                        <option value="Junior developer">Junior developer</option>
                        <option value="Developer">Developer</option>
                         <option value="Senior developer">Senior developer</option>
                         </select>
                         <p style={{bottom:0,marginTop:"2rem",fontSize:"1rem"}}>Set your date and time</p>
                             <input
                              type={"datetime-local"}
                               name="datetime"
                               style={{width:"100%",marginTop:0,height:"50px"}}
                              onChange={(e) => this.onChange(e)}
                              value={this.state.time}/>
                     </div>}
                </div>
                {home.status==="Success" &&<NewCard content={home.data}/>}
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