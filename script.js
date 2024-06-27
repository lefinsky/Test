Kconst firstNames = ["KECOAK", "BONEKA", "", "SENDAL JEPIT", "Olivia", "KADAL SALTO", "ANTONY GANGSING", "ANKARA MESSI"];
const lastNames = ["TERBANG", "MAMPANG", "PENCURI KOREK", "MIO MBERRR", "NGABERS", "JANGKRIK TAMAN", "BAU BAWANG", "JIN BOTAK"];

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
