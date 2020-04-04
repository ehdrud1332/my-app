//함수형 컴포넌트
// 1번
import React from 'react'
import PropTypes from 'prop-types'


// 2번
function Movie({ id, title, year, runtime, poster, summary }) {
    return (
        <div>
            <img src={poster} alt={title} title={{title}}/>
            <div>
                <h3>{title}</h3>
                <h5>{year}</h5>
                <h5>{runtime}</h5>
                <p>{summary}</p>
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
    summary: PropTypes.string.isRequired
};

//4번

export default Movie;