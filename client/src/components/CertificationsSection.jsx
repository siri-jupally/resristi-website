import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

gsap.registerPlugin(ScrollTrigger);

const CertificationsSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const ctaRef = useRef(null);

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

      // Certification cards - stagger animation
      const cards = cardsRef.current.querySelectorAll('.cert-card');
      cards.forEach((card, index) => {
        // Card container animation
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Icon bubble animation
        const icon = card.querySelector('.cert-icon');
        gsap.fromTo(
          icon,
          {
            scale: 0,
            rotation: -180
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: index * 0.1 + 0.2,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // CTA box animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const certifications = [
    {
      icon: Award,
      title: 'CSIR-IICT Validated',
      description: 'Technologies validated by Council of Scientific & Industrial Research - Indian Institute of Chemical Technology',
      badge: 'Scientific Validation',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'TGPCB Compliant',
      description: 'Full compliance with Telangana State Pollution Control Board regulations and standards',
      badge: 'Regulatory Compliance',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'UN SDG Aligned',
      description: 'Operations aligned with United Nations Sustainable Development Goals 7, 11, 12, 13, and 15',
      badge: 'Global Standards',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: CheckCircle,
      title: 'ISO Certified',
      description: 'International standards for quality management and environmental management systems',
      badge: 'Quality Assurance',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">

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
            Certifications & Validations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Backed by scientific validation and regulatory compliance
          </p>
        </div>

        {/* Certification Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={index}
                className="cert-card group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border border-slate-200 hover:border-emerald-300 overflow-hidden hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <CardContent className="p-6 space-y-4 h-full flex flex-col">

                  {/* Icon */}
                  <div className={`cert-icon w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-500`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Badge */}
                  <div className="inline-block bg-emerald-100 px-3 py-1 rounded-full self-start group-hover:bg-emerald-200 transition-colors duration-300">
                    <span className="text-xs font-semibold text-emerald-800">{cert.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm flex-1">
                    {cert.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Box */}
        <div
          ref={ctaRef}
          className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                Transparency You Can Trust
              </h3>
              <p className="text-slate-700">
                Every client receives a Certificate of Disposal (COD) and detailed sustainability reports documenting the complete waste transformation journey.
              </p>
            </div>
            <button className="group/btn bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 whitespace-nowrap hover:scale-105 flex items-center gap-2">
              <span>View Sample Certificate</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;