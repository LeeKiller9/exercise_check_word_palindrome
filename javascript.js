// function isPalindrome(arrPara) {
//     for (let i = 0; i < arrPara.length; i++) {
//         if (arrPara[i] !== arrPara[arrPara.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }


function checkWord() {
    let str = prompt("Enter string want to check");
    let arr = str.split("");
    let result = "";
    // console.log(isPalindrome(arr));
    let check = isPalindrome(arr);
    if (check) {
        result = "is Palindrome word";
    } else {
        result = "is not Palindrome word";
    }
    document.getElementById("result").innerHTML = "String: " + str + "<br>Result: " + result;
}

function isPalindrome(arrPara) {
    if (arrPara.length > 1) {
        if (arrPara[0] === arrPara[arrPara.length - 1]) {
            arrPara.shift();
            arrPara.pop();
            if (isPalindrome(arrPara)) {
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return true;
    }
}