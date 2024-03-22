function backspace() {
	let display = document.getElementById("display");
	display.value = display.value.slice(0, -1);
}

function calculate() {
	let display = document.getElementById("display");
	let expression = display.value;
	let result;

	try {
		// Uncomment these lines to have degrees input instead of radians input:
		/*expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
		expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
		expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');*/

		result = math.evaluate(expression); //calculation of the input
		display.value = result;
	} catch (error) {
		display.value = "Error";
	}
}

function naturalLog(){
    let display = document.getElementById("display");
	display.value += "log(";
}

function squareRoot() {
	let display = document.getElementById("display");
	display.value += "sqrt(";
}

function base10Log() {
	let display = document.getElementById("display");
	display.value += "log10(";
}

function pi() {
	let display = document.getElementById("display");
	display.value += "pi";
}

function e() {
	let display = document.getElementById("display");
	display.value += "e";
}

function power() {
	let display = document.getElementById("display");
	display.value += "^(";
}

//----------------------------------
//plotting functions
//----------------------------------
let contentsBounds = document.body.getBoundingClientRect();
let width = 1000;
let height = 700;
let ymin=document.getElementById("ymin");
let ymax=document.getElementById("ymax");
let xmin=document.getElementById("xmin");
let xmax=document.getElementById("xmax");

functionPlot({ //show a graph with no function at first
    title:display.value,
    target: "#Graph",
    width,
    height,
    yAxis: { domain: [-2, 10] },
    xAxis: { domain: [-4, 10] },
    grid: true,
    data: [
      {
        fn: display.value,
      }
    ]
  });

function plot(){ //when "plot" button is pressed, plot the input function
functionPlot({
  title:'y='+display.value,
  target: "#Graph",
  width,
  height,
  yAxis: {domain: [ymin.value,ymax.value]},
  xAxis: {domain: [xmin.value,xmax.value]},
  grid: true,
  data: [
    {
      fn: display.value, //the factorial function doesn't work with the library though
      color:'red',
    }
  ]
});
}