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



    class resume {
        constructor(name,sureName, age,country,city,phone){
            this.name = name;
            this.sureName =sureName;
            this.age = age;
            this.country = country;
            this.city = city;
            this.phone = phone;
        }
    };
    
    let myResume = new resume ("Araz","Ahmadov",30,"Azerbaijan","Ganja","+9945548884**",);
    console.log(myResume);