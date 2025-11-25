import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SteeringLogin from './pages/admin/SteeringLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import PostEditor from './pages/admin/PostEditor';
import MembershipModal from './components/membership/MembershipModal';
import './styles/globals.css';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Router>
            <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar onJoinClick={() => setIsModalOpen(true)} />
                <MembershipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                <main style={{ flex: 1, paddingTop: '80px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/admin/login" element={<SteeringLogin />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/admin/create-post" element={<PostEditor />} />
                        <Route path="/admin/edit-post/:id" element={<PostEditor />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
