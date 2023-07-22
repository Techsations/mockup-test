// Sample data for the stacked bar chart
const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [
      {
        label: 'Data Set 1',
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        data: [50, 30, 70, 45],
      },
      {
        label: 'Data Set 2',
        backgroundColor: 'rgba(255, 159, 64, 0.7)',
        data: [20, 50, 30, 25],
      },
      {
        label: 'Data Set 3',
        backgroundColor: 'rgba(153, 102, 255, 0.7)',
        data: [30, 20, 50, 30],
      }
    ]
  };

  // Chart configuration
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          beginAtZero: true,
        }
      },
      responsive: true,
      maintainAspectRatio: false
    },
  };

  // Create the stacked bar chart
  const ctx = document.getElementById('stackedBarChart').getContext('2d');
  new Chart(ctx, config);