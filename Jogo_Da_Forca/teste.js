// 

let inputValue = 'e'
let reg = /^[A-Z 0-9]+$/g

if (reg.test(inputValue)) {
  console.log('chegou aqui')
}else{
    console.log("ok")
}