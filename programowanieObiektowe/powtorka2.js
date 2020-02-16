//utworznie klasy wojownik
class wojownik {
    constructor(szybkosc, sila, taktyka) {
        this.szybkosc = szybkosc
        this.sila = sila
        this.taktyka - taktyka
    }
}

//metoda prototypowa "mocUderzenia" dla klasy wojownik, która zwraca wartość
wojownik.prototype.mocUderzenia = function() {
    return "Moja moc to : " + this.sila;
}

var wojownik1 = new wojownik(4, 8, 1);
var wojownik2 = new wojownik(3, 6, 4);

wojownik1.mocUderzenia(); //wywołuje metodę prototypową dla zmiennej(obiektu) wojownik1
wojownik2.mocUderzenia(); //wywołuje metodę prototypową dla zmiennej(obiektu) wojownik2




//tworzy obiekt z metodą do obliczania pola
class Prostokat {
    constructor(wysokosc, szerokosc) {
      this.wysokosc = wysokosc;
      this.szerokosc = szerokosc;
    }

    pole() {
        return this.wysokosc * this.szerokosc //metoda obliczająca
    }
  }
  
  var kwadrat = new Prostokat(10, 10); //utworzenie nowego obiektu kwadrat
  
  console.log(kwadrat.pole()); //wywołanie metody pole obiektu kwadrat