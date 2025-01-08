// Mô tả: Để tạo ra đối tượng dựa vào các thuộc tính được truyền vào
// input: Các thuộc tính
// output: Một đối tượng
function taoDoiTuongSanPham(name, price, photo, tag) {
  var sanPham = new Object();

  //tạo thuộc tính & phương thức cho đối tượng.
  // bước 1: gắn các thuộc tính cho đối tượng
  sanPham.name = name;
  sanPham.price = price;
  sanPham.photo = photo;
  sanPham.tag = tag;

  // phương thức chuyển đối tượng thành chuỗi JSON
  sanPham.toJson = function () {
    var json = JSON.stringify(this);
    return json;
  };

  // phương thức chuyển chuỗi JSOn thành đối tượng
  sanPham.fromJson = function (json) {
    var object = JSON.parse(json);
    return object;
  };

  return sanPham;
}
