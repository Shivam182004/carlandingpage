// creating time line to repeat it infinite times

var tl = gsap.timeline({
   repeat : -1
});

tl.to(".imgcontainer" , {
    ease : Expo.easeInOut ,
    width : "100% ", 
    // duration : 2,
    stagger : 2 
} , "r")

 tl.to(".text h1", {
    ease:Expo.easeInOut,
    // duration: 2,
    stagger:2,
    top:0

 }, "r")
 
 tl.to(".text h1", {
    delay :2 ,
    ease:Expo.easeInOut,
    // duration: 2,
    stagger:2,
    top:"-100%"
    } , "r")
 
 