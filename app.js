// unpack function - index 1 name, 2 metadata, 3 sample?
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);

// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  // Q: What does `.node()` do?
  var names = d3.select("#WHATGOESHERE?").node().value;
  console.log(names);

  // clear the input value
  d3.select("#stockInput").node().value = "";

  // Update the Dashboard!
  updateDash(stock);
}

// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/samples.json").then((importedData) => {
  console.log(importedData),
  var data = importedData;
};

// Demographic info (id, ethnicity, gender, age, location, bbtype, wfreq)
// Update Demographic info with Test Subject ID No Dropdown Update

// //compare function to display top 10

data.sort(function(firstNum, secondNum) {
   return firstNum - secondNum;
 })
 console.log(numArray);

// error function
function errorFunc(err) {
  console.log(err);
}

// success function
function successSort(data) {
  // data.results is the array of characters
  data.results.sort(function(firstChar, secondChar) {
    return firstChar.height - secondChar.height;
  })
  console.log(data.results);
}

d3.json(url).then(successSort, errorFunc);


// // 1.Initialize the page with a default plot

// // Call updatePlotly() when a change takes place to the DOM.

d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected.

function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  //'names' from importedData?

}

// how to I select dropdown menu and have the 'names' be options to choose in the drop down?


//console.log(data)

sample_values = []

otu_ids = []

otu_lables = []

// create compare function to get the top 10 - reverse function?

// // Bar Chart Code

  // Create trace.
  var trace1 = {
    values: sample_values,
    y: otu_ids,
    orientation: 'h',
    text: otu_lables
    type: "bar"
  };

  // Create the data array for our plot
  var data = [trace1];

  // Define the plot layout
  var layout = {
    yaxis: { otu_ids }
  };

  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", data, layout);
});



// // Bubble Chart Code
// // https://plotly.com/javascript/bubble-charts/

// var trace2 = {
//     x: otu_ids,
//     y: sample_values,
//     mode: 'markers',
//     marker: {
//       color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//       opacity: [1, 0.8, 0.6, 0.4],
//       size: sample_values
//     }
//   };
  
//   var data2 = [trace2];
  
//   var layout = {
//     title: 'Marker Size and Color',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('plot', data2, layout);

