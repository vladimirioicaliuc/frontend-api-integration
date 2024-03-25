import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../src/modules/home";
import NotMatch from "../src/modules/notfound";
import Admin from "./modules/admin";
import Edit from "./modules/edit";
import Contact from "./modules/contact";

export default () => {
    return (
        <div>
          <Router>
            <Routes>
                <Route path="home" element={<Dashboard/>} />
                <Route path="admin" element={<Admin/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="edit/:id" element={<Edit/>} />
                <Route path="/" element={<Navigate to="/home"/>} />
                <Route path="/not-found" element={<NotMatch />} />
                <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
            </Routes>
        </Router>
        </div>
        
    );
};
