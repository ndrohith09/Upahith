// import Navbar from '../Navbar';
import GeneratedImages from '../UI/GeneratedImages';
import classes from './GeneratedImages.module.css';
import React, { Component } from 'react'
import axios from 'axios';

class StoryGen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            txt : "", 
            img : "",
            tt : ""
            
        }
    } 

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }; 

    postData = async (e) => { 
        console.log(this.state.txt);
        e.preventDefault();  
        
        await axios({
            method: 'post',
            url: 'http://0.0.0.0:8000/text2img?text=' + this.state.txt,
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(res => {
              console.log(res.data.text);
              console.log(res.data['img']);
              this.setState({ 
                img : res.data.img,
                tt : res.data.text
              })
               console.log(this.state.img);
               console.log(this.state.tt);
            })
            .catch(error => {
              console.log(error); 
            });
    } 

    render() { 
        return (
            <div>
            <header className="header1">
                <div className="overlay">
                      
                </div>
            </header>
            <div className="form-container" style={{ 'marginTop': '130px' }}>
                <form onSubmit={this.postData}>
                    <div>
                        <input 
                        type="text" 
                        className="form-control" 
                        name="txt"                         
                        id="txt"                         
                        onChange={e => this.setState({ txt: e.target.value })}
                        placeholder="Enter the lines which arise into your mind..." />
                        <button style={{ 'margin': '20px' }} type="submit" className="btn btn-primary btn-lg">Generate Images</button>
                    </div>
                </form>
                <h2>Your search text: <b style={{ 'color': 'orange' }}>{this.state.tt}</b></h2>
                <div className={classes['generated-images']}>
           
            {/* /*For loop */}
             
            {this.state.img.length ? this.state.img.map((image, index) => (            
                <div className="custom-img" key = {index}
                
                > 
                <img 
                style={{
                    // 'backgroundImage': 'url(' `http://localhost:8000/` + image + ')', 
                    'backgroundSize': 'contain', 
                    'width': '200px',
                    'height': '200px',
                }}
                src={`http://localhost:8000/` + image} alt="img" />
                </div>
            ))
            : null
            }                

        </div> 
            </div>
        </div>
        );
    }
}
 
export default StoryGen;
