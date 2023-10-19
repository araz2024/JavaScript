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


function ededinKvadrati (eded){
    console.log(eded*2);
    return eded*eded
};

let ededK = ededinKvadrati(5);
console.log(ededK);