import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addToCart } from '../actions/actionCreators'

import Cart from '../components/Cart'
import ActionTypes from '../actions/actionTypes';

// Subscribe this container component to any changes in Redux managed state
const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)