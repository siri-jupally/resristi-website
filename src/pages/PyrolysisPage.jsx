import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Flame, CheckCircle, ArrowLeft, TrendingUp, Zap, Award, Droplets, Factory } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const PyrolysisPage = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.hero-content', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
        gsap.fromTo('.content-section', { opacity: 0, y: 40 }, {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: '.content-container', start: 'top 70%', toggleActions: 'play none none reverse' }
        });
    }, []);

    const benefits = [
        'Converts 500 kg/day of non-recyclable plastic waste into valuable products',
        'Produces high-quality fuel oil suitable for industrial boilers and generators',
        'Generates carbon black used in tire manufacturing and ink production',
        'Captures syngas for internal heating, reducing external energy consumption',
        'Prevents plastic waste from entering landfills and oceans',
        'Operates in a closed-loop system with minimal emissions',
        'Processes multi-layer plastics (MLPs) that cannot be mechanically recycled',
        'Reduces dependency on virgin petroleum products'
    ];

    const plasticTypes = [
        { type: 'LDPE/HDPE', desc: 'Low and high-density polyethylene from packaging films', yield: '45-50% fuel oil' },
        { type: 'PP (Polypropylene)', desc: 'From containers, caps, and industrial packaging', yield: '40-45% fuel oil' },
        { type: 'PS (Polystyrene)', desc: 'Foam packaging and disposable containers', yield: '35-40% fuel oil' },
        { type: 'Multi-Layer Plastics', desc: 'Laminated packaging that cannot be mechanically recycled', yield: '30-35% fuel oil' }
    ];

    const processSteps = [
        {
            step: '1',
            title: 'Plastic Collection & Sorting',
            desc: 'Non-recyclable plastic waste is collected from municipal, industrial, and commercial sources. Materials are sorted to remove PVC, PET, and other unsuitable plastics. Contaminants like metal, glass, and organic matter are removed through automated sorting systems.'
        },
        {
            step: '2',
            title: 'Shredding & Pre-Treatment',
            desc: 'Sorted plastics are shredded into uniform particle sizes (5-10mm) to ensure consistent pyrolysis. Materials are washed and dried to remove moisture, dirt, and residual contaminants that could affect the quality of end products.'
        },
        {
            step: '3',
            title: 'Thermal Decomposition (Pyrolysis)',
            desc: 'Shredded plastic is fed into oxygen-free pyrolysis reactors heated to 400-500°C. In the absence of oxygen, plastic polymers break down into smaller hydrocarbon molecules, producing fuel oil vapors, syngas, and solid carbon black residue.'
        },
        {
            step: '4',
            title: 'Condensation & Product Recovery',
            desc: 'Fuel oil vapors are cooled and condensed into liquid fuel oil. Syngas is captured and used to heat the reactor, making the process energy self-sufficient. Carbon black is collected, processed, and packaged for industrial use.'
        }
    ];

    const products = [
        {
            name: 'Pyrolysis Fuel Oil',
            desc: 'High-calorific liquid fuel with properties similar to diesel. Used in industrial boilers, furnaces, and power generators.',
            applications: ['Industrial heating', 'Power generation', 'Cement kilns', 'Steel furnaces'],
            icon: Droplets
        },
        {
            name: 'Carbon Black',
            desc: 'Fine carbon powder used as a reinforcing agent in rubber products and as a pigment in inks and paints.',
            applications: ['Tire manufacturing', 'Rubber products', 'Printing inks', 'Paints & coatings'],
            icon: Factory
        },
        {
            name: 'Syngas',
            desc: 'Combustible gas mixture (CO, H₂, CH₄) used for internal heating and energy recovery within the facility.',
            applications: ['Reactor heating', 'Energy self-sufficiency', 'Reduced fossil fuel use', 'Carbon footprint reduction'],
            icon: Flame
        }
    ];

    const specs = [
        { label: 'Processing Capacity', value: '500 kg/day of plastic waste' },
        { label: 'Fuel Oil Yield', value: '40-50% by weight' },
        { label: 'Carbon Black Yield', value: '30-35% by weight' },
        { label: 'Syngas Yield', value: '10-15% by weight' },
        { label: 'Operating Temperature', value: '400-500°C' },
        { label: 'Reactor Type', value: 'Batch/Continuous feed' },
        { label: 'Energy Self-Sufficiency', value: '70% (syngas-powered)' },
        { label: 'Emission Control', value: 'Gas scrubbers & filters' }
    ];

    const environmentalImpact = [
        { value: '182 Tons', label: 'Plastic waste diverted from landfills annually', icon: TrendingUp },
        { value: '450 Tons', label: 'CO₂ equivalent emissions prevented per year', icon: Award },
        { value: '90,000 L', label: 'Fuel oil produced annually, replacing diesel', icon: Droplets }
    ];

    const faqData = [
        {
            q: 'What types of plastic can be processed through pyrolysis?',
            a: 'Our pyrolysis unit processes LDPE, HDPE, PP, PS, and multi-layer plastics (MLPs) that cannot be mechanically recycled. We do not process PVC (polyvinyl chloride) or PET (polyethylene terephthalate) as they require different treatment methods and can produce harmful emissions during pyrolysis.'
        },
        {
            q: 'How does pyrolysis fuel oil compare to conventional diesel?',
            a: 'Pyrolysis fuel oil has a calorific value of 42-44 MJ/kg, comparable to diesel (45 MJ/kg). It can be used directly in industrial boilers and furnaces, or refined further for use in diesel engines. The fuel is cost-effective, renewable, and significantly reduces dependency on petroleum-based fuels.'
        },
        {
            q: 'Is the pyrolysis process safe and environmentally friendly?',
            a: 'Yes, our pyrolysis system operates in a sealed, oxygen-free environment, preventing combustion and harmful emissions. All gases are passed through scrubbers and filters to remove pollutants. The process is energy self-sufficient, using syngas to heat the reactor, and produces no toxic waste or wastewater.'
        },
        {
            q: 'What happens to the carbon black produced?',
            a: 'Carbon black is a valuable byproduct used in tire manufacturing, rubber products, printing inks, and paints. We process and package the carbon black for sale to industrial clients, ensuring that every component of the plastic waste is converted into useful products.'
        },
        {
            q: 'How does pyrolysis contribute to the circular economy?',
            a: 'Pyrolysis closes the loop on plastic waste by converting non-recyclable plastics into fuel oil, carbon black, and syngas. These products replace virgin petroleum products, reduce landfill waste, and prevent plastic pollution in oceans and ecosystems. It is a key technology for achieving zero-waste and circular economy goals.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section ref={heroRef} className="relative pt-24 pb-12 bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px), linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/facilities" className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-semibold mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to All Facilities</span>
                    </Link>

                    <div className="hero-content grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white border-2 border-orange-200 px-4 py-2 rounded-full shadow-lg">
                                <Flame className="w-4 h-4 text-orange-600" />
                                <span className="text-orange-900 font-bold text-xs tracking-wide">PLASTIC-TO-FUEL TECHNOLOGY</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Advanced Pyrolysis Unit
                                <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mt-2">
                                    (Thermal Decomposition Technology)
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our state-of-the-art pyrolysis technology transforms non-recyclable plastic waste into valuable fuel oil, carbon black, and syngas through controlled thermal decomposition. This revolutionary process prevents plastic pollution while creating renewable energy and industrial raw materials.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white border-2 border-orange-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-orange-700">500 kg</p>
                                    <p className="text-sm text-slate-600 font-semibold">Daily Capacity</p>
                                </div>
                                <div className="bg-white border-2 border-orange-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-orange-700">45%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Fuel Oil Yield</p>
                                </div>
                                <div className="bg-white border-2 border-orange-200 rounded-xl p-4 shadow-lg">
                                    <p className="text-3xl font-black text-orange-700">70%</p>
                                    <p className="text-sm text-slate-600 font-semibold">Energy Self-Sufficient</p>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder Image */}
                        <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-orange-200">
                            <div className="text-center">
                                <Flame className="w-32 h-32 text-orange-600 mx-auto mb-4 opacity-50" />
                                <p className="text-orange-800 font-bold text-lg">Pyrolysis Facility Image</p>
                                <p className="text-orange-700 text-sm">Reactor Units & Processing System</p>
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
                        <h2 className="text-3xl font-black text-slate-900 mb-8">How Pyrolysis Technology Works</h2>
                        <div className="space-y-6">
                            {processSteps.map((item, idx) => (
                                <div key={idx} className="flex gap-6 bg-gradient-to-r from-orange-50 to-white border-l-4 border-orange-600 p-6 rounded-r-xl hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0">
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

                    {/* Plastic Types Processed */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Plastic Types We Process</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {plasticTypes.map((plastic, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-6 hover:scale-105 transition-transform">
                                    <h3 className="text-xl font-bold text-orange-800 mb-2">{plastic.type}</h3>
                                    <p className="text-sm text-slate-600 mb-3">{plastic.desc}</p>
                                    <div className="inline-block bg-orange-100 px-3 py-1 rounded-full">
                                        <span className="text-xs font-bold text-orange-800">Yield: {plastic.yield}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Products Generated */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Products Generated from Pyrolysis</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {products.map((product, idx) => {
                                const Icon = product.icon;
                                return (
                                    <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-xl transition-all">
                                        <Icon className="w-12 h-12 text-orange-600 mb-4" />
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                                        <p className="text-sm text-slate-600 mb-4">{product.desc}</p>
                                        <div className="space-y-2">
                                            <p className="text-xs font-bold text-slate-700 uppercase">Applications:</p>
                                            {product.applications.map((app, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <CheckCircle className="w-3 h-3 text-orange-600 shrink-0" />
                                                    <span className="text-xs text-slate-600">{app}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Key Benefits */}
                    <section className="content-section">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Key Benefits of Pyrolysis Technology</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4 hover:border-orange-400 hover:shadow-lg transition-all">
                                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
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
                                    <div key={idx} className="border-l-4 border-orange-600 pl-4">
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
                                <div key={idx} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-orange-400 transition-colors">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Environmental Impact */}
                    <section className="content-section bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-12 text-white">
                        <h2 className="text-3xl font-black mb-8">Environmental Impact & Sustainability</h2>
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {environmentalImpact.map((impact, idx) => {
                                const Icon = impact.icon;
                                return (
                                    <div key={idx}>
                                        <Icon className="w-12 h-12 mb-4 text-orange-400" />
                                        <p className="text-4xl font-black mb-2">{impact.value}</p>
                                        <p className="text-orange-200">{impact.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-orange-100 leading-relaxed">
                            Pyrolysis technology is a game-changer in plastic waste management. By converting non-recyclable plastics into fuel oil and carbon black, we prevent plastic pollution, reduce fossil fuel consumption, and create valuable industrial products. This technology is essential for achieving zero-waste goals and building a circular economy.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="content-section text-center">
                        <h2 className="text-3xl font-black text-slate-900 mb-4">Transform Plastic Waste into Energy</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Learn how our pyrolysis technology can help your organization manage plastic waste sustainably while generating renewable fuel.
                        </p>
                        <Link to="/contact">
                            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                Request a Demo
                            </Button>
                        </Link>
                    </section>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PyrolysisPage;
