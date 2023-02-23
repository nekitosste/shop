import React, { Component } from 'react'
import Item from './item'

export class items extends Component {
  render() {
    return (
      <main className='mt-5'>
        <div className='container'>
          <div className='row'>
            
              {this.props.items.map(el => (
                <Item  key={el.id} item={el} onAdd = {this.props.onAdd}/>
              ))}
            
          </div>
        </div>
      
      </main>
    )
  }
}

export default items

