canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="images/car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="images/car2.png";
car2_x=10;
car2_y=100;

background_image = "images/racing.jpeg";

console.log("background_image = " + background_image);
console.log("car1_image = " + car1_image);
console.log("car2_image = " + car2_image);

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car1_imgTag = new Image(); //defining a variable with a new image
	car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
	car1_imgTag.src = car1_image;   // load image

	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2 // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if(car1_x >= 330 ){
		console.log("Car 1 Won!!");
		document.getElementById('game_status').innerHTML = "Car 1 Won!!";
	}

	if(car2_x >= 330 ){
		console.log("Car 2 Won!!");
		document.getElementById('game_status').innerHTML = "Car 2 Won!!";
	}

	if(keyPressed == '38') {
		car1_up();
		console.log("car1_up");
	}
	if(keyPressed == '40') {
		car1_down();
		console.log("car1_down");
	}
	if(keyPressed == '37'){
		car1_left();
		console.log("car1_left");
	}
	if(keyPressed == '39'){
		car1_right();
		console.log("car1_right");
	}

	if(keyPressed == '87') {
		car2_up();
		console.log("car2_up");
	}
	if(keyPressed == '83') {
		car2_down();
		console.log("car2_down");
	}
	if(keyPressed == '65'){
		car2_left();
		console.log("car2_left");
	}
	if(keyPressed == '68'){
		car2_right();
		console.log("car2_right");
	}

}

function car1_up() {
	console.log("Inside car1_up() function.");
	if(car1_y >= 0 ){
		car1_y = car1_y - 10 ;
		console.log("When up arrow is pressed, x = " + car1_x + " | y = "+car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
function car1_down() {
	console.log("Inside car1_down() function.");
	if(car1_y <= 500 ){
		car1_y = car1_y + 10 ;
		console.log("When down arrow is pressed, x = " + car1_x + " | y = "+car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
	
}
function car1_left() {
	console.log("Inside car1_left() function.");
	if(car1_x >= 0 ){
		car1_x = car1_x - 10 ;
		console.log("When left arrow is pressed, x = " + car1_x + " | y = "+car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car1_right() {
	console.log("Inside car1_right() function.");
	if(car1_x <= 500 ){
		car1_x = car1_x + 10 ;
		console.log("When left arrow is pressed, x = " + car1_x + " | y = "+car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car2_up(){
	console.log("Inside car2_up() function.");
	if(car2_y >= 0 ){
		car2_y = car2_y - 10 ;
		console.log("When w key is pressed, x = " + car2_x + " | y = "+car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car2_down() {
	console.log("Inside car2_down() function.");
	if(car2_y <= 500 ){
		car2_y = car2_y + 10 ;
		console.log("When s key is pressed, x = " + car2_x + " | y = "+car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car2_left() {
	console.log("Inside car2_left() function.");
	if(car2_x >=0  ){
		car2_x = car2_x - 10 ;
		console.log("When a key is pressed, x = " + car2_x + " | y = "+car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}

function car2_right() {
	console.log("Inside car2_right() function.");
	if(car2_x <= 500 ){
		car2_x = car2_x + 10 ;
		console.log("When d key is pressed, x = " + car2_x + " | y = "+car2_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}