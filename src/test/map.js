// map = array의 각 item에서 functiond을 실행하는 array를 가질 수 있는 JS function

let friends=["ESY","JSK","LJH","JSH"];

friends.map(current=>{
    console.log(current);
    //출력값: friends 배열의 값 하나씩 출력
    return 0
    //리턴값으로 0
    //결국 [0,0,0,0]
});


friends.map(function(friend){
    console.log(friend);
    return friend+" A";
});
console.log(friends);
console.log(friends.map);
