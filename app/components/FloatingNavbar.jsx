"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const FloatingNavbar = () => {
    const pathname = usePathname()

    const navItems = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Calculator', href: '/calculator' },
        { title: 'Get Started', href: '/start' },
    ]

    return (
        <>
            
            <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg rounded-2xl px-6 py-3">
                <h6 className="text-xs pb-4 text-yellow-800 font-medium">
                    Note: Floating navbar added for easy navigation (not part of original Better.com design)
                </h6>
                <div className="flex items-center justify-around space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-4 py-2 text-sm font-medium rounded-full ${
                                pathname === item.href
                                    ? 'bg-[#017848] text-white'
                                    : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default FloatingNavbar
