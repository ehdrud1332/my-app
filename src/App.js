
//콤포넌트의 종류 함수,상수,클래스형
//함수랑 상수랑 거의 비슷
//클래스형

// 단축키 rcc
import React, {Component} from 'react';
import axios from 'axios';
import Movie from './Movie';


//컴포넌트를 확장해주는 클래스 app
class App extends Component {

    // 함수, 상수, 상태값을 선언해주는 위치
    // 상태값은 상태값을 담는 그릇
    state = {
        isLoading: true,
        movies : []
    };

    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({ movies, isLoading: false });
    }

    componentDidMount() {
        this.getMovies();
        // setTimeout(() => {
        //     this.setState({isLoading: false});
        // }, 6000);
    }

    render() {

        // return에서 사용될 상수 상태값들을 재선언해주는 곳
        const { isLoading, movies } = this.state;

        console.log("movies ", movies);
        return (
            //화면에 뿌려주는 코드
            <div>
                {isLoading ? (
                    <div>
                        <span>
                            Loading...
                        </span>
                    </div>
                ) : (
                    <div>
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                runtime={movie.runtime}
                                year={movie.year}
                                summary={movie.summary}
                                id={movie.id}
                                title={movie.title}
                                poster={movie.large_cover_image}
                            />
                        ))}
                    </div>
                )}

           </div>
        );
    }
}
//라이프사이클 : 생명주기

export default App;