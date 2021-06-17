import { useEffect, useState, createRef } from 'react';
import './App.css';
import Header from './components/Header';
import Filmes from './components/Filmes';
import Sacola from './components/Sacola';

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesBackup, setMoviesBackup] = useState([]);  
  const [topMovies, setTopMovies] = useState([]);
  const [bagMovies, setBagMovies] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);  
  let textInput = createRef();

  useEffect(() => {
    handlePopulateMovies();
  }, []);  

  function handleClick() {    
    const searchResult = [];    

    for (const movie of moviesBackup) {
      if (movie.title.toLowerCase().includes(textInput.current.value.toLowerCase())) { 
        searchResult.push(movie)        
      }
    }

    if (textInput.current.value === '') {
      setMovies(moviesBackup)     
      return;
    }

    setMovies(searchResult);    
  }

  async function handlePopulateMovies() {
    const response = await fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR', {
      method: 'GET'
    });

    const data = await response.json();

    const formattedMovies = [];
    
    for (const movie of data.results) {
       formattedMovies.push({
         title: movie.title,
         poster_path: movie.poster_path,
         vote_average: movie.vote_average,
         price: movie.price,
         quantity: 0         
       });        
    }

      setMovies(formattedMovies);
      setMoviesBackup(formattedMovies);
      setTopMovies(formattedMovies.slice(0, 5));      
  }

  function handlePurchase(value, movieTitle) {
    const moviesCopy = [...moviesBackup];
    const wantedMovies = [];
    let totalPrice = 0;
    
    const indexMovie = moviesCopy.findIndex(movie => movie.title === movieTitle);
    
    if (indexMovie === -1) {
      return;
    }

    const purchaseQuantity = moviesCopy[indexMovie].quantity + value;
    moviesCopy[indexMovie].quantity = purchaseQuantity;

    for (const movie of moviesCopy) {
      if (movie.quantity > 0) {
        wantedMovies.push(movie);                        
      }
    }

    for (const movie of wantedMovies) {
      totalPrice = movie.quantity * movie.price + totalPrice;
      setPrecoTotal(totalPrice);     
    }

    setBagMovies(wantedMovies);
  }

  return (
    <div className="app">
      <Header handleClick={handleClick} textInput={textInput} />      
      <Filmes movies={movies} topMovies={topMovies} handlePurchase={handlePurchase} />   
      <Sacola bagMovies={bagMovies} precoTotal={precoTotal} handlePurchase={handlePurchase} />
    </div>
  );
}

export default App;
