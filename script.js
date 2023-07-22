// Sample data for the bar chart
const data = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
    datasets: [{
      label: 'Data Set 1',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      data: [50, 30, 70, 45],
    }]
  };

  // Chart configuration
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      responsive: true,
      maintainAspectRatio: false
    },
  };

  // Create the bar chart
  const ctx = document.getElementById('barChart').getContext('2d');
  new Chart(ctx, config);