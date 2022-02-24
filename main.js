let myHousemates2021 = [
    {
      name:"Sahanaj Parvin",
      age:23
    },
    {
        name:"Safin",
        age:1
    },
    {
        name:"Mizanur Rahman",
        age:29
    }
]

var specialMates = myHousemates2021.filter(mate => mate.age<20)

console.log(specialMates[0].age)

// console.log(myHousemates2035)

// let names =["Mizan", "Safin","Sahanaj","Shahanaj Pervin","Sadman Safin" ,"Mizanur Rahman"];


// const specialNames = names.filter(name => name.length >= 10);

// console.log(specialNames)
const scores = [32,44,55,66,77];

let total = scores.reduce((accumulator,currentValue )=> 
   accumulator+currentValue);

console.log(total)

const result = scores.every(x => x>= 30);

console.log(result);

const sentence = "I love you My son , Safin";

const word = sentence.split(" ");

console.log(word[6].split(""))



//=================================
//(32°F − 32) × 5/9 = 0°C

//(0°C × 9/5) + 32 = 32°F

// let celciusArray = [33,36,38,41];

// function getFarenheit(){
//    return  celciusArray.map(value => (value * 9/5)+32)
// }

// console.log(getFarenheit());



//===================================
// let array =[22,"Safin",NaN," "];

// function checkFalsey(){
//   return  array.some(value => !value)
// }

// console.log(checkFalsey())




//====================================
//   let names =["Safin","Mizan","Shahanaj"];
  
//   function totalCharacter(){
//       return names.reduce((value , currentValue) => value + currentValue);
//   }

//   console.log(totalCharacter().length)





  //====================================
  
//   let nums = [23,36,49];

//   function checkSqrt(){
//       return nums.every(num=> Math.sqrt(num) %1 === 0)
//   }

//   console.log(checkSqrt())
//   console.log(Math.sqrt(nums[1]))





  //=====================================

//    let names = ["Ahsan" ,"renuka","Nihal","Sadman","Rushda"];

//    let number = 6;

//    function selectName(){
//        return names.filter((name)=> name.length >= number)
//    }

//     console.log(selectName())




//========================================

//  function selectName (names ,number){
//      return names.filter(name => name.length > number)
//  }

//  let everyName = selectName(["Mizan","Safin","Sahhanaj","yes"],2);

//  console.log(everyName);

//  for(let i =0 ; i < everyName.length; i++){
//      console.log(everyName[i])
//  }






 //========================================
 
//  let cmValues = ["23cm","8cm","994cm"]

//  function getvalue(){
//      return cmValues.map(value => parseFloat(value))
//  }

//  console.log(getvalue())




//========================================
let saying = "i love my son safin";

let vowel = ["a","e","i","o","u"]

function getVowel(){
    return saying.split("").filter(letter=> vowel.includes(letter))
}

console.log(getVowel().length)


//=========================================
let heart = "my beloved safin";

function uppercaseValue(){
    return (heart.split(" ").map(word=> word.charAt(0).toUpperCase()+ word.substring(1))).join(" ")
}

console.log(uppercaseValue())


//=========================================

// const safin = document.querySelector(".safin");

// safin.addEventListener("click",()=>{
//     safin.classList.toggle("sadman");
// })
// safin.removeEventListener("click",()=>{
//     safin.classList.toggle("sadman");
// })





//============================================

//  const safin = document.querySelector(".safin");

//  let count = 0;
//  function getSadman(){
//     safin.classList.toggle("sadman");
//     count++;
//     console.log(count);
//     if(count >= 10){
//         safin.removeEventListener("click",getSadman)
//     }
//  }
//  safin.addEventListener("click",getSadman)





 //==============================================
//  let safin =document.querySelector(".safin");
//  let count = 0;
//  safin.addEventListener("click",function getTop(){
//      safin.style.top = count + "px";
//      count += 30;
//      console.log(count);
//      if(count >= 200){
//          safin.removeEventListener("click",getTop)
//      }
//  })




 //=============================================

const safins = document.querySelectorAll(".safin");

safins.forEach(each => each.innerHTML = Math.floor(Math.random()* 20))
                       



//==================================

let myArray = ["Mizan","Safin","Sahanaj"];

safins.forEach(each => each.innerHTML = myArray[Math.floor(Math.random()* myArray.length)])






//===================================
const hamberger = document.querySelector(".hamberger");

const navLink = document.querySelector(".nav-link")


function showNavlink(){
   navLink.classList.toggle("active");
}

hamberger.addEventListener("click" ,showNavlink)


//===================================


   const today = new Date();

   const date = today.getDate();

   const day = today.getDay();

   const fullyear = today.getFullYear();

   const ISo = today.toISOString();

   console.log(today)
   console.log(ISo)







//========================================

//  let newYear = new Date("2023-01-01T16:55:05.601Z");

//  let milisecsToNewYear =  newYear - today;

//  let minutes = milisecsToNewYear /60000

//  console.log(minutes)

//  const display = document.querySelector(".display");

//  display.innerHTML = Math.round(minutes) + "min";
//  display.style.fontSize = "45px";


 //=========================================


 //something happen after some specific time
//  const display2 = document.querySelector(".display2");
//  let time = 3000;
//  function showText(){
//     display2.innerHTML = "My name is Safin";
//     display2.style.fontSize = "40px";
// }
//  setTimeout(showText,3000);
//  function removeText(){
//     display2.innerHTML = " ";
//  }
//  setTimeout(removeText,15000);





//==========================================

// keep calling the function every specified time of interval.
//   const circle = document.querySelector(".circle")
//   let left = 0;

//  let timerId =  setInterval(()=>{
//      circle.style.left = left+"px";
//      left += 1;
//      console.log(left)
//      if(left === 300){
//         clearInterval(timerId)        
//      }
//   },100);





  //========================================

   //class

   class Rectangle{
       constructor(width,height,isVisible){
          this.width = width;
          this.height = height;
          this.isVisible = isVisible
       }
   }

   const rectangle1 = new Rectangle(200,300,true);
   const rectangle2 = new Rectangle(300,500,true);
   const rectangle3 = new Rectangle(100,300,false);
   console.log(rectangle2.isVisible);

   class Ghost {
       constructor(name,speed,color,starting_point){
           this.name = name;
           this.speed = speed;
           this.color= color;
           this.starting_point = starting_point;


       }
   }

   const blinky = new Ghost("blinky",200,"red",2);
   const inky = new Ghost("inky",250,"green",5);
   const clyde = new Ghost("clyde",300,"blue",10);
   
console.log(clyde.starting_point)






//================================================


// const circle = document.querySelector(".circle");

// document.addEventListener("keydown",(e)=>{
//    if(e.key === "ArrowLeft"){
//        console.log("left arrow press")
//    }else if(e.key ==="ArrowRight"){
//        console.log("right arrow press")
//    }
//    else if(e.key ==="ArrowUp"){
//        console.log("up arrow press")
//    }
//    else if(e.key ==="ArrowDown"){
//        console.log("Down arrow press")
//    }
// })






//===================================================

// let circle = document.querySelector(".circle");

//  let xAxis = 0;
//  let yAxis = 0;
//  document.addEventListener("keydown",(e)=>{
//      switch(e.key){
//          case("ArrowLeft"):
//          circle.style.left = xAxis + "px";
//          xAxis -= 20;
//          console.log(xAxis);
//          break
//          case("ArrowRight"):
//          circle.style.left = xAxis +"px";
//          xAxis += 30;
//          console.log(xAxis);
//          break
//          case("ArrowUp"):
//          circle.style.top = yAxis +"px";
//          yAxis -= 30;
//          console.log(yAxis);
//          break
//          case("ArrowDown"):
//          circle.style.top = yAxis +"px";
//          yAxis += 30;
//          console.log("Down Array Press");
//          break
//          default:
//          console.log("Arrow not recognized")


//      }
//  })






 //=====================================================


const mouth = document.querySelector("#mouth");

document.addEventListener("keydown",(e)=>{
    switch(e.key){
        case("ArrowUp"):
        mouth.classList.remove("sad-mouth");
        mouth.classList.add("happy-mouth");
        console.log("Arrow up pressed");
        break;
        case ("ArrowDown"):
        mouth.classList.remove("happy-mouth");
        mouth.classList.add("sad-mouth");
        console.log("Down Arrow Pressed");
        break;
        default:
            console.log("Arrow not recognized")
    }
})





//======================================================

  const body = document.querySelector("body");

  const circle = document.querySelector(".circle");

  console.log(body.contains(circle));

  let books = ["Paradise lost","Maa","Mohakabba","BisadhSindhu"];

  console.log(books.includes("Maa"));






  //========================================================
   //createElement & AppendChild
   const section = document.createElement("section");

   body.appendChild(section);
   section.style.margin = "100px";
   section.style.backgroundImage = "url(https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
   section.style.objectFit = "cover";


   //==========
   //setAttribute/getAttribute
   body.style.margin = "30px";
   const image = document.createElement("img");

   body.appendChild(image);
   image.setAttribute("src",'https://free4kwallpapers.com/uploads/originals/2015/10/21/beautiful-nature--hd-wallpaper.jpg');
   image.style.width = "50%";
   image.style.height = "300px";
   image.style.marginLeft = "15%";
   image.style.objectFit = "cover";

   const imgsrc = image.getAttribute("src");

   console.log(imgsrc);



   //=========================================================

 let myNums = [2,4,5,6,8,7,9]

 let totalNums = myNums.reduce((accumulator,currentValue)=> accumulator+currentValue);

 console.log(totalNums);

 const oddNums =myNums.filter(value=> value%2 != 0);

 console.log(oddNums);



//====================================================

let time =10;

if(time <= 12){
    if(time < 10){
        console.log("good morning")
    }
    console.log("good afternoon");
} else if(time >12){
    console.log("good evening");
}else{
    console.log("good night")
}












