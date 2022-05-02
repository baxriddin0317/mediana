let elSaveBtn = document.querySelector(".saveBtn-js");
let medianArr = [];
let max = 0;
let min = 0; 

// ==== malumotlarni saqlab diagrammaga kirituvchi funksiya ====
elSaveBtn.addEventListener("click", () => {
    medianaFun();
    myChart.destroy();
    myChart1.destroy();

    datasetFun();
    datasetMediana();
    maxMinFun();
    maxMinAdd();

    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    addYuqoriArr();
    addPastkiArr();
    addMarkaziyArr();
    datasetSecondFun();

    myChart1 = new Chart(
        document.getElementById('myChart1'),
        config1
    );
});

// ==== meadianani hisoblovchi funksiya ====
const medianaFun = () => {
    let k = 0;
    for (let c = 0; c < cout; c++) {
        arr.forEach((a) => {
            k = k + parseFloat(a[c]);
        })
        
        medianArr.push(k/arr.length);
        k = 0;
    }
}

// ==== malumotlarni chartjsga joylovchi funksiya ====
const datasetFun = () => {
    data.datasets = [];
    
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

// ==== medianani chartjsga joylovchi funksiya ====
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

// ==== malumotlardan max va min qiymatlarni aniqlovchi funksiya ====
const maxMinFun = () => {
    arr.forEach(a => {
        for(let i = 0; i <= a.length; i++){
            if(max <= a[i]){
                max = a[i];
            }

            if(min >= a[i]){
                min = a[i];
            }
        }
    })

    max = parseInt(max) + 1;
    min = parseInt(min) - 1;
}

// ==== max va min qiymatlarni chartjsga joylovchi funksiya ====
const maxMinAdd = () => {
    data.datasets.push({
        label: 'Max',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        data: [max],
        pointStyle: 'circle',
        pointRadius: 10,
    },
    {
        label: 'Min',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        data: [min],
        pointStyle: 'circle',
        pointRadius: 10,
    })
}


// ==== 2chi chart diagramma malumotlarini toldiruvchi funksiyala toplami ====

let markaziyArr = [];
let yuqoriArr = [];
let pastkiArr = [];

// ==== yuqori arrayni toldirish uchun bir funksiya ====
const addYuqoriArr = () => {
    let katta = 0;
    
    if(yuqoriArr.length > 0) {
        yuqoriArr = [];
    }

    arr.forEach(a => {
        for(let i=0; i<=a.length; i++){
            if(katta < a[i]){
                katta = a[i];
            }
        }
        yuqoriArr.push(katta);
    })
}

// ==== pastki arrayni toldirish uchun bir funksiya ====

const addPastkiArr = () => {    
    if(pastkiArr.length > 0) {
        pastkiArr = [];
    }

    arr.forEach(a => {
        let kichik = a[0];

        for(let i=0; i<=a.length; i++){
            if(kichik > a[i]){
                kichik = a[i];
            }
        }
        pastkiArr.push(kichik);
    })
}

// markaziy arrayni toldiruvchi funksiya

const addMarkaziyArr = () => {
    if(markaziyArr.length > 0){
        markaziyArr = [];
    }
    arr.forEach(a => {
        let markaz = a[0];
        let yigindi = 0;

        for(let i = 0; i <= a.length; i++){
            if(a[i] !== undefined){
                yigindi += parseFloat(a[i]);
            }
        }

        markaz = yigindi/a.length;
        markaziyArr.push(markaz);       
    })
}

// ==== 2 chi chart diagrammasini data arrayini toldirib qoyish qoldi ====

const datasetSecondFun = () => {
    data1.datasets = [];
    data1.datasets.push({
        label: 'yuqori array',
        backgroundColor: 'red',
        borderColor: 'transparent',
        data: yuqoriArr,
        pointStyle: "circle",
        pointRadius: 7,
        pointHoverRadius: 15
      },
      {
        label: 'markaziy array',
        backgroundColor: 'rgb(0, 0, 5)',
        borderColor: 'rgb(0, 82, 235)',
        data: markaziyArr,
        pointStyle: "circle",
        pointRadius: 7,
        pointHoverRadius: 15
      },
      {
        label: 'pastki array',
        backgroundColor: 'red',
        borderColor: 'transparent',
        data: pastkiArr,
        pointStyle: "circle",
        pointRadius: 7,
        pointHoverRadius: 15
      })   
}