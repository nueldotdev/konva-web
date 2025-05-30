'use client'
import React from 'react'

function Animation() {
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
        <div className="h-[400px] mt-12 bg-black overflow-hidden relative">
            <div className="animate-scroll absolute w-full">
                {sentences.map((sentence, index) => (
                    <div 
                        key={index}
                        className="text-xl md:text-2xl font-medium text-center py-4 animate-color"
                        style={{
                            animationDelay: `${index * 0.4}s`
                        }}
                    >
                        {sentence}
                    </div>
                ))}
                {sentences.map((sentence, index) => (
                    <div 
                        key={`duplicate-${index}`}
                        className="text-xl md:text-2xl font-medium text-center py-4 animate-color"
                        style={{
                            animationDelay: `${index * 0.6}s`
                        }}
                    >
                        {sentence}
                    </div>
                ))}
            </div>
            <style jsx>{`
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                    animation-delay: 0.2s;
                }
                .animate-color {
                    animation: colorChange 20s linear infinite;
                }
                @keyframes scroll {
                    0% { transform: translateY(90%); }
                    100% { transform: translateY(-100%); }
                }
                @keyframes colorChange {
                    0%, 5% { color: #1A1A1A; }
                    35% { color: white; }
                    65%, 100% { color: #1A1A1A; }
                }
            `}</style>
        </div>
    )
}

export default Animation
