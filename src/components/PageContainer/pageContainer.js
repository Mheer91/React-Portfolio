import React, { useState } from "react";
import Aboutme from "../AboutMe/aboutme";
import Projects from '../Projects/projects';
import Resume from '../Resume/resume';
import ContactMe from '../ContactMe/contactme';
import NavHeader from "../Navbar/navbar";

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Aboutme');
    const renderPage = () => {
        if (currentPage === 'Aboutme') {
            return <Aboutme />;
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'ContactMe') {
            return <ContactMe />
        };
    }
    const pageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <NavHeader currentPage = {currentPage} pageChange = {pageChange} />
            {renderPage()}
        </div>
    )
};