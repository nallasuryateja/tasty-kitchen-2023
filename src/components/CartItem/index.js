import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl, time} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item" testid="cartItem">
          <div className="cart-item-info">
            <img src={imageUrl} alt={name} className="cart-item-image" />
            <h1 className="cart-item-desktop-name">{name}</h1>
          </div>
          <div className="cart-qty-price-cont">
            <div className="cart-qty-container">
              <button
                className="decrement-quantity"
                type="button"
                onClick={decreaseQuantity}
                // eslint-disable-next-line react/no-unknown-property
                testid="decrement-quantity"
              >
                <BsDashSquare size={16} />
              </button>

              <p testid="item-quantity" className="item-quantity">
                {quantity}
              </p>
              <button
                className="increment-quantity"
                type="button"
                onClick={increaseQuantity}
                testid="increment-quantity"
              >
                <BsPlusSquare size={16} />
              </button>
            </div>
            <p className="price">
              <FaRupeeSign size={12} /> {cost * quantity}
            </p>
            <p className="time">{time}</p>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
