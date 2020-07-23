var counters = document.querySelectorAll('.counter');
let speed = 20000;

counters.forEach(counter => {
    let updateCount = () => {
        let target = counter.getAttribute('data-target');
        let count = +counter.innerHTML;

        let inc = target / speed;
        
        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, );
        }else {
            count.innerText = `${target}+`
        }
        // console.log( target);
    }
    
    // if(target = 150){
    //     let speed1 = 1000;
    // } else if(target = 20) {
    //     let speed2 = 8000;
    // }
    updateCount();
});