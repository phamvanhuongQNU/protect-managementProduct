const md5 = require("md5");
const Users = require("../../models/user.model");
const randomString = require("../../helpers/randomString");

// [GET] users
module.exports.index = async (req, res) => {
  const find = {
    deleted: false,
  };

  const data = await Users.find(find).select("role fullName email");
  res.status(200).json({
    data: data,
  });
};
// [GET]  users/detail/:id
module.exports.detail = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await Users.findOne({ _id: id });

    res.status(200).json({
      data: data,
    });
  } catch {
    res.status(404).json({
      message: "NOT FOUND",
    });
  }
};
// [PUT] users/edit/:id
module.exports.edit = async (req, res) => {
  try {
    
    await Users.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({
      message: "Sửa thành công",
    });
  } catch {
    res.status(404).json({
      message: "Sửa thất bại",
    });
  }
};

// [POST] user/create
module.exports.create = async (req, res) => {
  try {
    if (req.body.password !== req.body.repeatPassword){
      res.status(500).json({
        message: "Xác nhận mật khẩu không khớp với mật khẩu",
      });
      return
    }
    const newUser = new Users({
      fullName: req.body.fullName,
      email: req.body.email,
      password: md5(req.body.password),
      address: {
        // Tỉnh
        province: req.body.address.province,
        // Thành phố,thị xã
        district: req.body.address.district,
        // Xã phường
        ward: req.body.address.ward,
        // Đường
        street: req.body.address.street,
      },
      phone: req.body.phone,
      token: randomString(30),
      role :req.body.role
    });
    const data = await newUser.save();
    res.status(200).json({
      data: data,
      message: "Thêm người dùng thành công",
    });
  } catch {
    res.status(500).json({
      code: 500,
      message: "Thêm thất bại",
    });
  }
};
