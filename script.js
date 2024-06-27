const firstNames = ["Ade", "Boneka", "Kadal", "Bernard", "Oscar", "Sendal", "Kecoak", "Kacang"];
const lastNames = ["Londok", "Mampang", "Bunting", "Bear", "Oasis", "Jepit", "Terbang", "Mede"];

function getRandomName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

document.getElementById("generateButton").addEventListener("click", () => {
    const userName = document.getElementById("nameInput").value;
    if (userName) {
        const name = getRandomName();
        document.getElementById("nameDisplay").textContent = `Halo, ${userName}. Nama baru Anda adalah ${name}`;
    } else {
        alert("Silakan masukkan nama Anda");
    }
});
