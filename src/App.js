
import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [

      {
        id:1,
        title: 'маленький ежик',
        img: '1.jpg',
        desc: 'Маленький красивый ежик',
        price: '400'
      },

      {
        id:2,
        title: 'маленький пес',
        img: '2.jpg',
        desc: 'Маленький красивый пес',
        price: '400'
      },
      {
        id:3,
        title: 'маленький лис',
        img: '3.jpg',
        desc: 'Маленький красивый лис',
        price: '400'
      },

      {
        id:4,
        title: 'маленький ежик',
        img: '1.jpg',
        desc: 'Маленький красивый ежик',
        price: '400'
      },

      {
        id:5,
        title: 'маленький пес',
        img: '2.jpg',
        desc: 'Маленький красивый пес',
        price: '400'
      },
      {
        id:6,
        title: 'маленький лис',
        img: '3.jpg',
        desc: 'Маленький красивый лис',
        price: '400'
      },

      ]
    }

    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)

  }


  render() {
    return (
      <div className="container wpapper mt-4">
        < Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd = {this.addToOrder} /> 




        < Footer/>
      </div>

    );
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id ===  item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item ]})
  }

}

export default App;
