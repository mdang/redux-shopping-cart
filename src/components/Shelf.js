import React, { Component } from 'react'

class Shelf extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        'Bananas',
        'Frozen Pizza',
        'Hot Cheetos',
        'Arugala'
      ]
    }
  }

  render() {
    const items = this.state.items.map((item, id) => {
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