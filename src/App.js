import React from 'react';
import Hello from './Hello.js';
import PropTypes from "prop-types";


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



const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
      rating: 4.0
    },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];


//object의 list 가져오기
//JS의 map 이용-> map = array의 각 item에서 functiond을 실행하는 array를 가질 수 있는 JS function(랜더링). test/map.js파일 참고

function Food({name,picture,rating}){
  return <div>
          <p>I like {name}<br /></p>
          <img src={picture} alt={name+" 이미지"}/><br/>
          <b>{rating}</b>
        </div>;
  }

Food.propTypes ={
  //얻고싶은 prop 값 확인
  //요소명 : PropTypes.확인할 데이터타입A.isRequired(필수일 경우)
  //확인할 데이터타입A Ex)array,bool,func,number,object,string,symbol,node,element, instanceOf,oneOf ...
  id:PropTypes.number,
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} key={dish.id} rating={dish.rating}/>
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
      
      {dish.name} picture={dish.image} rating={dish.rating}/>)}

      <h3>#2.3 object의 list 가져오기 2</h3>
      {foodILike.map(renderFood)}

      {/*prop types 설치 - component 값이 제대로 전달되었는지 확인 하는 역할
        터미널에서 "npm i prop-types"로 설치 후 
        import PropTypes를 해줘야 사용 가능 (import PropTypes from "prop-types";)
        현재 파일에서는 Food.propTypes가 역할 수행 (무조건 propTypes!)
      */}
    </div>
  );
}

export default App;
