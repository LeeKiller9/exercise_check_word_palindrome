function isPalindrome(arrPara) {
    for (let i = 0; i < arrPara.length; i++) {
        if (arrPara[i] !== arrPara[arrPara.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function checkWord() {
    let str = prompt("Enter string want to check");
    let arr = str.split("");
    let result = "";
    if (isPalindrome(arr)) {
        result = "is Palindrome word";
    } else {
        result = "is not Palindrome word";
    }
    document.getElementById("result").innerHTML = "String: " + str + "<br>Result: " + result;
}
