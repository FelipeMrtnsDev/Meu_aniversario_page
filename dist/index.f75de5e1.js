const evento = new Date("Feb 24, 2025 06:00:00");
const stampEvento = evento.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const stampAgora = agora.getTime();
    const tempoAteOEvento = stampEvento - stampAgora;
    const diasEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutosEmMs = 60000;
    const diasAteOEvento = Math.floor(tempoAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor(tempoAteOEvento % diasEmMs / horasEmMs);
    const minutosAteOEvento = Math.floor(tempoAteOEvento % horasEmMs / minutosEmMs);
    const segundosAteOEvento = Math.floor(tempoAteOEvento % minutosEmMs / 1000);
    const contador = document.getElementById("contador");
    contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (diasAteOEvento < 0) {
        clearInterval(contaAsHoras);
        contador.innerHTML = "Evento expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
