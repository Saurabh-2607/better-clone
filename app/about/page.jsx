"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/AboutHero'
import StatusQuo from '../components/StatusQuo'
import HowWeChanging from '../components/HowWeChanging'
import BackedBy from '../components/BackedBy'
import CompanyTimeline from '../components/CompanyTimeline'

const AboutPage = () => {
  return (
    <main className="__className_974306">
      <Navbar />
      <AboutHero />
      <StatusQuo />
      <HowWeChanging />
      <BackedBy />
      <CompanyTimeline />
      
      <div className="py-[80px] px-[20px] bg-[#F0F7F1]">
        <div className="max-w-6xl mx-auto sm:max-w-[728px] md:max-w-[688px] lg:max-w-[728px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-6">
            <h2 className="text-2xl font-bold text-[#292B29]">Related posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#e8eae6] rounded-lg p-6 hover:shadow-md transition flex-shrink-0 w-full flex flex-col">
              <h3 className="text-base text-[#5a5d5a] font-bold mb-2 line-clamp-3">The LGBTQ+ homeownership story in numbers</h3>
              <p className="text-sm text-[#5a5d5a] mb-4 line-clamp-3 h-15">The fight against LGBTQ+ housing discrimination has turned a corner. Learn your rights with the Better.com infographic on LGBTQ+ homeownership.</p>
              <a href="/" className="text-[#017848] font-medium flex items-center gap-1 mt-auto">Read now 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border border-[#e8eae6] rounded-lg p-6 hover:shadow-md transition flex-shrink-0 w-full flex flex-col">
              <h3 className="text-base text-[#5a5d5a] font-bold mb-2 line-clamp-3">Vishal Garg, Founder and CEO of Better</h3>
              <p className="text-sm text-[#5a5d5a] mb-4 line-clamp-3 h-15">Better.com CEO Vishal Garg has been interested in tech and lending for years. Here's how he zeroed in on mortgages and made it easier for people to buy a home.</p>
              <a href="/" className="text-[#017848] font-medium flex items-center gap-1 mt-auto">Read now 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border border-[#e8eae6] rounded-lg p-6 hover:shadow-md transition flex-shrink-0 w-full flex flex-col">
              <h3 className="text-base text-[#5a5d5a] font-bold mb-2 line-clamp-3">The Year of the Home: 2020 in Review</h3>
              <p className="text-sm text-[#5a5d5a] mb-4 line-clamp-3 h-15">In the socially distanced world of 2020, Better helped 88,100+ new clients navigate their homeownership journey with ease, confidence, and a ton of savings.</p>
              <a href="/" className="text-[#017848] font-medium flex items-center gap-1 mt-auto">Read now 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border border-[#e8eae6] rounded-lg p-6 hover:shadow-md transition flex-shrink-0 w-full flex flex-col">
              <h3 className="text-base text-[#5a5d5a] font-bold mb-2 line-clamp-3">What is Better Mortgage?</h3>
              <p className="text-sm text-[#5a5d5a] mb-4 line-clamp-3 h-15">We launched Better Mortgage because the mortgage industry is broken. That's why we're making homebuying smarter, faster, and better from beginning to end.</p>
              <a href="/" className="text-[#017848] font-medium flex items-center gap-1 mt-auto">Read now 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border border-[#e8eae6] rounded-lg p-6 hover:shadow-md transition flex-shrink-0 w-full flex flex-col">
              <h3 className="text-base text-[#5a5d5a] font-bold mb-2 line-clamp-3">Why I Started Better Mortgage</h3>
              <p className="text-sm text-[#5a5d5a] mb-4 line-clamp-3 h-15">Most founders have a story they pitch when asked about what their company does — something that ties their overall vision to an existing problem. But mine is pretty straightforward. In fact, you might have your own version of it, too.</p>
              <a href="/" className="text-[#017848] font-medium flex items-center gap-1 mt-auto">Read now 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border border-[#e8eae6] rounded-lg p-6 hover:shadow-md transition flex-shrink-0 w-full flex flex-col">
              <h3 className="text-base text-[#5a5d5a] font-bold mb-2 line-clamp-3">Finding Home: Dan and Louise</h3>
              <p className="text-sm text-[#5a5d5a] mb-4 line-clamp-3 h-15">They didn't think homeownership was in the cards. Now they're living a life of leisure in Florida.</p>
              <a href="/" className="text-[#017848] font-medium flex items-center gap-1 mt-auto">Read now 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border border-[#e8eae6] rounded-lg p-6 hover:shadow-md transition flex-shrink-0 w-full flex flex-col">
              <h3 className="text-base text-[#5a5d5a] font-bold mb-2 line-clamp-3">Finding Home: Taisha</h3>
              <p className="text-sm text-[#5a5d5a] mb-4 line-clamp-3 h-15">A doctor and single parent, forced to downsize after divorce, navigates debt and damaged credit to provide a safe home for her family.</p>
              <a href="/" className="text-[#017848] font-medium flex items-center gap-1 mt-auto">Read now 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border border-[#e8eae6] rounded-lg p-6 hover:shadow-md transition flex-shrink-0 w-full flex flex-col">
              <h3 className="text-base text-[#5a5d5a] font-bold mb-2 line-clamp-3">How AI Mortgage Lending is Transforming the Home Loan Process</h3>
              <p className="text-sm text-[#5a5d5a] mb-4 line-clamp-3 h-15">Explore AI mortgage lending, its challenges, risk management, and how AI is transforming the industry with automation, fraud detection, and AI-powered brokers.</p>
              <a href="/" className="text-[#017848] font-medium flex items-center gap-1 mt-auto">Read now 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="border border-[#e8eae6] rounded-lg p-6 hover:shadow-md transition flex-shrink-0 w-full flex flex-col">
              <h3 className="text-base text-[#5a5d5a] font-bold mb-2 line-clamp-3">Self-employed? Here's how to get a mortgage</h3>
              <p className="text-sm text-[#5a5d5a] mb-4 line-clamp-3 h-15">Here's what our underwriters take into consideration when reviewing applications from self-employed borrowers.</p>
              <a href="/" className="text-[#017848] font-medium flex items-center gap-1 mt-auto">Read now 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}

export default AboutPage