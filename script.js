
const input = document.getElementById("inputValue");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const inputValue = input.value;
        const buttonText = button.querySelector("span").textContent;

        switch (buttonText) {
            case "C":
                input.value = "";
                break;
            case "←":
                input.value = inputValue.slice(0, -1);
                break;
            case "x":
                input.value += "*";
                break;
            case "/":
                input.value += "/";
                break;
            case "+":
                input.value += "+";
                break;
            case "-":
                input.value += "-";
                break;
            case ".":
                input.value += ".";
                break;
            case "=":
                try {
                    if (input.value != "") {
                        input.value = eval(inputValue);
                    }
                } catch (error) {
                    input.value = "Error";
                }
                break;
            default:
                input.value += buttonText;
        }
    });
});