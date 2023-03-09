// const card1 = document.querySelector(".card-1")
// const card2 = document.querySelector(".card-2")
// const card3 = document.querySelector(".card-3")
// const card4 = document.querySelector(".card-4")
// const card5 = document.querySelector(".card-5")
// const card6 = document.querySelector(".card-6")
// const card7 = document.querySelector(".card-7")
// const card8 = document.querySelector(".card-8")
// const card9 = document.querySelector(".card-9")
// const card10 = document.querySelector(".card-10")
const bottone = document.querySelector(".bottone")
const confetti = document.querySelector(".canvas")
const winner2 = document.querySelector(".winner2")





var container = document.querySelector(".rt-container")

var container2 = document.querySelector(".container-2")

const containerFlip = document.querySelector(".flip-container")

//  bottone.addEventListener("click", function(){
    
    setTimeout(() => {
        console.log("Delayed for 1 second.");
        // card1.classList.add("none")
        // card2.classList.add("none")
        // card3.classList.add("none")
        // card4.classList.add("none")
        // card5.classList.add("none")
        // card6.classList.add("none")
        // card7.classList.add("none")
        // card8.classList.add("none")
        // card9.classList.add("none")
        // card10.classList.add("none")
    
        containerFlip.classList.remove("flip-container");
        containerFlip.classList.add("flip-container2");
    
        // change
        // card10.classList.add("full")
    
        setTimeout(() => {
            // change
        // card10.classList.remove("flipper");
        // change
        //  card10.classList.add("static");
         
         setTimeout(() => {
            container.classList.add("none");
             container2.classList.remove("none");
            
             var carta = document.querySelector(".carta") 
             // change
            //  card10.classList.remove("full")
            // //  carta.append(card10)
            //  card10.classList.remove('none')

             container2.classList.add('flex-center')

             setTimeout(() => {
    
             var winner = document.querySelector(".winner")
             var question = document.querySelector(".flipchar") 
    
             winner.classList.remove('none')
            //  winner2.classList.remove('none')

             confetti.classList.remove('none')

             question.classList.add('none')
             
    
                 
                  }, "8000")
    
    
              }, "0001")
       
          }, "0001")
    
        
      }, "11000")

  // });



 let W = window.innerWidth;
 let H = window.innerHeight;
 const canvas = document.getElementById("canvas");
 const context = canvas.getContext("2d");
 const maxConfettis = 150;
 const particles = [];
 
 const possibleColors = [

   "Gold",

 ];
 
 function randomFromTo(from, to) {
   return Math.floor(Math.random() * (to - from + 1) + from);
 }
 
 function confettiParticle() {
   this.x = Math.random() * W; // x
   this.y = Math.random() * H - H; // y
   this.r = randomFromTo(11, 33); // radius
   this.d = Math.random() * maxConfettis + 11;
   this.color =
     possibleColors[Math.floor(Math.random() * possibleColors.length)];
   this.tilt = Math.floor(Math.random() * 33) - 11;
   this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
   this.tiltAngle = 0;
 
   this.draw = function() {
     context.beginPath();
     context.lineWidth = this.r / 2;
     context.strokeStyle = this.color;
     context.moveTo(this.x + this.tilt + this.r / 3, this.y);
     context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
     return context.stroke();
   };
 }
 
 function Draw() {
   const results = [];
 
   // Magical recursive functional love
   requestAnimationFrame(Draw);
 
   context.clearRect(0, 0, W, window.innerHeight);
 
   for (var i = 0; i < maxConfettis; i++) {
     results.push(particles[i].draw());
   }
 
   let particle = {};
   let remainingFlakes = 0;
   for (var i = 0; i < maxConfettis; i++) {
     particle = particles[i];
 
     particle.tiltAngle += particle.tiltAngleIncremental;
     particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
     particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;
 
     if (particle.y <= H) remainingFlakes++;
 
     // If a confetti has fluttered out of view,
     // bring it back to above the viewport and let if re-fall.
     if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
       particle.x = Math.random() * W;
       particle.y = -30;
       particle.tilt = Math.floor(Math.random() * 10) - 20;
     }
   }
 
   return results;
 }
 
 window.addEventListener(
   "resize",
   function() {
     W = window.innerWidth;
     H = window.innerHeight;
     canvas.width = window.innerWidth;
     canvas.height = window.innerHeight;
   },
   false
 );
 
 // Push new confetti objects to `particles[]`
 for (var i = 0; i < maxConfettis; i++) {
   particles.push(new confettiParticle());
 }
 
 // Initialize
 canvas.width = W;
 canvas.height = H;
 Draw();