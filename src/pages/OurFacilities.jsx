import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OurFacilities = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-20">
        <section className="relative py-20 bg-emerald-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Innovation Centers
            </motion.h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              State-of-the-art facilities driving the future of waste management and circular economy.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Advanced Processing Units</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Our facilities are equipped with cutting-edge technology to sort, process, and recycle waste with maximum efficiency. From automated sorting lines to specialized chemical recycling units, we ensure that every piece of waste finds a new purpose.
                </p>
                <ul className="space-y-4">
                  {['Automated Sorting', 'Chemical Recycling', 'Organic Composting', 'E-Waste Recovery'].map((item) => (
                    <li key={item} className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1503596476-1c12a8ab9a86?auto=format&fit=crop&q=80" 
                  alt="Processing Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OurFacilities;
