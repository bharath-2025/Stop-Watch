
// data variables

let seconds=0;
let milli_seconds=0;
var id;

const sec_indicator = document.getElementById('seconds');
const milli_sec_indicator = document.getElementById('milli_seconds');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const Stop = document.getElementById('stop');


// Adding EventListeners for start,stop and reset buttons.

start.addEventListener('click',(e)=>{
    if(id === undefined){
        id = setInterval(startTimer,10);
    }
});

Stop.addEventListener('click',(e)=>{
    clearInterval(id);
    id=undefined;
});

reset.addEventListener('click',(e)=>{
    //console.log("reset is clicked");
    // Checkng for the base case of the alert box.
    if(seconds !==0 && milli_seconds !==0){
        alert('Are u sure to reset the Timer??.....')
    }
    seconds =0;
    milli_seconds = 0;
    milli_sec_indicator.innerHTML = "00";
    sec_indicator.innerHTML = "00";
    clearInterval(id);
});

// All the logical functions here!!.

function startTimer(){
    milli_seconds++;
    if(milli_seconds <= 9){
        milli_sec_indicator.innerHTML = "0"+ milli_seconds;
    }
    else if(milli_seconds > 9 && milli_seconds <= 99){
        milli_sec_indicator.innerHTML = milli_seconds;
    }
    else if(milli_seconds > 99){
        seconds++;
        milli_seconds=0;
        milli_sec_indicator.innerHTML = "00";
        if(seconds < 9)
        {
            sec_indicator.innerHTML = "0" + seconds;
        }
        else{
            sec_indicator.innerHTML = seconds;
        }
    }
    else{
        // This case is never gets executed
        console.log("stopped");
    }

}


// Addig the outline color changing Animation through javscript

let previous_time;
function helper(time){
    //console.log(time);

    if(previous_time != null){
        const current_time = time;
        const delta = current_time - previous_time;
        
        // Accessing the datamembers of the css file.
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));
        document.documentElement.style.setProperty("--hue",hue + 0.1*delta);
        console.log(hue);
    }

    previous_time = time;

    window.requestAnimationFrame(helper)
}

window.requestAnimationFrame(helper);
