function start_classification()
{
 navigator.mediaDevices.getUserMedia({ audio: true });
 classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/PJ4W54TY3/model.json', modelLoaded);   
}

function modelLoaded()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error){console.error(error);}
    else{
        console.log(results);
        document.getElementById("update_text").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy Is - " + results[0].confidence;
    }
}
