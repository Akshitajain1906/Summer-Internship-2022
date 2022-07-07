function res(num1, exam){
    if(num1>=90 && num1<=100 && exam=== "final-exam" ){
        console.log("Grade : A+ " )
    }
    else if(num1>=89 && num1<=100 ){
        return true;
    }
}
console.log(res(94,"final-exam"))
console.log(res(89,"gibberish"))