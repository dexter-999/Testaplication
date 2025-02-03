const image = document.getElementById('img');
const btn = document.getElementById('btn');
const smart = document.querySelector('.smart');
const h3 = document.querySelector('.h3');
const tsawr0 = document.querySelector('.tswira0');
const tsawr1 = document.querySelector('.tswira1');
const tsawr2 = document.querySelector('.tswira2');
const tsawr3 = document.querySelector('.tswira3');
const tsawr4 = document.querySelector('.tswira4');

function img(tshirt){
    image.src = tshirt;
}
btn.addEventListener('click',function(){
    location.reload()
})

function colors(color){
    const body = document.querySelector('.circle');
    body.style.backgroundColor = color;
}

function end(lfr9a,loun){
    h3.textContent = lfr9a;
    h3.style.color = loun;
    // let interval = setInterval(function(){h3.textContent += '.'},1000)
}

tsawr0.addEventListener('click',function(){
    end('Its a starbuks','#006c00')
    // setTimeout(function(){location.reload()},4000)
});
tsawr1.addEventListener('click',function(){
    end('Its a starbuks','#982d7c') 
        // setTimeout(function(){location.reload()},4000)

});
tsawr2.addEventListener('click',function(){
    end('Its a starbuks','#66470f')
        // setTimeout(function(){location.reload()},4000)

});
tsawr3.addEventListener('click',function(){
    end('Its a starbuks','#ca781f')
        // setTimeout(function(){location.reload()},4000)

});












