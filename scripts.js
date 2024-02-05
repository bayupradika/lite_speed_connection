document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah formulir dikirim dengan cara default

    // Mendapatkan nilai dari input
    var hotspotName = document.getElementById('hotspotName').value;
    var ukuranAP = document.getElementById('ukuranAP').value;

    // Menyusun data yang akan disimpan
    var dataToSave = "Hotspot Name: " + hotspotName + ", Password: " + ukuranAP + "\n";
    saveDataToFile(dataToSave);
});

function saveDataToFile(data) {
    var blob = new Blob([data], { type: 'text/plain' });

    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'data.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
