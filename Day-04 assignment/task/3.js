function tempToF(c){
    console.log(typeof(v))
    var f= (c * 1.8) + 32
    return f;
}
function tempToC(f){
    var c= (f - 32) / 1.8;
    return c;
}

var value=prompt("enter value")
var type=prompt("enter type as f or c")
if(type=='c')
    console.log(tempToF(value));
else
console.log(tempToC(value));
