document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Your message has been sent successfully!');
});

const skills = ["HTML", "CSS", "JavaScript", "PHP", "Canva","Microsoft Word", "Microsoft Excel"];
const skillsContainer = document.getElementById("skills");
let currentSkillIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const cursor = document.createElement('span'); // Membuat elemen span untuk kursor
cursor.className = 'cursor'; // Menambahkan kelas untuk kursor
cursor.innerHTML = '|'; // Menambahkan karakter |
skillsContainer.appendChild(cursor); // Menambahkan kursor ke kontainer

function type() {
    if (!isDeleting) {
        if (currentCharIndex < skills[currentSkillIndex].length) {
            // Update kontainer dengan huruf yang sedang diketik
            skillsContainer.innerHTML = skills[currentSkillIndex].substring(0, currentCharIndex + 1);
            skillsContainer.appendChild(cursor); // Pastikan kursor tetap ada di kontainer
            currentCharIndex++;
            setTimeout(type, 100); // Waktu tunggu antara karakter
        } else {
            // Ketika semua karakter ditampilkan, tunggu sebelum menghapus
            setTimeout(() => {
                isDeleting = true; // Set ke true untuk mulai menghapus
                deleteSkill();
            }, 1000); // Tunggu 1 detik sebelum menghapus
        }
    }
}

function deleteSkill() {
    if (isDeleting) {
        if (currentCharIndex > 0) {
            // Update kontainer untuk menghapus huruf
            skillsContainer.innerHTML = skills[currentSkillIndex].substring(0, currentCharIndex - 1);
            skillsContainer.appendChild(cursor); // Pastikan kursor tetap ada di kontainer
            currentCharIndex--;
            setTimeout(deleteSkill, 100); // Waktu tunggu antara penghapusan karakter
        } else {
            // Setelah karakter dihapus, pindah ke skill berikutnya
            currentSkillIndex = (currentSkillIndex + 1) % skills.length; // Ganti skill
            isDeleting = false; // Kembali ke mengetik
            setTimeout(() => {
                type(); // Mulai mengetik skill berikutnya
            }, 500); // Tunggu sebelum mulai mengetik skill berikutnya
        }
    }
}

// Mendapatkan semua ikon
const contactIcons = document.querySelectorAll('.contact-icon');

// Menambahkan event listener untuk setiap ikon
contactIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'pointer'; // Mengubah kursor saat hover
    });
    
    icon.addEventListener('mouseleave', () => {
        document.body.style.cursor = 'default'; // Mengembalikan kursor ke default saat tidak hover
    });
});
// Memulai animasi
type();
