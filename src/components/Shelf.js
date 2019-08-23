import React, { Component } from 'react'

class Shelf extends Component {
  render() {
    const items = ['Bananas', 'Frozen Pizza', 'Hot Cheetos', 'Arugala']
      .map((item, id) => {
        return (
          <li key={ id }>
            { item }
            <button onClick={ () => this.props.addItem(item) }>+</button>
          </li>
        )
    })

    return (
      <div>
        <h2>Store Inventory</h2>
        { items }
      </div>
    )
  }
}

export default Shelf