import Header from "./components/Header";
import Items from "./components/Items"
import Footer from "./components/Footer";
import React from "react";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair.jpg',
          desc: 'удобный стульчик серого цвета',
          category: 'chairs',
          price: '499.99'
        },
        {
          id: 2,
          title: 'Стол круглый',
          img: 'table.jpg',
          desc: 'Обычный обеденный стол круглой формы',
          category: 'tables',
          price: '1499.99'
        },
        {
          id: 3,
          title: 'Диван кожаный',
          img: 'sofa.jpg',
          desc: 'Удобный диван из натуральной кожи',
          category: 'sofas',
          price: '29999.99'
        },
        {
          id: 4,
          title: 'Шкаф-купе',
          img: 'chkaf.jpg',
          desc: 'Сюда поместится вся твоя жизнь',
          category: 'chkafs',
          price: '29999.99'
        },
        {
          id: 5,
          title: 'Прикроватная тумба',
          img: 'tumba.jpg',
          desc: 'Обычная тумба на которую можно поставить лампу',
          category: 'desks',
          price: '3999.99'
        },
        {
          id: 6,
          title: 'Кровать двуспальная',
          img: 'bed.jpg',
          desc: 'Большая кровать, не скрипит как у соседей сверху',
          category: 'beds',
          price: '49999.99'
        },
        {
          id: 7,
          title: 'Комнатный шезлонг',
          img: 'shezlong.jpg',
          desc: 'Довольно удобный шезлонг. Идеально впишется в ваш интерьер.',
          category: 'shezlongs',
          price: '1999.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem : !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]} )
  }
}

export default App;
