import AppHeader from "../app-header/app-header";
import ConstructorBurgersPage from "../../pages/home-page/constructor-burgers-page";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "../../pages/form-pages/login-page/login";
import RegistrationPage from "../../pages/form-pages/registration-page/registration";
import ForgotPasswordPage from "../../pages/form-pages/forgot-password-page/forgot-password";
import ResetPasswordPage from "../../pages/form-pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile-page/profile";
import { OnlyAuth } from "../protected-route/protected-route";
import { OnlyUnAuth } from "../protected-route/protected-route";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUserAuth } from "../../services/pages/user/action";
import OrdersPage from "../../pages/orders-page/orders-page";
import ProfileData from "../../pages/profile-page/profile-data";
import IngridientsDetails from "../modals/ingridients-details/ingridients-details";
import Modal from "../modals/modal/modal";
import { useLocation } from "react-router-dom";
import { getIngredients } from "../../services/burger-ingredients/actions";
import OrderInfo from "../modals/order-info/order-info";
import OrdersCards from "../../pages/orders-page/orders-cards";
import OrderInfoPage from "../modals/order-info/order-info-page";
export const url = "https://norma.nomoreparties.space/api/ingredients";
export const baseUrl = "https://norma.nomoreparties.space";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <div>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<ConstructorBurgersPage />} />
        <Route path="/ingredients/:id" element={<IngridientsDetails />} />

        <Route
          path="/login"
          element={<OnlyUnAuth component={<LoginPage />} />}
        />
        <Route
          path="/registration"
          element={<OnlyUnAuth component={<RegistrationPage />} />}
        />
        <Route
          path="/forgot-password"
          element={<OnlyUnAuth component={<ForgotPasswordPage />} />}
        />
        <Route
          path="/reset-password"
          element={<OnlyUnAuth component={<ResetPasswordPage />} />}
        />
        <Route
          path="/profile"
          element={<OnlyAuth component={<ProfilePage />} />}
        >
          <Route index element={<ProfileData />} />
          <Route path="orders" element={<OrdersCards />} />
        </Route>
        <Route path="profile/orders/:number" element={<OrderInfoPage />} />
        <Route path="/feed" element={<OrdersPage />} />
        <Route path="/feed/:number" element={<OrderInfoPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal onClose={handleModalClose}>
                <IngridientsDetails />
              </Modal>
            }
          />
        </Routes>
      )}
      {background && (
        <Routes>
          <Route
            path="/feed/:number"
            element={
              <Modal onClose={handleModalClose}>
                <OrderInfo />
              </Modal>
            }
          />
        </Routes>
      )}
      {background && (
        <Routes>
          <Route
            path="/profile/orders/:number"
            element={
              <Modal onClose={handleModalClose}>
                <OrderInfo />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}
export default App;
