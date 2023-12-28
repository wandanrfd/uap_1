import "app.html";
document.document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const kodeValue = document.getElementById("kode").value;
    const quantityValue = document.getElementById("quan").value;
    // const masukanValue = document.getHargaByKode;

    const harga = getHargaByKode(kodeValue);
    // const masukan =

    if (harga !== 0) {
      const totalHarga = calculateTotalHarga(harga, quantityValue);
      alert("Total Harga: " + totalHarga);
    }
  });

  function getHargaByKode(kode) {
    switch (kode) {
      case "001":
        return 10000;
      case "002":
        return 20000;
      case "003":
        return 30000;
      default:
        return 0;
    }
  }

  function calculateTotalHarga(harga, quantity) {
    return harga * quantity;
  }

  //   function masukan(calculateTotalHarga)
});
