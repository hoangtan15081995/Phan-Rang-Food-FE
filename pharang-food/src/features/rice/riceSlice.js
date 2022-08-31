import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  riceList: [
    { id: "cơm1", quantity: 1, name: "Cơm chiên Gia Phú", catagory: "Cơm", price: "30.000", address: "30 Ngô Gia Tự thành phố Phan Rang Tháp Chàm", rating: "4", image: "https://i.ytimg.com/vi/FR4DH5sSysI/maxresdefault.jpg" },
    { id: "cơm2", quantity: 1,name: "Cơm chiên Tâm Phú", catagory: "Cơm", price: "25.000", address: "40 Ngô Gia Tự thành phố Phan Rang Tháp Chàm", rating: "5", image: "http://www.nhahangquangon.com/wp-content/uploads/2021/10/com-chien-duong-chau1.jpg" },
    { id: "cơm3", quantity: 1,name: "Cơm niêu Gia Bảo", catagory: "Cơm", price: "30.000", address: "50 Ngô Gia Tự thành phố Phan Rang Tháp Chàm", rating: "3", image: "https://www.quan33detham.vn/wp-content/uploads/2018/08/1-56.jpg" },
    { id: "cơm4", quantity: 1,name: "Cơm chiên Vạn Phú", catagory: "Cơm", price: "30.000", address: "60 Ngô Gia Tự thành phố Phan Rang Tháp Chàm", rating: "5", image: "https://i.ytimg.com/vi/FR4DH5sSysI/maxresdefault.jpg" },
    { id: "cơm5", quantity: 1,name: "Cơm chiên Gia Phú 1", catagory: "Cơm", price: "30.000", address: "70 Ngô Gia Tự thành phố Phan Rang Tháp Chàm", rating: "4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5oJQbws889RcWpSGQEnlveR5jO7dKHR6Om6qRxtgFtq_AB7DZgPvpSD4P555uDsNGjk&usqp=CAU" },
    { id: "cơm6", quantity: 1,name: "Cơm chiên Gia Phú 2", catagory: "Cơm", price: "30.000", address: "80 Ngô Gia Tự thành phố Phan Rang Tháp Chàm", rating: "5", image: "https://cdn.tgdd.vn/2021/11/CookRecipe/Avatar/com-chien-bo-toi-thumbnail-1.jpg" },
    { id: "cơm7", quantity: 1,name: "Cơm chiên Gia Phú 3", catagory: "Cơm", price: "30.000", address: "90 Ngô Gia Tự thành phố Phan Rang Tháp Chàm", rating: "3", image: "https://news-thumb2.ymgstatic.com/YanThumbNews/2167221/202003/07ec7d77-6300-40c3-b2b1-0a8604cdce95.jpg" },
    { id: "cơm8", quantity: 1,name: "Cơm chiên Gia Phú 4", catagory: "Cơm", price: "30.000", address: "100 Ngô Gia Tự thành phố Phan Rang Tháp Chàm", rating: "3", image: "https://tiengtrunganhduong.com/Images/images/4-mon-ngon-trung-quoc-(1).jpg" },
    { id: "cơm9", quantity: 1,name: "Cơm chiên Gia Phú 5", catagory: "Cơm", price: "30.000", address: "30 Thống Nhất thành phố Phan Rang Tháp Chàm", rating: "5", image: "https://nuocmamtin.com/wp-content/uploads/2021/10/com-rang-thap-cam-2.jpg" },
    { id: "cơm10", quantity: 1,name: "Cơm chiên Gia Phú 6", catagory: "Cơm", price: "30.000", address: "40 Thống Nhất thành phố Phan Rang Tháp Chàm", rating: "4", image: "https://media.cooky.vn/article/s640/cooky-article-cover-b4082.jpg" },
    { id: "cơm12", quantity: 1, name: "Cơm chiên Gia Phú 8", catagory: "Cơm", price: "30.000", address: "60 Thống Nhất thành phố Phan Rang Tháp Chàm", rating: "3", image: "https://bazantravel.com/cdn/medias/uploads/28/28679-com-chien-duong-chau-700x392.jpg" },
    { id: "cơm11", quantity: 1, name: "Cơm chiên Gia Phú 7", catagory: "Cơm", price: "30.000", address: "50 Thống Nhất thành phố Phan Rang Tháp Chàm", rating: "5", image: "https://bazantravel.com/cdn/medias/uploads/35/35019-com-rang-trung-quoc.png" },
    { id: "cơm12", quantity: 1,name: "Cơm chiên Gia Phú 8", catagory: "Cơm", price: "30.000", address: "60 Thống Nhất thành phố Phan Rang Tháp Chàm", rating: "3", image: "https://bazantravel.com/cdn/medias/uploads/28/28679-com-chien-duong-chau-700x392.jpg" },
    { id: "cơm13", quantity: 1,name: "Cơm chiên Gia Phú 9", catagory: "Cơm", price: "30.000", address: "70 Thống Nhất thành phố Phan Rang Tháp Chàm", rating: "4", image: "https://i.ytimg.com/vi/DjaRMcj_STU/maxresdefault.jpg" },
    { id: "cơm14", quantity: 1,name: "Cơm chiên Gia Phú 10", catagory: "Cơm", price: "30.000", address: "80 Thống Nhất thành phố Phan Rang Tháp Chàm", rating: "5", image: "https://cdn.beptruong.edu.vn/wp-content/uploads/2018/11/com-chien-duong-chau.jpg" },
  ],
};

const slice = createSlice({
  name: "rice",
  initialState,
  reducers: {
    setRiceSuccess(state, action) {
      state.riceList = action.payload;
    },
  },
});
export const setRice = (rice) => async (dispatch) => {
  try {
    dispatch(slice.actions.setRiceSuccess(rice));
  } catch (error) {
    console.log(error);
  }
};
export default slice.reducer;