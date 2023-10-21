//Standart obyektlərin yaranması 
// let resume = {
//     name: "Araz",
//     sureName: "Ahmadov",
//     age: 30,
//     country: "Azerbaijan",
//     city: "Ganja",
//     phone: "+9945548884**",
//     getName: function(){
//     return this.name;
//     }
// };
//     console.log(resume);


// Burda isə müəllim local function yaratmışam və içinə parameter qoymuşam və bildirmişəmki adı və yaşı geri qaytar qısa desək şablon yaratmışam
    // function createNewPerson(_name,_age){
    //     return {
    //         name:_name,
    //         age:_age,
    //         getName:function(){
    //             return this.name;
    //         }
    //     }
    // };
    
    // let person01 = createNewPerson("John",20);
    // console.log(person01);



    // class resume {
    //     constructor(name,sureName, age,country,city,phone){
    //         this.name = name;
    //         this.sureName =sureName;
    //         this.age = age;
    //         this.country = country;
    //         this.city = city;
    //         this.phone = phone;
    //     }
    // };
    
    // let myResume = new resume ("Araz","Ahmadov",30,"Azerbaijan","Ganja","+9945548884**",);
    // console.log(myResume);


    // let myResume02 = new resume ("Orxan","Ahmadaov","Azerbaijan",36,"Ganja","+99450*****",);
    // console.log(myResume02);


    //Function-nan istifade qaydasi

    // let a = 100;
// let b = 50;

// function sum (a, b) {
//     if (a > b){
//         return true;
    
//     }else if((a < b)){
    
//         return false;
//     }
// };

// let toplama = sum(500,450);
// console.log(toplama);

// function metninIlkHerfi (metin){
//     console.log(metin[0]);
// }
// metninIlkHerfi('salam')

// function basHerfiTap(metin){
//     let index = metin.length - 4
//     console.log(metin[index])
// };

// basHerfiTap("Salam necesen");


// function herfinSonu (metin){
//     let herfSayi = 0;
//     for (let i = 0; i < metin.length; i++){
//         if (metin[i]=='a'){
//             herfSayi++
//         }
//     } console.log(herfSayi);
// };
// herfinSonu('salam aleykum natarsan'); 


// function ededinKvadrati (eded){
//     console.log(eded*2);
//     return eded*eded
// };

// let ededK = ededinKvadrati(5);
// console.log(eded)

// massive ayid olan funcsiyalar

// function findBigNummber(arr) {
//     let theLargestNumber = arr[0]; // Предполагаем, что первый элемент самый большой

//     for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > theLargestNumber) {
//         theLargestNumber = arr[i]; // Если текущий элемент больше предыдущего максимального, обновляем значение
//     }
// }

//     return theLargestNumber; // Вернуть самое большое число
// }

// let nums = [20, 30, 15, 45, 12, 35, 28, 42, 19, 50];
// let theLargestNumber = findBigNummber(nums);
// console.log("Самое большое число в массиве: " + theLargestNumber);

// function enBoyukVeEnKicikFerq(arr) {
//     if (arr.length === 0) {
//       Əgər boş bir massivdirsə, fərqi hesablamaq mümkün deyil
//       return "Massiv boşdur.";
//     }
  
//     let enBoyukEded = arr[0];
//     let enKicikEded = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > enBoyukEded) {
//         enBoyukEded = arr[i];
//       }
//       if (arr[i] < enKicikEded) {
//         enKicikEded = arr[i];
//       }
//     }
  
//     let ferq = enBoyukEded - enKicikEded;
//     return ferq;
//   }
  
//   let nums = [20, 30, 15, 45, 12, 35, 28, 42, 19, 50];
//   let ferq = enBoyukVeEnKicikFerq(nums);
//   console.log("Ən böyük və ən kiçik ədəd arasındakı fərq: " + ferq);
  

// function tekCütAyrıMassivler(arr) {
//     let tekEdedler = [];
//     let cütEdedler = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         // Əgər ədəd cütdürsə, cüt ədədlər massivinə əlavə edin
//         cütEdedler.push(arr[i]);
//       } else {
//         // Əgər ədəd təkdirsə, tək ədədlər massivinə əlavə edin
//         tekEdedler.push(arr[i]);
//       }
//     }
  
//     return { tek: tekEdedler, cüt: cütEdedler };
//   }
  
//   let nums = [20, 30, 15, 45, 12, 35, 28, 42, 19, 50];
//   let ayrılmışMassivlər = tekCütAyrıMassivler(nums);
  
//   console.log("Tək ədədlər: " + ayrılmışMassivlər.tek);
//   console.log("Cüt ədədlər: " + ayrılmışMassivlər.cüt);
  

function yirmiDənBöyükOlanlarıSil(arr) {
    let yeniMassiv = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= 20) {
        yeniMassiv.push(arr[i]);
      }
    }
  
    return yeniMassiv;
  }
  
  let nums = [20, 30, 15, 45, 12, 35, 28, 42, 19, 50];
  let yeniMassiv = yirmiDənBöyükOlanlarıSil(nums);
  
  console.log("20-dən böyük olanları silmiş massiv: " + yeniMassiv);
  