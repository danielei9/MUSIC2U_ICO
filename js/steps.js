// Scripts steps bar 

var title = ["STEP Descargar e instalar Metamask", "STEP1.1 Set Up Metamask", "STEP1.2 create Password", "STEP1.3 Save Secret Backup Phrase", "STEP1.4 Confirm your secret Backupo phrase", "STEP2.0 ADD Network block-chain", "STEP2.1 go to settings", "STEP2.2 configure network", "STEP2 Done", "STEP3.0 Send some coins to your wallet ( binance example)", "STEP4.0 Pancake Swap", "STEP4.1 Get your M2U Coins"];
var imgsTutorial = [
    "images/steps/1.png",
    "images/steps/2.png",
    "images/steps/3.png",
    "images/steps/4.png",
    "images/steps/5.png",
    "images/steps/6.png",
    "images/steps/7.png",
    "images/steps/8.png",
    "images/steps/9.png",
    "images/steps/10.png",
    "images/steps/11.png",
    "images/tuto/finish.png"
]
function updStepperView(count) {
    $("#box_h3").text(title[count]);
    $("#box_img").attr("src", imgsTutorial[count]);
}
var idSteps = ["#step1", "#step2", "#step3", "#step4", "#step5"];
var count = 0;
console.log("HOla")
updStepperView(count);
$("#progress-prev").click(function () {
    if (count >= 1) {
        $(idSteps[count]).removeClass("active-step");
        count--;
        updStepperView(count)
        console.log(count)
    }
    if (count == 0) {
        $("#progress-prev").attr("disabled", true);
        updStepperView(count)

    }
});
$("#progress-next").click(function () {
    if (count < imgsTutorial.length - 1) {
        count++
        console.log(count)
        $(idSteps[count]).addClass("active-step");
        updStepperView(count)

    }
    if (count > 0) {
        $("#progress-prev").attr("disabled", false);
    }
});