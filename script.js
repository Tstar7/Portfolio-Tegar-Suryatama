document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Your message has been sent successfully!');
});

const skills = ["HTML", "CSS", "JavaScript", "Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Google Workspace", "Google Drive", "Canva", "Artificial Intelligence"];
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


// Data sertifikat utama dan sertifikat terkait
const certificates = [
  // Microsoft Excel Basic
  [
    { src: 'data (1).jpg', title: 'Microsoft Excel Basic' },  
    { src: 'data (2).jpg', title: 'Microsoft Excel Basic' },  
    { src: 'data (3).jpg', title: 'Microsoft Excel Basic' },  
    { src: 'data (4).jpg', title: 'Microsoft Excel Basic' },  
    { src: 'data (5).jpg', title: 'Microsoft Excel Basic' },  
    { src: 'data (6).jpg', title: 'Microsoft Excel Basic' },  
    { src: 'data (7).jpg', title: 'Microsoft Excel Basic' },  
    { src: 'data (8).jpg', title: 'Microsoft Excel Basic' },  
    { src: 'data (9).jpg', title: 'Microsoft Excel Basic' },  
    { src: 'data (10).jpg', title: 'Microsoft Excel Basic' }
    
  ],
  // Microsoft Excel Intermediate
  [
    { src: 'inter (1).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (2).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (3).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (4).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (5).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (6).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (7).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (8).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (9).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (10).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (11).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (12).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (13).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (14).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (15).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (16).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (17).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (18).jpg', title: 'Microsoft Excel Intermediate' },
    { src: 'inter (19).jpg', title: 'Microsoft Excel Intermediate' }    
  ],
  // Basic Data
  [
    { src: 'basicdata (1).jpg', title: 'Basic Data' },
    { src: 'basicdata (2).jpg', title: 'Basic Data' },
    { src: 'basicdata (3).jpg', title: 'Basic Data' },
    { src: 'basicdata (4).jpg', title: 'Basic Data' },
    { src: 'basicdata (5).jpg', title: 'Basic Data' },
    { src: 'basicdata (6).jpg', title: 'Basic Data' },
    { src: 'basicdata (7).jpg', title: 'Basic Data' },
    { src: 'basicdata (8).jpg', title: 'Basic Data' },
    { src: 'basicdata (9).jpg', title: 'Basic Data' },
    { src: 'basicdata (10).jpg', title: 'Basic Data' }
    
  ],
    // Basic Accounting
    [
      { src: 'akun (1).jpg', title: 'Basic Accounting' },
      { src: 'akun (2).jpg', title: 'Basic Accounting' },
      { src: 'akun (3).jpg', title: 'Basic Accounting' },
      { src: 'akun (4).jpg', title: 'Basic Accounting' },
      { src: 'akun (5).jpg', title: 'Basic Accounting' },
      { src: 'akun (6).jpg', title: 'Basic Accounting' }      
    ],
      // Microsoft Word
      [
        { src: 'word (1).jpg', title: 'Microsoft Word' },
        { src: 'word (2).jpg', title: 'Microsoft Word' },
        { src: 'word (3).jpg', title: 'Microsoft Word' },
        { src: 'word (4).jpg', title: 'Microsoft Word' },
        { src: 'word (5).jpg', title: 'Microsoft Word' }      
      ],
         // Microsoft PowerPoint
         [
          { src: 'poin (1).jpg', title: 'Microsoft PowerPoint' },
          { src: 'poin (2).jpg', title: 'Microsoft PowerPoint' },
          { src: 'poin (3).jpg', title: 'Microsoft PowerPoint' },
          { src: 'poin (4).jpg', title: 'Microsoft PowerPoint' },
          { src: 'poin (5).jpg', title: 'Microsoft PowerPoint' }      
        ],
            // Artificial Intelligence
            [
              { src: 'ai (1).jpg', title: 'Artificial Intelligence' },
              { src: 'ai (2).jpg', title: 'Artificial Intelligence' },
              { src: 'ai (3).jpg', title: 'Artificial Intelligence' },
              { src: 'ai (4).jpg', title: 'Artificial Intelligence' },
              { src: 'ai (5).jpg', title: 'Artificial Intelligence' }      
            ],
               // Canva for Design
               [
                { src: 'canva (1).jpg', title: 'Canva for Design' },
                { src: 'canva (2).jpg', title: 'Canva for Design' },
                { src: 'canva (3).jpg', title: 'Canva for Design' },
                { src: 'canva (4).jpg', title: 'Canva for Design' },
                { src: 'canva (5).jpg', title: 'Canva for Design' }      
              ],
               // Front-End Web Development
               [
                { src: 'frontend1.jpg', title: 'Front-End Web Development' },
                { src: 'frontend2.jpg', title: 'Front-End Web Development' }      
              ],
  // Sertifikat lainnya...
];

let currentCategoryIndex = 0; // Kategori sertifikat yang sedang ditampilkan
let currentCertIndex = 0; // Sertifikat yang sedang ditampilkan dalam kategori

// Fungsi untuk membuka modal dengan sertifikat terkait
function openModal(index) {
  currentCategoryIndex = index;
  currentCertIndex = 0; // Mulai dari sertifikat pertama di kategori tersebut

  // Ambil sertifikat berdasarkan kategori yang dipilih
  updateModalContent();
  showRelatedCertificates();

  document.getElementById("certificateModal").style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("certificateModal").style.display = "none";
}

// Fungsi untuk mengganti sertifikat dengan tombol kiri-kanan
function changeCert(direction) {
  currentCertIndex += direction;

  // Jika index melebihi batas, kembali ke awal atau akhir array
  const category = certificates[currentCategoryIndex];
  if (currentCertIndex < 0) {
    currentCertIndex = category.length - 1;
  } else if (currentCertIndex >= category.length) {
    currentCertIndex = 0;
  }

  updateModalContent();
}

// Fungsi untuk memperbarui konten modal
function updateModalContent() {
  const category = certificates[currentCategoryIndex];
  const cert = category[currentCertIndex];

  document.getElementById("modalImage").src = cert.src;
  document.getElementById("modalTitle").textContent = cert.title;
}

// Fungsi untuk menampilkan sertifikat terkait di pop-up
function showRelatedCertificates() {
  const relatedCertificates = document.querySelectorAll('.related-certificate');
  relatedCertificates.forEach(cert => {
    if (cert.dataset.category == currentCategoryIndex) {
      cert.style.display = "block"; // Menampilkan sertifikat terkait
    } else {
      cert.style.display = "none"; // Menyembunyikan sertifikat yang tidak relevan
    }
  });
}

document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Pastikan link mengarah ke ID di halaman (bukan URL luar)
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


