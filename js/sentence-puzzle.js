const words = [
    "A man was preparing the pitch for a cricket match",
    "santosh is going to play cricket",
    "welcome to my farmhouse",
    "It is too much like a cricket match",
    "sham is go to play footboll",
];


const hints = [
   
    "preparing A man was  the pitch  a cricket match for",
    "play santosh going to cricket is",
    "my farmhouse welcome to",
    "It is too much like a cricket match",
    "is go to play sham footboll",
    
];


let displayWord = "";


function shuffle(str) {
    strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++i) {
        let j = Math.floor(Math.random() * strArray.length);
       
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join(" ");
}


function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if (
        input.value.toLocaleLowerCase() ===
        displayWord.toLocaleLowerCase()
    )
        output.innerHTML = "Result: Congragulation";
    else output.innerHTML = "Result: Incorrect";
}


function refresh() {
    index = Math.floor(Math.random() * 5);
    displayWord = words[index];
    displayHint = hints[index];
    scrambleWord =
        document.getElementById("scrambleWord");
    scrambleWord.innerText =
       shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>correct👇:</b> " + displayHint;
    document.getElementById("output").innerText = "Result:";
}


refresh();