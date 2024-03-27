let previousAlertTimeout; // Global variable to store the timeout ID for the previous alert
let number = 0;
let player1 = "";
let player2 = "";
let player3 = "";
let player4 = "";

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function spinBottle() {
    // Clear the previous alert timeout if it exists
    if (previousAlertTimeout) {
        clearTimeout(previousAlertTimeout);
    }
    const playerr = document.getElementById(nam);
    const bottleImg = document.querySelector('#bott');
    const randomRotation = Math.ceil(Math.random() * 1800);
    
    const rndInt = randomIntFromInterval(1, 360);
    const totalRotation = rndInt + (6 * 360);
    
    bottleImg.style.transition = 'transform 3s ease-in-out'; 

    bottleImg.style.transform = `translate(-50%, -50%) rotate(${totalRotation}deg)`;

    bottleImg.addEventListener('transitionend', function() {
        bottleImg.style.transition = 'none'; 
        bottleImg.style.transform = 'translate(-50%, -50%)'; 

        const playerr = document.getElementById(nam.id)
        switch (number) {
            case 2:
                if (rndInt < 180) {
                    setTimeout(() => {
                       playerr.innerText=`Its ${player2}'s Turn`;
                       console.log(player2)
                    }, 1000);
                } else {
                    setTimeout(() => {
                        playerr.innerText=`Its ${player1}'s Turn`;
                       console.log(player1)
      
                    }, 1000);
                }
                break;
            case 3:
                if (rndInt < 120) {
                    setTimeout(() => {
                        playerr.innerText=`Its ${player2}'s Turn`;
                        console.log(player2)
      
                    }, 1000);
                } else if (rndInt < 240) {
                    setTimeout(() => {
                        playerr.innerText=`Its ${player3}'s Turn`;
                        console.log(player3)
      
                    }, 1000);
                } else {
                    setTimeout(() => {
                        playerr.innerText=`Its ${player1}'s Turn`;
                       console.log(player1)
      
                    }, 1000);
                }
                break;
                case 4:
                  if (rndInt < 90) {
                      setTimeout(() => {
                        playerr.innerText=`Its ${player2}'s Turn`;
                        console.log(player2)
                      }, 1000);
                  } else if (rndInt < 180) {
                      setTimeout(() => {
                        playerr.innerText=`Its ${player4}'s Turn`;
                        console.log(player4)
                      }, 1000);
                  } else if (rndInt < 270) {
                      setTimeout(() => {
                        playerr.innerText=`Its ${player3}'s Turn`;
                        console.log(player3)
                      }, 1000);
                  } else {
                      setTimeout(() => {
                        playerr.innerText=`Its ${player1}'s Turn`;
                        console.log(player1)
                      }, 1000);
                  }
                break;
            default:
                break;
      
        }
       
        showTruthOrDarePopup();
    });
}


function selectTruth() {
    showTruthOrDarePopup(true);
}

function selectDare() {
    showTruthOrDarePopup(false);
}

function showTruthOrDarePopup(isTruth) {
  
    
    const popup = document.getElementById('truthOrDarePopup');
    const resultText = document.getElementById('result');
    
    // const rndInt = randomIntFromInterval(1, 360);
    // const totalRotation = rndInt + (6 * 360);
  
    popup.style.display = 'block';
 
  
   
            
        }
 

    

function closeTruthOrDarePopup() {
    
    const popup = document.getElementById('truthOrDarePopup');
    popup.style.display = 'none';
    document.getElementById('result').textContent = '';
 
}

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    number = parseInt(params.get("number"));
    player1 = params.get("player0");
    player2 = params.get("player1");
    player3 = params.get("player2");
    player4 = params.get("player3");

    const outerDiv = document.getElementById("outer");

    switch (number) {
        case 2:
            makeForTwo(outerDiv);
            break;
        case 3:
            makeForThree(outerDiv);
            break;
        case 4:
            makeForFour(outerDiv);
            break;
        default:
            
            break;
    }
      document.getElementById("num_players");

       
      document.getElementById("playerNames");
function makeForTwo() {
const parent = document.getElementById("outer");
outerDiv.style.background=("URL(/vertical.png) no-repeat center") ;
outerDiv.style.backgroundSize="42rem";
document.getElementById("num_players");

       
document.getElementById("playerNames");

const leftPlayerDiv = document.createElement("div");
leftPlayerDiv.classList.add("player");
leftPlayerDiv.textContent = player1;

leftPlayerDiv.style.width = "50%";
leftPlayerDiv.style.height="90%"

leftPlayerDiv.style.float = "right";
leftPlayerDiv.style.border="0";
leftPlayerDiv.style.textAlign = "center%";
leftPlayerDiv.style.display = "flex";
leftPlayerDiv.style.flexDirection="center";
leftPlayerDiv.style.alignItems="center";

parent.appendChild(leftPlayerDiv);
const rightPlayerDiv = document.createElement("div");
rightPlayerDiv.classList.add("player");
rightPlayerDiv.style.display="felx";
rightPlayerDiv.textContent = player2;
rightPlayerDiv.style.width = "50%";
rightPlayerDiv.style.float = "center"; 
rightPlayerDiv.style.height = "100%";
rightPlayerDiv.style.textAlign = "center%";
rightPlayerDiv.style.display = "flex";
rightPlayerDiv.style.flexDirection="center";
rightPlayerDiv.style.alignItems="center";
rightPlayerDiv.style.borderRight="0";
rightPlayerDiv.style.borderTop="0";
rightPlayerDiv.style.borderBottom="0";
rightPlayerDiv.style.borderTopRightRadius="100px";
rightPlayerDiv.style.borderBottomRightRadius="100px";
rightPlayerDiv.style.borderTopLeftRadius="0";
rightPlayerDiv.style.borderBottomLeftRadius="0";
parent.appendChild(rightPlayerDiv);

}

    function makeForThree(outerDiv) {
        outerDiv.style.background=("URL(/threeplayer.png) no-repeat center") ;
         outerDiv.style.backgroundSize="42rem";
 
        const numColumns = 2;
 outerDiv.style.display = "grid";
  outerDiv.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
 outerDiv.style.gap="20px";

        for (let i = 0; i <=2; i++) {
            const playerDiv = document.createElement("div");
            playerDiv.classList.add("player");
           
         

            if(i===0){
              
           playerDiv.textContent = player1;
           playerDiv.style.alignItems="Center";

playerDiv.style.justifyContent = "center";
playerDiv.style.textAlign = "center";
playerDiv.style.margin = "-20px -20px -30px -40px";
playerDiv.style.width = "18rem";
playerDiv.style.height = "20rem";
playerDiv.style.borderRadius="250px 1px 12px 13px";

           

           }
           else if(i===1){
          
            playerDiv.textContent = player2;
            playerDiv.style.alignItems="Center";

playerDiv.style.justifyContent = "center";
playerDiv.style.textAlign = "center";
playerDiv.style.margin = "-20px -20px -30px -272px";
playerDiv.style.width = "17.5rem";
playerDiv.style.height = "20rem";
playerDiv.style.borderRadius="1px 250px 12px 13px";


           }
           else if(i===2)
           {
            playerDiv.textContent = player3;
            playerDiv.style.alignItems="Center";
            playerDiv.style.verticalAlign="end";
// playerDiv.style.border="1px solid black";
playerDiv.style.justifyContent = "center";
playerDiv.style.textAlign = "center";
playerDiv.style.width = "500px";
playerDiv.style.height = "48px";
playerDiv.style.marginTop = "155px";

           }
           
           playerDiv.style.display = "flex";

// playerDiv.style.padding = "10px";
// playerDiv.style.width = "90%";
// playerDiv.style.height = "92%";
 
// playerDiv.style.borderTopRadius="5px";
            outerDiv.appendChild(playerDiv);
        }
       
    }
   


    function makeForFour(outerDiv) {
      
        const numColumns = 2;

 outerDiv.style.display = "grid";
 outerDiv.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
 outerDiv.style.gap = "3px";
 outerDiv.style.margin="0px";
 outerDiv.style.background=("URL(/fourplayer.jpg) no-repeat center") ;

 outerDiv.style.backgroundSize="45rem";
 
 
        for (let i = 0; i <= 3; i++) {
            const playerDiv = document.createElement("div");
            playerDiv.classList.add("player");
           if(i===0){
            playerDiv.textContent = player1;
            playerDiv.style.marginRight="-20px";
           }
           else if(i===1){
            playerDiv.textContent = player2;

           }
           else if(i===2)
           {
            playerDiv.textContent = player3;
           }
           else{
            playerDiv.textContent = player4;
           }
     
           playerDiv.style.display = "flex";
playerDiv.style.alignItems = "center";
playerDiv.style.justifyContent = "center";
playerDiv.style.textAlign = "center";
playerDiv.style.padding = "1px";
playerDiv.style.width = "98%";
playerDiv.style.height = "100%";
// playerDiv.style.border="1px solid black";
playerDiv.style.borderTopRadius="5px";
// playerDiv.style.borderLeft="none";

// playerDiv.style.border.opacity="0.5";

   outerDiv.appendChild(playerDiv);
            
        }
       
    }

});









