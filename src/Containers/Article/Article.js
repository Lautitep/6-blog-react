import React from 'react'
import {useLocation} from 'react-router-dom'
import './Article.css'

export default function Article() {

  const location = useLocation()
  console.log(location.state.body)

  return (
    <div className='article-content'>
      <h3>Votre article : </h3>
      <h3>{location.state.title}</h3>
      <p>{location.state.body}</p>
    </div>
  )
}
