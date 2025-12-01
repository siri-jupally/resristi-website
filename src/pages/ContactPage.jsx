import React from 'react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <div className="pt-20">
                <ContactSection />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;

