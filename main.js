function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rFCEO64Qk/model.json',modelReady);
}

function modelReady(){
    classifier.classify(checkResults)
}

function checkResults(){
console.log("Results are ready")
}
