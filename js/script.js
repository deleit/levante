function grayZeros(id) {
    var number = document.getElementById(id);
    var firstDigit = number.getElementsByClassName("first-digit")[0];
    var secondDigit = number.getElementsByClassName("second-digit")[0];
    var thirdDigit = number.getElementsByClassName("third-digit")[0];

    if (firstDigit.innerHTML == "0") {
        firstDigit.style.color = "#D8D8D8";
        if (secondDigit.innerHTML == "0") {
            secondDigit.style.color = "#D8D8D8"
            if (thirdDigit.innerHTML == "0") {
                thirdDigit.style.color == "#D8D8D8"
            }
        }
    }
}

grayZeros("carousel-first-number");
grayZeros("carousel-second-number");
grayZeros("carousel-third-number");
grayZeros("carousel-fourth-number");