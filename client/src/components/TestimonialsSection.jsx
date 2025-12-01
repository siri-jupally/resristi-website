import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Sustainability Manager',
      company: 'ABC Foods Pvt. Ltd.',
      industry: 'FMCG',
      testimonial: 'Resrishti has transformed our waste management approach. Their integrated solutions helped us achieve 100% waste diversion and significantly reduced our carbon footprint. The transparency in reporting is exceptional.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      position: 'Environmental Officer',
      company: 'Grand Hospitality Group',
      industry: 'Hospitality',
      testimonial: 'Working with Resrishti has been a game-changer. Their composting and biogas solutions handle our organic waste efficiently, and the Certificates of Disposal make compliance reporting seamless.',
      rating: 5
    },
    {
      name: 'Anil Reddy',
      position: 'Operations Head',
      company: 'TechPark Industries',
      industry: 'Manufacturing',
      testimonial: 'The scientific validation and regulatory compliance gave us confidence. Resrishti\'s team is professional, and their multi-technology approach handles all our diverse waste streams effectively.',
      rating: 5
    },
    {
      name: 'Meena Iyer',
      position: 'CSR Director',
      company: 'South India Textiles',
      industry: 'Textile',
      testimonial: 'Resrishti doesn\'t just manage waste - they create value from it. The biogas and compost outputs contribute to our sustainability goals, and their impact reports strengthen our ESG credentials.',
      rating: 5
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
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
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate carousel container
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate card transitions
  useEffect(() => {
    if (!carouselRef.current) return;

    const ctx = gsap.context(() => {
      const card = carouselRef.current.querySelector('.testimonial-card');
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
        );
      }
    }, carouselRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="py-12 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

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

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            What Our Partners Say
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Trusted by leading companies across South India
          </p>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="relative">

          {/* Testimonial Card */}
          <Card className="testimonial-card hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 hover:border-emerald-300 overflow-hidden">
            <CardContent className="p-6 md:p-8">

              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-emerald-600 mb-4" />

              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed mb-6 text-lg italic">
                "{currentTestimonial.testimonial}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-500 text-2xl">★</span>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">{currentTestimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{currentTestimonial.name}</h4>
                  <p className="text-sm text-slate-600">{currentTestimonial.position}</p>
                  <p className="text-sm text-emerald-600 font-semibold">{currentTestimonial.company}</p>
                </div>
              </div>

              {/* Industry Badge */}
              <div className="inline-block bg-emerald-100 px-4 py-2 rounded-full">
                <span className="text-sm font-semibold text-emerald-800">{currentTestimonial.industry}</span>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentIndex
                ? 'w-12 h-3 bg-gradient-to-r from-emerald-600 to-teal-600'
                : 'w-3 h-3 bg-slate-300 hover:bg-emerald-400'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-slate-500 text-sm font-medium">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;