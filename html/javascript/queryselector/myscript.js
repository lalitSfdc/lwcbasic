let element=document.querySelectorAll('div');


Array.from(element).forEach(function(value){
    console.log(value);
    value.style.color='red';
})

console.log(element);
console.log(Array.from(element));