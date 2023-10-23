//pages
import ConstructorBurgersPage from "../../pages/home-page/constructor-burgers-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/login";
export const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConstructorBurgersPage />} />
        <Route path="/sig" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
