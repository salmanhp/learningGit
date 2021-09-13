
function disp1(){
	var x = document.getElementById("box_content1");
	var y = document.getElementById('box_content2');

	x.style.display = "block"; 
	y.style.display = "none"; 
}

function disp2(){
	var y = document.getElementById('box_content2');
	var x = document.getElementById("box_content1");
	
	y.style.display = "block";
	x.style.display = "none";

}
