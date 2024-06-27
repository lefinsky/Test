const firstNames = ["Aria", "Liam", "Noah", "Emma", "Olivia", "Ava", "Mason", "Sophia"];
const lastNames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis"];

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
