import React from 'react';
import { Routes, Route } from "react-router-dom";
import BlankLayout from '../layouts/BlankLayout';
import MainLayout from '../layouts/MainLayout';
import CheckOutPage from '../pages/checkoutPage/CheckOutPage';
import CoffeePage from '../pages/coffeePage/coffeePage';
import DetailPage from '../pages/detailPage/DetailPage';
import FavoritePage from '../pages/favoritePage/FavoritePage';
import HomePage from '../pages/homepage/HomePage';
import HotPotPage from '../pages/hotPotPage/hotPotPage';
import JuicePage from '../pages/juicePage/juicePage';
import LoginPage from '../pages/login/LoginPage';
import LoginNumberPage from '../pages/loginNumber/LoginNumberPage';
import MilkTeaPage from '../pages/milkTeaPage/milkTeaPage';
import NoodleSoupPage from '../pages/noodleSoupPage/noodleSoupPage';
import OrderPage from '../pages/order/OrderPage';
import PorridgePage from '../pages/porridgePage/porridgePage';
import ProfilePage from '../pages/profilePage/profilePage';
import RegisterPage from '../pages/register/RegisterPage';
import RicePage from '../pages/ricePage/ricePage';
import SearchPage from '../pages/searchPage/SearchPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/rice" element={<RicePage />} />
        <Route path="/noodleSoup" element={<NoodleSoupPage />} />
        <Route path="/porridge" element={<PorridgePage />} />
        <Route path="/hotpot" element={<HotPotPage />} />
        <Route path="/juice" element={<JuicePage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/milktea" element={<MilkTeaPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Route>
      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default Router