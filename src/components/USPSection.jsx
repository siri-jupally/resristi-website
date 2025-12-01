import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Layers, Award, FileCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const USPSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // USP cards - stagger animation
      const cards = cardsRef.current.querySelectorAll('.usp-card');
      cards.forEach((card, index) => {
        // Card container animation
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Icon bubble animation
        const icon = card.querySelector('.usp-icon');
        gsap.fromTo(
          icon,
          {
            scale: 0,
            rotation: -180,
            opacity: 0
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.12 + 0.3,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const usps = [
    {
      icon: Shield,
      title: 'Zero Waste Commitment',
      description: '100% waste diversion from landfills through our integrated multi-technology approach'
    },
    {
      icon: Layers,
      title: 'Integrated Multi-Technology Facility',
      description: 'Four complementary technologies under one roof for comprehensive waste solutions'
    },
    {
      icon: Award,
      title: 'CSIR-IICT Validated & TGPCB Compliant',
      description: 'Scientifically validated processes meeting all regulatory compliance standards'
    },
    {
      icon: FileCheck,
      title: 'End-to-End Transparency & Reporting',
      description: 'Complete documentation with Certificates of Disposal and sustainability reports'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(15 23 42) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(15 23 42) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            The Resrishti Difference
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            What sets us apart in sustainable waste management
          </p>
        </div>

        {/* USP Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <div
                key={index}
                className="usp-card relative group"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl transform group-hover:scale-105 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>

                {/* Card Content */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border border-slate-200 group-hover:border-emerald-300 h-full flex flex-col">

                  {/* Icon */}
                  <div className="usp-icon w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-emerald-500/30">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {usp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed flex-1">
                    {usp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USPSection;