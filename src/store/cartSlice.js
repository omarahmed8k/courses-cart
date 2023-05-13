import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    total: localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { courses } = action.payload
            const { id, title, price } = courses
            const existingItem = state.cart.find(item => item.id === id)
            if (!existingItem) {
                state.cart.push({
                    id,
                    title,
                    price,
                    quantity: 1,
                })
            } else {
                existingItem.quantity++
            }
            state.total = state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
            localStorage.setItem('cart', JSON.stringify(state.cart))
            localStorage.setItem('total', JSON.stringify(state.total))
        },
        removeFromCart: (state, action) => {
            const { courses } = action.payload
            const { id } = courses
            const existingItem = state.cart.find(item => item.id === id)
            if (existingItem.quantity === 1) {
                state.cart = state.cart.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
            }
            state.total = state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
            localStorage.setItem('cart', JSON.stringify(state.cart))
            localStorage.setItem('total', JSON.stringify(state.total))
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer