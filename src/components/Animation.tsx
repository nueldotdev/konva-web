'use client'
import React, { useRef, useEffect } from 'react'

function Animation() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target.classList.contains('animate-text')) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('text-white');
                            entry.target.classList.remove('text-[#1A1A1A]');
                        } else {
                            entry.target.classList.remove('text-white');
                            entry.target.classList.add('text-[#1A1A1A]');
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        const elements = document.getElementsByClassName('animate-text');
        Array.from(elements).forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const sentences = [
        'You meet someone at an event.',
        'You share your card. Maybe your number.',
        'You get home and forget their name.',
        'It’s not just you.',
        'Paper cards go missing.',
        'Names get mixed up.',
        'Leads disappear.',
        'In a country where everyone is building something,',
        'we need better ways to stay connected.',
        'Konva is here to help.',
    ]

    return (
        <div 
            ref={sectionRef}
            className="h-[80vh] mt-8 bg-black relative overflow-y-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <div className="py-40 px-4">
                {sentences.map((sentence, index) => (
                    <div 
                        key={index}
                        className="animate-text text-[#1A1A1A] text-xl md:text-2xl font-medium text-center mb-20 transition-colors duration-500"
                    >
                        {sentence}
                    </div>
                ))}
            </div>
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}

export default Animation
