// 1. تشغيل الموسيقى التلقائي ومفتاح التحكم
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "🎵 إيقاف الموسيقى";
  } else {
    music.pause();
    musicBtn.innerText = "🎵 تشغيل الموسيقى";
  }
}

// تشغيل الصوت أوتوماتيكياً عند أول ضغطة على الصفحة (لأن المتصفحات تمنع التشغيل التلقائي أحياناً)
document.body.addEventListener('click', () => {
  if (music.paused) {
    music.play().catch(() => {});
  }
}, { once: true });

// 2. إظهار رسالة المفاجأة
function showSurprise() {
  const surpriseBox = document.getElementById('hidden-surprise');
  if (surpriseBox.style.display === 'block') {
    surpriseBox.style.display = 'none';
  } else {
    surpriseBox.style.display = 'block';
  }
}

// 3. صنع القلوب العائمة فالحلفية
function createHearts() {
  const heartsContainer = document.body;
  const heart = document.createElement('div');
  heart.classList.add('heart-float');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';
  heart.style.fontSize = Math.random() * 15 + 15 + 'px';
  
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHearts, 300);

// 4. عداد الوقت (حط تاريخ البداية ديالكم هنا)
// الصيغة: السنة, الشهر (من 0 إلى 11), اليوم
const startDate = new Date(2025, 0, 1); // مثال: 1 يناير 2025

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);

  document.getElementById('counter').innerText = `${days} يوم، ${hours} ساعة، ${minutes} دقيقة`;
}

setInterval(updateCounter, 1000);
updateCounter();
