"use client"
import React, { useState, useEffect } from 'react'

const Navbar = ({ transition = true, theme = 'green' }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const navItems = [
        { title: 'Buy', href: '/' },
        { title: 'Refinance', href: '/' },
        { title: 'HELOC', href: '/' },
        { title: 'Rates', href: '/' },
        { title: 'Better +', href: '/' },
    ]

    const buySubItems = [
        { title: 'Apply now', href: '/' },
        { title: 'Purchase rates', href: '/' },
        { title: 'Affordability calculator', href: '/' },
        { title: 'Mortgage calculator', href: '/' },
        { title: 'Rent vs buy calculator', href: '/' },
        { title: 'Find an agent', href: '/' },
        { title: 'VA loans', href: '/' },
        { title: 'Learning center', href: '/' },
    ]

    const refinanceSubItems = [
        { title: 'Apply Now', href: '/' },
        { title: 'Refinance rates', href: '/' },
        { title: 'Cash-out refinance calculator', href: '/' },
        { title: 'Learning Center', href: '/' },
    ]

    const helocSubItems = [
        { title: 'Apply Now', href: '/' },
        { title: 'Calculate your Cash 💵', href: '/' },
        { title: 'HELOC vs. Cash-out Refinance', href: '/' },
        { title: 'Learning Center', href: '/' },
    ]

    const ratesSubItems = [
        { title: 'Purchase mortgage rates', href: '/' },
        { title: 'Refinance rates', href: '/' },
        { title: 'Refinance cash-out rates', href: '/' },
        { title: 'HELOC rates', href: '/' },
        { title: 'Purchase VA rates', href: '/' },
    ]

    const betterPlusSubItems = [
        { title: 'Get Insurance', href: '/' },
        { title: 'Title and Closing', href: '/' },
        { title: 'Better Attorney Match', href: '/' },
        { title: 'Learning Center', href: '/' },
        { title: 'Better Agent Match', href: '/' },
    ]

    const getSubItems = (title) => {
        switch (title) {
            case 'Buy': return buySubItems
            case 'Refinance': return refinanceSubItems
            case 'HELOC': return helocSubItems
            case 'Rates': return ratesSubItems
            case 'Better +': return betterPlusSubItems
            default: return []
        }
    }

    const ChevronDownIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down ml-2 inline-block group-open:rotate-180 fill-black stroke-none">
            <path d="m6 9 6 6 6-6"></path>
        </svg>
    )

    const ArrowRightIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right text-white group-hover/sub-menu:text-black">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
        </svg>
    )

    const PhoneIcon = () => (
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z" fill="currentColor"></path>
        </svg>
    )

    const MenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
    )

    const CloseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
        </svg>
    )

    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    )

    return (
        <header className="sticky top-0 z-20 transition-all ease-in-out duration-300 bg-[#004733]">
            <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-4 md:px-8 lg:px-12">
                <div className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full invisible'} bg-white inset-0 overflow-auto overscroll-contain fixed z-10 p-6 shadow-md flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]`}>
                    <div className="flex justify-between items-center">
                        <a className="inline-block px-2 flex-none" href="/">
                            <svg role="img" className="icon icon-LogoBetter2021" width="85px" height="35px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>Better</title>
                                <path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="currentColor"></path>
                            </svg>
                        </a>
                        <button
                            className="inline-block rounded-xl leading-body text-xl text-center select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-gray-600 bg-transparent hover:bg-gray-200 focus:bg-gray-200 focus:border-transparent focus:shadow-gray-400 active:bg-gray-200 px-4 h-12 w-auto"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="align-center flex justify-center">
                                <CloseIcon />
                            </div>
                        </button>
                    </div>

                    {navItems.map((item, index) => (
                        <details key={index} className="group flex-none">
                            <summary className="flex h-14 cursor-pointer select-none items-center justify-between px-2 [&::-webkit-details-marker]:hidden">
                                {item.title}
                                <ChevronDownIcon />
                            </summary>
                            <ul className="m-0 list-none">
                                {getSubItems(item.title).map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a
                                            className="flex items-center whitespace-nowrap px-7 py-4 hover:rounded-xl hover:bg-gray-100 focus:bg-gray-100"
                                            href={subItem.href}
                                        >
                                            {subItem.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    ))}

                    <div className="bg-green-100 px-6 py-2 rounded-full flex items-center justify-center mt-4">
                        <div className="mr-3">
                            <PhoneIcon />
                        </div>
                        Call us anytime at
                        <a className="ml-1 underline underline-offset-[3px] hover:text-blue-600" href="/">415-523-8837</a>
                    </div>

                    <div className="flex flex-col gap-4 mt-auto">
                        <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-xl leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-[#1ee07f] text-white hover:bg-[#004733] hover:text-white h-16 px-12 py-5 w-auto" href="/">
                            Continue
                        </a>
                        <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-xl leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-gray-300 text-gray-800 hover:shadow-green-200 hover:border-green-300 hover:shadow-[0_0_0_4px_inset] hover:text-green-600 h-16 px-12 py-5 w-auto font-normal" href="/">
                            Sign in
                            <span className="ml-2">
                                <UserIcon />
                            </span>
                        </a>
                    </div>
                </div>

                <button
                    aria-label="close navigation bar"
                    className={`${isMobileMenuOpen ? 'visible' : 'invisible'} bg-black fixed inset-0 h-screen w-screen opacity-80 z-1 focus:border transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                
                <div className="flex items-center">
                    
                    <div className="mr-2">
                        <a className="font-normal transition-all ease-in-out duration-300 group-hover:bg-gray-200 group-hover:text-gray-800 text-white hover:text-white hover:bg-inherit" href="/">
                            <svg role="img" className="icon icon-LogoBetter2021" width="65px" height="20px" viewBox="0 0 495 133" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>Better</title>
                                <path d="M427.207 129.574H457.274V70.2463C460.072 61.2943 473.189 52.9226 492.108 57.1085V28.0354C476.38 28.0354 462.848 38.3964 457.274 54.9119V30.0247H427.207V129.574ZM378.24 49.7521C387.399 49.7521 391.979 54.7254 391.979 59.5122C391.979 66.4749 386.405 73.4582 355.342 77.0224C355.342 60.6934 365.703 49.7521 378.24 49.7521ZM416.659 120.414V93.9316C406.712 102.303 393.367 106.883 382.613 106.883C371.464 106.883 362.512 100.915 358.119 91.3621C397.532 88.5853 416.845 75.0331 416.845 55.9273C416.845 40.593 401.117 27.6624 379.214 27.6624C350.141 27.6624 326.663 48.9647 326.663 80.0271C326.663 109.287 350.742 130.983 381.017 130.983C393.968 130.962 407.106 127.191 416.659 120.414ZM304.78 98.7184V49.7521H325.275V30.2526L304.78 30.4599V6.56731L247.836 46.7889V11.7478L200.258 47.5763V49.7728H218.183V104.313C218.183 121.637 230.927 130.796 248.251 130.796C255.814 130.796 262.197 129.408 267.957 126.03V105.515C265.16 107.111 261.782 108.313 258.011 108.313C251.649 108.313 247.857 105.122 247.857 99.5473V49.7728H275.127V104.127C275.127 121.637 287.871 130.796 305.381 130.796C313.152 130.796 319.514 129.802 325.689 126.03V105.329C323.099 106.924 319.12 108.313 315.141 108.313C308.759 108.271 304.78 104.894 304.78 98.7184ZM159.664 49.7521C168.823 49.7521 173.402 54.7254 173.402 59.5122C173.402 66.4749 167.828 73.4582 136.766 77.0224C136.766 60.6934 147.106 49.7521 159.664 49.7521ZM198.082 120.414V93.9316C188.136 102.303 174.791 106.883 164.036 106.883C152.888 106.883 143.936 100.915 139.543 91.3621C178.956 88.5853 198.269 75.0331 198.269 55.9273C198.269 40.593 182.541 27.6624 160.638 27.6624C131.564 27.6624 108.086 48.9647 108.086 80.0271C108.086 109.287 132.165 130.983 162.44 130.983C175.392 130.962 188.53 127.191 198.082 120.414ZM53.5459 76.0277C62.8915 76.0277 70.6623 81.8092 70.6623 91.5486C70.6623 100.708 62.8915 106.282 53.5459 106.282H30.8552V76.0277H53.5459ZM51.9502 25.0721C60.9022 25.0721 68.072 30.6464 68.072 39.2046C68.072 48.3638 60.9022 53.938 51.9502 53.938H30.8552V25.0721H51.9502ZM0 1.967V129.574H60.1147C83.1991 129.574 101.331 115.441 101.331 93.9316C101.331 80.1929 92.5655 69.2516 79.8215 64.0711C91.3637 58.8906 99.1345 48.7367 99.1345 36.5936C99.1345 15.685 80.8161 1.94629 57.5245 1.94629H0V1.967Z" fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>

                    
                    <ul className="flex items-center">
                        {navItems.map((item, index) => (
                            <li key={index} className="mx-5 hidden xl:block">
                                <div className="group relative">
                                    <span>
                                        <button className="rounded-full py-1 font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-gray-200 hover:text-gray-800 group-[#f6f6f3] group-hover:text-gray-800">
                                            {item.title}
                                        </button>
                                    </span>
                                    <div className="absolute invisible left-0 right-0 pt-2 group-hover:visible">
                                        <div className="z-10 w-[22rem] rounded-xl p-3 bg-white shadow-md">
                                            {getSubItems(item.title).map((subItem, subIndex) => (
                                                <div key={subIndex}>
                                                    <a
                                                        href={subItem.href}
                                                        className="px-5 py-3 hover:bg-gray-100 group/sub-menu hover:rounded-xl focus:bg-gray-100 flex justify-between"
                                                    >
                                                        {subItem.title}
                                                        {item.title === 'Better +' && subItem.title === 'Better Agent Match' && (
                                                            <span className="leading-body m-0 p-0 text-left text-sm ml-2 inline-block rounded-full bg-orange-200 px-4 font-bold text-gray-800">For Agents</span>
                                                        )}
                                                        <ArrowRightIcon />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                
                <ul className="flex items-center gap-3 lg:gap-6">
                    
                    <li>
                        <div className="group min-[520px]:relative">
                            <div className="transition-all ease-in-out text-white hover:text-black duration-300 border rounded-full p-2 md:p-3.5 border-gray-300 group-hover:bg-gray-200 group-hover:border-gray-200">
                                <PhoneIcon />
                            </div>
                            <div className="absolute invisible left-1 min-[520px]:left-auto right-0 pt-2 group-hover:visible">
                                <div className="bg-gray-100 px-10 py-7 rounded-xl w-80 shadow-md">
                                    Call us anytime at{' '}
                                    <a className="underline hover:text-blue-600" href="/">415-523-8837</a>
                                </div>
                            </div>
                        </div>
                    </li>

                    
                    <li className="hidden md:block">
                        <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full leading-normal disabled:pointer-events-none disabled:opacity-50 bg-transparent py-5 w-auto font-normal transition-all ease-in-out duration-300 h-12 px-4 text-white hover:bg-gray-200 hover:text-gray-800 group-hover:bg-gray-200 group-hover:text-gray-800" href="/">
                            Sign in
                        </a>
                    </li>

                    
                    <li className="transition-all duration-500 ease-in block">
                        <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-[#1ee07f] text-black hover:bg-[#004733] hover:text-white py-3 w-auto h-8 px-4 md:px-6 md:h-12" href="/">
                            Continue
                        </a>
                    </li>

                    
                    <li>
                        <button
                            className="xl:hidden flex items-center font-normal transition-all ease-in-out duration-300 group-hover:bg-gray-200 group-hover:text-gray-800 text-white hover:text-white hover:bg-inherit"
                            aria-label="open mobile nav bar"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <MenuIcon />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar