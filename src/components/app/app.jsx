//pages
import ConstructorBurgersPage from "../../pages/home-page/constructor-burgers-page";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/login-page/login";
export const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ConstructorBurgersPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
export default App;
