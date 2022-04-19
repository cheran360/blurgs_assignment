// get graph of coordinates
function getGraph(latitudeArray, longitudeArray) {
  let dataArray = [];
  document.getElementById("subright-one").innerHTML = "&nbsp;";
  document.getElementById("subright-one").innerHTML =
    '<canvas id="myChart1"></canvas>';
  for (let i = 0; i < latitudeArray.length; i++) {
    dataArray.push({ x: latitudeArray[i], y: longitudeArray[i] });
  }
  var x = new Chart(document.getElementById("myChart1"), {
    backgroundColor: "#87CEEB",
    type: "scatter",
    data: {
      datasets: [
        {
          label: "plot",
          backgroundColor: "rgba(135,206,250)",
          data: dataArray,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}
