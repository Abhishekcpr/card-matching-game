var images = ["angular.png","cpp.png","angular.png","swift.png","c.png","rasb.png","swift.png"
,"node.png","js.png","node.png","thanos.png","java.jpg","ruby.png","js.png","css.png","node.png",
"cpp.png","python.jpg","ruby.png","c.png","swift.png","js.png","swift.png","css.png","python.jpg",
"cpp.png","java.jpg","rasb.png","css.png","ruby.png","js.png","ruby.png","css.png","node.png","thanos.png","cpp.png"];
// console.log("length of array is:",images.length);
var generate = Math.floor(Math.random() * 36);
console.log(generate);
var array  = new Array(36) ;
var check = 1 ;
var song = document.getElementById("song") ;
var song1 = document.getElementById("song2") ;
var match = document.getElementById("match") ;

var checkwin = 0 ;
var temp1 = images.slice(generate,36);
var temp2 = images.slice(0,generate);
var name ="";
array = temp1.concat(temp2)


var variable = 0 ;
//   play background music after 1 second 
document.getElementById("mplayer").addEventListener('click',()=>
{   
    variable++ ;
    if(variable%3 == 0)
    {
        song.pause() ;
        song1.pause() ;
    }

   else if(variable%3 == 1)
    {
        song.pause() ;
       song.play() ;
       
    }
    else
    {
        song.pause() ;
        song1.play() ;
    }
   
})

var level = [8000,4000,3500, 2500,500];
function changeDim()
{      var chan = 684 ;
    var chang = 0 ;
   

    

    newvalue =   setInterval(() => {
        if(chan>=0)
        {
            if(chan <200)
            document.getElementById("decrease").style.backgroundColor = "rgb(233, 54, 54)";
            chan = chan - 14  ;
            chang = chang + 14 ;
            changeString = chan.toString() + "px" ;
            changestring = chang.toString() + "px";  
            document.getElementById("decrease").style.height = changeString ;
            document.getElementById("decrease").style.marginTop= changestring ;
        }
        
        else
        {
            clearTimeout(newvalue);
            location.href="timeup.html" ; 
        }
      },level[2] );
    }
  




 var statuscode = 0;
  changeDim() ;
 var newName1 , id1 ,value1 ,let1;
 var newName2 , id2 , value2, let2;


 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//   function increaseTime(gotit)
//   {
//     if(gotit && chan <=785)
//     {
//         chan = chan + 42 ; 
//     }
//   }

function change(val) {
    var imgID = "img" + val.toString();
    var imgid = "#img" + val.toString();


   
   
    // statuscode = 1 ;
    //  var element = document.getElementById(imgID).src ;
    // console.log(element);

//  @@@@@@@@@@@@@@@@ Uncomment line below to rotate image @@@@@@@@@@@@


//      x = 0 ;
//   variable =   setInterval(() => {
//       x = x+20 ;
     
//       if(x>=180)
//      clearInterval(variable);
//         // document.getElementById(imgID).style.transform = "rotateY(xdeg)"; 
//         document.querySelector(imgid).style.transform =  `rotateY(${x}deg)`;

//     }, 50);
//    setTimeout(() => {
//     document.querySelector(imgid).style.transform =  `rotateY(0deg)`;
//     document.getElementById(imgID).src = array[val];

 

  

// }, 450);


    document.getElementById(imgID).src = array[val];
//    console.log(statuscode);



  
   if(statuscode==0)
   {
       newName1 = document.getElementById(imgID).src ;

       value1 = array[val];
      

       let1 = "i" + val.toString() ;
    //    console.log(newName1);
       statuscode = 1;
       id1 = imgID ;
       console.log(id1,newName1);
       document.getElementsByTagName("Button").disabled = "true"; // this is under consideration
   }
   else if(statuscode==1 )
   {
       newName2 =  document.getElementById(imgID).src ;
       id2 = imgID ;
     
       let2 = "i" + val.toString();
       value2 = array[val];
       statuscode = 0 ;  
     
       console.log(id2,newName2);
       if(value1 == value2 && id2!=id1)
       {
      
        checkwin++ ;
        console.log(checkwin);
        value1 = 0 ;
        value2 = 0 ;
         
        if(checkwin==18)
    {
     location.href = "youwin.html" ;
    }
          sleep(200).then(() => { 
           
         

                document.getElementById(id1).src="check.png" ;
            document.getElementById(id2).src="check.png" ;
            document.getElementById(let1).disabled = "true";
            document.getElementById(let2).disabled = "true";


            match.play();
            id1=0;
            id2 = 0;
            console.log("wait for one second");
              });
          
          
       }
       else
       {
       
      
  

        setTimeout(() => {
                document.getElementById(id1).src = "frame.webp" ;
            document.getElementById(id2).src = "frame.webp" ;
                 document.getElementsByTagName("button").disabled = "false";
                 console.log("Executed");
            value1 = 0 ;
            value2 = 0 ;
        }, 500);

          

       }

       
   }
  
}




 
  
