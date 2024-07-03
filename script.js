function btn(op){
    document.getElementById("calc").value+=op
}
function equalTo(){
    var inp=document.getElementById("calc").value
    document.getElementById("results").value=eval(inp)
}
function clearBtn(){
    document.getElementById("calc").value=""
    document.getElementById("results").value=""
}
function delBtn(){
   document.getElementById("calc").value=document.getElementById("calc").value.toString().slice(0,-1)

}