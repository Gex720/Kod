//tworzenie obiektu

var favoriteFood = "Łoscypek"; //ustawia wartość favoriteFood na Łoscypek

//Tworzenie pojedyńczego obiektu
var dog = {
    
    owner: { //dodaje obiekt w obiekcie
        name: "Patryk",
        surname: "Śmietana",
        favoriteNumber: [8, 16, 64, 128],
    },

    leg: 4,
    name: "Maks",
    favoriteFood,
    Male: true,

    jedzenie() {
        return "Uwielbiam jedzenie jakim jest " + this.favoriteFood; //metoda przy użyciu .this (w tym samym obiekcie(w tym przypadku dog.favoriteFood))
    },
    
    szczekaj() {
        return "Cześć jestem " + dog.name; //metoda szczekaj(inaczej funkcja)
    },
}

dog.type = "Labrador"; //dodaje nową właściwość type do obiektu dog
delete dog.Male; //usuwa właściwość Male z obiektu dog

var imie = dog.szczekaj(); //wywołanie funkcji szczekaj

document.writeln(dog.owner.name); //wyświetla na stronie nazwe właściciela psa
document.writeln(dog.owner.favoriteNumber[2]); //wyświetla na stronie ulubiony numer właściciela z indeksem 2

//======================================================================================================================================================================================================================
//tworzenie klasy z konstruktorem
class car {
    constructor(Marka, Model, Silnik, Nadwozie, Szyby) {
        this.Marka = Marka
        this.Model = Model
        this.Silnik = Silnik
        this.Nadwozie = Nadwozie
        this.Szyby = "Przyciemnione" //dodaje do wszystkich utworzonych obieków stałą właścicwość "Przyciemnione"
    }
    Drive() {
        console.log("Łututututu")
    }
}

//tworzenie rozszerzenia klasy (nie dodaje parametrów z klasy car(nie wiem dlaczego ?))
class truck extends car {
    constructor(Marka, Model, Silnik, Nadwozie, iloscOsi, wydechy, ladunek) {
        super()
        this.iloscOsi = iloscOsi
        this.wydechy = wydechy
        this.ladunek = ladunek
    }
}

var BMW = new car("BMW", "E46", "M47D20", "Coupe"); //zmiennej BMW przypisuje nowy okiekt z parametrami(konstruktor) podanymi w nawiasie
var Alfa = new car("AlfaRomeo", "159", "1.9JTDm", "Sedan");
var Man = new truck("Man", "Tgx", "xl", "4.0", "Ciezarowy", "3", "4", "brak");

var tablica = new Array("E46", "E36", "E30", 1995); //robi obiekt tablicę