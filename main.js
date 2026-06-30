// ==========================================
// 1. ميزة الوضع الليلي (Dark Mode)
// ==========================================
// الكود التلقائي: يقرأ وقت الجهاز ويشغل الوضع الليلي فوراً إذا كنا بالليل
const hour = new Date().getHours();
if (hour >= 18 || hour < 6) {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}
// ==========================================
// 2. ميزة عداد الإعجابات (Like Button)
// ==========================================
let likesCount = 120; // عدد الإعجابات الافتراضي للمقال

function handleLike() {
    const likeBtn = document.getElementById('like-btn');
    const countSpan = document.getElementById('likes-count');
    
    // التحقق لو القارئ ضغط لايك مسبقاً أم لا عبر كلاس نشط (active)
    if (likeBtn.classList.contains('liked')) {
        likesCount--; // إلغاء الإعجاب
        likeBtn.classList.remove('liked');
        likeBtn.style.backgroundColor = "#e0e0e0";
        likeBtn.style.color = "#333";
    } else {
        likesCount++; // إضافة إعجاب
        likeBtn.classList.add('liked');
        likeBtn.style.backgroundColor = "#b30000"; // لون أحمر صحفي عند الإعجاب
        likeBtn.style.color = "#fff";
    }
    
    // تحديث الرقم الظاهر على الشاشة
    countSpan.innerText = likesCount;
}