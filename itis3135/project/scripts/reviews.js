
function createComment(){
   var name = document.querySelector('#yourName').value;
   var review = document.querySelector('#reviewBox').value;
   alert(name);
   $("#newname").append(name);
   $("#newreview").append(review);
}

function createAlert(){
	alert("This function is currently down. Please try again later.")
 }