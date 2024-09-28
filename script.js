document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Your message has been sent successfully!');
});

const skills = ["HTML", "CSS", "JavaScript", "PHP", "Canva","Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Google Drive", "Google Docs", "Google Sheets"];
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

document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Menutup sidebar ketika link di klik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });

    // Menutup sidebar ketika klik di luar sidebar
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Tambahkan kelas 'show' saat elemen terlihat
            }
        });
    });

    // Ambil semua elemen yang ingin diberikan efek animasi
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el)); // Daftarkan elemen ke observer
});

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
  
    let options = {
      threshold: 0.5 // Memunculkan item saat 10% dari item terlihat di layar
    };
  
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Tambahkan kelas 'show' dengan delay untuk animasi berurutan
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 400); // Delay setiap item 300ms
          observer.unobserve(entry.target); // Menghentikan pengamatan setelah item muncul
        }
      });
    }, options);
  
    items.forEach(item => {
      observer.observe(item);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.card');
  
    let options = {
      threshold: 0.5 // Memunculkan item saat 10% dari item terlihat di layar
    };
  
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Tambahkan kelas 'show' dengan delay untuk animasi berurutan
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 400); // Delay setiap item 300ms
          observer.unobserve(entry.target); // Menghentikan pengamatan setelah item muncul
        }
      });
    }, options);
  
    items.forEach(item => {
      observer.observe(item);
    });
  });
  
