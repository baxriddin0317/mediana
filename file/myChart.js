  let labels = [];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      data: [0],
      backgroundColor: 'red',
      borderColor: 'red',
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

  const data1 = {
    labels: labels1,
    datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(236, 4, 42)',
      borderColor: 'rgb(236, 4, 42)',
      data: [0, 10, 5, 10, 17, 10],
    },
    {
      label: 'Median',
      backgroundColor: 'rgb(236, 4, 42)',
      borderColor: 'rgb(236, 4, 42)',
      data: [2, 30, 2, 10, 17, 10],
    },
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(236, 4, 42)',
      borderColor: 'rgb(236, 4, 42)',
      data: [3, 10, 5, 20, 17, 10],
    }
  ]
  };

  const config1 = {
    type: 'line',
    data: data1,
    options: {}
  };
  const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
  );