const logIn = document.querySelector('#form_Login');
const emailAdmin = 'admin@gmail.com';
const passwordAdmin = 'admin1234';

logIn.addEventListener("submit", (event) => {
    //Ngừng hành động mặc định của form
    event.preventDefault();

    //Lấy giá trị của input trong hàm xử lý sự kiện
    const inputUsername = $('input[name=email]').val();
    const inputPassword = $('input[name=pwd]').val();

    if (inputUsername === "" || inputPassword === "") {
        alert("Vui lòng không để trống!");
        return;
    }

    if (inputUsername === emailAdmin && inputPassword === passwordAdmin) {
        alert("Đăng nhập thành công vào tài khoản admin.");
        window.location.href = "admin.html";
        return;
    }


    let users = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < users.length; i++) {
        var emaillogin = users[i].email;
        var pwdlogin = users[i].password;

        if (inputUsername === emaillogin && inputPassword === pwdlogin && inputUsername != emailAdmin) {
            alert("Đăng nhập thành công.");
            window.location.href = "product.html";
            return;
        }
    }
    alert("Đăng nhập thất bại. Kiểm tra lại tài khoản hoặc mật khẩu đã nhập.");
});