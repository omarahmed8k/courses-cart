import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.css'

export default function Header() {
    const { cart } = useSelector(state => state.cart)
    return (
        <div className='header'>
            <Link to="/">Courses</Link>
            <Link to="/cart">Cart {cart?.length}</Link>
        </div>
    )
}
