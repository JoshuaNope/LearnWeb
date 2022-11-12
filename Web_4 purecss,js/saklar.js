// LAMPU 1
function saklar(params) {
  // params = parameters
  console.log(params);

  // Membuat Initialisasi
  let lampu1 = document.getElementById("lampu1");
  let text1 = document.getElementById("text1");

  // Mengubah assets/text (Logika)
  if (params == "on") {
    lampu1.src = "assets/images/on.gif";
    text1.innerHTML = "On";
  } else if (params == "off") {
    lampu1.src = "assets/images/off.gif";
    text1.innerHTML = "Off";
  } else {
    console.log(err);
  }
}