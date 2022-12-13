function save(){
    alert("saved")
}


function run(runs,wic = false){

    let heading =  document.querySelector('h1')
    let [score,wicket] = heading.innerText.split('/');
    let ballToBall = document.getElementById('ballToBall')
    let [a,b] = ballToBall.value.split('.');
    let OverToOver = document.getElementById('overToOver').split

    if(wicket <11){

        
          
           if(b >4){
             ballToBall.value = eval(Number(ballToBall.value)+(0.5)).toFixed(1);
           }
           else{
            ballToBall.value = eval(Number(ballToBall.value)+(0.1)).toFixed(1);
           }
        //    else{
        //     OverToOver.value
        //    }

        if(!wic){
            heading.innerText=  (eval(Number(score)+Number(runs))+"/"+wicket)
         }
         else{
             heading.innerText=  score+'/'+(eval(Number(wicket)+Number(runs)))
         }
     
    }
    else{
        alert("No More Wickets Left");
    }
   
}
