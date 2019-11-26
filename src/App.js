import React, {Component} from 'react';
import './App.css';
import {Hamburger, ItemList, Item, TotalPrice} from "./components";
import ingredients from "./data";
import { Z_ASCII } from 'zlib';

class App extends Component {
  constructor(props){
    super(props);
    this.state =  {
      ingredients: []
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
  }
  
  
  addItem(item){
      this.setState({
        ingredients: [...this.state.ingredients].concat([
          {...item, displayId: Math.random()}
        ])
  })  
  }
  

  removeItem(ingredient){
      const selectedItem = this.state.ingredients.find(item => {
       return item.name === ingredient.name
      });
      
      
     this.setState({
        ingredients: this.state.ingredients.filter(item => {
        return item.displayId !== selectedItem.displayId;
        })
     })
   }


  removeAllItems(ingredient){
      const selectedItem = ingredients.find(item => {
        return item.name === ingredient.name
      })
      this.setState({
        ingredients: this.state.ingredients.filter(item => {
          return item.name !== selectedItem.name
        })
      })
      


  }
  
  
  render(){
    
    return (
      
       <div className="App">
         
       <Hamburger selectedItem = {this.state.ingredients}/>
       <ItemList items = {ingredients}
                  addItem = {this.addItem}
                  removeAllItems = {this.removeAllItems}
                  removeItem = {this.removeItem}
                  selectedItems = {this.state.ingredients}
                   />
       <TotalPrice selectedItem = {this.state.ingredients}
       />

    </div>
    )
  }
}




export default App;
