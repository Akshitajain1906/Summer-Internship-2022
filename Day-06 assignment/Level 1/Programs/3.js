//-3. Prlet the fibonacci sequence?
let v1=0,v2=1;
	let i;
	let n = prompt("What is your n?");
	if(n<=0)
		console.log("Enter valid number");
	else if(n==1)
		console.log(0);
	else{
		console.log(v1);
		console.log(v2);
		for ( i=0;i<n-2;i++){
			let temp=v1+v2;
			console.log(temp);
			v1=v2;
			v2=temp;	
		}
	}
	