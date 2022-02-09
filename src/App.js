import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navbar";
import Dashboard from "./components/dashboard";
import ErrorPage from "./components/errorpage";
import UploadForm from "./components/uploadForm";

function App() {
    return (
        <div className="App">
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/upload" element={<UploadForm />} />
                    <Route path="/error404" element={<ErrorPage />} />
                    <Route path="/" exact element={<Dashboard />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
