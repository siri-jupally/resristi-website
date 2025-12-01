import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Leaf, CheckCircle, ArrowLeft, TrendingUp, Users, Award, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const AACPage = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            '.hero-content',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );

        gsap.fromTo(
            '.content-section',
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content-container',
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);

    const benefits = [
        'Reduces composting time from 90 days to just 30 days',
        'Produces premium-grade organic compost rich in NPK nutrients',
        'Eliminates methane emissions from traditional composting',
        'Reduces dependency on chemical fertilizers by 60%',
        'Improves soil health and water retention capacity',
        'Completely odor-free process with bio-filter technology'
    ];

    const applications = [
        { title: 'Agriculture', desc: 'Enhances crop yield and soil fertility' },
        { title: 'Horticulture', desc: 'Perfect for nurseries and plant cultivation' },
        { title: 'Landscaping', desc: 'Ideal for parks, gardens, and green spaces' },
        { title: 'Soil Restoration', desc: 'Rehabilitates degraded and barren land' }
    ];

    const specs = [
        { label: 'Processing Capacity', value: '1,000 kg/day' },
        { label: 'Composting Duration', value: '30 days' },
        { label: 'Output Quality', value: 'Grade A Organic Compost' },
        { label: 'Energy Consumption', value: 'Solar-powered, minimal grid use' },
        { label: 'Odor Control', value: 'Bio-filter system, 99% odor reduction' },
        { label: 'Moisture Content', value: 'Optimized 40-50% for microbial activity' }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-12 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)
            `,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/facilities" className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to All Facilities</span>
                    </Link>

                    <div className="hero-content grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white border-2 border-emerald-200 px-4 py-2 rounded-full shadow-lg">
                                <Leaf className="w-4 h-4 text-emerald-600" />
                                <span className="text-emerald-900 font-bold text-xs tracking-wide">ORGANIC WASTE PROCESSING</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Accelerated Anaerobic Composting
                                <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">
                                    (AAC Technology)
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our AAC technology revolutionizes organic waste management by converting food waste, garden waste, and agricultural residue into premium-grade compost in just 30 days — three times faster than traditional methods.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white border-2 border-emerald-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-emerald-700">1,000 kg</p>
                                    <p className="text-sm text-slate-600 font-semibold">Daily Capacity</p>
                                </div>
                                <div className="bg-white border-2 border-emerald-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-emerald-700">30 Days</p>
                                    <p className="text-sm text-slate-600 font-semibold">Composting Time</p>
                                </div>
                                <div className="bg-white border-2 border-emerald-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-emerald-700">100%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Organic Output</p>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder Image */}
                        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-emerald-200">
                            <div className="text-center">
                                <Leaf className="w-32 h-32 text-emerald-600 mx-auto mb-4 opacity-50" />
                                <p className="text-emerald-800 font-bold text-lg">AAC Facility Image</p>
                                <p className="text-emerald-700 text-sm">Composting Units & Processing Area</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="content-container py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                    {/* How It Works */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">How AAC Technology Works</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6">
                                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-black text-xl mb-4">1</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Waste Collection & Segregation</h3>
                                <p className="text-slate-600">Organic waste is collected and segregated to remove contaminants. Material is shredded to optimal particle size for faster decomposition.</p>
                            </div>
                            <div className="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-200 rounded-xl p-6">
                                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-xl mb-4">2</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Microbial Inoculation</h3>
                                <p className="text-slate-600">Proprietary microbial accelerators are added to boost decomposition. Temperature and moisture are controlled for optimal bacterial activity.</p>
                            </div>
                            <div className="bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-200 rounded-xl p-6">
                                <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-black text-xl mb-4">3</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Curing & Quality Testing</h3>
                                <p className="text-slate-600">Compost is cured and tested for NPK content, pH levels, and pathogen elimination before packaging and distribution.</p>
                            </div>
                        </div>
                    </section>

                    {/* Key Benefits */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Key Benefits</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4 hover:border-emerald-400 hover:shadow-lg transition-all">
                                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                    <span className="text-slate-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Applications */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Applications</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {applications.map((app, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6 hover:scale-105 transition-transform">
                                    <h3 className="text-lg font-bold text-emerald-800 mb-2">{app.title}</h3>
                                    <p className="text-sm text-slate-600">{app.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technical Specifications */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Technical Specifications</h2>
                        <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {specs.map((spec, idx) => (
                                    <div key={idx} className="border-l-4 border-emerald-600 pl-4">
                                        <p className="text-sm text-slate-600 font-semibold mb-1">{spec.label}</p>
                                        <p className="text-lg font-bold text-slate-900">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Environmental Impact */}
                    <section className="content-section bg-gradient-to-br from-emerald-900 to-teal-900 rounded-2xl p-12 text-white">
                        <h2 className="text-3xl font-black mb-6">Environmental Impact</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <TrendingUp className="w-12 h-12 mb-4 text-emerald-400" />
                                <p className="text-4xl font-black mb-2">365 Tons</p>
                                <p className="text-emerald-200">Organic waste diverted from landfills annually</p>
                            </div>
                            <div>
                                <Award className="w-12 h-12 mb-4 text-emerald-400" />
                                <p className="text-4xl font-black mb-2">60%</p>
                                <p className="text-emerald-200">Reduction in chemical fertilizer dependency</p>
                            </div>
                            <div>
                                <Zap className="w-12 h-12 mb-4 text-emerald-400" />
                                <p className="text-4xl font-black mb-2">Zero</p>
                                <p className="text-emerald-200">Methane emissions vs traditional composting</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="content-section text-center">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Interested in Our AAC Technology?</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Contact us to learn how our Accelerated Anaerobic Composting can transform your organic waste into valuable resources.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                Get in Touch
                            </Button>
                        </Link>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AACPage;
