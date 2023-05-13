import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/cartSlice'
import './Cart.css'

export default function Cart() {
  const dispatch = useDispatch()
  const { cart, total } = useSelector((state) => state.cart)

  const handleRemoveFromCart = (e, course) => {
    e.preventDefault()
    dispatch(
      removeFromCart({
        courses: course,
      })
    )
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul className='courses'>
        {cart?.map((course) => (
          <li key={course.id} className='course'>
            <h2>{course.title}</h2>
            <p>Quantity: {course.quantity} x {course.price}</p>
            <h4>Total: {course.price * course.quantity}</h4>
            <button onClick={(e) => handleRemoveFromCart(e, course)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Price:<span>{total}</span></h2>
    </div>
  )
}
