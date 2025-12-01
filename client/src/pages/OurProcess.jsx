import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Recycle, Droplets, Zap, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const OurProcess = () => {
    const containerRef = useRef(null);
    const pathRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    const processSteps = [
        {
            id: 1,
            title: 'Collection & Segregation',
            description: 'Waste is collected from source and segregated into organic, recyclable, and non-recyclable streams using automated systems.',
            icon: Recycle,
            color: 'from-emerald-500 to-teal-500',
            position: 0 // Start of infinity
        },
        {
            id: 2,
            title: 'Processing & Treatment',
            description: 'Each waste stream is processed through specialized technologies: composting, biogas generation, pyrolysis, and recycling.',
            icon: Zap,
            color: 'from-blue-500 to-cyan-500',
            position: 0.25 // First curve
        },
        {
            id: 3,
            title: 'Resource Recovery',
            description: 'Valuable resources are extracted: compost, biogas, fuel oil, carbon black, and recycled materials.',
            icon: Droplets,
            color: 'from-orange-500 to-red-500',
            position: 0.5 // Center crossing
        },
        {
            id: 4,
            title: 'Quality Control',
            description: 'All outputs undergo rigorous testing to ensure they meet industry standards and regulatory compliance.',
            icon: CheckCircle,
            color: 'from-purple-500 to-pink-500',
            position: 0.75 // Second curve
        },
        {
            id: 5,
            title: 'Distribution & Impact',
            description: 'Products are distributed to end users, completing the circular economy loop with zero landfill waste.',
            icon: Leaf,
            color: 'from-teal-500 to-emerald-500',
            position: 1 // End of infinity
        }
    ];

    useEffect(() => {
        if (!containerRef.current || !pathRef.current) return;

        const ctx = gsap.context(() => {
            // Create main scroll timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=400%',
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const stepIndex = Math.floor(progress * processSteps.length);
                        setActiveStep(Math.min(stepIndex, processSteps.length - 1));
                    }
                }
            });

            // Animate the glowing path
            tl.fromTo(
                '.infinity-glow',
                { strokeDashoffset: 2000 },
                { strokeDashoffset: 0, duration: 1, ease: 'none' },
                0
            );

            // Animate each step along the path
            processSteps.forEach((step, index) => {
                const stepEl = `.step-${step.id}`;
                const startProgress = index / processSteps.length;
                const endProgress = (index + 1) / processSteps.length;

                // Fade in and scale
                tl.fromTo(
                    stepEl,
                    { opacity: 0, scale: 0.5 },
                    { opacity: 1, scale: 1, duration: 0.15, ease: 'back.out(2)' },
                    startProgress
                );

                // Fade out
                tl.to(
                    stepEl,
                    { opacity: 0.3, scale: 0.9, duration: 0.1 },
                    endProgress - 0.05
                );
            });

            // Floating particles animation
            gsap.to('.particle', {
                y: 'random(-100, 100)',
                x: 'random(-100, 100)',
                duration: 'random(3, 6)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: {
                    each: 0.2,
                    from: 'random'
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                        Our Process
                    </h1>
                    <p className="text-xl text-emerald-400 mb-2">
                        The Circular Journey
                    </p>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Follow the infinity loop to discover how we transform waste into valuable resources through our integrated process
                    </p>
                </div>
            </section>

            {/* Infinity Loop Animation Section */}
            <section ref={containerRef} className="relative h-screen bg-slate-950 overflow-hidden">

                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950"></div>

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-1 h-1 bg-emerald-400 rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}

                {/* Light Beams */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>

                {/* SVG Infinity Path */}
                <svg
                    ref={pathRef}
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1000 600"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* Glow Filter */}
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Gradient for path */}
                        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="25%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#f97316" />
                            <stop offset="75%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                    </defs>

                    {/* Base Infinity Path (dim) */}
                    <path
                        d="M 250,300 C 250,150 350,150 500,300 C 650,450 750,450 750,300 C 750,150 650,150 500,300 C 350,450 250,450 250,300 Z"
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="3"
                        opacity="0.3"
                    />

                    {/* Animated Glowing Path */}
                    <path
                        className="infinity-glow"
                        d="M 250,300 C 250,150 350,150 500,300 C 650,450 750,450 750,300 C 750,150 650,150 500,300 C 350,450 250,450 250,300 Z"
                        fill="none"
                        stroke="url(#pathGradient)"
                        strokeWidth="4"
                        strokeDasharray="2000"
                        strokeDashoffset="2000"
                        filter="url(#glow)"
                        opacity="0.8"
                    />
                </svg>

                {/* Process Steps */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;

                            // Position step markers ON the infinity path
                            const markerPositions = [
                                { left: '25%', top: '50%' },   // Step 1: Left start
                                { left: '37.5%', top: '35%' }, // Step 2: Left top curve
                                { left: '50%', top: '50%' },   // Step 3: Center crossing
                                { left: '64.5%', top: '68%' }, // Step 4: Right bottom curve
                                { left: '75%', top: '50%' }    // Step 5: Right end
                            ];

                            // Offset cards OUTSIDE the path
                            const cardOffsets = [
                                { offsetX: '-200px', offsetY: '0px' },      // Step 1: Left
                                { offsetX: '180px', offsetY: '-80px' },      // Step 2: Top
                                { offsetX: '0px', offsetY: '180px' },       // Step 3: Bottom
                                { offsetX: '180px', offsetY: '130px' },       // Step 4: Bottom
                                { offsetX: '200px', offsetY: '0px' }        // Step 5: Right
                            ];

                            const markerPos = markerPositions[index];
                            const cardOffset = cardOffsets[index];
                            const isActive = activeStep === index;

                            return (
                                <div key={step.id}>
                                    {/* Step Marker ON the path */}
                                    <div
                                        className={`step-${step.id}-marker absolute transform -translate-x-1/2 -translate-y-1/2 z-20`}
                                        style={{ left: markerPos.left, top: markerPos.top }}
                                    >
                                        {/* Glow Effect */}
                                        {isActive && (
                                            <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-30 blur-2xl rounded-full scale-[3] animate-pulse`}></div>
                                        )}

                                        {/* Icon Circle on Path */}
                                        <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 ${isActive ? 'border-white scale-125' : 'border-slate-800'} transition-all duration-500`}>
                                            <Icon className="w-8 h-8 text-white" />

                                            {/* Step Number Badge */}
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-slate-900 font-black text-xs shadow-lg">
                                                {step.id}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card OUTSIDE the path */}
                                    <div
                                        className={`step-${step.id} absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10`}
                                        style={{
                                            left: markerPos.left,
                                            top: markerPos.top,
                                            transform: `translate(calc(-50% + ${cardOffset.offsetX}), calc(-50% + ${cardOffset.offsetY}))`
                                        }}
                                    >
                                        {/* Connecting Line from marker to card */}
                                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" width="250" height="200" style={{ zIndex: -1 }}>
                                            <line
                                                x1="125"
                                                y1="100"
                                                x2={cardOffset.offsetX === '0px' ? '125' : (cardOffset.offsetX.includes('-') ? '225' : '25')}
                                                y2={cardOffset.offsetY === '0px' ? '100' : (cardOffset.offsetY.includes('-') ? '200' : '0')}
                                                stroke={isActive ? '#10b981' : '#334155'}
                                                strokeWidth="2"
                                                strokeDasharray="4 4"
                                                opacity={isActive ? '0.6' : '0.3'}
                                            />
                                        </svg>

                                        {/* Step Card */}
                                        <div className={`relative bg-slate-900/95 backdrop-blur-md border-2 ${isActive ? 'border-emerald-400 shadow-2xl shadow-emerald-500/50' : 'border-slate-700'} rounded-xl p-2 w-56 transition-all duration-500 ${isActive ? 'scale-105' : 'scale-95 opacity-70'}`}>

                                            {/* Content */}
                                            <h3 className={`text-base font-bold mb-2 ${isActive ? 'text-emerald-400' : 'text-white'} transition-colors`}>
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-400 text-xs leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Active Indicator */}
                                            {isActive && (
                                                <div className="mt-3 flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                                                    <span>Active</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-emerald-400 text-sm font-semibold mb-2">Scroll to explore</p>
                    <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex items-start justify-center p-2 animate-bounce mx-auto">
                        <div className="w-1 h-2 bg-emerald-400 rounded-full mb-1"></div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
                    <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                        style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
                    ></div>
                </div>
            </section>

            {/* Summary Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            Complete Circular Economy
                        </h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                            Our integrated process ensures that every kilogram of waste is transformed into valuable resources, achieving 100% landfill diversion.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500 transition-all">
                            <div className="text-4xl font-black text-emerald-400 mb-2">100%</div>
                            <p className="text-white font-semibold mb-1">Zero Landfill</p>
                            <p className="text-slate-400 text-sm">Complete waste diversion through integrated technologies</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500 transition-all">
                            <div className="text-4xl font-black text-emerald-400 mb-2">4</div>
                            <p className="text-white font-semibold mb-1">Core Technologies</p>
                            <p className="text-slate-400 text-sm">Complementary systems working in harmony</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500 transition-all">
                            <div className="text-4xl font-black text-emerald-400 mb-2">24/7</div>
                            <p className="text-white font-semibold mb-1">Continuous Operations</p>
                            <p className="text-slate-400 text-sm">Round-the-clock processing and monitoring</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OurProcess;
