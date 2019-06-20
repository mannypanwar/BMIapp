const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");


function calculateBMI(){
    var bmi =0;

    const weightAmount = inputWeight.value;
    const heightAmount = inputHeight.value;

    bmi = weightAmount/heightAmount/heightAmount*10000

    var bmiData=Math.round(bmi)


    if(bmi>18 && bmi<25){
    swal.fire({
            title: " Your BMI is  "+ bmiData,
            text: "You are of normal weight",
            type: "success",
            animation: false,
            customClass: {
            popup: 'animated bounceIn '},
            footer: '<a href="https://www.webmd.com/balance/healthy-habits-19/slideshow-checklist-stay-healthy">Checklist to stay healthy?</a>'
        })
    }
    else if(bmi>24 && bmi<30){
    swal.fire({
            title: " Your BMI is  "+ bmiData,
            text: "You are over weight",
            type: "info",
            animation: false,
            customClass: {
            popup: 'animated tada '},
        footer: '<a href="https://www.nhs.uk/live-well/healthy-weight/12-tips-to-help-you-lose-weight/">How to lose weight?</a>'
        })
    }
    else if(bmi>29 && bmi<36){
    swal.fire({
            title: " Your BMI is  "+ bmiData,
            text: "You are obese",
            type: "warning",
            animation: false,
            customClass: {
            popup: 'animated tada '},
            footer: '<a href="https://www.nhs.uk/live-well/healthy-weight/12-tips-to-help-you-lose-weight/">How to lose weight?</a>'
        })
    }
    else(
    swal.fire({
            title: " Invalid input  ",
            text: "Something is wrong",
            type: "error",
            animation: false,
            customClass: {
            popup: 'animated heartBeat '}
        }))
}

const element = document.querySelector("#button");
element.addEventListener("click", calculateBMI, false);


function clearText()  
{
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
}  