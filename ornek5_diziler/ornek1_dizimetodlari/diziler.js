const dogum = 1980;
const yaslar = [30, 25, 44, 77];
const isimler = [
  "ahmet",
  "mustafa",
  "can",
  "bekir",
  "ayşe",
  20,
  40,
  true,
  23.4,
  2021 - dogum,
  yaslar,
];
console.log(isimler);
console.log(isimler[0]);
console.log((isimler[3] = "canan"));
isimler[isimler.length - 2] = false;
console.log(isimler);
// isimler dizisini 10. elemanının 0. elemanini yazdir.
console.log(isimler[10][0]);
isimler[11] = "İpek";
console.log(isimler);
// ========= DİZİYİ DEĞİŞTİREN METOTLAR ==============
const h1 = document.getElementById("meyveler");
let meyveler = ["Elma", "Armut", "Muz", "Kivi"];
// pop() son elemani siler..
meyveler.pop(); // ["Elma", "Armut", "Muz"];
// push() dizinin sonuna eleman ekledi.
// dizinin son eleman sayisini dondurur.
const boyut = meyveler.push("Cilek", "Karpuz");
console.log(boyut);
// unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const boyut1 = meyveler.unshift("ayva");
console.log(boyut1);
// dizinin 0. indeks elemanini siler  ve silenen elemani dondurur.
const silinen = meyveler.shift();
console.log(silinen);
meyveler.sort();
meyveler.splice(1, 0, "Erik"); // index 1 ve 2 arasina erik ekledik. 1 nereye eklenecegini gosterir
meyveler.splice(4, 1, "Mango"); // karpuzu siler mangoyu ekler. 1 siler. 0 silmeden ekler

console.log(meyveler); // backround a yazdirir. incele-console
h1.innerHTML = meyveler; // gorunen sayfaya yazdirir.

// ==========DIZI ERISIM METODLARI===========//
const sayilar = [3, 5, 2, "2", "uc", "bes"];

console.log(sayilar.includes("5")); // false
console.log(sayilar.includes(5)); // true
console.log(sayilar.includes("uc ")); //false bir bosluk var fazladan

// ilk eslesen indeksi dondurur.
const ikiIndeks = sayilar.indexOf(2);
console.log("2'nin son indeksi:" + sayilar.lastIndexOf(2));
console.log(ikiIndeks);
// Eger aranilan eleman bulunamaz ise -1 dondurur.
const ucIndeks = sayilar.indexOf("uc");
ucIndeks < 0
  ? alert("aranilan nesne bulunamadi")
  : alert("Aranilan nesnenin indeksi : " + ucIndeks);
// join dizinin elamanlari birlestirip strgin hale cevirir.
const sayilar1 = sayilar.join(" "); // elemanlarin arasına bosluk koy.
console.log(sayilar1);
// toString fonksiyonu sadece dizinin elemanalarini aralarina , (virgul) koyarak birlesitirir ve string yapar.
const sayilar2 = sayilar.toString();
console.log(sayilar2);
h1.innerHTML = sayilar2;
const arabalar = ["bmw", "mercedes", "audi", "ferrari", "anadol"];
// Audi ve sonrasini alir.
// ! Tek rakam başlangıç indeksini gösterir.
const arabalar1 = arabalar.slice(2);
arabalar1.push("Fiat"); // arabalar1'in sonuna Fiat ekler
console.log(arabalar1);
// Mercedes ve audi yi alır.
// ! Start indeksi dahil, end indeksi dahil değildir.
const arabalar2 = arabalar.slice(1, 3);
console.log(arabalar2);
