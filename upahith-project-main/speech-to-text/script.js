var pred_sec = document.querySelector('.predictions-section');

score = 0;
var result = randomFunc();

click_to_start.addEventListener('click', function () {
    result = randomFunc();
})


function randomFunc() {
    const array = ["the", "from", "which", "more", "and", "by", "hot", "way", "number", "come", "did", "go", "was", "out", "were", "write", "my", "people", "word", "time"];
    const result = getRandomItem(array);
    console.log(result);
    document.getElementById('demo').innerHTML = `Say the word: <b style="color:orange;">${result}</b>`;
    return result;
}


click_to_record.addEventListener('click', function () {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        document.getElementById("convert_text").innerHTML = transcript;
        console.log(transcript);


        if (transcript === result) {
            score = score + 1;

        }
        else {
            score = score - 0.5;
        }
        console.log(score);
        pred_sec.style.display = 'flex';
        document.getElementById('score').innerHTML = `Accuracy score = ${score}`;
        document.getElementById('predicted').innerHTML = `The word which u said was - "${transcript}"`;
    });

    if (speech == true) {
        recognition.start();
    }
})


// program to get a random item from an array
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}