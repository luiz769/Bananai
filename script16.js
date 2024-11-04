function atualizarRelogio() {
    const now = new Date();
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const segundos = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("relogio").textContent = horas + ':' + minutos + ':' + segundos;
}

         setInterval(atualizarRelogio, 1000);

        atualizarRelogio();