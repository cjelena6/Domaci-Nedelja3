// /**
//  * 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
// Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
// Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// Ispis: "12345678987654321"
//  */


function palindrom(string) {
    let string1 = string.split("").reverse().join("")
    return string == string1
}

function najduziPalindrom(string) {
    let duzina = 0
    let max = ''
    for (let i = 0; i < string.length; i++) {
        let skString = string.substr(i, string.length)
        for (let j = skString.length; j >= 0; j--) {
            let skString2 = skString.substr(0, j)
            if (skString2.length <= 1)
                continue
            if (palindrom(skString2)) {
                if (skString2.length > duzina) {
                    duzina = skString2.length
                    max = skString2
                }
            }
        }
    }
    return max
}

let nekiString = "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
console.log(najduziPalindrom(nekiString));