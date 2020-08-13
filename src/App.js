import React from 'react';
//mport logo from './logo.svg';
//import './App.css';
import Hello from './Hello.js';

function TestComp1(comp){
  console.log(comp);
  //출력 값
  //ary: (3) [93, 8, 19]
  //bool: true
  //hobby: "book"
  //name: "CHJ"

return <b>Hi. My name is {comp.name}</b>;
}

function TestComp2({hobby}){
  //내부로 바로 접근하기 위해 {}사용 props.hobby == {hobby} 같은 의미
  console.log(hobby);

return <p>My hobby is {hobby}</p>;
}



function App() {
  return (
    <div className="App">
      <h1>Hello~</h1>
      <Hello />
      <TestComp1 hobby="Reading" name="CHJ" bool={true} ary={[93,8,19]}/>
      {/* Like component(prop)에 hobby라는 property를 book이라는 value로 설정 */}
      <TestComp2 hobby="Drawing"/>
      <TestComp2 hobby="Ex1"/>
      <TestComp2 hobby="Ex2"/>
      <TestComp2 hobby="Ex3"/>

    </div>
  );
}

export default App;
