import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReportsCertifications = () => {
    const certifications = [
        { name: "ISO 14001:2015", description: "Environmental Management System", icon: <Award className="w-12 h-12 text-emerald-600" /> },
        { name: "ISO 9001:2015", description: "Quality Management System", icon: <ShieldCheck className="w-12 h-12 text-emerald-600" /> },
        { name: "OHSAS 18001", description: "Occupational Health and Safety", icon: <ShieldCheck className="w-12 h-12 text-emerald-600" /> },
    ];

    const reports = [
        { title: "Annual Sustainability Report 2024", size: "2.4 MB", date: "Jan 2025" },
        { title: "Environmental Impact Assessment", size: "1.8 MB", date: "Dec 2024" },
        { title: "Waste Diversion Audit", size: "3.1 MB", date: "Nov 2024" },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="pt-20">
                <section className="py-20 bg-slate-900 text-white text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Verified Sustainability
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto px-4">
                        Our commitment to compliance, transparency, and excellence.
                    </p>
                </section>

                <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Certifications & Standards</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                            >
                                <div className="flex justify-center mb-6">{cert.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.name}</h3>
                                <p className="text-slate-600">{cert.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Download Reports</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reports.map((report, index) => (
                                <div key={index} className="border border-slate-200 p-6 rounded-xl hover:border-emerald-500 transition-colors group cursor-pointer">
                                    <div className="flex items-start justify-between mb-4">
                                        <FileText className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                                        <span className="text-sm text-slate-500">{report.date}</span>
                                    </div>
                                    <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-700">{report.title}</h3>
                                    <p className="text-sm text-slate-500">{report.size} • PDF</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ReportsCertifications;
