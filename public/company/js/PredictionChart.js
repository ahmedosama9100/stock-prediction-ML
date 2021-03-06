document
  .getElementById("list-Prediction-list")
  .addEventListener("click", function () {
    console.log("click prediction");
    const ctx = document.getElementById("PredictionChart").getContext("2d");
    const symbol = document.getElementById("companySymbol").value;
    console.log("hello two");
    console.log(symbol);
    axios
      .get("http://localhost:8080/prediction?symbol=" + symbol)
      .then(function (res) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: res.data.time,
            datasets: [
              {
                label: "Stock data points",
                data: res.data.close,
                borderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
        if (res.data.rank >= 0) {
          document.getElementById("arrow").innerHTML =
            '<i class="fas fa-arrow-up indicator indicator-color-green company-indicator"></i>';
        } else {
          document.getElementById("arrow").innerHTML =
            '<i class="fas fa-arrow-down indicator indicator-color-red company-indicator"></i>';
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  });
