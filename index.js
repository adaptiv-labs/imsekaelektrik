if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

window.addEventListener('message', receiveMessage, false);     
function receiveMessage(e){
    if(e.data=="restartApp"){
        location.reload();
    }
}