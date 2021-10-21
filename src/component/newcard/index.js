import React,{Component} from 'react';
import Image1 from "../images/404.jpg"
import "./index.css";

export default class NewCard extends Component {
        render(){
            const {content={}} = this.props;
            let url=Image1 
            console.log("dattaas",content)
        return(
         <div className="card">
             {content !== undefined &&content.map(i=>{
                 return(
             <div className="product-card">
               <div className="badge">{i.Designation}</div>
		        <div className="product-tumb">
			      <img src={url}alt="blog"/>
                  <a href="/"><div className="middle">
                 <div className="text">Read More</div>
                  </div>
                  </a>
		        </div>
		        <div className="product-details">
			    <h4>{i.title_blog} <a href="/">
                <i class="material-icons">edit</i></a>
                
               </h4>
                <span className="product-catagory">by {i.Designation}</span>
                <p className="product-catagory">{i.datetime}</p>
                <p>{i.page_content}</p>
				
              <div className="product-links">
              
                {i.is_Active && <p style={{color:"green"}}>Active</p>}
                {!i.is_Active && <p style={{color:"Red"}}>Offline</p>}
			  </div>
			 </div>
             </div>
                 )})} 
        </div>
        )
    }
}