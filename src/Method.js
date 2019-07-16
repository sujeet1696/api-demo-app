import React from 'react';
import ReactDOM from 'react-dom';

class Method extends React.Component {
  constructor(props) {
    super(props)
  }

  fun(){
    document.write("hello world");
  }

  render(){
    return (

      <div>
        <button type="button" onclick="fun()">click me</button>
      </div>
    )
  }
}

export default Method;
