const spinn = document.querySelector('.spinn');
 let totalRotation = 0;

function spinBottle() {
  
    const bottleImg = document.querySelector('#bott');
    const randomRotation = Math.ceil(Math.random() * 360 + 33);
    console.log("random rotation",randomRotation)
    totalRotation =totalRotation-randomRotation;
    totalRotation += 2000 + randomRotation;
    // bottleImg.style.transform="translate(-50%, -50%)";
    bottleImg.style.transition = 'transform 3s ease-in-out';
    bottleImg.style.transform = `translate(-50%, -50%) rotate(${totalRotation}deg)`;
    console.log(totalRotation);
}
spinn.addEventListener("click",()=>{
    spinBottle();
    
})







