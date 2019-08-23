import React, { Component } from 'react'
import Shelf from '../components/Shelf'

class Cart extends Component {
  render() {
    const items = this.props.cart.map((item, id) => {
      return (
        <li key={ id }>
          { item }
        </li>
      )
    })

    return (
      <div>
        <Shelf { ...this.props } />
        <h2>Cart</h2>
        <ol>
          { items }
        </ol>
      </div>
    )
  }
}

export default Cart