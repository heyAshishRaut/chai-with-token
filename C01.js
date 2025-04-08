document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("submit-button");
    const alertMessage = document.getElementById("alert-message");
    const alpha = document.getElementById("output-alpha");
    const nums = document.getElementById("output-nums");
    const totalTokens = document.getElementById("token");

    button.addEventListener("click", () => {
        const input = document.getElementById("user-input").value;
        if(input === ""){
            alertMessage.style.display = "block";
            alertMessage.innerText = "Input field is empty";
        }
        else{
            calculate(input);
        }
    });

    function calculate(input) {

        inputList = input.match(/\w+|[,.]/g);
        totalTokens.innerHTML = `${inputList.length}`;
        outputList = [];

        for (let i = 0; i < inputList.length; i++) {
            let el = "";
            for (let j = 0; j < inputList[i].length; j++) {
                let current = inputList[i][j].charCodeAt(0);
                el = el + current
            }
            console.log(el)
            outputList.push(el)
        }

        alpha.innerHTML = `&lt;start&gt; <span id="output-alpha-display">${input}</span> &lt;end&gt;`;

        let numsArr = "";
        for(let i = 0; i < outputList.length; i++){
            if (i === 0) {
                numsArr = outputList[i];
            } else {
                numsArr = numsArr + " | " + outputList[i];
            }
        }
        nums.innerHTML = `${numsArr}`;
    }
});

