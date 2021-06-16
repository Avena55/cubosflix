import './style.css'

function Filmes({ movies, topMovies, handlePurchase }) {
    return (

        <div className='content'>
            <div className='TopFilmes'>
                <h2>Top Filmes</h2>
                <div className='topMovie-grid'>
                { topMovies.map(movie => (
                    <div key={movie.title} className='movie-card' style={{background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${movie.poster_path}) center center / cover no-repeat`}}>
                        <div className='movie-container'>
                            <h3>{movie.title}</h3>
                            <div className='starRate'>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#FBCD6E"/>
                            </svg>
                            {movie.vote_average}
                            </div>                            
                        </div>

                        <button className='buyButton' onClick={() => handlePurchase(1, movie.title)}>
                            Sacola
                            <span className='price'>R$ {movie.price}</span>
                        </button>

                    </div>

                    ))}
                </div>
                    
                
                </div> 
            <div className='filmes'>
                <h2>Filmes</h2>
                <div className='movie-grid'>
                { movies.map(movie => (
                    <div key={movie.title} className='movie-card' style={{background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${movie.poster_path}) center center / cover no-repeat`}}>
                        <div className='movie-container'>
                            <h3>{movie.title}</h3>
                            <div className='starRate'>
                            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z" fill="#FBCD6E"/>
                            </svg>
                            {movie.vote_average}
                            </div>                            
                        </div>

                        <button className='buyButton' onClick={() => handlePurchase(1, movie.title)}>
                            Sacola
                            <span className='price'>R$ {movie.price}</span>
                        </button>

                    </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Filmes;