import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Droplets, CheckCircle, ArrowLeft, TrendingUp, Zap, Award, Leaf, Flame } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const AGRPage = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.hero-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
        gsap.fromTo('.content-section', { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: '.content-container', start: 'top 70%', toggleActions: 'play none none reverse' }
        });
    }, []);

    const benefits = [
        'Generates 25,000 liters of clean biogas monthly from food waste',
        'Biogas used for cooking, heating, and powering internal operations',
        'Produces nutrient-rich bio-slurry as organic fertilizer byproduct',
        'Reduces greenhouse gas emissions by capturing methane',
        'Eliminates dependency on LPG and conventional fossil fuels',
        'Closed-loop system with zero waste discharge',
        'Odorless anaerobic digestion process',
        'Continuous operation with minimal maintenance requirements'
    ];

    const biogasUses = [
        { title: 'Cooking Fuel', desc: 'Clean-burning biogas for industrial kitchens and canteens', icon: Flame },
        { title: 'Power Generation', desc: 'Biogas generators for electricity production', icon: Zap },
        { title: 'Heating Systems', desc: 'Thermal energy for industrial processes', icon: Flame },
        { title: 'Vehicle Fuel', desc: 'Compressed biogas (CBG) for transportation', icon: Zap }
    ];

    const processSteps = [
        {
            step: '1',
            title: 'Waste Collection & Pre-Treatment',
            desc: 'Food waste and organic materials are collected, sorted, and shredded to optimal particle size. Contaminants like plastic, metal, and glass are removed to ensure pure feedstock for digestion.'
        },
        {
            step: '2',
            title: 'Anaerobic Digestion',
            desc: 'Organic waste is fed into sealed digesters where anaerobic bacteria break down the material in oxygen-free conditions. This process generates methane-rich biogas and nutrient-dense bio-slurry over 20-30 days.'
        },
        {
            step: '3',
            title: 'Biogas Purification & Storage',
            desc: 'Raw biogas is purified to remove hydrogen sulfide, carbon dioxide, and moisture. The cleaned biogas is stored in gas holders for on-demand use in cooking, heating, or power generation.'
        },
        {
            step: '4',
            title: 'Bio-Slurry Processing',
            desc: 'The remaining bio-slurry is rich in nitrogen, phosphorus, and potassium (NPK). It is dewatered, composted, and blended with other organic materials to create premium organic fertilizer.'
        }
    ];

    const specs = [
        { label: 'Processing Capacity', value: '250 kg/day of food waste' },
        { label: 'Biogas Production', value: '25,000 liters/month' },
        { label: 'Methane Content', value: '55-65% CH₄' },
        { label: 'Digestion Time', value: '20-30 days' },
        { label: 'Bio-Slurry Output', value: '80-100 kg/day' },
        { label: 'Operating Temperature', value: '35-40°C (mesophilic)' },
        { label: 'pH Range', value: '6.8-7.5 (optimal)' },
        { label: 'Energy Self-Sufficiency', value: '60% of facility needs' }
    ];

    const environmentalImpact = [
        { value: '91 Tons', label: 'Food waste diverted from landfills annually', icon: TrendingUp },
        { value: '300 Tons', label: 'CO₂ equivalent emissions prevented per year', icon: Leaf },
        { value: '18,000 kg', label: 'LPG replacement through biogas annually', icon: Zap }
    ];

    const faqData = [
        {
            q: 'What types of waste can be processed in AGR?',
            a: 'Our AGR system processes all types of biodegradable food waste including vegetable peels, fruit scraps, cooked food, dairy products, bakery waste, and agricultural residue. Non-biodegradable materials like plastic, metal, and glass must be removed during pre-treatment.'
        },
        {
            q: 'How does biogas compare to LPG?',
            a: 'Biogas has a calorific value of 20-25 MJ/m³, comparable to LPG (46 MJ/kg). One cubic meter of biogas can replace approximately 0.5 kg of LPG. Biogas is renewable, carbon-neutral, and significantly cheaper than fossil fuels.'
        },
        {
            q: 'What is bio-slurry and how is it used?',
            a: 'Bio-slurry is the nutrient-rich residue left after anaerobic digestion. It contains high levels of nitrogen, phosphorus, and potassium (NPK), making it an excellent organic fertilizer. We process bio-slurry into compost for agriculture, horticulture, and landscaping applications.'
        },
        {
            q: 'Is the AGR process safe and odor-free?',
            a: 'Yes, the anaerobic digestion process occurs in sealed, oxygen-free digesters, preventing odor release. The biogas is purified to remove hydrogen sulfide (H₂S), which causes odor. Our facility includes gas scrubbers and bio-filters to ensure a completely odor-free environment.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/facilities" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to All Facilities</span>
                    </Link>

                    <div className="hero-content grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 px-4 py-2 rounded-full shadow-lg">
                                <Droplets className="w-4 h-4 text-blue-600" />
                                <span className="text-blue-900 font-bold text-xs tracking-wide">BIOGAS GENERATION TECHNOLOGY</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Anaerobic Gas Lift Reactor
                                <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mt-2">
                                    (AGR Technology)
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our Anaerobic Gas Lift Reactor (AGR) is an advanced biogas generation system that converts biodegradable food waste into clean, renewable energy. This cutting-edge technology produces methane-rich biogas for cooking, heating, and power generation, while simultaneously creating nutrient-rich bio-slurry for organic farming.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-blue-700">250 kg</p>
                                    <p className="text-sm text-slate-600 font-semibold">Daily Capacity</p>
                                </div>
                                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-blue-700">25,000 L</p>
                                    <p className="text-sm text-slate-600 font-semibold">Biogas/Month</p>
                                </div>
                                <div className="bg-white border-2 border-blue-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-blue-700">60%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Energy Self-Sufficient</p>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder Image */}
                        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-blue-200">
                            <div className="text-center">
                                <Droplets className="w-32 h-32 text-blue-600 mx-auto mb-4 opacity-50" />
                                <p className="text-blue-800 font-bold text-lg">AGR Facility Image</p>
                                <p className="text-blue-700 text-sm">Biogas Digesters & Processing Units</p>
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
                        <h2 className="text-3xl font-black text-slate-900 mb-8">How AGR Technology Works</h2>
                        <div className="space-y-6">
                            {processSteps.map((item, idx) => (
                                <div key={idx} className="flex gap-6 bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-600 p-6 rounded-r-xl hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Biogas Applications */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Biogas Applications</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {biogasUses.map((use, idx) => {
                                const Icon = use.icon;
                                return (
                                    <div key={idx} className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6 hover:scale-105 transition-transform">
                                        <Icon className="w-12 h-12 text-blue-600 mb-4" />
                                        <h3 className="text-lg font-bold text-blue-800 mb-2">{use.title}</h3>
                                        <p className="text-sm text-slate-600">{use.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Key Benefits */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Key Benefits of AGR Technology</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-lg transition-all">
                                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                    <span className="text-slate-700">{benefit}</span>
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
                                    <div key={idx} className="border-l-4 border-blue-600 pl-4">
                                        <p className="text-sm text-slate-600 font-semibold mb-1">{spec.label}</p>
                                        <p className="text-lg font-bold text-slate-900">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-blue-400 transition-colors">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Environmental Impact */}
                    <section className="content-section bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl p-12 text-white">
                        <h2 className="text-3xl font-black mb-8">Environmental Impact & Sustainability</h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {environmentalImpact.map((impact, idx) => {
                                const Icon = impact.icon;
                                return (
                                    <div key={idx}>
                                        <Icon className="w-12 h-12 mb-4 text-blue-400" />
                                        <p className="text-4xl font-black mb-2">{impact.value}</p>
                                        <p className="text-blue-200">{impact.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-blue-100 leading-relaxed">
                            By converting food waste into biogas, our AGR technology prevents methane emissions from landfills, reduces fossil fuel consumption, and creates renewable energy. The bio-slurry byproduct enriches soil health and reduces chemical fertilizer dependency, completing the circular economy loop.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="content-section text-center">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Ready to Harness Biogas Energy?</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Discover how our AGR technology can transform your food waste into clean, renewable biogas and organic fertilizer.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                Schedule a Consultation
                            </Button>
                        </Link>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AGRPage;
