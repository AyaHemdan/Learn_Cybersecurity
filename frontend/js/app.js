// ====== Test Backend ======
async function testBackend() {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/`);
        const data = await response.json();
        console.log(`✅ الاتصال ناجح: ${data.message}`);
        return true;
    } catch (error) {
        console.error(`❌ خطأ في الاتصال: ${error.message}`);
        return false;
    }
}

// ====== Signup ======
async function apiSignup(userData) {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SIGNUP}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (data.success) {
            console.log('✅ تم التسجيل بنجاح!');
            console.log('اسم المستخدم:', data.user.name);
        } else {
            console.warn('⚠️ فشل التسجيل:', data.message);
        }

        return data;
    } catch (error) {
        console.error('❌ خطأ في الاتصال بالباك إند:', error.message);
        return { success: false, message: 'Error connecting to server' };
    }
}

// ====== Signin ======
async function apiSignin(credentials) {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SIGNIN}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });

        const data = await response.json();

        if (data.success) {
            console.log('✅ تسجيل الدخول ناجح!');
            console.log('اسم المستخدم:', data.user.name);
        } else {
            console.warn('⚠️ فشل تسجيل الدخول:', data.message);
        }

        return data;
    } catch (error) {
        console.error('❌ خطأ في الاتصال بالباك إند:', error.message);
        return { success: false, message: 'Error connecting to server' };
    }
}

// ====== Test connection on page load ======
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Frontend loaded. Testing backend connection...');
    testBackend();
});
