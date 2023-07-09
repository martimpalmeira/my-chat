import Header from "./components/Header/Header";
import ContactsPage from "./pages/ContactPage/ContactsPage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactsPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
