<<<<<<< HEAD
const Input = document.querySelector(".Input");
const Output = document.querySelector(".Output");
const lnk=document.querySelector(".lnk");
let count=0;
let val='';
let prevval='';

const Inputval=(Input.addEventListener('keypress', function (e) {
    if(e.key==='Enter'){
        current(e.target.value);
    }
}));

const current=(code)=>{
    val+=code;
    if(count===0)
    {
        if(val==="print('Hello World')"|| val==="print('hello world')"||val==="print('Hello world')"){
            updateScreen("Great!Print displays output.Now  hit backspace and type print(5+7)");
            count+=1;
            val=''
        }
        else{
            updateScreen("Try again");
            val=''
        }
    }
    if(count===1)
    {
        if(val==="print(5+7)"|| val==="print(7+5)"){
            updateScreen("12\nGreat!Print without quotes the number will be added and displayed.Python is this and so much more check it at the link below.");
            count+=1;
            console.log(count);
            val='';
        }
        else
        updateScreen("Try again");
    }
    if(count===2)
    {
        lnk.href='https://progate.com/languages/python'
    }
    
}

 updateScreen=(out)=>{
    document.getElementById('2').value = out;
    document.getElementById('1').value ='';
=======
const Input = document.querySelector(".Input");
const Output = document.querySelector(".Output");
const lnk=document.querySelector(".lnk");
let count=0;
let val='';
let prevval='';

const Inputval=(Input.addEventListener('keypress', function (e) {
    if(e.key==='Enter'){
        current(e.target.value);
    }
}));

const current=(code)=>{
    val+=code;
    if(count===0)
    {
        if(val==="print('Hello World')"|| val==="print('hello world')"||val==="print('Hello world')"){
            updateScreen("Great!Print displays output.Now  hit backspace and type print(5+7)");
            count+=1;
            val=''
        }
        else{
            updateScreen("Try again");
            val=''
        }
    }
    if(count===1)
    {
        if(val==="print(5+7)"|| val==="print(7+5)"){
            updateScreen("12\nGreat!Print without quotes the number will be added and displayed.Python is this and so much more check it at the link below.");
            count+=1;
            console.log(count);
            val='';
        }
        else
        updateScreen("Try again");
    }
    if(count===2)
    {
        lnk.href='https://progate.com/languages/python'
    }
    
}

 updateScreen=(out)=>{
    document.getElementById('2').value = out;
    document.getElementById('1').value ='';
>>>>>>> 5c029ed930b912524a4ee43e135cd39dbbbd7b0c
}