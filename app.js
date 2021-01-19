// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/samples.json").then((importedData) => {
  console.log(importedData),
  var data = importedData;
};

// 1.Initialize the page with a default plot

// Call updatePlotly() when a change takes place to the DOM.

d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected.

function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  //'names' from importedData?

}



// unpack names, metadata and sample?
// select dropdown menu and have the 'names' be options to choose in the drop down


//console.log(data)


// var otu_ids = function.unpack(lables)
//   samples.otu_lables
// sample_values = []



// // Bubble Chart Code
// // https://plotly.com/javascript/bubble-charts/

// var trace1 = {
//     x: otu_ids,
//     y: sample_values,
//     mode: 'markers',
//     marker: {
//       color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//       opacity: [1, 0.8, 0.6, 0.4],
//       size: sample_values
//     }
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: 'Marker Size and Color',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('plot', data, layout);

