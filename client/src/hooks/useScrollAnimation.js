import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Animation options
 * @returns {Object} - Ref to attach to element
 */
export const useScrollAnimation = (options = {}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const {
            from = { opacity: 0, y: 50 },
            to = { opacity: 1, y: 0 },
            duration = 1,
            start = 'top 80%',
            end = 'bottom 20%',
            scrub = false,
            markers = false,
            ...rest
        } = options;

        const animation = gsap.fromTo(
            elementRef.current,
            from,
            {
                ...to,
                duration,
                scrollTrigger: {
                    trigger: elementRef.current,
                    start,
                    end,
                    scrub,
                    markers,
                    ...rest
                }
            }
        );

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, []);

    return elementRef;
};

/**
 * Hook for stagger animations on children
 */
export const useStaggerAnimation = (options = {}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const {
            from = { opacity: 0, y: 30 },
            to = { opacity: 1, y: 0 },
            stagger = 0.1,
            duration = 0.8,
            start = 'top 80%',
            ...rest
        } = options;

        const children = containerRef.current.children;

        const animation = gsap.fromTo(
            children,
            from,
            {
                ...to,
                duration,
                stagger,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start,
                    ...rest
                }
            }
        );

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, []);

    return containerRef;
};

/**
 * Hook for parallax effect
 */
export const useParallax = (speed = 0.5) => {
    const elementRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current) return;

        const animation = gsap.to(elementRef.current, {
            y: () => window.innerHeight * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: elementRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, [speed]);

    return elementRef;
};

export default useScrollAnimation;
