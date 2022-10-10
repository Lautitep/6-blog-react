import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import './Form.css';
import { useNavigate } from 'react-router-dom';

export default function Form() {

  const navigation = useNavigate()

  const [article, setArticle] = useState({
    title: "",
    body: ""
  })

  const dispatch = useDispatch()

  const handleForm = e => {
    e.preventDefault()
    dispatch({
      type: 'ADDARTICLE',
      payload: article
    })

    setArticle({
      title: "",
      body: ""
    })

    navigation("/")
  }

  return (
    <>
      <h1 className='title-form'>Ecrivez un article</h1>

      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input type="text" id="text" placeholder='Entrez votre titre' onChange={(e) => {setArticle({...article, title: e.target.value})}}/>
        <label htmlFor="article">Votre article</label>
        <textarea id="article" placeholder='Votre article' onChange={(e) => {setArticle({...article, body: e.target.value})}}></textarea>
        <button>Envoyer l'article</button>

      </form>
    </>
  )
}
