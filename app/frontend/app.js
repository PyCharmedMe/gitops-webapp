function callBackend() {
  fetch("http://192.168.49.2:32694/api/hello")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.message;
    });
}
