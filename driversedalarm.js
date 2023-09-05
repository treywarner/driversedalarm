function alarm()
{
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);

    oscillator.connect(audioContext.destination);

    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
    }, 1000);
}

function checkContent() 
{
    const statusElement = document.getElementById('arrow-next').firstChild.firstChild;
    const content = statusElement.textContent.trim();
    console.log(content)
    if (content === '00:00') {
      alarm();
    }
}

setInterval(checkContent, 1000);
