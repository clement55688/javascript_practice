let countdown;

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
    countdown = setInterval(() =>{
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // Check if we should stop it!
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }


        // Display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    console.log({minutes, remainderSeconds});
}