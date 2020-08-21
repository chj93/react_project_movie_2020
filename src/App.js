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



const foodILike=[
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

//object의 list 가져오기
//JS의 map 이용-> map = array의 각 item에서 functiond을 실행하는 array를 가질 수 있는 JS function(랜더링). test/map.js파일 참고

function Food({name,picture}){
  return <div>
          <p>I like {name}<br /></p>
          <img src={picture} alt={name+" 이미지"}/>
        </div>;
  }

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} key={dish.id}/>
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

      <h3>#2.2 object의 list 가져오기 1- arrow function사용</h3>
      {/*대괄호안에 있는 text는 JS로 인식. dish===object. foodILike 배열속 각각의 값들을 dish로 받음 */}
      {foodILike.map(dish=><Food key={dish.id} name=
      /* key를 추가한 이유 : 요소들의 유일성을 만족 시켜주기 위해 */
      
      {dish.name} picture={dish.image}/>)}

      <h3>#2.3 object의 list 가져오기 2</h3>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
