function stringToBinary(string) {
	let exit = [];
	for (let i = string.length - 1; i >= 0; i--) {
		exit[i] = format(string.charAt(i).charCodeAt(0).toString(2));
	}
	return exit.join(' ');
}
function format(char) {
	const len = 8 - char.length;
	let exit = char;
	for (let i = 0; i<len; i++) {
	 	exit = "0".concat(exit)
	}
	return exit 
}

function binaryToString (string) {
	let exit = string.split(' ').map(function(char){
		return String.fromCharCode(parseInt(char,2) ? parseInt(char,2) : 32);
	});
	return exit.join('');
}


var app = new Vue({
	el:"#app",
	data:{
		message:"",
		binary:""
	},
	computed:{
		toBinary : function(){
			return stringToBinary(this.message);
		},

		Binary : function(){
			return binaryToString(this.binary);
		}
	}
})