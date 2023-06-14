function add(){
    let text1=document.getElementById("input-1").value;
    let text2=document.getElementById("input-2").value;
    let sum
    sum=Number (text1)+Number(text2)
    document.getElementById("ans").innerText=sum
}
function mul(){
    let text1=document.getElementById("input-1").value;
    let text2=document.getElementById("input-2").value;
    let sum
    sum=Number (text1)*Number(text2)
    document.getElementById("ans").innerText=sum
}
function div(){
    let text1=document.getElementById("input-1").value;
    let text2=document.getElementById("input-2").value;
    let sum
    sum=Number (text1)/Number(text2)
    document.getElementById("ans").innerText=sum
}
function mod(){
    let a=document.getElementById("input-1").value;
    let b=document.getElementById("input-2").value;
    let sum
    sum=Number (a)%Number(b)
    document.getElementById("ans").innerText=sum
}