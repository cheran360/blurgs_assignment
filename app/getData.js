// get the main table data
async function getData() {
  const url = path.join(__dirname, "../assets/assets/master.csv");
  console.log(url);
  const response = await fetch(url);
  const rawData = await response.text();
  let arrayOne = rawData.split("\r\n");
  let rowsArray = [];
  let refKey;
  let timeStamp;

  for (let i = 0; i < arrayOne.length - 1; i++) {
    rowsArray = arrayOne[i].split(", ");
    refKey = rowsArray[0];
    timeStamp = rowsArray[1];
    let row_1 = document.createElement("tr");
    let data_1 = document.createElement("td");
    data_1.innerHTML = refKey;
    let data_2 = document.createElement("td");
    data_2.innerHTML = timeStamp;

    let data_3 = document.createElement("td");
    data_3.innerHTML =
      '<button type="button" onclick="clickfunc(\'' +
      refKey +
      '\')" class="btn btn-warning">View</button>';

    row_1.appendChild(data_1);
    row_1.appendChild(data_2);
    row_1.appendChild(data_3);
    masterTable.appendChild(row_1);
  }
}
