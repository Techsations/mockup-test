// Sample data for the stacked bar chart
const data = {
    labels: ['20', '25', '30', '35', '40', '45', '50'],
    datasets: [
      {
        label: 'Employer: K 73,500',
        backgroundColor: 'rgb(3,37,126)',
        data: [23, 29, 28, 45, 60, 70, 80],
      },
      {
        label: 'Employee: K 52,500',
        backgroundColor: 'rgb(0,138,216)',
        data: [36, 30, 33, 65, 60, 76, 80],
      },
      {
        label: 'Total Interest: K 244,313',
        backgroundColor: 'rgb(0,188,227)',
        data: [46, 49, 50, 70, 80, 77, 80],
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