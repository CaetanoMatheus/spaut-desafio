function showCameraVideo(stream) {
  const videoElement = document.querySelector('#cameraImage')
  videoElement.srcObject = stream
}

function startVideoFromCamera() {
  const constraints = {video: {width: 150, height: 160}};
  navigator.mediaDevices.getUserMedia(constraints)
  .then(stream => showCameraVideo(stream))
  .catch(error => console.log('ERROR', error))
}

window.addEventListener('DOMContentLoaded', startVideoFromCamera)
