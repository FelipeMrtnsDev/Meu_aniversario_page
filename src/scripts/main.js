const evento = new Date("Feb 24, 2025 06:00:00");
const stampEvento = evento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const stampAgora = agora.getTime();
    const tempoAteOEvento = stampEvento - stampAgora;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor((tempoAteOEvento / diasEmMs));
    const horasAteOEvento = Math.floor((tempoAteOEvento % diasEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((tempoAteOEvento % horasEmMs) / minutosEmMs)
    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutosEmMs) / 1000);

    const contador = document.getElementById('contador');
    contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(diasAteOEvento < 0) {
        clearInterval(contaAsHoras);
        contador.innerHTML = "Evento expirado"
    }
}, 1000);
