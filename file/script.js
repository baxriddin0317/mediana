let elSaveBtn = document.querySelector(".saveBtn-js");
let medianArr = [];

elSaveBtn.addEventListener("click", () => {
    medianaFun();
    myChart.destroy();

    datasetFun();
    datasetMediana();

    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
});

const medianaFun = () => {
    let k = 0;
    for (let c = 0; c < cout; c++) {
        arr.forEach((a) => {
            k = k + parseInt(a[c]);
        })
        
        medianArr.push(k/arr.length);
        k = 0;
    }
}

const datasetFun = () => {
    arr.forEach((a,i) => {
        data.datasets.push({
            label: `My ${i} dataset`,
            backgroundColor: 'red',
            borderColor: 'transparent',
            data: a,
            pointStyle: 'circle',
            pointRadius: 7,
            pointHoverRadius: 15
          })
    });
}

const datasetMediana = () => {
    data.datasets.push({
        label: 'Me',
        backgroundColor: 'rgb(0, 0, 5)',
        borderColor: 'rgb(0, 82, 235)',
        data: medianArr,
        pointStyle: 'circle',
        pointRadius: 10,
    })
}