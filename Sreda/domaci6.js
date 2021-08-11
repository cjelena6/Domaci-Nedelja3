// 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz

{
    function sumaProizvod(niz) {
        let zbir = 0
        let proizvod = 1
        let noviNiz = []
        for (let i = 0; i < niz.length; i++) {
            zbir += niz[i]
        }
        for (let j = 1; j < niz.length; j++) {
            proizvod *= niz[j]
        }
        noviNiz.push(zbir, proizvod)
        return noviNiz
    }

    let niz = [1, 2, 3, 4]
    console.log(sumaProizvod(niz));
}
console.log('--------------------------------------');

//  2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
{
    function deleteSomething(niz) {
        let filter = niz.filter(Boolean)
        return filter
    }

    let nekiNiz = [1, 'A', null, undefined, NaN, 0, 2]
    console.log(deleteSomething(nekiNiz));
}
console.log('--------------------------------------');

// 3. За првих 100 бројева исписати:
// ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
// Ако је дељив са 3, 5, 7 - FizzBuzzZazz
// 3, 5 - FizzBuzz
// 3, 7 - FizzZazz
// 5, 7 - BuzzZazz
{
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
            console.log("FizzBuzzZazz");
        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0 && i % 7 == 0) {
            console.log("FizzZazz");
        } else if (i % 5 == 0 && i % 7 == 0) {
            console.log("BuzzZazz");
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else if (i % 7 == 0) {
            console.log('Zazz');
        } else {
            console.log(i);
        }
    }
}
console.log('--------------------------------------');
// 4. Izvrsiti inverziju brojeva bez pomocne promenljive.
// Pr: x = 5 y = 9
// Resenje: x = 9 y = 5
// pom = "ne mozete koristiti"
{
    let x = 5
    let y = 9

    x = x + y
    y = x - y
    x = x - y

    console.log(x, y);
}


