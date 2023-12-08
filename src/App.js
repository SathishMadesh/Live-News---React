import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("india");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-07&sortBy=popularity&apiKey=cf6e1a5230cf4a338785e646a0141caf`)
    .then((Response)=>Response.json())
    .then((news)=>{
      console.log(news.articles);
      setArticles(news.articles)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[category])

  return (
    <div className="App">
      <header className='header'>
        <h1>News Live</h1>
        <input type='text' onChange={(event)=>{
          event.target.value!==""?
          setCategory(event.target.value) : setCategory("india")
        }} placeholder='Search Here'/>
      </header>
      <section className='news-articles'>

        {
          articles.length!==0?
          articles.map((article)=>{
            console.log(article)
            return (
              <News article = {article} />
            )
          }) 
          : <div> No News Related For Searched Text </div>
        }

      </section>
      

    </div>
  );
}

export default App;
