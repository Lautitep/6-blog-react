import React, { useEffect, useState } from 'react'
import './Home.css'
import Card from '../../Components/Card/Card.js'
import { getArticles } from '../../redux/articles/articleReducer'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

export default function Home() {

  const dispatch = useDispatch()

  const { articles } = useSelector(state => ({
    ...state.articleReducer
  }))

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles())
    }
  }, [])

  return (
    <div className='container'>
      <h1 className='home-title'>Tous les articles</h1>
      <div className="container-cards">
        {articles.map(item => {
          return (

            <Card key={uuidv4()}>
              <div className='card'>
                <h3>{item.title}</h3>
                <Link to={{pathname: `articles/${item.title}`}} state={{title: item.title, body: item.body}}>Lire l'article</Link>

              </div>
            </Card>


          )
        })}
      </div>
      <button>Hello</button>
    </div>
  )
}
