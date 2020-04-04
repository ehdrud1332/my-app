
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
        isLoading: true,
        movies : []
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 6000);
    }

    render() {

        // return에서 사용될 상수 상태값들을 재선언해주는 곳
        const { isLoading } = this.state;

        return (
            //화면에 뿌려주는 코드
            <div>
                {isLoading ? "Loading" : "wa are Ready"}
           </div>
        );
    }
}
//라이프사이클 : 생명주기

export default App;