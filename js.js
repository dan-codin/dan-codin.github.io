function tickUp(){
    let current =Number(document.getElementById('counter').innerText);
    if(current < 27){
        current+=1;
        document.getElementById('counter').innerText = current;
    }
}
function tickDown(){
    let current =Number(document.getElementById('counter').innerText);
    if(current > 0){
        current-=1;
        document.getElementById('counter').innerText = current;
    }
}
function runForLoop(){
    let current =Number(document.getElementById('counter').innerText);
    let str = '';
    for(let i = 0; i<=current; i++){
        str+= i+" " 
    }
    document.getElementById('forLoopResult').innerText = str;
}
function showOddNumbers(){
    let current =Number(document.getElementById('counter').innerText);
   let str = '';
    for(let i = 0; i<=current; i++){
        if(i%2== 1){

            str+= i+" " 
        }
    }
    document.getElementById('oddNumberResult').innerText = str;
}
function addMultiplesToArray(){
    let current =Number(document.getElementById('counter').innerText);
   let arr = [];
    for(let i = current; i>=5; i--){
        if(i%5== 0){
            arr.push(i);
             
        }
    }
    console.log(arr);
}
function printCarObject(){
    let carType = document.getElementById('carType').value;
    let carMPG = document.getElementById('carMPG').value;
    let carColor = document.getElementById('carColor').value;
    let obj = {
        cType: carType,
        cMPG: carMPG,
        cColor: carColor
    }
    console.log(obj);
}

function loadCar(num){
    if(num == 1){
        document.getElementById('carType').value = carObject1.cType;
        document.getElementById('carMPG').value = carObject1.cMPG;
        document.getElementById('carColor').value= carObject1.cColor;

    }
     if(num == 2){
        document.getElementById('carType').value = carObject2.cType;
        document.getElementById('carMPG').value = carObject2.cMPG;
        document.getElementById('carColor').value= carObject2.cColor;

    }
     if(num == 3){
        document.getElementById('carType').value = carObject3.cType;
        document.getElementById('carMPG').value = carObject3.cMPG;
        document.getElementById('carColor').value= carObject3.cColor;

    }
}
function changeColor(num){
    let paragraph = document.getElementById('styleParagraph');
    if(num==1){
        paragraph.style.color = 'red';
    }
     if(num==2){
        paragraph.style.color = 'green';
    }
     if(num==3){
        paragraph.style.color = 'blue';
    }
}