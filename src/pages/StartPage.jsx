import React from "react";
import MainImg from "../components/MainImg";
import Header from "../components/Header";
import Categories from "../components/categories";
import Items from "../components/items";

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "маленький ежик",
          img: "1.jpg",
          desc: "Маленький красивый ежик",
          category: "Gift Baskets",
          price: "400",
        },

        {
          id: 2,
          title: "маленький пес",
          img: "2.jpg",
          desc: "Маленький красивый пес",
          category: "Gift Baskets",
          price: "400",
        },
        {
          id: 3,
          title: "маленький лис",
          img: "3.jpg",
          desc: "Маленький красивый лис",
          category: "Children's games",
          price: "400",
        },

        {
          id: 4,
          title: "маленький ежик",
          img: "1.jpg",
          desc: "Маленький красивый ежик",
          category: "Children's games",
          price: "400",
        },

        {
          id: 5,
          title: "маленький пес",
          img: "2.jpg",
          desc: "Маленький красивый пес",
          category: "Flavors",
          price: "400",
        },
        {
          id: 6,
          title: "маленький лис",
          img: "3.jpg",
          desc: "Маленький красивый лис",
          category: "Flavors",
          price: "400",
        },
      ],
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  render() {
    return (
      <>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <MainImg />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
      </>
    );
  }
  chooseCategory(category) {
    if (category === "All") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default StartPage;
