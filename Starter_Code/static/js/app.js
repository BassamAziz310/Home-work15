// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument

function optionChanged(sample){
  console.log(sample); 

};




function makeChart(sampleid){
  
  console.log(sampleid)
  
  //let trace1 = {
    //x: data.map(object => object.sample),
    //y: data.map(object => object.names),
    //text: reversedData.map(object => object.names),
    //name: "OTU",
    //type: "bar",
    //orientation: "h"
    //};

  /*
  let data = [trace1];

    // Define the plot layout
  let layout = {
    title: "...",
     xaxis: { title: "..." },
     yaxis: { title: "..." }
    };
  
   // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
  */
};




let id = d3.select("#selDataset")
d3.json("samples.json").then((importedData) => {
    console.log(importedData);
    let data = importedData;
    


    let ids = data.names;
      ids.forEach((data)=>{
        id.append("option").text(data).property("value", data);

      }
      );
    
    makeChart(ids[0]);

    

  
    
  });

  // we have to make what is within the drop down menu correspond with what is within  the dataset 

  // I am srating to see the functionality of the graph... I am just having trouble with variable declaration and interpreting the dataset 