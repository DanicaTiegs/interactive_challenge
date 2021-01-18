var data = d3.json("/data/samples.json")

console.log(data)

otu_ids = []
sample_values = []



// Bubble Chart Code
// https://plotly.com/javascript/bubble-charts/

var trace1 = {
    x: otu_ids,
    y: sample_values,
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      opacity: [1, 0.8, 0.6, 0.4],
      size: sample_values
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Marker Size and Color',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('myDiv', data, layout);

