// object : 콤마로 선언

let car = {
  name : "sonata",
  ph : 500,
  start : () => {
      console.log('engine start');
  },
  stop : () =>{
      console.log('engine stop');
  }
}
let car2 = {
  name : "avante",
  ph : 500,
  start : () => {
      console.log('engine start');
  },
  stop : () =>{
      console.log('engine stop');
  }
}
let car3 = {
  name : "carera",
  ph : 500,
  start : () => {
      console.log('engine start');
  },
  stop : () =>{
      console.log('engine stop');
  }
}

console.log(car) //함수는 그냥 함수로 출력됨
console.log(car.name)
car.start() //object 안에 함수 실행
car.stop()

let cars = [car, car2, car3]

console.log(cars)

cars.map((car)=> {
  if (car.name == 'carera'){
    console.log('found car')
  }
})

//구조분해할당
const {name, ph} = car
console.log(name, ph)