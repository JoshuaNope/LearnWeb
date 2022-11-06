const nama = "Joseph Martin";
let umur = 20;

const biodata = document.getElementById('biodata');

function generateBiodata() {
    console.log(`Nama anda adalah ${nama}`);
}

function checkAge() {
    let generasi;

    if (umur >= 100) {
        console.log(`Anda berumur ${umur} tahun`);
        generasi = "Spesial";
    } else if (umur >= 18 && umur < 100) {
        console.log(`Anda berumur ${umur} tahun`);
        generasi = "Dewasa";
    } else if (umur >= 10 && umur < 18) {
        console.log(`Anda berumur ${umur} tahun`);
        generasi = "Remaja";
    } else {
        console.log(`Anda berumur ${umur} tahun`);
        generasi = "Anak-anak";
    }

    return biodata.innerHTML = `Saya adalah manusia yang bernama ${nama}. Saya termasuk generasi ${generasi} karena saya sudah berumur ${umur}.`;
}

// Cara menjalankan function hanya perlu menulis nama functionnya saja
generateBiodata();
checkAge();