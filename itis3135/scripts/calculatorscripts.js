
function add(){  

        var input1 = 0;
        var input2 = 0;
        var loopsPlease = true;
        var num1 = 0;
	var num2 = 0;
       
       
			do {
                input1 = prompt("Please enter your first number.");
                num1 = Math.abs(parseInt(input1));
                
                	if (isNaN(num1)){
                		loopsPlease = true;
                        alert("That is not a number, please try again.");
					} else {
                    	loopsPlease = false;
                        //alert("a number");
                        //alert(num1);
                    }
				} while (loopsPlease == true);
        
        do {
                input2 = prompt("Please enter your second number");
                num2 = Math.abs(parseInt(input2));
                
                	if (isNaN(num2)){
                		loopsPlease = true;
                        alert("That is not a number, please try again.");
					} else {
                    	loopsPlease = false;
                        //alert("a number");
                        //alert(num2);
                    }
				} while (loopsPlease == true);
        
        alert(num1 + num2); //the output of the function
}  
