// LAMPU 1
function saklar(params) {
  // params = parameters
  console.log(params);

  // Membuat Initialisasi
  let lampu1 = document.getElementById("lampu1");

  // Mengubah assets/text (Logika)
  if (params == "on") {
    lampu1.src = "assets/images/on.gif";
  } else if (params == "off") {
    lampu1.src = "assets/images/off.gif";
  } else {
    console.log(err);
  }
}
