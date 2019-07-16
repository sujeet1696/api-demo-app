import React,{Component} from 'react';
import ReactDOM from 'react-dom';



class Collapse extends Component {
  constructor() {
    super()
  }



    ShowFruits() {
      let Fruit;
      var request = require('request');
      request('http://demo2921880.mockable.io/fruitts', function (error, response, body) {
      /*  if(error == null || errpr == undefined){
          if(response==200){
            Fruit = "<ul>"
              for(let fruit of data){
                Fruit +="<li>" + fruit.Name + "</li>";
              }
              Fruit +="</ul>";
          }
        }*/
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });

    }

    ShowVegitables(){
      let Vegitable;
      var request = require('request');
      request('http://demo2921880.mockable.io/vegitables', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        });
       /*$.ajax({
          url: "http://demo2921880.mockable.io/vegitables",
          context: document.body,
          success: function(data){
            Vegitable = "<ul>"
            for(let vegitable of data){
              Vegitable +="<li>" + vegitable.Name + "</li>";
            }
            Vegitable +="</ul>";
          }
      });*/
    }

    ShowDrinks(){
      let Drink;
      var request = require('request');
      request('http://demo2921880.mockable.io/drinks', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
      /*$.ajax({
          url: "http://demo2921880.mockable.io/drinks",
          context: document.body,
          success: function(data){
            Drink = "<ul>"
              for(let drink of data){
                Drink +="<li>" + drink.Name + "</li>";
              }
              Drink +="</ul>";
          }
      });*/
    }



  render(){
    return (
      <div>
        <div class="col">
          <button type="button" class="btn btn-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"  href="#multiCollapseExample1" onclick={() => this.ShowFruits()}>Fruits
          </button>
          <button type="button" class="btn btn-primary"  data-toggle="collapse" aria-expanded="false" aria-controls="multiCollapseExample2" href="#multiCollapseExample2"
            onclick={() => this.ShowVegitables()}>Vegitables
          </button>
          <button class="btn btn-primary" type="button" data-toggle="collapse"  aria-expanded="false" aria-controls="multiCollapseExample3" href="#multiCollapseExample3"
            onclick={() => this.ShowDrinks()}>Drinks</button>
        </div>
        <div class="row">
          <div class="row">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div id="demo1" class="card card-body">
              </div>
            </div>

              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                  <div id="demo2" class="card card-body">
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample3">
                  <div id="demo3" class="card card-body">
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collapse;
