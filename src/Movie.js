//함수형 컴포넌트
// 1번
import React from 'react'
import PropTypes from 'prop-types'
import "./Movie.css";


// 2번
function Movie({ id, title, year, runtime, poster, summary, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={{title}}/>
            <div>
                <h3 className="movie-title">{title}</h3>
                <h5 className="movie_year">출시년도: {year}</h5>
                <h5 >플레이타임 : {runtime}분</h5>
                <ul className="movie-genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres_genre">
                            {genre}
                        </li>

                    ))}
                </ul>
                <p>{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
};

// 3번
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runtime: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
};

//4번

export default Movie;