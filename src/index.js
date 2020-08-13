import React from 'react';
import ReactDOM from 'react-dom';
//ajax처럼 새로고침없이 요소 생성 -> 소스코드에 처음부터 html을 넣지않으면서 html을 추가하거나 삭제 가능
import App from './App';

//<App /> == component. react는 component와 함께 동작함.
//component = HTML을 반환하는 함수. (jsx-JS와 HTML사이의 조합, react만의 유일한 개념. JS안에서 HTML사용)

//컴포넌트를 읽는 객체
  //react application -> 한번에 하나의 component만 redering 가능
  //<App /> component 안에서는 여러 component 사용 가능 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //root -> index.html의 id명
);

