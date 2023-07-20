import Header from "./components/Header/Header";
import ContactsPage from "./pages/ContactPage/ContactsPage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ChatContextProvider } from "./contexts/ChatContext";

function App() {
  return (
    <ChatContextProvider>
      <Routes>
        <Route path="/" element={<ContactsPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ChatContextProvider>
  );
}

export default App;
