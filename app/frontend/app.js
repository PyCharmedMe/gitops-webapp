function callBackend() {
  console.log("Button clicked");
  fetch("http://192.168.49.2:32694/api/hello")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById("result").innerText = data.message;
    })
    .catch(err => console.error("Fetch error:", err));
}
