//your JS code here. If required.
let a = prompt("Enter a string")
function firstNonRepeatingChar(a){
	if(a.charAt(0)!=a.charAt(1))
		return a.charAt(0)
	for(let n=1;n<a.length-1;n++){
		if((a.charAt(n)!=a.charAt(n+1)) && (a.charAt(n)!=a.charAt(n-1)))
			return a.charAt(n)
	}
	if(a.charAt(a.length-1)!=a.charAt(a.length-2))
		return a.charAt(a.length-1)
}
prompt(firstNonRepeatingChar(a))