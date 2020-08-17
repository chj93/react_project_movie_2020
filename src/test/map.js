// map = array의 각 item에 function을 적용한 array를 반환해주는 JS function

const friends=["ESY","JSK","LJH","JSH"];

/* 
friends.map(current=>{
    console.log(current);
    //출력값: friends 배열의 값 하나씩 출력
    return 0

    //리턴값으로 0
    //==[0,0,0,0]
});
 */

friends.map(function(friend){
    return friend+" A";
});
//출력 값 : ["ESY A", "JSK A", "LJH A", "JSH A"]