// ==========================================
// 1. ميزة الوضع الليلي (معطلة حالياً بناءً على طلبك)
// ==========================================
// const hour = new Date().getHours();
// if (hour >= 18 || hour < 6) { document.body.classList.add('dark-mode'); }

// ==========================================
// 2. ميزة عداد الإعجابات
// ==========================================
let likesCount = 120; 

function handleLike() {
    const likeBtn = document.getElementById('like-btn');
    const countSpan = document.getElementById('likes-count');
    
    if (likeBtn.classList.contains('liked')) {
        likesCount--;
        likeBtn.classList.remove('liked');
        likeBtn.style.backgroundColor = "#e0e0e0";
        likeBtn.style.color = "#333";
    } else {
        likesCount++;
        likeBtn.classList.add('liked');
        likeBtn.style.backgroundColor = "#b30000";
        likeBtn.style.color = "#fff";
    }
    countSpan.innerText = likesCount;
}
// ==========================================
// ميزة عداد الإعجابات (Like Button)
// ==========================================

// نجلب الرقم القديم من ذاكرة المتصفح لو موجود، وإلا نبدأ من 120
// نستخدم DOMContentLoaded لضمان أن الزر موجود قبل محاولة التحكم فيه
document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('like-btn');
    const countSpan = document.getElementById('likes-count');

    // تحميل الرقم المحفوظ
    let likesCount = parseInt(localStorage.getItem('savedLikes')) || 120;
    if (countSpan) {
        countSpan.innerText = likesCount;
    }

    // ربط الوظيفة بالزر
    if (likeBtn) {
        likeBtn.onclick = function() {
            if (likeBtn.classList.contains('liked')) {
                likesCount--;
                likeBtn.classList.remove('liked');
                likeBtn.style.backgroundColor = "#e0e0e0";
                likeBtn.style.color = "#333";
            } else {
                likesCount++;
                likeBtn.classList.add('liked');
                likeBtn.style.backgroundColor = "#b30000";
                likeBtn.style.color = "#fff";
            }
            if (countSpan) {
                countSpan.innerText = likesCount;
                localStorage.setItem('savedLikes', likesCount);
            }
        };
    }
});