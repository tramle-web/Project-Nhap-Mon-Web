// Các phần tử trong form
const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const rePasswordElement = document.getElementById("repassword");
const termsCheckbox = document.getElementById("iAgree");

// Các phần tử thông báo lỗi
const userNameError = document.getElementById("userNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const rePassWordError = document.getElementById("rePassWordError");
const termsError = document.getElementById("termsError");

// Hàm kiểm tra định dạng email
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Lắng nghe sự kiện submit form đăng ký tài khoản
formRegister.addEventListener("submit", function (e) {
  // Ngăn chặn sự kiện load lại trang và hiển thị dữ liệu trên URL
  e.preventDefault();

  let isValid = true;

  // Kiểm tra họ và tên
  if (!userNameElement.value.trim()) {
    userNameError.style.display = "block";
    userNameError.innerHTML = "Họ và tên không được để trống";
    isValid = false;
  } else if (userNameElement.value.trim().length < 5) {
    userNameError.style.display = "block";
    userNameError.innerHTML = "Họ và tên phải có ít nhất 5 ký tự";
    isValid = false;
  } else {
    userNameError.style.display = "none";
  }

  // Kiểm tra email
  if (!emailElement.value.trim()) {
    emailError.style.display = "block";
    emailError.innerHTML = "Email không được để trống";
    isValid = false;
  } else if (!validateEmail(emailElement.value)) {
    emailError.style.display = "block";
    emailError.innerHTML = "Email không đúng định dạng";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Kiểm tra mật khẩu
  if (!passwordElement.value.trim()) {
    passwordError.style.display = "block";
    passwordError.innerHTML = "Mật khẩu không được để trống";
    isValid = false;
  } else if (passwordElement.value.trim().length < 8) {
    passwordError.style.display = "block";
    passwordError.innerHTML = "Mật khẩu phải có ít nhất 8 ký tự";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  // Kiểm tra xác nhận mật khẩu
  if (!rePasswordElement.value.trim()) {
    rePassWordError.style.display = "block";
    rePassWordError.innerHTML = "Vui lòng nhập lại mật khẩu";
    isValid = false;
  } else if (passwordElement.value !== rePasswordElement.value) {
    rePassWordError.style.display = "block";
    rePassWordError.innerHTML = "Mật khẩu không khớp";
    isValid = false;
  } else {
    rePassWordError.style.display = "none";
  }

  // Kiểm tra điều khoản
  if (!termsCheckbox.checked) {
    termsError.style.display = "block";
    termsError.innerHTML = "Bạn phải đồng ý với điều khoản và chính sách!";
    isValid = false;
  } else {
    termsError.style.display = "none";
  }

  // Nếu hợp lệ, lưu vào localStorage
  if (isValid) {
    const newUser = {
      userName: userNameElement.value,
      email: emailElement.value,
      password: passwordElement.value,
      //  role: 0,
      //  dn: true,
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some(user => user.email === newUser.email);
    if (emailExists) {
      emailError.style.display = "block";
      emailError.innerHTML = "Email đã tồn tại!";
    } else {
      emailError.style.display = "none";

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Đăng ký thành công!");
      window.location.href = "./dangnhap.html"; // Chuyển hướng
    }
  }
});