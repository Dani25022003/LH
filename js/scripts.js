const $days = document.getElementById('days'),
        $hours = document.getElementById('hours'),
        $minutes = document.getElementById('minutes'),
        $seconds = document.getElementById('seconds'),
        $finalMessage = document.querySelector('.final-sms');

    // Fecha a futuro (22 de febrero de 2024 a las 8:30 de la maÃ±ana)
    const countdownDate = new Date('February 22, 2024 08:30:00').getTime();

    let interval = setInterval(function() {
        // Obtener fecha actual y milisegundos
        const now = new Date().getTime();

        // Obtener las distancias entre ambas fechas
        let distance = countdownDate - now;

        // Calculos a dias-horas-minutos-segundos
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Escribimos resultados
        $days.innerHTML = days;
        $hours.innerHTML = hours;
        $minutes.innerHTML = minutes;
        $seconds.innerHTML = ('0' + seconds).slice(-2);

        // Cuando llegue a 0
        if (distance < 0) {
            clearInterval(interval);
            $finalMessage.style.transform = 'translateY(0)';
        }
    }, 1000);