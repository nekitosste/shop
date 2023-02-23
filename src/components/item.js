import React, { Component } from 'react'

export class item extends Component {
  render() {
    return (
        
            <div className=' col-lg-4 col-md-6'> 
              <div className='item'>
              <img src={"./img/" + this.props.item.img} />
                    <h2> {this.props.item.title}</h2>
                    <p> {this.props.item.desc}</p>
                    <b> {this.props.item.price}₽ </b>
                    <div className='addToCard' onClick={() => this.props.onAdd(this.props.item)}> + </div>
              </div>


            </div>
       
      
    )
  }
}

export default item