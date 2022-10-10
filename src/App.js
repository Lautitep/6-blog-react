import Navbar from './Components/Navbar/Navbar.js'
import Home from './Containers/Home/Home.js'
import {Routes, Route} from 'react-router-dom'
import Contact from './Containers/Contact/Contact.js'
import Article from './Containers/Article/Article'
import AddArticle from './Containers/AddArticle/AddArticle'

function App() {
  return (
    <>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/articles/:slug" element={<Article/>}/>
        <Route path="/addarticle" element={<AddArticle/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
