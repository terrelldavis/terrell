let ANIMATION_RUNNING = true

// from https://randoma11y.com/
// first item is background, second the foreground
// made enough boxes to fit a 4k screen resolution

// only 9 colors should be in this pallette
// 5bac4d - green
// eedc4c - yellow
// cb4951 - red
// e8aece - pink
// 107a96 - blue
// e9e9e1 - light grey
// ffffff - white
// 000000 - black
// e8853f - orange

const COLOR_PAIRS = [
  ["#5bac4d", "#eedc4c"],
  ["#5bac4d", "#cb4951"],
  ["#5bac4d", "#e8aece"],
  ["#5bac4d", "#107a96"],
  ["#5bac4d", "#e9e9e1"],
  ["#5bac4d", "#ffffff"],
  ["#5bac4d", "#000000"],
  ["#5bac4d", "#e8853f"], // green background
  ["#eedc4c", "#5bac4d"],
  ["#eedc4c", "#cb4951"],
  ["#eedc4c", "#e8aece"],
  ["#eedc4c", "#107a96"],
  ["#eedc4c", "#e9e9e1"],
  ["#eedc4c", "#ffffff"],
  ["#eedc4c", "#000000"],
  ["#eedc4c", "#e8853f"], // yellow background
  ["#cb4951", "#5bac4d"],
  ["#cb4951", "#eedc4c"],
  ["#cb4951", "#e8aece"],
  ["#cb4951", "#107a96"],
  ["#cb4951", "#e9e9e1"],
  ["#cb4951", "#ffffff"],
  ["#cb4951", "#000000"],
  ["#cb4951", "#648dad"],
  ["#cb4951", "#e8853f"], // red background
  ["#e8aece", "#c92318"],
  ["#e8aece", "#eb517d"],
  ["#e8aece", "#d84151"],
  ["#e8aece", "#fecdac"],
  ["#e8aece", "#c9540d"],
  ["#e8aece", "#f8d3cb"],
  ["#e8aece", "#4e85a0"],
  ["#e8aece", "#4e6ecb"], // pink background
  ["#107a96", "#5bac4d"],
  ["#107a96", "#eedc4c"],
  ["#107a96", "#cb4951"],
  ["#107a96", "#e8aece"],
  ["#107a96", "#ffffff"],
  ["#107a96", "#000000"],
  ["#107a96", "#e8853f"], // blue background
  ["#e9e9e1", "#5bac4d"],
  ["#e9e9e1", "#eedc4c"],
  ["#e9e9e1", "#cb4951"],
  ["#e9e9e1", "#e8aece"],
  ["#e9e9e1", "#107a96"],
  ["#e9e9e1", "#ffffff"],
  ["#e9e9e1", "#000000"],
  ["#e9e9e1", "#e8853f"], // light grey background
  ["#ffffff", "#5bac4d"],
  ["#ffffff", "#eedc4c"],
  ["#ffffff", "#cb4951"],
  ["#ffffff", "#e8aece"],
  ["#ffffff", "#107a96"],
  ["#ffffff", "#e9e9e1"],
  ["#ffffff", "#000000"],
  ["#ffffff", "#e8853f"], // white background
  ["#000000", "#5bac4d"],
  ["#000000", "#eedc4c"],
  ["#000000", "#cb4951"],
  ["#000000", "#e8aece"],
  ["#000000", "#107a96"],
  ["#000000", "#e9e9e1"],
  ["#000000", "#ffffff"],
  ["#000000", "#e8853f"], // black background
  ["#e8853f", "#5bac4d"],
  ["#e8853f", "#eedc4c"],
  ["#e8853f", "#cb4951"],
  ["#e8853f", "#e8aece"],
  ["#e8853f", "#107a96"],
  ["#e8853f", "#e9e9e1"],
  ["#e8853f", "#ffffff"],
  ["#e8853f", "#000000"], // orange background
  ["#5bac4d", "#eedc4c"],
  ["#5bac4d", "#cb4951"],
  ["#5bac4d", "#e8aece"],
  ["#5bac4d", "#107a96"],
  ["#5bac4d", "#e9e9e1"],
  ["#5bac4d", "#ffffff"],
  ["#5bac4d", "#000000"],
  ["#5bac4d", "#e8853f"], // green background
  ["#eedc4c", "#5bac4d"],
  ["#eedc4c", "#cb4951"],
  ["#eedc4c", "#e8aece"],
  ["#eedc4c", "#107a96"],
  ["#eedc4c", "#e9e9e1"],
  ["#eedc4c", "#ffffff"],
  ["#eedc4c", "#000000"],
  ["#eedc4c", "#e8853f"], // yellow background
  ["#cb4951", "#5bac4d"],
  ["#cb4951", "#eedc4c"],
  ["#cb4951", "#e8aece"],
  ["#cb4951", "#107a96"],
  ["#cb4951", "#e9e9e1"],
  ["#cb4951", "#ffffff"],
  ["#cb4951", "#000000"],
  ["#cb4951", "#648dad"],
  ["#cb4951", "#e8853f"], // red background
  ["#e8aece", "#c92318"],
  ["#e8aece", "#eb517d"],
  ["#e8aece", "#d84151"],
  ["#e8aece", "#fecdac"],
  ["#e8aece", "#c9540d"],
  ["#e8aece", "#f8d3cb"],
  ["#e8aece", "#4e85a0"],
  ["#e8aece", "#4e6ecb"], // pink background
  ["#107a96", "#5bac4d"],
  ["#107a96", "#eedc4c"],
  ["#107a96", "#cb4951"],
  ["#107a96", "#e8aece"],
  ["#107a96", "#ffffff"],
  ["#107a96", "#000000"],
  ["#107a96", "#e8853f"], // blue background
  ["#e9e9e1", "#5bac4d"],
  ["#e9e9e1", "#eedc4c"],
  ["#e9e9e1", "#cb4951"],
  ["#e9e9e1", "#e8aece"],
  ["#e9e9e1", "#107a96"],
  ["#e9e9e1", "#ffffff"],
  ["#e9e9e1", "#000000"],
  ["#e9e9e1", "#e8853f"], // light grey background
  ["#ffffff", "#5bac4d"],
  ["#ffffff", "#eedc4c"],
  ["#ffffff", "#cb4951"],
  ["#ffffff", "#e8aece"],
  ["#ffffff", "#107a96"],
  ["#ffffff", "#e9e9e1"],
  ["#ffffff", "#000000"],
  ["#ffffff", "#e8853f"], // white background
  ["#000000", "#5bac4d"],
  ["#000000", "#eedc4c"],
  ["#000000", "#cb4951"],
  ["#000000", "#e8aece"],
  ["#000000", "#107a96"],
  ["#000000", "#e9e9e1"],
  ["#000000", "#ffffff"],
  ["#000000", "#e8853f"], // black background
  ["#e8853f", "#5bac4d"],
  ["#e8853f", "#eedc4c"],
  ["#e8853f", "#cb4951"],
  ["#e8853f", "#e8aece"],
  ["#e8853f", "#107a96"],
  ["#e8853f", "#e9e9e1"],
  ["#e8853f", "#ffffff"],
  ["#e8853f", "#000000"] // orange background

];

// taken from https://stackoverflow.com/a/12646864
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleColors() {
  return shuffleArray(COLOR_PAIRS);
}

// create a svg with background and text color
function createSvgElementHTMLString(svgColors) {
  const {
    background, foreground
  } = svgColors
  return `
<svg style="background:${background};" d="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.59 96.13"><title>terrell®</title><path style="fill: ${foreground};" id="Layer_2" data-name="Layer 2" d="M66.42,96.13H20.3S-2.7,96.52.22,75.62,10.71,0,10.71,0H43.63L40.84,22l37.36-.25ZM25.05,63.26c.56-4.34,2.87-17.69,2.87-17.69H64.36L66.82,31.4H30L33,9.12H18.81L9.69,72.94c-1,8.93,1.79,13.57,8.1,14.18H57.65L59.8,73.7H37.17c-12.54,0-13.32-1.12-12.11-10.43ZM89.55,8.89h-3c-.86,0-1.4.41-1.4,1.17v7.82a1.17,1.17,0,0,0,2.34,0V15h.83l2.3,3.27c.43.61.69.87,1.3.87A1,1,0,0,0,93,18.18a1.4,1.4,0,0,0-.33-.92L90.92,14.9a2.57,2.57,0,0,0,2.36-2.76C93.28,9.89,91.9,8.89,89.55,8.89Zm-2,4.11V10.77h2.11c.87,0,1.3.31,1.3,1.15s-.43,1.14-1.3,1.14ZM89,4.51a9.6,9.6,0,1,0,9.6,9.6h0A9.61,9.61,0,0,0,89,4.51Zm0,16.6a7,7,0,1,1,7-7A7,7,0,0,1,89,21.11ZM93.27,12c0-2.39-1.37-3.11-3.72-3.11h-3c-.86,0-1.4.41-1.4,1.17v7.82a1.17,1.17,0,0,0,2.34,0v-3h.76l2.37,3.34c.43.61.69.87,1.3.87A1,1,0,0,0,93,18.18a1.4,1.4,0,0,0-.33-.92L90.92,14.9a2.57,2.57,0,0,0,2.36-2.76S93.28,12,93.27,12Zm-3.64,1H87.51V10.77h2.11c.87,0,1.3.31,1.3,1.15s-.43,1.14-1.3,1.14ZM89,4.51a9.6,9.6,0,1,0,9.6,9.6h0A9.61,9.61,0,0,0,89,4.51Zm0,16.6a7,7,0,1,1,7-7A7,7,0,0,1,89,21.11Z"/></svg>
  `
}

function createLogoElement(colorPair) {
  // create a empty div to put our svg in temporarily
  const newElement = document.createElement('div')

  const svgColors = {
    background: colorPair[0],
    foreground: colorPair[1]
  }
  newElement.innerHTML = createSvgElementHTMLString(svgColors)

  const svgElement = newElement.childNodes[1] // get the svg, not the div element
  return svgElement
}

function addLogoElementToPage(newLogoElement) {
  const mainElement = document.querySelector('main')
  mainElement.appendChild(newLogoElement)
}

function clearPage() {
  const mainElement = document.querySelector('main')
  mainElement.innerHTML = ''
}

function drawLogos() {
  clearPage()

  // randomly shuffle colors for fun
  shuffleColors()

  // loop through each color pair
  COLOR_PAIRS.map(colorPair => {
    const newLogoElement = createLogoElement(colorPair)
    addLogoElementToPage(newLogoElement)
  })
}

function pageHasLoaded() {
  drawLogos() // call it on load

  const AMOUNT_OF_TIME_FOR_EACH_LOOP = 200; // in milliseconds


  // this is filth tbh
  let timestampLast = 0

  function draw(timestampNow) {
    // each 2 seconds call the drawLogos() function
    const runDrawForTheFirstTime = !timestampLast
    const timeElapsedSinceLastDraw = (timestampNow - timestampLast);
    const amountOfTimeHasElapsedMoreThanSpecified = timeElapsedSinceLastDraw >=
      AMOUNT_OF_TIME_FOR_EACH_LOOP
    if (runDrawForTheFirstTime || amountOfTimeHasElapsedMoreThanSpecified) {
      timestampLast = timestampNow
      drawLogos();
    }

    if (ANIMATION_RUNNING) {
      requestAnimationFrame(draw)
    }
  }
  requestAnimationFrame(draw);

}

// this happens first
// when the page has loaded call the function 'pageHasLoaded'
document.addEventListener('DOMContentLoaded', pageHasLoaded)
