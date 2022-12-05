"use scrict";

const passwordOutput = document.getElementById("passwordOutput")
const passwordLength = document.getElementById("passwordLength")
const includeSymbols = document.getElementById("includeSymbols")
const includeUppercase = document.getElementById("includeUppercase")
const includeNumbers = document.getElementById("includeNumbers")

const passwordForm = document.getElementById("passwordGeneratorConfig")

passwordForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if((includeNumbers.checked || includeSymbols.checked || includeUppercase.checked) == false) {
        return alert("Please, tick at least 1 option.")
    }

    const password = generatePassword(
        passwordLength.value,
        includeSymbols.checked,
        includeUppercase.checked,
        includeNumbers.checked
    )

    passwordOutput.innerText = password
})

function getRandomElement(dictionary) {
    return dictionary[Math.floor(Math.random() * dictionary.length)]
}

function generatePassword(length, includeSymbols, includeUppercase, includeNumbers) {
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "!@#$%&*()-_+=^{}|/\\[].<>;:"
    
    let password = ""

    while (password.length < length) {

        if (includeSymbols) {
            password += getRandomElement(symbols)
        }

        if (includeUppercase) {
            password += getRandomElement(uppercase + letters)
        }

        if (includeNumbers) {
            password += getRandomElement(numbers)
        }

        password += getRandomElement(letters)
    }

    return password
}