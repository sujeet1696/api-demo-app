import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruits: [],
      vegitables: [],
      drinks: [],
      open: false
    };
  }

  showFruits(){
    const { open } = this.state;
    let fruits = [];
    var request = require('request');
    request('http://demo2921880.mockable.io/fruitts', (error, response, data) => {
      if(error === null){
        if(response.statusCode === 200){
          data = JSON.parse(data);
          this.setState({ fruits: data, open: !open, vegitables: [],drinks: [] });
        }
      }
      else {
        console.log("Error occured ..")
      }
    });
  }

  showVegitables(){
    const { open } = this.state;
    var request = require('request');
    request('http://demo2921880.mockable.io/vegitables', (error, response, data) => {
      if(error === null){
        if(response.statusCode === 200){
          data = JSON.parse(data);
          this.setState({vegitables : data,open: !open , fruits: [],drinks: []});
        }
      }
      else {
        console.log("Error occured ..")
      }
    });
  }

  showDrinks(){
    let Drink = [];
    const { open } = this.state;
    var request = require('request');
    request('http://demo2921880.mockable.io/drinks', (error, response, data) => {
      if(error === null){
        if(response.statusCode === 200){
          var data = JSON.parse(data);
          this.setState({drinks : data , open: !open ,fruits : [],vegitables : []});
        }
      }
      else {
        console.log("Error occured ..")
      }
    });
  }

  render(){
    const { open } = this.state;
    return (
      <div >
        <div className="d-flex flex-column">
          <ButtonGroup size="lg">
            <Button type="button" onClick = {() => this.showFruits()}>Fruits</Button>
            <Button type="button" onClick = {() => this.showVegitables()}>Vegitables</Button>
            <Button type="button" onClick = {() => this.showDrinks()}>Drinks</Button>
          </ButtonGroup>
        </div>
        <div class="col">
          {
            this.state.fruits.length > 0 &&
            <h3><ul>
              {
                this.state.fruits.map(fruit => {
                  return <li>{fruit.Name}</li>
                })
              }
            </ul></h3>
          }
          {
            this.state.vegitables.length > 0 &&
            <h3><ul>
              {
                this.state.vegitables.map(vegitable => {
                  return <li>{vegitable.Name}</li>
                })
              }
            </ul></h3>
          }
          {
            this.state.drinks.length > 0 &&
            <h3><ul>
              {
                this.state.drinks.map(drink => {
                  return <li>{drink.Name}</li>
                })
              }
            </ul></h3>
          }
        </div>
      </div>

  );
  }

}

export default Data;
