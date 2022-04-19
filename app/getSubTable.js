// get Subtable of csv files
let subTable = document.getElementById("sub-table");
async function getSubTable(Id) {
  let A;
  let latitude;
  let longitude;
  let latitudeArray = [];
  let longitudeArray = [];

  // deleting previous tables
  subTable.innerHTML = "";

  //fetching the new csv files
  let suburl = path.join(__dirname, `../assets/assets/${Id}.csv`);
  const response = await fetch(suburl);
  const rawData = await response.text();
  let subTableArray = rawData.split("\r\n");
  let subTableRowsArray = [];

  let headrow = document.createElement("tr");

  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "A";
  heading_1.setAttribute("class", "bg-primary text-light");

  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "latitude";
  heading_2.setAttribute("class", "bg-primary text-light");

  let heading_3 = document.createElement("th");
  heading_3.innerHTML = "longitude";
  heading_3.setAttribute("class", "bg-primary text-light");

  headrow.appendChild(heading_1);
  headrow.appendChild(heading_2);
  headrow.appendChild(heading_3);
  subTable.appendChild(headrow);

  for (let j = 0; j < subTableArray.length - 1; j++) {
    subTableRowsArray = subTableArray[j].split(",");
    A = subTableRowsArray[0];
    latitude = subTableRowsArray[1];
    longitude = subTableRowsArray[2];

    longitudeArray.push(longitude);
    latitudeArray.push(latitude);

    let subRow = document.createElement("tr");

    let subData_1 = document.createElement("td");
    let latitudeInNumber = Number(latitude);
    let longitudeInNumber = Number(longitude);
    subData_1.innerHTML = `<a href="https://www.google.com/maps/search/${latitudeInNumber},${longitudeInNumber}" target="_blank">${A}</a>`;

    let subData_2 = document.createElement("td");
    subData_2.innerHTML = latitude;

    let subData_3 = document.createElement("td");
    subData_3.innerHTML = longitude;

    subRow.appendChild(subData_1);
    subRow.appendChild(subData_2);
    subRow.appendChild(subData_3);
    subTable.appendChild(subRow);
  }
  getGraph(latitudeArray, longitudeArray);
}
