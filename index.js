let elInput = document.querySelectorAll(".input");

let cout = 0;

let one = [...elInput].slice(0,10);
let two = [...elInput].slice(10,20);
let three = [...elInput].slice(20,30);
let four = [...elInput].slice(30,40);
let five = [...elInput].slice(40,50);
let six = [...elInput].slice(50,60);
let seven = [...elInput].slice(60,70);
let eight = [...elInput].slice(70,80);
let nine = [...elInput].slice(80,90);
let ten = [...elInput].slice(90,100);

one.forEach((i,j) => {
    i.addEventListener("input", () => {
        one[j].classList.remove("sariq");
        one[j+1].classList.add("sariq");
        funCout(one);
        addArr(one, 0);
        
    })
})

two.forEach((i) => {
    i.addEventListener("input", () => {
        addWarning(two);
        addArr(two, 1);
    })
})
three.forEach((i) => {
    i.addEventListener("input", () => {
        addWarning(three);
        addArr(three, 2);
    })
})
four.forEach((i) => {
    i.addEventListener("input", () => addWarning(four))
})
five.forEach((i) => {
    i.addEventListener("input", () => addWarning(five))
})
six.forEach((i) => {
    i.addEventListener("input", () => addWarning(six))
})
seven.forEach((i) => {
    i.addEventListener("input", () => addWarning(seven))
})
eight.forEach((i) => {
    i.addEventListener("input", () => addWarning(eight))
})
nine.forEach((i) => {
    i.addEventListener("input", () => addWarning(nine))
})
ten.forEach((i) => {
    i.addEventListener("input", () => addWarning(ten))
})

const addWarning = (a) => {
    a.forEach(item => {
        if(!item.value == ''){
            loop(a);
        }
    });

    itemDisabled(a);
}

// ==== loop ====
const loop = (items) => {
    for(let k=0; k<cout; k++){
        items[k].disabled = false;
        if(items[k].value == ''){
            items[k].classList.add("warning");
        }else{
            items[k].classList.remove("warning");
        }
    }
}

// ==== item disabled ====
const itemDisabled = (item) => {
    item.slice(cout, item.length).forEach(item => {
        item.disabled = true;
    })
}

//  ==== cout ====
const funCout = (array) => {
    cout = 0;

    array.forEach(i => {
        if(!i.value == ''){
            cout += 1;
            if(!labels.includes(cout)){
                labels.push(cout);
            }
        }
        
    })

}

let arr = [];
let mediana = [];

const addArr = (a, k) => {
     arr[k] = a.map(i => {
        if(!i.value == ''){
            return i.value;
        }
    }).slice(0,cout);
}




