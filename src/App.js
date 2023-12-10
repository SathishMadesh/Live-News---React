import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("india");

  // Current date for display
  const today = new Date();
  today.setDate(today.getDate());
  let current_date = today.toDateString();

  // Yesterdays date for news
  const date = new Date();
  date.setDate(date.getDate() - 1);

  // seperate the date from date & time
  let new_date = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}-${date.getFullYear()}`;
  
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${new_date}&sortBy=popularity&apiKey=cf6e1a5230cf4a338785e646a0141caf`)
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
        <div className='header-1'>
          <h1>News Live</h1>
          <h4>{current_date}</h4>
        </div>
        <input type='text' onChange={(event)=>{
          event.target.value!==""?
          setCategory(event.target.value) : setCategory("india")
        }} placeholder='Search Here'/>
      </header>
      <section className='news-articles'>

        {
          articles.length!==0?
          articles.map((article,index)=>{
            return (
              <News article = {article} key={index}/>
            )
          }) 
          : <div> No News Related For Searched Text </div>
        }

      </section>
      

    </div>
  );
}

export default App;
