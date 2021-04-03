import React,{useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';


function App() {
  var data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,14,16]
  var [first,setFirst]=useState("")
  var [second,setSecond]=useState("");
  const clicked=(index)=>{
    console.log(index,first,second);
    if(first ==="" && second ===""){
      setFirst(index.toString())
    }else if(first !=="" && second ===""){
      setSecond(index.toString())
    }else if(first !== "" && second !==""){
      console.log("inn");
      setFirst(second)
      setSecond(index.toString())
    }
  }
  return (
    <div >
      <div className="Screen">
        
          <Row>
            {data.map((i,index)=>{
              var a
              if(index.toString() === first || index.toString() === second ){
                a=<Col key={index} sm="3" style={{padding:"opx"}}>
                <div className="red" onClick={()=>clicked(index)}>
  
                </div>
                  
              </Col>
              }else{
                a=<Col key={index} sm="3" style={{padding:"opx"}}>
                <div className="blue" onClick={()=>clicked(index)}>
  
                </div>
                  
              </Col>
              }
            return a
            })}
            
          </Row>
        
      </div>
    </div>
  );
}

export default App;
