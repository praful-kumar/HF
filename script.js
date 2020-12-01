  
var tl = gsap.timeline();

 tl.from('#right', {
    width: 0,
    ease: Expo.easeInOut,
    duration: 2
 })
 .from('nav',{
     width:0,
     opacity:0,
     ease: Expo.easeInOut,
    duration: 2
 },'')
 .from('h1', {
    height:0,
    opacity:0,
    ease: Expo.easeInOut,
    duration: 1
 },'')

 .from('#content', {
     height:0,
    opacity:0,
    ease: Expo.easeInOut,
    duration: 2
 },'-=1.5')
 .from('#left',{
    width:0,
    ease: Expo.easeInOut,
   duration: 2
},'-=1')
 .from('#btn',{
     height:0,
    opacity:0,
    ease: Expo.easeInOut,
    duration: 1
 },'-=3')
 .from('#btmmain',{
    height:0,
   opacity:0,
   ease: Expo.easeInOut,
   duration: 2
},'-=2')
