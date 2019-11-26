




var ranarr =JSON.parse(localStorage.getItem("random"));
function useIP(){
	const ip= Number(document.getElementById("inputnum").value);
	let result=0;
		if (ip!= 0 && ip===ip%1000000){
			let arr = Array.from(String(ip),Number);


            let comp=0;
            for(let i =0 ; i<=ranarr.length;i++){
                
  	                if(ranarr[i]===arr[i]){
  	                	result= comp++;
  	                }
  	                 
            }
            document.getElementById("output").innerHTML=`The Luck guess made is ${result}`;
               
        } 
		else{
           alert("Enter a 6 digit number");
		}
		
  }
  
  
