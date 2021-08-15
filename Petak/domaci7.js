//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

{
    let nekiNiz = [1, 5, 10, 12, 15, 17, 20]

    function deljiviSa5(niz) {
        let noviNiz = []
        niz.forEach(element => {
            if (element % 5 == 0)
                noviNiz.push(element)
        });
        console.log(noviNiz);
    }
    deljiviSa5(nekiNiz)

}
//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime 
// * Vrsta 
// * Sposobnosti (niz sposobnosti pokemona) 
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

let pokemoni = [{
    Ime: 'Pikachu',
    Vrsta: 'Elektricni',
    Sposobnosti: ['Gromoviti šok', 'Udarni Val', 'Iskra'],
    Karakteristike: {
        napad: 10,
        odbrana: 7,
        brzina: 9
    }
},
{
    Ime: 'Bulbasaur',
    Vrsta: 'Travnati',
    Sposobnosti: ['Ostri list', 'Obaranje', 'Semeni metak'],
    Karakteristike: {
        napad: 8,
        odbrana: 6,
        brzina: 10
    }
},
{
    Ime: 'Charmander',
    Vrsta: 'Vatreni',
    Sposobnosti: ['Bacač plamena', 'Vatreni vrtlog', 'Pregrejavanje'],
    Karakteristike: {
        napad: 5,
        odbrana: 7,
        brzina: 8
    }
},
{
    Ime: 'Squirtle',
    Vrsta: 'Vodeni',
    Sposobnosti: ['Vodena pumpa', 'Mutna voda ', 'Vodeni top'],
    Karakteristike: {
        napad: 7,
        odbrana: 4,
        brzina: 9
    }
}]
console.log(pokemoni);
console.log('---------------------------------');
//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

function sposobnostiPokemona(pokemoni) {
    let nizSposobnosti = []
    pokemoni.forEach(pokemon => {
        nizSposobnosti.push(...pokemon.Sposobnosti)
    })
    return nizSposobnosti
}
console.log(sposobnostiPokemona(pokemoni));

console.log('---------------------------------');
//4. Sortirati pokemone po brzini, rastuće.
pokemoni.sort(function (a, b) {
    return a.Karakteristike.brzina - b.Karakteristike.brzina;
})
console.log(pokemoni);
console.log('---------------------------------');

//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.

function jacinaPokemona(pokemoni) {
 pokemoni.sort(function (a, b) {
    return a.Karakteristike.napad - b.Karakteristike.napad;
})
// return 
}

console.log(jacinaPokemona(pokemoni));

