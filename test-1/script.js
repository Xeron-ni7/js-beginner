/**
 * var vs let
 */
// var i = 0;

// function abc() {
//   i = ++i;
//   console.log(i);
// }

// function call() {
//   console.log(i);
// }

// function call2() {
//   abc();
//   call();
// }

//########################---2nd phase---###############################

/**
 *  event call & document object
 */

// Show = function() {
//   let textArea = document.getElementById("box");
//   textArea.style.color = "red";
//   console.log(textArea);
//   let data = document.getElementById("box").value;
//   alert(data);
// };

// Show2 = function() {
//   let textArea = document.getElementById("box");

//   console.log(textArea);
//   let data = document.getElementById("box").value;
//   if (!data) {
//     textArea.style.borderColor = "red";
//   } else {
//     textArea.style.color = "red";
//     textArea.style.borderColor = "black";
//     alert(data);
//   }
// };

//############################## Async ########################
// timers = function(x) {
//   setTimeout(function() {
//     console.log("Function is called after: ", x, " second(s)");
//   }, x * 1000);
// };

// callTimer = function() {
//   timers(5);
//   timers(7);
//   timers(2);
//   timers(4);
//   timers(1);
// };

//###################### 3rd phase ##########################

/**
 * event caller
 */

changeText = function() {
  let text = document.getElementById("box").value;
  document.getElementById("showText").innerText = text;
};
