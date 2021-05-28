// const s1 = Number(prompt("birinci sayiyi giriniz"));
// const islem = prompt("islemi giriniz");
// const s2 = Number(prompt("ikinci sayiyi giriniz"));
// let sonuc = 0;

// if (islem == "+") {
//   sonuc = s1 + s2;
// } else if (islem == "-") {
//   sonuc = s1 - s2;
// } else if (islem == "*") {
//   sonuc = s1 * s2;
// } else if (islem == "/") {
//   sonuc = s1 / s2;
// } else {
//   alert("yanlis islem girdiniz...");
// }

// console.log("Sonuc : " + sonuc);

// const age = prompt("yasinizi giriniz");
// const healt = prompt("sagliklimiiniz");

// const result =
//   age > 18 && healt == "e" ? "askere elverisli" : "askere elverisli degildir";
// console.log(result);

// const gunNo = +prompt("Gun numarasini giriniz");
// switch (gunNo) {
//   case 1:
//     gun = "Pazartesi";
//     break;
//   case 2:
//     gun = "Salı";
//     break;
//   case 3:
//     gun = "Carsamba";
//     break;
//   case 4:
//     gun = "Persembe";
//     break;
//   case 5:
//     gun = "Cuma";
//     break;
//   case 6:
//     gun = "Cumartesi";
//     break;
//   case 7:
//     gun = "Pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır");
//     break;
// }
// console.log(gun);

// const maas = prompt("Maasinizi giriniz:");
// const calismaSuresi = prompt("Calisma suresini giriniz:");
// const zamliMaas =
//   calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
// console.log(zamliMaas);

// const borc = 0;
// const maaş = 3000;
// console.log(!borc && maaş > 2825.9 ? "Kredi Alabilir 🤑" : "Kredi Alamaz 😢");

// DÖNGÜLER
// const sayi = prompt("Dongu miktarini giriniz:");
// for (let i = 1; i <= sayi; i++) {
//   console.log(`${i}-Mehmet`);
// }
// Asal sayı tespiti
// const number = Number(prompt("Sayiyi giriniz:"));
// let asal = true;
// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//     asal = false;
//     break;
//   }
// }
// const sonuc = asal ? "ASAL" : "ASAL DEGIL";
// console.log(sonuc);

// let not;
// do {
//   not = prompt("0-100 arasında bir not giriniz:");
// } while (not < 0 || not > 100);
// console.log("Giridiğiniz not 0-100 arasındadır");
"";
// let not;
// not = prompt("0-100 arasında bir not giriniz:");
// while (not < 0 || not > 100) {
//   console.error("Girilen not 0-100 arasında olmalıdır.");
//   not = prompt("0-100 arasında bir not giriniz:");
// }
// console.log(not + " = Giridiğiniz not 0-100 arasındadır");

let not1;

let i = 1;
while (true) {
  not1 = prompt(i + ".kisinin notunu giriniz");
  if (not1 == "Q" || not1 == "q") {
    break;
  }
  i++;
  console.log(Number(not1));
}
