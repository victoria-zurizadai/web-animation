/*----------- ENCOGER BOTÓN ----------- */
var t1 = just.animate({
    targets: ".ball",
    duration: 1300,
    props: {
      innerHTML: ['V Z G H ', 'V Z G H'] 
    },
    web: {
       transform: [
          { offset: 0, value: "scale(1, 1)" },
          { offset: 0.3, value: "scale(.75, .75)" },
          { offset: 0.4, value: "scale(.50, .50)" },
          { offset: 0.5, value: "scale(.25, .25)" },
          { offset: 0.5, value: "scale(.125, .125)" },
          { offset: 1, value: "scale(1, 1)" }
       ]
    }
 });
 
 t1.play();
 just.tools.player(t1);
/*----------- AGRANDAR BOTÓN ----------- */
 var t2 = just.animate({
    targets: ".ball2",
    duration: 1300,
    props: {
      innerHTML: ['V Z G H ', 'V Z G H'] 
    },
    web: {
       transform: [
          { offset: 0, value: "scale(1, 1)" },
          { offset: 0.3, value: "scale(1.25, 1.25)" },
          { offset: 0.4, value: "scale(1.50, 1.50)" },
          { offset: 0.5, value: "scale(1.75, 1.75)" },
          { offset: 0.65, value: "scale(2, 2)" },
          { offset: 0.75, value: "scale(3, 3)" },
          { offset: 1, value: "scale(1, 1)" }
       ]
    }
 });
 t2.play();
 just.tools.player(t2);
/*----------- AGRANDAR BOTÓN ----------- */
var t2 = just.animate({
   targets: ".ball2",
   duration: 1300,
   props: {
     innerHTML: ['V Z G H ', 'V Z G H']  
   },
   web: {
      transform: [
         { offset: 0, value: "scale(1, 1)" },
         { offset: 0.3, value: "scale(1.25, 1.25)" },
         { offset: 0.4, value: "scale(1.50, 1.50)" },
         { offset: 0.5, value: "scale(1.75, 1.75)" },
         { offset: 0.65, value: "scale(2, 2)" },
         { offset: 0.75, value: "scale(3, 3)" },
         { offset: 1, value: "scale(1, 1)" }
      ]
   }
});
t2.play();
just.tools.player(t2);
/*----------- EXPLOTAR BOTÓN ----------- */
var t3 = just.animate({
   targets: ".ball3",
   duration: 1300,
   props: {
     innerHTML: ['V Z G H ', 'V Z G H'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(1, 1)" },
         { offset: 0.3, value: "scale(1.25, 0)" },
         { offset: 0.4, value: "scale(0, 1.25)" },
         { offset: 0.5, value: "scale(2, 2)" },
         { offset: 0.65, value: "scale(3, 3)" },
         { offset: 0.75, value: "scale(4, 4)" },
         { offset: 0.90, value: "scale(1, 1)" },
         { offset: 1, value: "scale(0, 0.25)" }
      ]
   }
});
t3.play();
just.tools.player(t3);
/*----------- REBOTAR BOTÓN ----------- */
var t4 = just.animate({
   targets: ".ball4",
   duration: 1300,
   props: {
     innerHTML: ['V Z G H ', 'V Z G H'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(1, 1)" },
         { offset: 0.3, value: "scale(1.25, 4)" },
         { offset: 0.4, value: "scale(4, 1.25)" },
         { offset: 0.5, value: "scale(2, 3)" },
         { offset: 0.65, value: "scale(3, 2)" },
         { offset: 0.75, value: "scale(2.3, 1)" },
         { offset: 0.90, value: "scale(1, 2.3)" },
         { offset: 1, value: "scale(1, 1)" }
      ]
   }
});
t4.play();
just.tools.player(t4);
/*-----------  BOTÓN BAILARIN----------- */
var t5 = just.animate({
   targets: ".ball5",
   duration: 2000,
   props: {
     innerHTML: ['V Z G H ', 'V Z G H'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(1, 1)" },
         { offset: 0.3, value: "scale(1.25, 4)" },
         { offset: 0.4, value: "scale(4, 1.25)" },
         { offset: 0.5, value: "scale(1.25, 4)"},
         { offset: 0.65, value: "scale(4, 1.25)" },
         { offset: 0.75, value: "scale(1.25, 4)" },
         { offset: 0.90, value: "scale(4, 1.25)" },
         { offset: 1, value: "scale(1.25, 4)" },
         { offset: 1.3, value: "scale(4, 1.25)" },
         { offset: 1.4, value: "scale(1.25, 4)"},
         { offset: 1.5, value: "scale(4, 1.25)" },
         { offset: 1.65, value: "scale(1.25, 4)" },
         { offset: 1.75, value: "scale(4, 1.25)" },
         { offset: 2, value: "scale(1, 1)" }
      ]
   }
});
t5.play();
just.tools.player(t5);
/*-----------  BOTÓN QUE PARPADEA----------- */
var t6 = just.animate({
   targets: ".ball6",
   duration: 2000,
   props: {
     innerHTML: ['V Z G H ', 'V Z G H'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(1, 1)" },
         { offset: 0.3, value: "scale(0, 0)" },
         { offset: 0.4, value: "scale(1, 1)" },
         { offset: 0.5, value: "scale(0, 0)"},
         { offset: 0.65, value: "scale(1, 1)" },
         { offset: 0.75, value: "scale(0, 0)" },
         { offset: 0.90, value: "scale(1, 1)" },
         { offset: 1, value: "scale(0, 0)" },
         { offset: 1.3, value: "scale(1, 1)" },
         { offset: 1.4, value: "scale(0, 0)"},
         { offset: 1.5, value: "scale(1, 1)" },
         { offset: 1.65, value: "scale(0, 0)" },
         { offset: 1.75, value: "scale(1, 1)" }
      ]
   }
});
t6.play();
just.tools.player(t6);
/*-----------  BOTÓN QUE FORMA UNA CRUZ----------- */
var t7 = just.animate({
   targets: ".ball7",
   duration: 5000,
   props: {
     innerHTML: ['V Z G H ', 'V Z G H'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(5, 1)" },
         { offset: 0.3, value: "scale(1, 5)" },
         { offset: 0.4, value: "scale(5, 1)" },
         { offset: 0.5, value: "scale(1, 5)"},
         { offset: 0.65, value: "scale(5, 1)" },
         { offset: 0.75, value: "scale(1, 5)" },
         { offset: 0.90, value: "scale(5, 1)" },
         { offset: 1, value: "scale(1, 5)" },
         { offset: 1.3, value: "scale(5, 1)" },
         { offset: 1.4, value: "scale(1, 5)"},
         { offset: 1.5, value: "scale(5, 1)" },
         { offset: 1.65, value: "scale(1, 5)" },
         { offset: 1.75, value: "scale(5, 1)" }
      ]
   }
});
t7.play();
just.tools.player(t7);
/*-----------  BOTÓN ALARGADO HORIZONTALMENTE----------- */
var t8 = just.animate({
   targets: ".ball8",
   duration: 2000,
   props: {
     innerHTML: ['V Z G H ', 'V Z G H'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(4, 1)" },
         { offset: 0.3, value: "scale(1, 1)" },
         { offset: 0.4, value: "scale(4, 1)" },
         { offset: 0.5, value: "scale(1, 1)"},
         { offset: 0.65, value: "scale(4, 1)" },
         { offset: 0.75, value: "scale(1, 1)" },
         { offset: 0.90, value: "scale(4, 1)" },
         { offset: 1, value: "scale(1, 1)" },
         { offset: 1.3, value: "scale(4, 1)" },
         { offset: 1.4, value: "scale(1, 1)"},
         { offset: 1.5, value: "scale(4, 1)" },
         { offset: 1.65, value: "scale(1, 1)" },
         { offset: 1.75, value: "scale(4, 1)" }
      ]
   }
});
t8.play();
just.tools.player(t8);
/*-----------  BOTÓN ALARGADO VERTICALMENTE----------- */
var t9 = just.animate({
   targets: ".ball9",
   duration: 2000,
   props: {
     innerHTML: ['V Z G H ', 'V Z G H'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(1, 1)" },
         { offset: 0.3, value: "scale(1, 4)" },
         { offset: 0.4, value: "scale(1, 1)" },
         { offset: 0.5, value: "scale(1, 4)"},
         { offset: 0.65, value: "scale(1, 1)" },
         { offset: 0.75, value: "scale(1, 4)" },
         { offset: 0.90, value: "scale(1, 1)" },
         { offset: 1, value: "scale(1, 4)" },
         { offset: 1.3, value: "scale(1, 1)" },
         { offset: 1.4, value: "scale(1, 4)"},
         { offset: 1.5, value: "scale(1, 1)" },
         { offset: 1.65, value: "scale(1, 4)" },
         { offset: 1.75, value: "scale(1, 1)" }
      ]
   }
});
t9.play();
just.tools.player(t9);
/*-----------  BOTÓN QUE CRECE Y DECRECE SECUENCIALMENTE----------- */
var t10 = just.animate({
   targets: ".ball10",
   duration: 2000,
   props: {
     innerHTML: ['V Z G H ', 'V Z G H'] 
   },
   web: {
      transform: [
         { offset: 0, value: "scale(1, 1)" },
         { offset: 0.3, value: "scale(2, 2)" },
         { offset: 0.4, value: "scale(3, 3)" },
         { offset: 0.5, value: "scale(4, 4)"},
         { offset: 0.65, value: "scale(5, 5)" },
         { offset: 0.75, value: "scale(6, 6)" },
         { offset: 0.90, value: "scale(5, 5)" },
         { offset: 1, value: "scale(4, 4)" },
         { offset: 1.3, value: "scale(3, 3)" },
         { offset: 1.4, value: "scale(2, 2)"},
         { offset: 1.75, value: "scale(1, 1)" },
         { offset: 1.9, value: "scale(2, 2)" },
         { offset: 2, value: "scale(3, 3)" },
         { offset: 2.2, value: "scale(4, 4)"},
         { offset: 2.4, value: "scale(5, 5)" },
         { offset: 2.5, value: "scale(6, 6)" },
         { offset: 2.65, value: "scale(5, 5)" },
         { offset: 2.8, value: "scale(4, 4)" },
         { offset: 3, value: "scale(3, 3)" },
         { offset: 3.2, value: "scale(2, 2)"},
         { offset: 3.4, value: "scale(1, 1)" }
      ]
   }
});
t10.play();
just.tools.player(t10);




