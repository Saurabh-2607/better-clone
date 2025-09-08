import React from 'react'

const HeroSection = () => {
    return (
        <section className="relative bg-[#014c35] overflow-hidden">
            
            <div className="absolute bottom-0 left-1/2 w-full h-[250px] md:h-[230px] -translate-x-1/2 translate-y-1/3 rounded-[406px] md:rounded-[1100px] bg-green-300 blur-[220px] md:blur-[475px] opacity-30"></div>
            <div className="relative z-10 mx-auto max-w-screen-2xl overflow-hidden px-6 md:px-10 lg:px-14">
                <div className=" flex flex-col font-medium tracking-tight text-center text-white mt-10 md:mt-16">
                    <div className="text-3xl md:text-4xl lg:text-8xl leading-tighter">
                        The first
                    </div>
                    <div>
                        <span className="bg-[linear-gradient(116deg,_#00FF80_16.51%,_#A987FF_54.85%,_#EA06FF_94.62%)] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-8xl leading-tighter">
                            AI-powered
                        </span>
                        <span className="text-3xl md:text-4xl lg:text-8xl leading-tighter">
                            {" "}Mortgage
                        </span>
                    </div>
                </div>

                
                <p className="text-white text-lg md:text-2xl text-center mt-8 md:mt-6 max-w-4xl mx-auto leading-relaxed">
                    Our tech unlocks lower rates, higher chances of approval,
                    <br className="hidden sm:block" />
                    and a lightning‑fast process from approval to closing. Over $100 billion funded.
                </p>

                
                <div className="text-center mt-8 md:mt-10">
                    <a
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-black leading-normal transition-all ease-in-out duration-200 bg-green-400 hover:bg-[#004733] hover:text-white h-16 px-12 py-5 w-full sm:w-auto"
                        href="/"
                    >
                        Start my pre-approval
                    </a>

                    
                    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-green-200">
                        <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 6H8.5V10.5H7.5V6ZM6.5 1.5H9.5V2.5H6.5V1.5Z" className="fill-green-200"></path>
                            <path className="fill-green-200" d="M13.9987 5.00055L13.2887 4.29555L12.1637 5.42055C11.2429 4.35706 9.94762 3.68926 8.54717 3.5559C7.14671 3.42254 5.74872 3.83386 4.64365 4.70442C3.53857 5.57497 2.81139 6.83782 2.61318 8.23057C2.41497 9.62333 2.76098 11.0389 3.57931 12.1832C4.39765 13.3275 5.62539 14.1125 7.00745 14.3751C8.3895 14.6377 9.81961 14.3578 11.0006 13.5934C12.1817 12.8291 13.0228 11.6391 13.3493 10.2707C13.6758 8.90233 13.4625 7.46077 12.7537 6.24554L13.9987 5.00055ZM7.99875 13.5005C7.10873 13.5005 6.2387 13.2366 5.49868 12.7422C4.75866 12.2477 4.18189 11.5449 3.84129 10.7226C3.5007 9.90035 3.41158 8.99555 3.58522 8.12264C3.75885 7.24972 4.18743 6.4479 4.81677 5.81856C5.44611 5.18923 6.24793 4.76064 7.12084 4.58701C7.99376 4.41338 8.89856 4.50249 9.72082 4.84309C10.5431 5.18368 11.2459 5.76046 11.7404 6.50048C12.2348 7.2405 12.4987 8.11053 12.4987 9.00055C12.4987 10.194 12.0246 11.3386 11.1807 12.1825C10.3368 13.0264 9.19222 13.5005 7.99875 13.5005Z"></path>
                        </svg>
                        <span>3 min</span>
                        <span>| No hard credit check</span>
                    </div>
                </div>

                
                <div className="relative flex flex-col items-center justify-center md:flex-row">
                    <div className="mt-10 px-4 md:mt-12">
                        <img
                            alt="Better Mortgage AI-powered FICO"
                            width="510"
                            height="810"
                            decoding="async"
                            className="max-w-full h-auto"
                            src="https://media.better.com/better-com/homepage/ai-powered-fico.webp"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection