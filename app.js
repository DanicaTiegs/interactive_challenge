// Add event listener for submit button
//d3.select("#submit").on("click", handleSubmit);

// // Submit Button handler
// function handleSubmit() {
//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input value from the form
//   // Q: What does `.node()` do?
//   var names = d3.select("#WHATGOESHERE?").node().value;
//   console.log(names);

//   // clear the input value
//   d3.select("#selDataset").node().value = "";

//   // Update the Dashboard!
//   updateDash(names);
//}

// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/samples.json").then((importedData) => {
  console.log(importedData)
  var dropDown = d3.selectAll("#selDataset")
  importedData.names.forEach((id)=>{
    //console.log(id)
    dropDown.append("option").text(id).property("value",id)
  })
  updatePlotly(importedData.names[0])
  var data = importedData;
});

// This function is called when a dropdown menu item is selected.
function optionChanged(id){
  console.log(id)
  updatePlotly(id)
}

function updatePlotly(id) {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  d3.json("data/samples.json").then((importedData) => {
    var chartData = importedData.samples.filter(sample=> sample.id = id)[0]
    console.log(chartData)

  // Bar Chart Code

  // Create trace.
  var trace1 = {
    x: chartData.sample_values.slice(0,10),
    y: chartData.otu_ids.slice(0,10).map(otu => "OTU " + otu),
    orientation: 'h',
    text: chartData.otu_labels.slice(0,10),
    type: "bar"
  };


  // Create the data array for our plot
  var data = [trace1];

  console.log(data)

  // Define the plot layout
  var layout = {
    title: "Top 10 Bacteria Cultures"
  };

  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar", data, layout);


// // Bubble Chart Code
// // https://plotly.com/javascript/bubble-charts/

var trace2 = {
    x: chartData.otu_ids,
    y: chartData.sample_values,
    mode: 'markers',
    marker: {
      color: chartData.otu_ids,
      size: chartData.sample_values
    }
  };
  
  var data2 = [trace2];
  
  var layout2 = {
    title: 'Bacteria Cultures/Sample',
    showlegend: false,
  };
  
  Plotly.newPlot('bubble', data2, layout2);

  var metaData = importedData.metadata.filter(sample=> sample.id = id)[0]
  console.log(metaData)
  var demoInfo = d3.select("#sample-metadata");
  demoInfo.html("")
  Object.entries(metaData).forEach(([key, value]) => {
    demoInfo.append('h5').text(key + ": " + value)
    })
  })
}

