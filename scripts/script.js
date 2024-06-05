function showTask(taskId) {
  // Hide all tasks
  const taskContainers = document.querySelectorAll(".task-container");
  taskContainers.forEach((container) => {
    container.classList.remove("active");
  });

  // Show the selected task
  const taskToShow = document.getElementById(taskId);
  taskToShow.classList.add("active");
}

function showChart(period) {
  const ctx = document.getElementById("chart").getContext("2d");
  const data = {
    daily: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "Dataset 1",
          data: [12, 19, 3, 5, 2, 3, 7],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: true,
          tension: 0.5,
        },
        {
          label: "Dataset 2",
          data: [2, 3, 20, 5, 1, 4, 10],
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
          fill: true,
          tension: 0.3,
        },
      ],
    },
    weekly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Dataset 1",
          data: [80, 10, 100, 5],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: true,
          tension: 0.3,
        },
        {
          label: "Dataset 2",
          data: [5, 90, 25, 95],
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
          fill: true,
          tension: 0.3,
        },
      ],
    },
    monthly: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Dataset 1",
          data: [5, 100, 180, 200, 150, 80, 30, 40, 100, 90, 20, 50, 105, 110],
          borderColor: "blue",
          borderWidth: 1,
          fill: true,
          tension: 0.3,
        },
        {
          label: "Dataset 2",
          data: [40, 20, 50, 70, 80, 170, 220, 230, 30, 40, 20, 10, 30],
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
          fill: true,
          tension: 0.4,
        },
      ],
    },
  };

  if (window.myChart) {
    window.myChart.destroy();
  }

  window.myChart = new Chart(ctx, {
    type: "line",
    data: data[period],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Load the default chart (daily) on page load
document.addEventListener("DOMContentLoaded", function () {
  showChart("daily");
});

// Function to update the progress bar and percentage
function updateProgress(percent) {
  var progressBar = document.getElementById("progressBar");
  var progressText = document.getElementById("progressText");

  progressBar.style.width = percent + "%";
  progressText.innerHTML = percent + "%";
}

// Example usage: Call updateProgress with the percentage
updateProgress(24); // Update with your desired percentage

// Function to update the progress bar and percentage
function updateProgress(percent) {
  var progressBar2 = document.getElementById("progressBar2");
  var progressText2 = document.getElementById("progressText2");

  progressBar2.style.width = percent + "%";
  progressText2.innerHTML = percent + "%";
}

// Example usage: Call updateProgress with the percentage
updateProgress(60); // Update with your desired percentage

console.log("GGGG");

