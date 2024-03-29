let Btn1 = document.getElementById("btn1");
let Btn2 = document.getElementById("btn2");
let inputfield = document.getElementById("inputfield");
let start1;
let time = parseInt(inputfield.value);
let time1 = 0;
let time2 = 0;

function start() {
    if (Btn1.value === "Start") {
        let b = "Pause";
        Btn1.value = b;
        f1();
    } else if (Btn1.value === "Pause") {
        let c = "Start"
        Btn1.value = c;
        clearInterval(start1);
        inputfield.value = inputfield.value;
    }
}
function f1() {
    start1 = setInterval(function () {
        time++;
        inputfield.value = time2.toString().padStart(2, "0") + ":" + time1.toString().padStart(2, "0") + ":" + time.toString().padStart(2, "0");
        if (time === 60) {
            clearInterval(start1);
            time1++;
            time = 0;
            inputfield.value = time2.toString().padStart(2, "0") + ":" + time1.toString().padStart(2, "0") + ":" + time.toString().padStart(2, "0");
            if (time1 === 60) {
                time2++;
                time1 = 0;
                inputfield.value = time2.toString().padStart(2, "0") + ":" + time1.toString().padStart(2, "0") + ":" + time.toString().padStart(2, "0");
            }
            f1()
        }
    }, 1000)
}
function Reset() {
    clearInterval(start1);
    Btn1.value = "Start"
    time = 0;
    time1 = 0;
    time3 = 0;
    inputfield.value = "00:00:00"
}