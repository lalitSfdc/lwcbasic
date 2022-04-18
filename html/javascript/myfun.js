
function getCube(number){
    alert('Cube='+(number*number*number));
}

function show(){
    let str="hello Class!";
    return str;
}

function showMsg(){
    //get div element object from document object through getElementById() function
    let demoElement=document.getElementById("demo");
    //insert dynamic html into the html element object through innerHtml
    demoElement.innerHTML="<p>This is Dynamic Message<p>";
    //get input type element object from document object through getElementById() function
   let inputText=document.getElementById("demoTxt");
   //insert dynamic value into the input type  element object through value variable
   inputText.value="This is Dynamic Text";
}

function removeMsg(){
    document.getElementById("demo").innerHTML='';
    document.getElementById("demoTxt").value='';
}