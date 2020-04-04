
//콤포넌트의 종류 함수,상수,클래스형
//함수랑 상수랑 거의 비슷
//클래스형

// 단축키 rcc
import React, {Component} from 'react';




//컴포넌트를 확장해주는 클래스 app
class App extends Component {

    // 함수, 상수, 상태값을 선언해주는 위치
    // 상태값은 상태값을 담는 그릇

    state = {
        count: 0
    }
    add = () => {
        console.log("add");
        this.setState(current => ({ count: current.count + 1 }));
    }
    Minus = () => {
        console.log("Minus");
        this.setState(current => ({ count: current.count - 1 }));
    }
    // react lifecycle
    // 컵포넌트가 실행이 다 완료됐을때
    componentDidMount() {
        // 네트워크를 태워서 바로 보여줄때
        console.log("componentDidMount");
    }
    // 실행이 되기 전
    componentWillMount() {
        console.log("componentDidMount");
    }
    // 업데이트가 되고 나서
    coponentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {

        // return에서 사용될 상수 상태값들을 재선언해주는 곳

        return (
            //화면에 뿌려주는 코드
            <div>
                <h1>The number is {this.state.count}</h1>
                {/*//button안에 onclick이라는 속성이 있음*/}
                <button onClick={this.add}>add</button>
                <button onClick={this.Minus}>Minus</button>
           </div>
        );
    }
}
//라이프사이클 : 생명주기

export default App;