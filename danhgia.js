const container = document.querySelector('.container');
const img = document.getElementById('img');
const name = document.getElementById('name');
const job = document.getElementById('job');
const text = document.getElementById('text');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.btn-hover');
const link = document.querySelector('#link');

let currentReview = 0;
let currentIndex = 0;
const reviews = [
    {
        id: 1,
        name: 'Long',
        job: 'Sinh Viên',
        img: 'long.jpg',
        text: 'FB',
        social: 'https://www.facebook.com/VoTruongLongg/',
    },

    {
        id: 2,
        name: 'Bích Thi',
        job: 'Sinh Viên',
        img: 'thi.jpg',
        text: 'FB',
        social: 'https://www.facebook.com/profile.php?id=100030430999897',
    },

    {
        id: 3,
        name: 'Tài',
        job: 'Sinh Viên',
        img: 'tai.jpg',
        text: 'FB',
        social: 'https://www.facebook.com/tantai.mai.5667',
    },

    {
        id: 4,
        name: 'Duyên',
        job: 'Sinh Viên',
        img: 'duyen.jpg',
        text: 'FB',
        social: 'https://www.facebook.com/myduyenphan101203',
    },

    {
        id: 5,
        name: 'Nhung',
        job: 'Sinh Viên',
        img: 'nhung.jpg',
        text: 'FB',
        social: 'https://www.facebook.com/dttnhung004',
    },
];

function getRandomReview() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    return reviews[currentIndex];
  }
  
  // Hiển thị đánh giá theo index
  function showReview(index) {
    const review = reviews[index];
    document.getElementById("name").textContent = review.name;
    document.getElementById("job").textContent = review.job;
    document.getElementById("img").src = review.img;
    link.href = review.social; // thay đổi giá trị href của thẻ <a>
    link.textContent = `"${review.text}"`;
  }
  
  // Hiển thị đánh giá tiếp theo
  function showNextReview() {
    currentIndex++;
    if (currentIndex >= reviews.length) {
      currentIndex = 0;
    }
    showReview(currentIndex);
  }
  
  // Hiển thị đánh giá trước đó
  function showPrevReview() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = reviews.length - 1;
    }
    showReview(currentIndex);
  }
  
  // Hiển thị đánh giá ngẫu nhiên
  function showRandomReview() {
    const review = getRandomReview();
    showReview(currentIndex);
  }
  
  // Gán sự kiện cho các nút prev, next, random
  document.querySelector(".prev").addEventListener("click", showPrevReview);
  document.querySelector(".next").addEventListener("click", showNextReview);
  document.querySelector(".btn").addEventListener("click", showRandomReview);
  
  // Hiển thị đánh giá đầu tiên
  showReview(currentIndex);

  
