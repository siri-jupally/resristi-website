import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animated counter component that counts up when scrolled into view
 */
const AnimatedCounter = ({
    end,
    duration = 2,
    suffix = '',
    prefix = '',
    decimals = 0,
    className = ''
}) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!elementRef.current || hasAnimated.current) return;

        const trigger = ScrollTrigger.create({
            trigger: elementRef.current,
            start: 'top 80%',
            onEnter: () => {
                if (hasAnimated.current) return;
                hasAnimated.current = true;

                gsap.to({ val: 0 }, {
                    val: end,
                    duration,
                    ease: 'power2.out',
                    onUpdate: function () {
                        setCount(this.targets()[0].val);
                    }
                });
            }
        });

        return () => {
            trigger.kill();
        };
    }, [end, duration]);

    const displayValue = decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count).toLocaleString();

    return (
        <span ref={elementRef} className={className}>
            {prefix}{displayValue}{suffix}
        </span>
    );
};

export default AnimatedCounter;
