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

  var trace1 = {
    x: chartData.sample_values.slice(0,10),
    y: chartData.otu_ids.slice(0,10).map(otu => "OTU " + otu),
    orientation: 'h',
    text: chartData.otu_labels.slice(0,10),
    type: "bar"
  };

  var data = [trace1];

  console.log(data)

  var layout = {
    title: "Top 10 Bacteria Cultures"
  };

  Plotly.newPlot("bar", data, layout);


  // // Bubble Chart Code

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

