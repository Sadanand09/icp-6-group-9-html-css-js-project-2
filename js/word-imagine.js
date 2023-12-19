const words = [
    "kartik",
    "pratik",
    "kishori",
    "om",
    "sai",
    "rutik",
    "pooja",
    "vaidehi",
    "vaishnavi",
    "ganesh"
];

const hints = [
   
    "imagine a correct name",
    "imagine a correct name",
    "imagine a correct name",
    "imagine a correct name",
    "imagine a correct name",
    "imagine a correct name",
    "imagine a correct name",
    "imagine a correct name",
    "imagine a correct name",
    "imagine a correct name",
   
    
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
        output.innerHTML = "Result: CongratulationS💐💐";
    else output.innerHTML = "Result: Incorrect";
}

function refresh() {
    index = Math.floor(Math.random() * 10);
    displayWord = words[index];
    displayHint = hints[index];
    scrambleWord =
        document.getElementById("scrambleWord");
    scrambleWord.innerText =
       shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
    document.getElementById("output").innerText = "Result:";
}

 
refresh();