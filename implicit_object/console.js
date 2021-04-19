console.time('전체 시간');
const obj = {
    outside:{
        inside:{
            key:'value'
        }
    }
};
console.table([{name:'제로', birth: 1994}, {name:'hero', birth: 1988}]);

console.dir(obj, {colors: false, depth:2});
console.dir(obj, {colors: true, depth:2});
console.dir(obj, {colors: true, depth:1});

function b() {
    console.trace('에러 위치 추적');

}
function a(){
    b();
}

a();
console.timeEnd('전체 시간');