console.log("Simon says game!!");

let lvl = 1;
let bigBox = document.querySelector('.box-container');
let subHead = document.querySelector('h5');

let arr = [];
// arr = createSequence(arr);

window.addEventListener('keydown', gameStart);

function gameStart(event) {
    subHead.innerText = `Level ${lvl}`;

    // let arr = ['box-1', 'box-2', 'box-3', 'box-4'];
    arr = createSequence(arr);
    console.log(`generated sequence is ${arr}`);
    let userArr = [];
    console.log(`lvl: ${lvl}`);
    console.log(`userArr bfr game begin: ${userArr}`);
    let count = 0;

    //flash the generated sequence
    for(let i=0; i<arr.length; i++) {
        let blinkBox = document.querySelector(`#${arr[i]}`);
        let oriColor = blinkBox.style.backgroundColor;
        
        //BLINK 
        setTimeout(() => {
            setTimeout(() => {
                blinkBox.style.backgroundColor = 'white';
                setTimeout(() => {
                    blinkBox.style.backgroundColor = oriColor;
                }, 199);
            }, 201);        
        }, i*500);
    }


    function handleClick(event) {
        let gameOver = false;

        if (event.target.className == 'box') {
            if (count < lvl) {
                let color = event.target.style.backgroundColor;
                event.target.style.backgroundColor = 'white';
                setTimeout(() => {
                    event.target.style.backgroundColor = color;
                }, 125);

                //get the sequence of user input
                // event.target.style.backgroundColor = 'white';
                // console.log(event.target.style.);
                userArr.push(event.target.id);
                console.log(`triggered ${count + 1} : ${event.target.id}`);
                console.log(`userArr after trigger: ${userArr}`);
                count++;
            } 

            //wait for the color blink to get back to original color
            setTimeout(() => {
                if(count == lvl) {
                    console.log(`userArr bfr evaluate: ${userArr}`);
                    console.log('Evaluating');
    
                    //check if userArr == arr
                    for (let i = 0; i < userArr.length; i++) {
                        if (userArr[i] !== arr[i]) {
                            gameOver = true;
                            break;
                        }
                    }
    
                    if (gameOver) {
                        //game over
                        alert("Game Over! Refresh page to start again");
                    } else {
                        //advance to next lvl
                        console.log(`userArr bfr adv: ${userArr}`);
                        alert(`Advanced to lvl ${++lvl}`);
                        bigBox.removeEventListener('click', handleClick); // Remove existing listener
                        gameStart(); // Start the next level
                    }
                }            
            }, 200);
            
        }
    }


    bigBox.addEventListener('click', handleClick);
}

function createSequence(oldArr) {
    let random = Math.floor(Math.random() *4 +1);
    switch(random) {
        case 1:
            oldArr.push("box-1");
            break;
        case 2:
            oldArr.push("box-2");
            break;
        case 3:
            oldArr.push("box-3");
            break;
        case 4:
            oldArr.push("box-4");
            break;
    }

    // event.target.style.backgroundColor = 'white';
    // setTimeout(() => {
    //     event.target.style.backgroundColor = 'pink'
    // }, 200);


    return oldArr;
}


// event.target.style.backgroundColor = 'white';
// setTimeout(() => {
//     event.target.style.backgroundColor = 'pink'
// }, 200);


// for(let i=0; i<arr.length; i++) {
//     let blinkBox = document.querySelector(`#${arr[i]}`);
//     let oriColor = blinkBox.style.backgroundColor;
//     blinkBox.style.backgroundColor = 'white';
//     setTimeout(() => {
//         blinkBox.style.backgroundColor = oriColor;
//     }, 125);
// }