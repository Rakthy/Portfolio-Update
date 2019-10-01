//alert notification//

const alert = document.querySelector("#alert");

alert.innerHTML = `<div class='alert-banner'>
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete<p>
<p class = 'alert-banner-close'>x</p>
</div>`;

alert.addEventListener("click", e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alert.style.visibility = "hidden";
  }
});

//charts active projection
const li = document.querySelectorAll(".trafficLink");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    const active = document.querySelector(".active");
    active.className = active.className.replace("active", "");
    this.className += " active";
  });
}




//notification menu//

const noteItem = document.querySelectorAll(".note-item");
const noteMenu = document.querySelector(".note-menu");
const close = document.querySelectorAll(".close");
const bellIcon = document.querySelector(".bell-icon");
const notification = document.querySelector(".notification");

bellIcon.addEventListener("click", openMenu);
function openMenu() {
  for (let i = 0; i < noteItem.length; i++) {
    noteItem[i].style.display = "flex";
    noteMenu.style.display = "block";
    notification.style.display = "none";
  }
}

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function() {
    this.parentElement.style.display = "none";
  });
}

//chart.js//
var ctx = document.querySelector("#traffic-chart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",

  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31"
    ],
    datasets: [
      {
        label: "",
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: ["rgba(49, 61, 75, .8)"],
        borderColor: ["rgba(0, 192, 127, 1)"],
        borderWidth: 2
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            drawTicks: false
          },
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
const hourly = document.querySelectorAll(".trafficLink")[0];

hourly.addEventListener("click", function() {
  var ctx = document.querySelector("#traffic-chart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
      ],
      datasets: [
        {
          label: "",
          data: [654, 760, 1900, 690, 1200, 900, 1500, 1250, 1098, 1000, 2200],
          backgroundColor: ["rgba(49, 61, 75, .8)"],
          borderColor: ["rgba(0, 192, 127, 1)"],
          borderWidth: 2
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
});
const daily = document.querySelectorAll(".trafficLink")[1];
daily.addEventListener("click", function() {
  var ctx = document.querySelector("#traffic-chart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
      ],
      datasets: [
        {
          label: "",
          data: [1898, 897, 980, 800, 500, 1200, 1000, 1378, 876, 987, 2100],
          backgroundColor: ["rgba(49, 61, 75, .8)"],
          borderColor: ["rgba(0, 192, 127, 1)"],
          borderWidth: 2
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
});
const weekly = document.querySelectorAll(".trafficLink")[2];
weekly.addEventListener("click", function() {
  var ctx = document.querySelector("#traffic-chart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",

    data: {
      labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
      ],
      datasets: [
        {
          label: "",
          data: [
            750,
            1250,
            1000,
            2000,
            1500,
            1750,
            1250,
            1850,
            2250,
            1500,
            2500
          ],
          backgroundColor: ["rgba(49, 61, 75, .8)"],
          borderColor: ["rgba(0, 192, 127, 1)"],
          borderWidth: 2
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              drawTicks: false
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
});
const monthly = document.querySelectorAll(".trafficLink")[3];
monthly.addEventListener("click", function() {
  var ctx = document.querySelector("#traffic-chart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",

    data: {
      labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
      ],
      datasets: [
        {
          label: "",
          data: [989, 2300, 908, 1565, 376, 567, 800, 2000, 543, 900, 1000],
          backgroundColor: ["rgba(49, 61, 75, .8)"],
          borderColor: ["rgba(0, 192, 127, 1)"],
          borderWidth: 2
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              drawTicks: false
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
});
//daily traffic
var ctx = document.querySelector("#daily-chart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "",
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: ["rgba(49, 61, 75, .8)"],
        borderColor: ["rgba(0, 192, 127, 1)"],
        borderWidth: 2
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

//donut charts
var ctx = document.querySelector("#donut-chart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [
      {
        label: "# of Votes",
        data: [2000, 550, 500],
        backgroundColor: [
          "rgba(223, 216, 200, 1)",
          "rgba(0, 192, 127, 1)",
          "rgba(49, 61, 75, .8)"
        ],
        borderColor: [],
        borderWidth: 0
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
