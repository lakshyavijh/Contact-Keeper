import React from 'react';
 const Developer = () => {
    return (
        <div style={{backgroundColor:"#ccc"}}>
            <h1 style={{textAlign:"center"}}>About The Developer</h1>
            <p className ="my-1">
                <h2>
                 <h1><strong>Lakshya Vijh</strong></h1>
                </h2>
                <h3>
                CSE B-TECH Student<br></br>
                NIT Agartala
                </h3>
                <h2>
                <a href="https://github.com/lakshyavijh/">Github</a><br></br>
                <a href="https://www.linkedin.com/in/lakshya-vijh-382190158">Linkedin</a>
                </h2>
                
               
            </p>
            <div>
            
            <img src={require('./my.jpg') }  style={{height:"600px" ,width:"400px" ,align:"middle",marginLeft:"320px"}}/>
          
            </div>
        </div>
    )
}
export default Developer
