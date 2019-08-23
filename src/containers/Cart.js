import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as cartActions from '../actions/cartActions'
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
        <Shelf addItem={ this.props.actions.addToCart } />
        <h2>Cart</h2>
        <ol>
          { items }
        </ol>
      </div>
    )
  }
}

// Subscribe this container component to any changes in Redux managed state
const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)