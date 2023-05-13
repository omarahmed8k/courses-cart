import React from 'react'
import courses from './courses.json'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import './Courses.css'
export default function Courses() {
  const dispatch = useDispatch()

  const handleAddToCart = (e, course) => {
    e.preventDefault()
    dispatch(
      addToCart({
        courses: course,
      })
    )
  }

  return (
    <div>
      <h1>Courses</h1>
      <ul className='courses'>
        {courses?.map((course) => (
          <li key={course.id} className='course'>
            <h2>{course.title}</h2>
            <h4>Price: {course.price}</h4>
            <button onClick={(e) => handleAddToCart(e, course)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
