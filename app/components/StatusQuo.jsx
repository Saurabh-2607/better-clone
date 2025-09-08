"use client"
import React from 'react'

const StatusQuo = () => {
    return (
        <section className="mx-auto max-w-screen-xl px-6 md:px-20 py-16 md:py-24">
            <div className="flex flex-col-reverse gap-8 md:gap-16 lg:gap-24 md:flex-row items-center">
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="font-bold text-[#292B29] text-2xl md:text-3xl lg:text-4xl leading-tight">
                        The status quo is broken
                    </h2>
                    <p className="text-[#5a5d5a] text-lg leading-relaxed">
                        The traditional processes around homeownership are opaque and stressful. Fees aren't transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It's a system set up to benefit insiders — not you. Better.com CEO, <a href="/" className="text-[#017848] underline hover:text-[#1ee07f] transition-colors">Vishal Garg</a>, set out to change that.
                    </p>
                    <a className="inline-flex items-center justify-center px-8 py-4 bg-[#017848] text-white font-bold text-lg rounded-lg hover:bg-[#1ee07f] focus:bg-[#1ee07f] focus:outline-none focus:ring-4 focus:ring-[#1ee07f]/25 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="/">
                        Read Vishal's story
                    </a>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                        <button className="w-full h-80 md:h-96 relative">
                            <img 
                                alt="Vishal Garg CEO Story" 
                                loading="lazy" 
                                width="1080" 
                                height="800" 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                                src="https://media.better.com/video/vishal-mission.jpg"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" className="ml-1">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatusQuo
