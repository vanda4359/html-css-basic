const account = {
    userName: "admin",
    password: "admin"
}

let oldPass = "admin"

function openModal() {
    document.getElementsByTagName("form")[0].reset();

    document.getElementById('modal-container').style.display = 'block';
    document.getElementById('login-button').style.display = 'none';
    document.getElementById('login-succes-message').style.display = 'none';

    document.getElementById('change-success').style.display = 'none';

    document.getElementById('login-submit').style.display = 'block';
    document.getElementById('loading-submit').style.display = 'none';

    onInputUserName();
    onInputPassword();
}

function onBlurUserName() {
    const userName = document.querySelector('#account-input').value;

    if (userName === "") {
        document.getElementById('error-user-empty').style.display = 'block';
        document.getElementById('error-user-wrong').style.display = 'none';
    }
}

function onBlurPassword() {
    const password = document.querySelector('#password-input').value;

    if (password === "") {
        document.getElementById('error-password-empty').style.display = 'block';
        document.getElementById('error-password-wrong').style.display = 'none';
    }
}

function onInputUserName() {
    document.getElementById('error-user-wrong').style.display = 'none';
    document.getElementById('error-user-empty').style.display = 'none';
}

function onInputPassword() {
    document.getElementById('error-password-wrong').style.display = 'none';
    document.getElementById('error-password-empty').style.display = 'none';
}

function login() {

    document.getElementById('login-submit').style.display = 'block';
    document.getElementById('loading-submit').style.display = 'none';

    const userName = document.querySelector('#account-input').value;
    const password = document.querySelector('#password-input').value;

    if (userName === "" && password === "") {
        document.getElementById('error-user-empty').style.display = 'block';
        document.getElementById('error-password-empty').style.display = 'block';
        
    } else if (userName === "" && password !== "") {
        document.getElementById('error-user-empty').style.display = 'block'
        document.getElementById('error-password-wrong').style.display = 'none';
        
    } else if (userName !== "" && password === "") {
        document.getElementById('error-password-empty').style.display = 'block';
        document.getElementById('error-password-wrong').style.display = 'none';
        document.getElementById('error-user-empty').style.display = 'none';
        document.getElementById('error-user-wrong').style.display = 'none';
        
    } else if (userName !== "admin" && password !== oldPass) {
        document.getElementById('login-submit').style.display = 'none';
        document.getElementById('loading-submit').style.display = 'block';
        setTimeout(() => {
            document.getElementById('error-user-wrong').style.display = 'block';
            document.getElementById('error-user-empty').style.display = 'none';
            document.getElementById('error-password-wrong').style.display = 'block';
            document.getElementById('error-password-empty').style.display = 'none';

            document.getElementById('login-submit').style.display = 'block';
            document.getElementById('loading-submit').style.display = 'none';
        }, 1000)
        
    } else if (userName !== "admin") {
        document.getElementById('login-submit').style.display = 'none';
        document.getElementById('loading-submit').style.display = 'block';
        setTimeout(() => {
            document.getElementById('error-user-wrong').style.display = 'block';
            document.getElementById('error-user-empty').style.display = 'none';
            document.getElementById('error-password-wrong').style.display = 'none';
            document.getElementById('error-password-empty').style.display = 'none';

            document.getElementById('login-submit').style.display = 'block';
            document.getElementById('loading-submit').style.display = 'none';
        }, 1000)
        
    } else if (password !== oldPass) {
        document.getElementById('login-submit').style.display = 'none';
        document.getElementById('loading-submit').style.display = 'block';
        setTimeout(() => {
            document.getElementById('error-user-wrong').style.display = 'none';
            document.getElementById('error-user-empty').style.display = 'none';
            document.getElementById('error-password-wrong').style.display = 'block';
            document.getElementById('error-password-empty').style.display = 'none';

            document.getElementById('login-submit').style.display = 'block';
            document.getElementById('loading-submit').style.display = 'none';
        }, 1000)

    } else if (userName === "admin" && password === oldPass) {
        document.getElementById('login-submit').style.display = 'none';
        document.getElementById('loading-submit').style.display = 'block';
        setTimeout(() => {
            document.getElementById('modal-container').style.display = 'none';
            document.getElementById('login-button').style.display = 'none';
            document.getElementById('login-succes-message').style.display = 'block';

        }, 1000)
    }
}

function closeLogin() {
    document.getElementById('modal-container').style.display = 'none';
    document.getElementById('login-button').style.display = 'block';
}

// Chuyển sang thay đổi password

function changePass() {
    document.getElementsByTagName("form")[1].reset();

    document.getElementById('modal-body').style.display = 'none';
    document.getElementById('change-body').style.display = 'block';

    document.getElementById('btn-forgot-password').style.display = 'none';
    document.getElementById('btn-return-login').style.display = 'block';

    document.getElementById('save-submit').style.display = 'block';
    document.getElementById('loading-submit-save').style.display = 'none';

    onInputPassOld();
    onInputPassNew();
}

// Quay về Login

function returnLogin() {
    document.getElementsByTagName("form")[0].reset();

    document.getElementById('modal-body').style.display = 'block';
    document.getElementById('change-body').style.display = 'none';

    document.getElementById('change-success').style.display = 'none';

    document.getElementById('btn-forgot-password').style.display = 'block';
    document.getElementById('btn-return-login').style.display = 'none';

    onInputUserName();
    onInputPassword();
}

function savePass() {
    const oldPassInput = document.querySelector('#pass-old-input').value;
    const newPass = document.querySelector('#pass-new-input').value;

    if (oldPassInput === "" && newPass === "") {
        document.getElementById('error-pass-old-empty').style.display = 'block';
        document.getElementById('error-pass-old').style.display = 'none';
        document.getElementById('error-pass-new-empty').style.display = 'block';

    } else if (newPass === "" && oldPassInput !== "") {
        document.getElementById('error-pass-new-empty').style.display = 'block';
        document.getElementById('error-pass-old').style.display = 'none';
        document.getElementById('error-pass-old-empty').style.display = 'none';

    } else if (oldPassInput === "" && newPass !== "") {
        document.getElementById('error-pass-new-empty').style.display = 'none';
        document.getElementById('error-pass-old').style.display = 'none';
        document.getElementById('error-pass-old-empty').style.display = 'block';

    } else if (oldPassInput !== oldPass) {
        document.getElementById('save-submit').style.display = 'none';
        document.getElementById('loading-submit-save').style.display = 'block';
        setTimeout(() => {
            document.getElementById('error-pass-old').style.display = 'block';
            document.getElementById('error-pass-new-empty').style.display = 'none';
            document.getElementById('error-pass-old-empty').style.display = 'none';

            document.getElementById('save-submit').style.display = 'block';
            document.getElementById('loading-submit-save').style.display = 'none';
        }, 1000)

    } else if (newPass === oldPass) {
        document.getElementById('save-submit').style.display = 'none';
        document.getElementById('loading-submit-save').style.display = 'block';
        setTimeout(() => {
            document.getElementById('error-pass-new').style.display = 'block';
            document.getElementById('error-pass-old-empty').style.display = 'none';

            document.getElementById('save-submit').style.display = 'block';
            document.getElementById('loading-submit-save').style.display = 'none';
        }, 1000)

    } else {
        document.getElementById('save-submit').style.display = 'none';
        document.getElementById('loading-submit-save').style.display = 'block';
        setTimeout(() => {
            document.getElementById('modal-body').style.display = 'block';
            document.getElementById('change-body').style.display = 'none';
            document.getElementById('change-success').style.display = 'block';

            document.getElementById('btn-forgot-password').style.display = 'block';
            document.getElementById('btn-return-login').style.display = 'none';
        }, 1000)

        oldPass = newPass;
    }
}

function onInputPassOld() {
    document.getElementById('error-pass-old-empty').style.display = 'none';
    document.getElementById('error-pass-old').style.display = 'none';
}

function onInputPassNew() {
    document.getElementById('error-pass-new-empty').style.display = 'none';
    document.getElementById('error-pass-new').style.display = 'none';
}