
// // ====== Tabs ======
// const signinTab = document.getElementById('signinTab');
// const signupTab = document.getElementById('signupTab');
// const signinForm = document.getElementById('signinForm');
// const signupForm = document.getElementById('signupForm');

// function showSignIn() {
//     if (signinForm) signinForm.style.display = 'block';
//     if (signupForm) signupForm.style.display = 'none';
//     if (signinTab) signinTab.classList.add('active');
//     if (signupTab) signupTab.classList.remove('active');
// }

// function showSignUp() {
//     if (signinForm) signinForm.style.display = 'none';
//     if (signupForm) signupForm.style.display = 'block';
//     if (signupTab) signupTab.classList.add('active');
//     if (signinTab) signinTab.classList.remove('active');
// }

// const firstTime = localStorage.getItem('firstTime');
// if (!firstTime) {
//     localStorage.setItem('firstTime', 'yes');
//     showSignUp();
// } else {
//     showSignIn();
// }

// signinTab?.addEventListener('click', showSignIn);
// signupTab?.addEventListener('click', showSignUp);
// document.getElementById('gotoSignup')?.addEventListener('click', showSignUp);
// document.getElementById('gotoSignin')?.addEventListener('click', showSignIn);

// // ====== Form Submission ======
// function showMessage(msg, isError = false) {
//     const existingMsg = document.querySelector('.message');
//     if (existingMsg) existingMsg.remove();
    
//     const message = document.createElement('div');
//     message.className = 'message';
//     message.textContent = msg;
//     message.style.cssText = `
//         margin-top: 10px;
//         padding: 10px;
//         background: ${isError ? '#ff4444' : '#00ff00'};
//         color: black;
//         border-radius: 5px;
//         display: none;
//         font-weight: bold;
//     `;
//     document.getElementById('content').appendChild(message);
//     message.style.display = 'block';
//     setTimeout(() => message.remove(), 3000);
// }

// // ====== API Calls ======
// async function apiSignup(userData) {
//     try {
//         const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SIGNUP}`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(userData)
//         });
//         const data = await response.json();
//         if (data.success) {
//             console.log('✅ تم التسجيل بنجاح!');
//             console.log('اسم المستخدم:', data.user.name);
//         } else {
//             console.warn('⚠️ فشل التسجيل:', data.message);
//         }
//         return data;
//     } catch (error) {
//         console.error('❌ خطأ في الاتصال بالباك إند:', error.message);
//         return { success: false, message: 'Error connecting to server' };
//     }
// }

// async function apiSignin(credentials) {
//     try {
//         const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SIGNIN}`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(credentials)
//         });
//         const data = await response.json();
//         if (data.success) {
//             console.log('✅ تسجيل الدخول ناجح!');
//             console.log('اسم المستخدم:', data.user.name);
//         } else {
//             console.warn('⚠️ فشل تسجيل الدخول:', data.message);
//         }
//         return data;
//     } catch (error) {
//         console.error('❌ خطأ في الاتصال بالباك إند:', error.message);
//         return { success: false, message: 'Error connecting to server' };
//     }
// }

// // ====== Form Event Listeners ======
// signinForm?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const credentials = {
//         email: document.getElementById('signinEmail').value,
//         password: document.getElementById('signinPassword').value
//     };
    
//     const result = await apiSignin(credentials);
//     if (result.success) {
//         localStorage.setItem('currentUser', JSON.stringify(result.user));
//         localStorage.setItem('token', result.token);
//         showMessage('✅ تم تسجيل الدخول! جاري التحويل...');
//         setTimeout(() => window.location.href = 'dashboard.html', 1500);
//     } else {
//         showMessage(result.message || 'Login failed', true);
//     }
// });

// signupForm?.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const userData = {
//         name: document.getElementById('signupUsername').value,
//         email: document.getElementById('signupEmail').value,
//         password: document.getElementById('signupPassword').value
//     };
    
//     const result = await apiSignup(userData);
//     if (result.success) {
//         showMessage('✅ تم إنشاء الحساب! الرجاء تسجيل الدخول...');
//         setTimeout(() => showSignIn(), 1500);
//     } else {
//         showMessage(result.message || 'Signup failed', true);
//     }
// });
