import React,{Component} from 'react';
import ReactDOM from 'react-dom';



class Another extends Component{
  myfun(){
    console.log("hello World");
    document.write("hello world");

  }

  render(){
    return(
      <div>
        <button type="button" onClick={() => this.myfun()}  >click me</button>
      </div>
    )
  }
}


export default Another;
