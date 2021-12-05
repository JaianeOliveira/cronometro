(function() {
    'use strict';

    let $clock = document.querySelector('[data-js="clock"]');
    let $btnPlay = document.querySelector('[data-js="btn_play"]');
    let $btnStop =  document.querySelector('[data-js="btn_stop"]');
    let $btnReset = document.querySelector('[data-js="btn_reset"]');

    let time = 0;
    let temporizador;

    function timer(){
        $clock.value = time;
        temporizador = setTimeout(timer, 1000);
        time++;
    }
    $btnPlay.addEventListener('click', timer);
    $btnStop.addEventListener('click', function(){
        clearTimeout(temporizador);
    }); 
    $btnReset.addEventListener('click', function() {
        $clock.value = 0;
        time = 0;
    });
})();