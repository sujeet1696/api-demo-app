import React from 'react';
import ReactDOM from 'react-dom';

class DataR extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        fruits:'',
        vegitables:'',
        drinks:''
      };

      /*// Functional component  Default component
      function CatComponent(props) {
          return <div>{props.catName} Cat, Eye Color: {props.eyeColor}, Age: {props.age}</div>
      }
      CatComponent.defaultProps = {
          catName: "Sandy",
          eyeColor: "deepblue",
          age: "120"
      }*/
  }

  showFruits(){
    let Fruit;
    var request = require('request');
    request('http://demo2921880.mockable.io/fruitts', function (error, response, data) {
    if(error === null){
      if(response.statusCode === 200){
        var Fobj = JSON.parse(data);
        Fruit = "<ul>"
        for(let f of Fobj){
          Fruit +="<li>" + f.Name + "</li>";
        }
        Fruit +="</ul>";
      }
    }
    else {
      console.log("Error occured ..")
    }
    });
    this.setState({fruits:Fruit});
    console.log("hi");
    console.log(this.state.fruits);
  }

  showVegitables(){
    let Vegitable;
    var request = require('request');
    request('http://demo2921880.mockable.io/vegitables', function (error, response, data) {
    if(error === null){
      if(response.statusCode === 200){
          var Vobj = JSON.parse(data);
          Vegitable = "<ul>"
          for(let V of Vobj){
            Vegitable +="<li>" + V.Name + "</li>";
          }
          Vegitable +="</ul>";
        }
      }
    else {
      console.log("Error occured ..")
      }
    });
    this.setState({vegitables : Vegitable});
    console.log(this.state.vegitables);
  }

  showDrinks(){
    let Drink;
    var request = require('request');
    request('http://demo2921880.mockable.io/drinks', function (error, response, data) {
      if(error === null){
        if(response.statusCode === 200){
          var Dobj = JSON.parse(data);
          Drink = "<ul>"
          for(let D of Dobj){
            Drink +="<li>" + D.Name + "</li>";
          }
            Drink +="</ul>";
        }
      }
      else {
        console.log("Error occured ..")
      }
    });
    this.setState({drinks : Drink});
    console.log(this.state.drinks)
  }

  render(){
    return (
      <div >
        <div class="row">
          <button type="button" onClick = {() => this.showFruits()}> Fruits</button>
          <button type="button" onClick = {() => this.showVegitables()}> Vegitables</button>
          <button type="button" onClick = {() => this.showDrinks()}> Drinks</button>
          <div class="row">
            <div class="col">
                <h2>{this.state.fruits}</h2>
            </div>
            <div class="col">
                <h2>{this.state.drinks}</h2>
            </div>
            <div class="col">
                <h2>{this.state.vegitables}</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default DataR;
