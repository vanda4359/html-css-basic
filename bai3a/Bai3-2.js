var isLoggedIn = false;
var showModal = false;
var isChangePass = false;

const account = {
    oldUserName: "admin",
    oldPass: "admin"
}

function onInputUserName() {
    document.getElementById('error-user').innerText = '';
}

function onInputPassword() {
    document.getElementById('error-password').innerText = '';
}

function login() {

    console.log("login")
    const userName = document.querySelector('#account-input').value;
    const password = document.querySelector('#password-input').value;
    
    if (userName === "" && password === "") {
        document.getElementById('error-user').innerText = "Nhập tài khoản của bạn";
        document.getElementById('error-password').innerText = "Nhập mật khẩu của bạn"
    } else if (userName === "" && password !== "") {
        document.getElementById('error-user').innerText = "Nhập tài khoản của bạn";
        document.getElementById('error-password').innerText = '';

    } else if (userName !== "" && password === "") {
        console.log('VAO DAYYYY')
        console.log(userName, password)
        document.getElementById('error-user').innerText = "";
        document.getElementById('error-password').innerText = "Nhập mật khẩu của bạn";

    } else if (userName !== account.oldUserName && password !== account.oldPass) {
        document.getElementById('login-submit').innerText = '--Loading--';

        setTimeout(() => {
            document.getElementById('error-user').innerText = "Tài khoản không đúng";
            document.getElementById('error-password').innerText = "Mật khẩu không đúng";

            document.getElementById('login-submit').innerText = 'Login';

        }, 1000)

    } else if (userName !== account.oldUserName) {
        document.getElementById('login-submit').innerText = '--Loading--';

        setTimeout(() => {
            document.getElementById('error-user').innerText = "Tài khoản không đúng";
            document.getElementById('error-password').innerText = "";

            document.getElementById('login-submit').innerText = 'Login';

        }, 1000)

    } else if (password !== account.oldPass) {
        document.getElementById('login-submit').innerText = '--Loading--';

        setTimeout(() => {
            document.getElementById('error-user').innerText = "";
            document.getElementById('error-password').innerText = "Mật khẩu không đúng";

            document.getElementById('login-submit').innerText = 'Login';

        }, 1000)

    } else if (userName === account.oldUserName && password === account.oldPass) {
        document.getElementById('login-submit').innerText = '--Loading--';
        setTimeout(() => {

            isLoggedIn = true;
            showModal = false;
            initialUI();

        }, 1000)
    }
}

// function onBlurUserName(e) {
//     console.log("onBlurUserName")
//     e.preventDefault();
//     const userName = document.querySelector('#account-input').value;

//     if (userName === "") {
//         document.getElementById('error-user').innerText = "Nhập tài khoản của bạn";
//     }
// }

// function onBlurPassword(e) {
//     console.log("onBlurPassword")
//     e.preventDefault();
//     const password = document.querySelector('#password-input').value;

//     if (password === "") {
//         document.getElementById('error-password').innerText = "Nhập mật khẩu của bạn";
//     }
// }

function closeLogin() {
    isLoggedIn = false;
    showModal = false;
    initialUI();
}

function savePass() {
    const oldPassInput = document.querySelector('#pass-old-input').value;
    const newPass = document.querySelector('#pass-new-input').value;

    if (oldPassInput === "" && newPass === "") {
        document.getElementById('error-pass-old').innerText = "Nhập mật khẩu cũ";
        document.getElementById('error-pass-new').innerText = "Nhập mật khẩu mới";

    } else if (newPass === "" && oldPassInput !== "") {
        document.getElementById('error-pass-old').innerText = "";
        document.getElementById('error-pass-new').innerText = "Nhập mật khẩu mới";

    } else if (oldPassInput === "" && newPass !== "") {
        document.getElementById('error-pass-old').innerText = "Nhập mật khẩu cũ";
        document.getElementById('error-pass-new').innerText = "";

    } else if (oldPassInput !== account.oldPass) {
        document.getElementById('save-submit').innerText = "--Loading--"

        setTimeout(() => {
            document.getElementById('error-pass-old').innerText = "Mật khẩu cũ không đúng";
            document.getElementById('error-pass-new').innerText = "";

            document.getElementById('save-submit').innerText = "Save"

        }, 1000)

    } else if (newPass === account.oldPass) {
        document.getElementById('save-submit').innerText = "--Loading--"

        setTimeout(() => {
            document.getElementById('error-pass-old').innerText = "";
            document.getElementById('error-pass-new').innerText = "Mật khẩu mới phải khác mật khẩu cũ";

            document.getElementById('save-submit').innerText = "Save"

        }, 1000)

    } else {
        document.getElementById('save-submit').innerText = "--Loading--"
        setTimeout(() => {
            isChangePass = false;
            initialUI();
            document.getElementById('change-success').innerText = "Bạn đã đổi mật khẩu thành công"

        }, 1000)
        account.oldPass = newPass;
    }
}

function onInputPassOld() {
    document.getElementById('error-pass-old').innerText = "";
}

function onInputPassNew() {
    document.getElementById('error-pass-new').innerText = "";
}

function openModal(){
    showModal = true;
    initialUI();
}

function changePass(){
    isChangePass = true;
    initialUI();
}

function returnLogin(){
    isChangePass = false;
    initialUI();
}

function initialUI(){
    if(isLoggedIn === false && showModal === false){
        document.querySelector(".login").innerHTML = `<button class="login-button" onclick="openModal()">Đăng nhập hệ thống</button>`
    }else if(showModal){
        const title = (isChangePass) ? "Change Password": "Member Login"
        document.querySelector(".login").innerHTML = 
        `<div id="modal-container" class="modal1">
            <div id="modal-heading">
                <button id="login-close" onclick="closeLogin()">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <h2 id="title">${title}</h2>
            <div id="modal-body">
                    ${isChangePass? 
                    `<div id="pass-old" class="input-box">
                        <i class="fa-sharp fa-solid fa-lock"></i>
                        <input id="pass-old-input" type="password" placeholder="Password Old"
                            oninput="onInputPassOld()">
                    </div>
                    <span class="error-message" id="error-pass-old"></span>

                    <div id="pass-new" class="input-box">
                        <i class="fa-sharp fa-solid fa-lock"></i>
                        <input id="pass-new-input" type="password" placeholder="Password New"
                            oninput="onInputPassNew()">
                    </div>
                    <span class="error-message" id="error-pass-new"></span>`
                    :
                    `<div id="modal-user" class="input-box">
                        <i class="fa-solid fa-user"></i>
                        <input id="account-input" type="text" placeholder="Username" oninput="onInputUserName()">
                    </div>
                    <span class="error-message" id="error-user"></span>

                    <div id="modal-password" class="input-box">
                        <i class="fa-sharp fa-solid fa-lock"></i>
                        <input id="password-input" type="password" placeholder="Password" oninput="onInputPassword()">
                    </div>
                    <span class="error-message" id="error-password"></span>` 
                    }
                    
                ${isChangePass ? 
                `<button id="save-submit" onclick="savePass()">Save</button>`:
                `<button id="login-submit" onclick="login(event)">Login</button>`
                }

                <span class="success-message" id="change-success"></span>
            </div>

            ${isChangePass ? 
            `<button id="btn-return-login" onclick="returnLogin()">Return Login?</button>`:
            `<button id="btn-forgot-password" onclick="changePass()">Change Password?</button>`
        }   

        </div>`
    } else if(isLoggedIn){
        document.querySelector(".login").innerHTML = `<button class="login-succes-message" onclick="openModal()">Dang nhap thanh cong</button>`
    }

}

initialUI()