var itemList = {
    "sp001": {
        "name": "Áo Thể Dục ",
        "price": 75000,
        "photo": "img/aotheduc.png",
        "tag": "Nổi Bật"
    },
    "sp002": {
        "name": "Áo Đồng Phục ",
        "price": 80000,
        "photo": "img/aodongphuc.png",
        "tag": "Nổi Bật"
    },
    "sp003": {
        "name": "Áo Viên Chức ",
        "price": 100000,
        "photo": "img/aovienchuc.png",
        "tag": "Nổi Bật"
    },
    "sp004": {
        "name": "Đồng Phục Trường Kinh Tế ",
        "price": 98000,
        "photo": "img/cse.png",
        "tag": "Nổi Bật"
    },
    "sp005": {
        "name": "Áo Blouse ",
        "price": 125000,
        "photo": "img/blouse.png",
        "tag": "Được Yêu Thích"
    },
    "sp006": {
        "name": "Ly Nước ",
        "price": 26000,
        "photo": "img/coc.png",
        "tag": "Mới nhất"
    },
    "sp007": {
        "name": "Dây Đeo Xanh",
        "price": 17000,
        "photo": "img/daydeo.png",
        "tag": "Được mua nhiều nhất"
    },
    "sp008": {
        "name": "Dù ",
        "price": 128000,
        "photo": "img/du.png",
        "tag": "Được mua nhiều nhất"
    },
    "sp009": {
        "name": "Móc Khóa ",
        "price": 29000,
        "photo": "img/mockhoa.png",
        "tag": "Được mua nhiều nhất"
    },
    "sp010": {
        "name": "Nón Bảo Hiểm ",
        "price": 80000,
        "photo": "img/nonbaohiem.png",
        "tag": "Mới nhất"
    },
    "sp011": {
        "name": "Nón Lưỡi Chai ",
        "price": 50000,
        "photo": "img/nonluoichai.png",
        "tag": "Được yêu thích"
    },
    "sp012": {
        "name": "Túi Vải ",
        "price": 20000,
        "photo": "img/tuivai.png"
    },
    "sp013": {
        "name": "Dây Đeo Màu Tím ",
        "price": 17000,
        "photo": "img/daydeotim.png",
        "tag": "Mới nhất"
    },
    "sp014": {
        "name": "Áo Blouse Tay Dài ",
        "price": 150000,
        "photo": "img/blousetaydai.png",
        "tag": "Không Có"
    },
    "sp015": {
        "name": "Áo Sơ Mi Tay Ngắn",
        "price": 100000,
        "photo": "img/aosomitayngan.png",
        "tag": "Không Có"
    },
    "sp016": {
        "name": "Áo Sơ Mi Tay Dài",
        "price": 120000,
        "photo": "img/aosomitaydai.png",
        "tag": "Không Có"
    }
};

/*Hàm thêm sản phẩm vào Giỏ hàng**/
function addCart(code) {


    var number = parseInt(document.getElementById(code).value);
    var name = itemList[code].name;
    if (number == 0) return;

    if (typeof localStorage[code] === "undefined") {
        window.localStorage.setItem(code, number)
    } else {
        current = parseInt(window.localStorage.getItem(code))
        if (number + current > 100) {
            window.localStorage.setItem(code, 100);
            alert('Số lượng >100');
            return;
        } else {
            window.localStorage.setItem(code, current + number)
        }
    }
    alert('Đã thêm sản phẩm ' + name + "\n" + 'Số lượng: ' + number);
}

function removeCart(code) {
    window.localStorage.removeItem(code);
    showCart();
}

function showCart() {
    var bill = 0;
    for (var i = 0; i < window.localStorage.length; i++) {
        if (typeof itemList[window.localStorage.key(i)] === "undefined")
            continue;
        var addtr = document.createElement("tr");
        var key = window.localStorage.key(i);
        var item = itemList[key];
        var soLuong = window.localStorage.getItem(key);

        var addtdImg = document.createElement("td");
        addtdImg.innerHTML = '<img src="' + item.photo + '" style="width: 100px;">';

        var addName = document.createElement("td");
        addName.innerHTML = item.name;

        var addtdSoluong = document.createElement("td");
        addtdSoluong.innerHTML = soLuong;

        var addtdPrice = document.createElement("td");
        addtdPrice.innerHTML = '<span>' + item.price * soLuong + ' VND' + '</span>';
        bill += item.price * soLuong;

        var addtdOp = document.createElement("td");
        addtdOp.innerHTML = '<button style = "background: red;">' + 'Delete' + '</button>';
        addtdOp.onclick = function () { removeCart(key); };

        addtr.append(addtdImg);
        addtr.append(addName);
        addtr.append(addtdSoluong);
        addtr.append(addtdPrice);
        addtr.append(addtdOp);
        $('.cart-table').append(addtr);
    }
    var adddiv = document.createElement('div');
    adddiv.innerHTML = '<p style="font-weight: bold; text-align: right; padding-top: 10px;"><i class="fa-solid fa-money-bill" style="color: green; padding: 0 5; font-size: 20px;"></i> Tổng thanh toán:<span> ' + bill + ' VND</span></p>';
    $('#form').append(adddiv);
}

function billCart() {
    window.location.assign('bill.html');
}

function historyCart() {
    var bill = 0;
    for (var i = 0; i < window.localStorage.length; i++) {
        if (typeof itemList[window.localStorage.key(i)] === "undefined")
            continue;
        var addtr = document.createElement("tr");
        var key = window.localStorage.key(i);
        var item = itemList[key];
        var soLuong = window.localStorage.getItem(key);

        var addtdImg = document.createElement("td");
        addtdImg.innerHTML = '<img src="' + item.photo + '" style="width: 100px;">';

        var addName = document.createElement("td");
        addName.innerHTML = item.name;

        var addtdSoluong = document.createElement("td");
        addtdSoluong.innerHTML = soLuong;

        var addtdPrice = document.createElement("td");
        addtdPrice.innerHTML = '<span>' + item.price * soLuong + ' VND' + '</span>';
        bill += item.price * soLuong;

        addtr.append(addtdImg);
        addtr.append(addName);
        addtr.append(addtdSoluong);
        addtr.append(addtdPrice);
        $('.cart-table').append(addtr);
    }
    var adddiv = document.createElement('div');
    adddiv.innerHTML = '<p style="font-weight: bold; text-align: right; padding-top: 10px;"><i class="fa-solid fa-money-bill" style="color: green; font-size: 20px;"></i> Tổng thanh toán:<span> ' + bill + ' VND</span></p>';
    $('#form').append(adddiv);
}

// Chuyển dữ liệu `itemList` thành mảng và lưu vào localStorage
function saveToLocalStorage(itemList) {
    let productArray = Object.entries(itemList).map(([id, product]) => ({
        id: id,
        ...product
    }));
    localStorage.setItem("listProduct", JSON.stringify(productArray));
}

// Các biến toàn cục để quản lý phân trang
let currentPage = 1;
const itemsPerPage = 10; // Số sản phẩm mỗi trang
// Hiển thị danh sách sản phẩm
function displayProducts() {
    let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];
    let tableBody = document
        .getElementById("productTable")
        .getElementsByTagName("tbody")[0];

    // Xóa nội dung bảng trước khi thêm mới
    tableBody.innerHTML = "";

    // Xác định sản phẩm cần hiển thị theo trang hiện tại
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = Math.min(startIndex + itemsPerPage, listProduct.length);
    let productsToDisplay = listProduct.slice(startIndex, endIndex);

    productsToDisplay.forEach((product, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${startIndex + index + 1}</td>
            <td>${product.name}</td>
            <td>${product.price} VND</td>
            <td><img src="${product.photo}" style="width: 50px; height: 50px;"></td>
            <td>${product.tag || "Không có"}</td>
            <td><button onclick="deleteProduct(${startIndex + index})">Xóa</button></td>
        `;
    });

    displayPagination(listProduct.length);
}
// Hiển thị các nút phân trang
function displayPagination(totalItems) {
    let paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    let totalPages = Math.ceil(totalItems / itemsPerPage);

    let prevButton = document.createElement("button");
    prevButton.textContent = "Previous page";
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        currentPage--;
        displayProducts();
    };
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        let pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.className = i === currentPage ? "active" : "";
        pageButton.onclick = () => {
            currentPage = i;
            displayProducts();
        };
        paginationContainer.appendChild(pageButton);
    }

    // Nút "Tiếp"
    let nextButton = document.createElement("button");
    nextButton.textContent = "Next page";
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        currentPage++;
        displayProducts();
    };
    paginationContainer.appendChild(nextButton);
}

// Xóa sản phẩm theo chỉ mục
function deleteProduct(index) {
    let listProduct = JSON.parse(localStorage.getItem("listProduct")) || [];
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
        listProduct.splice(index, 1);
        localStorage.setItem("listProduct", JSON.stringify(listProduct));
        displayProducts();
    }
}

// Khi trang được tải, lưu dữ liệu và hiển thị
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("listProduct")) {
        saveToLocalStorage(itemList);
    }
    displayProducts();
});