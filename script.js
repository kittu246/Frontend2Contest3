let time = document.getElementsByTagName("input");
let totalSec ;
let display;
let mainContainer = document.getElementById("mainDiv")


function timeToSec (){

    let hoursSec = time[0].value*3600;
    let minsSec  = time[1].value*60;
    let sec =  time[2].value;
    let Totalsec =hoursSec+minsSec+sec;

    return Totalsec;

}

function sectToHours (totalSec){
    let min = parseInt(totalSec/60);
    let sec = totalSec%60;
    let hours = parseInt(min/60);
    let finalMin = min%60;

    let arr =[];
    arr.push(hours),
    arr.push(finalMin),
    arr.push(sec)

    return arr;

}


function startTimer(){

    let totalTime = timeToSec();
    let displayDiv=document.createElement("div");
    // let stopTimer = document.createElement("button");
    // stopTimer.innerText="Stop Timer";
    // displayDiv.appendChild(stopTimer);
        

    let timeId = setInterval(()=>{

        if(totalTime==0){

            displayDiv.innerHTML = `<p>Time Up</p> <button onclick="stopTimer(this)">Stop Timer</button> `;
            clearInterval(timeId);
          
            return;

        }

        let timeinHours = sectToHours(--totalTime);

        displayDiv.innerHTML= `<p>${timeinHours[0]}h ${timeinHours[1]}m ${timeinHours[2]}s</p> <button onclick="stopTimer(this)">Stop Timer</button>`;

        

    },1000)


    mainContainer.appendChild(displayDiv);
    
    



}

function stopTimer(stopButton){

    stopButton.parentNode.remove();
}





