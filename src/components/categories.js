import React, { Component } from 'react'

export class categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'All',
                    name: 'Все'
                },
                {
                    key: 'Gift Baskets',
                    name: 'Подарочные наборы'
                },
                {
                    key: 'Children\'s games',
                    name: 'Детские игры'
                },
                {
                    key: 'Flavors',
                    name: 'Ароматизаторы'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} > {el.name} </div>
                ))}
      </div>
    )
  }
}

export default categories