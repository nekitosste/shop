import React, { Component } from 'react'
import Item from './item'

export class items extends Component {
  render() {
    return (
      <main className='mt-5'>
        {this.props.items.map(el => (
               <Item key={el.id} item={el} onAdd = {this.props.onAdd}/>
            ))}
      </main>
    )
  }
}

export default items

