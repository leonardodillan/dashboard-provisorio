/** @format */
//

// ========================================================================================
// ==================================== GRAFICO 1 =========================================
// ========================================================================================

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(205, 255, 0)",
      borderColor: "rgb(205, 255, 0)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {},
};

// ========================================================================================
// ==================================== GRAFICO 2 =========================================
// ========================================================================================

const labelsG2 = ["January", "February", "March", "April", "May", "June"];

const dataG2 = {
  labels: labelsG2,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(205, 255, 0)",
      borderColor: "rgb(205, 255, 0)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const configG2 = {
  type: "bar",
  data: dataG2,
  options: {},
};

// ========================================================================================
// ==================================== GRAFICO 3 =========================================
// ========================================================================================

const labelsG3 = ["January", "February", "March", "April", "May", "June"];

const dataG3 = {
  labels: labelsG3,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(205, 255, 0)",
      borderColor: "rgb(205, 255, 0)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const configG3 = {
  type: "line",
  data: dataG3,
  options: {},
};

const grafico1 = new Chart(document.getElementById("grafico1"), config);
const grafico2 = new Chart(document.getElementById("grafico2"), configG2);
const grafico3 = new Chart(document.getElementById("grafico3"), configG3);
