import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavbarMain from "./components/NavbarMain";
import StartPage from "./pages/StartPage";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Ordering from "./pages/Ordering";

class App extends React.Component {
  render() {
    return (
      <div className="container wpapper mt-2">
        <Router>
          <NavbarMain />

          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/ordering" element={<Ordering />} />
          </Routes>

          <Footer />
        </Router>
      </div>
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

export default App;
