
/* 3. Color Mixer
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
based on the following criteria"
1. If color1 is "red" and color2 is "blue" or vice versa, print "purple"
2. If color1 is "red" and color2 is "yellow" or vice versa, print "orange"
3. If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"
4. If any other combination of colors is input, the program should print "Invalid color com#ination" */


function colors(color1, color2) {
    let resultingColor = color1.toLowerCase() + color2.toLowerCase();
    switch (resultingColor) {
      case "redblue":
      case "bluered":
        console.log("purple");
        break;
  
      case "redyellow":
      case "yellowred":
        console.log("orange");
        break;
  
      case "blueyellow":
      case "yellowblue":
        console.log("green");
        break;
  
      default:
        console.log("Invalid color combination");
    }
  }
  
  colors("red", "blue");
  colors("red", "yellow");
  colors("blue", "yellow");
  colors("green", "pink");