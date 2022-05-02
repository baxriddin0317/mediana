  let labels = [];

  let data = {
    labels: labels,
    datasets: [{
      label: 'max',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      data: [0],
      pointRadius: 7,
    }]
  };

  let config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
        }
      }
    }
  };

  let myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  const labels1 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  let data1 = {
    labels: labels1,
    datasets: [{
      label: '0',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      data: [0],
      pointRadius: 7,
      pointHoverRadius: 15
    }]
  };

  const config1 = {
    type: 'line',
    data: data1,
    options: {}
  };
  
  let myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
  );