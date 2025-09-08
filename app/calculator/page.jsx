"use client"
import React, { useState, useEffect } from 'react'

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(1142200)
  const [downPayment, setDownPayment] = useState(228440)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(6.5)
  const [zipCode, setZipCode] = useState('466114')
  const [propertyTax, setPropertyTax] = useState(0)
  const [homeInsurance, setHomeInsurance] = useState(0)
  const [hoaFees, setHoaFees] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  useEffect(() => {
    calculateMortgage()
  }, [homePrice, downPayment, loanTerm, interestRate])

  const calculateMortgage = () => {
    const principal = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    if (principal > 0 && monthlyRate > 0) {
      const monthlyPaymentCalc = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      
      const totalPayments = monthlyPaymentCalc * numberOfPayments
      const totalInterestCalc = totalPayments - principal

      setMonthlyPayment(monthlyPaymentCalc)
      setTotalInterest(totalInterestCalc)
    }
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  const downPaymentPercentage = ((downPayment / homePrice) * 100).toFixed(0)
  const totalMonthlyPayment = monthlyPayment + propertyTax + homeInsurance + hoaFees

  return (
    <section className="bg-green-50 py-16">
      <div className="m-auto max-w-screen-2xl justify-between px-6 md:px-14">
        <div className="flex flex-col justify-between gap-x-8">
          <div className="flex-1">
            <h1 className="font-bold text-gray-900 leading-tight m-0 p-0 w-auto text-2xl md:text-3xl tracking-tight md:tracking-tighter max-w-[500px] text-balance">
              Estimate your monthly mortgage payments
            </h1>
            
            <div className="bg-white rounded-lg border border-gray-200 px-6 py-8 lg:p-8 my-8 lg:my-14 flex flex-col lg:flex-row lg:justify-between gap-x-8">
              {/* Calculator Form */}
              <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-flow-row-dense gap-4">
                {/* Home Price */}
                <div className="z-0 relative lg:col-span-3">
                  <div className="p-1 relative rounded-lg bg-inherit w-full border border-solid border-gray-300 ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus-within:shadow-[0_0_0_3px_inset] focus-within:shadow-blue-200 focus-within:border-blue-500 hover:shadow-[0_0_0_3px_inset] hover:shadow-blue-200 hover:border-blue-500 h-14">
                    <label htmlFor="input-homePrice" className="leading-body text-gray-500 absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal">
                      Home price
                    </label>
                    <div className="mr-2 absolute ease-in-out duration-300 transition-all font-bold z-1 w-6 h-6 flex items-center justify-center top-[24px] left-2">
                      $
                    </div>
                    <input
                      data-qa="homePrice"
                      name="homePrice"
                      type="text"
                      id="input-homePrice"
                      className="text-left px-3 pb-0 pl-8 pt-[10px] relative outline-none border-none rounded-sm text-base font-bold w-full h-full box-border bg-inherit"
                      value={formatNumber(homePrice)}
                      onChange={(e) => {
                        const value = e.target.value.replace(/,/g, '')
                        if (!isNaN(value) && value !== '') {
                          setHomePrice(Number(value))
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Down Payment */}
                <div className="flex flex-1 lg:col-span-3">
                  <div className="w-9/12">
                    <div className="z-0 relative">
                      <div className="p-1 relative rounded-l-lg bg-inherit w-full border border-solid border-gray-300 border-r-0 ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus-within:shadow-[0_0_0_3px_inset] focus-within:shadow-blue-200 focus-within:border-blue-500 hover:shadow-[0_0_0_3px_inset] hover:shadow-blue-200 hover:border-blue-500 h-14">
                        <label htmlFor="input-downpayment" className="leading-body text-gray-500 absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal">
                          Down payment
                        </label>
                        <div className="mr-2 absolute ease-in-out duration-300 transition-all font-bold z-1 w-6 h-6 flex items-center justify-center top-[24px] left-2">
                          $
                        </div>
                        <input
                          data-qa="downpayment"
                          name="downpayment"
                          type="text"
                          id="input-downpayment"
                          className="text-left px-3 pb-0 pl-8 pt-[10px] relative outline-none border-none rounded-sm text-base font-bold w-full h-full box-border bg-inherit"
                          value={formatNumber(downPayment)}
                          onChange={(e) => {
                            const value = e.target.value.replace(/,/g, '')
                            if (!isNaN(value) && value !== '') {
                              setDownPayment(Number(value))
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-3/12 min-w-16">
                    <div className="z-0 relative flex">
                      <div className="p-1 relative rounded-r-lg bg-inherit w-full border border-solid border-gray-300 border-l-0 ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus-within:shadow-[0_0_0_3px_inset] focus-within:shadow-blue-200 focus-within:border-blue-500 hover:shadow-[0_0_0_3px_inset] hover:shadow-blue-200 hover:border-blue-500 h-14">
                        <div className="mr-2 top-[20px] absolute ease-in-out duration-300 transition-all font-bold z-1 w-6 h-6 flex items-center justify-center right-2">
                          %
                        </div>
                        <input
                          data-qa="down-payment-ratio"
                          type="text"
                          className="text-left px-3 pb-0 relative outline-none border-none rounded-sm text-base font-bold w-full h-full box-border bg-inherit"
                          value={downPaymentPercentage}
                          onChange={(e) => {
                            const percentage = Number(e.target.value)
                            if (!isNaN(percentage) && percentage >= 0 && percentage <= 100) {
                              setDownPayment(Math.round((homePrice * percentage) / 100))
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Length of Loan */}
                <div className="relative w-full lg:col-span-3">
                  <label className="leading-body m-0 p-0 text-left text-gray-500 absolute left-4 origin-top-left transition-all duration-300 ease-in-out z-1 top-[7px] text-xs font-normal">
                    Length of loan
                  </label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="truncate font-bold text-gray-700 appearance-none bg-inherit outline-none rounded-lg border border-solid border-gray-300 px-4 w-full h-14 p-1 pb-0 pt-4 duration-300 ease-in-out z-0 focus:border-blue-500 focus:shadow-[0_0_0_3px_inset] focus:shadow-blue-200 hover:border-blue-500 hover:shadow-[0_0_0_3px_inset] hover:shadow-blue-200"
                  >
                    <option value={30}>30 years</option>
                    <option value={20}>20 years</option>
                    <option value={15}>15 years</option>
                  </select>
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-2">
                    <path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor"></path>
                  </svg>
                </div>

                {/* Interest Rate */}
                <div className="z-0 relative lg:col-span-2">
                  <div className="p-1 relative rounded-lg bg-inherit w-full border border-solid border-gray-300 ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus-within:shadow-[0_0_0_3px_inset] focus-within:shadow-blue-200 focus-within:border-blue-500 hover:shadow-[0_0_0_3px_inset] hover:shadow-blue-200 hover:border-blue-500 h-14">
                    <label htmlFor="input-interestRate" className="leading-body text-gray-500 absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal">
                      Interest rate
                    </label>
                    <div className="mr-2 absolute ease-in-out duration-300 transition-all font-bold z-1 w-6 h-6 flex items-center justify-center top-[24px] right-2">
                      %
                    </div>
                    <input
                      type="number"
                      step="0.1"
                      id="input-interestRate"
                      className="text-left px-3 pb-0 pt-[10px] relative outline-none border-none rounded-sm text-base font-bold w-full h-full box-border bg-inherit"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                    />
                  </div>
                </div>

                {/* ZIP Code */}
                <div className="z-0 relative lg:col-span-1">
                  <div className="p-1 relative rounded-lg bg-inherit w-full border border-solid border-gray-300 ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus-within:shadow-[0_0_0_3px_inset] focus-within:shadow-blue-200 focus-within:border-blue-500 hover:shadow-[0_0_0_3px_inset] hover:shadow-blue-200 hover:border-blue-500 h-14">
                    <label htmlFor="input-zipcode" className="leading-body text-gray-500 absolute left-4 ease-in-out duration-300 transition-all transform-origin-top-left z-1 top-[5px] text-xs font-normal">
                      ZIP code
                    </label>
                    <input
                      maxLength="5"
                      type="text"
                      id="input-zipcode"
                      className="text-left px-3 pb-0 pt-[10px] relative outline-none border-none rounded-sm text-base font-bold w-full h-full box-border bg-inherit"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                </div>

                {/* Slider */}
                <div className="relative mt-8 mb-6 lg:col-span-6 lg:mt-6">
                  <input
                    type="range"
                    min="50000"
                    max="3000000"
                    step="100"
                    className="bg-gray-900 rounded-lg w-full cursor-pointer appearance-none focus:outline-none h-1"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    style={{
                      background: `linear-gradient(to right, rgb(41, 43, 41) ${((homePrice - 50000) / (3000000 - 50000)) * 100}%, rgb(200, 201, 198) ${((homePrice - 50000) / (3000000 - 50000)) * 100}%, rgb(200, 201, 198) 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Monthly Payment Display */}
              <div className="w-full lg:max-w-[225px]">
                <p className="leading-body m-0 p-0 text-left text-gray-900 font-bold text-base mb-4">
                  Monthly payment
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-6">
                  {formatCurrency(totalMonthlyPayment)}/mo
                </div>
                <a
                  className="rounded-lg leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-in-out focus:shadow-[0_0_0_4px_inset] text-white bg-green-700 hover:bg-green-800 focus:bg-green-800 px-6 h-14 inline-flex items-center justify-center w-full lg:min-w-[220px]"
                  href="/preapproval/nxt-purchase"
                >
                  Get pre-approved
                </a>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-[250px] md:gap-x-8">
                <h4 className="font-bold text-gray-900 leading-tight m-0 p-0 tracking-normal w-auto text-base md:text-lg">
                  Monthly payment breakdown
                </h4>
                <p className="leading-body m-0 p-0 text-left mt-4 overflow-hidden text-2xl font-bold text-gray-900">
                  {formatCurrency(totalMonthlyPayment)}/mo
                </p>

                {/* Payment Breakdown Items */}
                <div>
                  {/* Principal & Interest */}
                  <div className="flex justify-between h-14 mb-4">
                    <div className="flex items-center text-gray-900 w-1/2">
                      <div className="rounded-sm h-4 w-[5px] mr-2 bg-gray-800"></div>
                      <p className="font-normal leading-body m-0 p-0 text-left text-gray-900 text-base">
                        Principal & interest
                      </p>
                    </div>
                    <p className="leading-body m-0 p-0 text-base pt-0 items-center text-left w-1/2 sm:w-[160px] flex font-bold text-gray-700">
                      {formatCurrency(monthlyPayment)}
                    </p>
                  </div>

                  {/* Property Taxes */}
                  <div className="flex justify-between h-14 mb-4">
                    <div className="flex items-center text-gray-900 w-1/2">
                      <div className="rounded-sm h-4 w-[5px] mr-2 bg-blue-500"></div>
                      <label className="font-normal leading-body m-0 p-0 text-left text-gray-900 text-base">
                        Property taxes
                      </label>
                    </div>
                    <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                      <div className="p-1 relative rounded-lg bg-inherit w-full border border-solid border-gray-300 ease-in-out duration-300 h-14">
                        <div className="mr-2 top-[20px] absolute ease-in-out duration-300 transition-all font-bold z-1 w-6 h-6 flex items-center justify-center left-2">
                          $
                        </div>
                        <input
                          name="taxes"
                          type="number"
                          className="text-right px-3 pb-0 pl-8 relative outline-none border-none rounded-sm text-base font-bold w-full h-full box-border bg-inherit"
                          value={propertyTax}
                          onChange={(e) => setPropertyTax(Number(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Homeowners Insurance */}
                  <div className="flex justify-between h-14 mb-4">
                    <div className="flex items-center text-gray-900 w-1/2">
                      <div className="rounded-sm h-4 w-[5px] mr-2 bg-yellow-500"></div>
                      <label className="font-normal leading-body m-0 p-0 text-left text-gray-900 text-base">
                        Homeowners insurance
                      </label>
                    </div>
                    <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                      <div className="p-1 relative rounded-lg bg-inherit w-full border border-solid border-gray-300 ease-in-out duration-300 h-14">
                        <div className="mr-2 top-[20px] absolute ease-in-out duration-300 transition-all font-bold z-1 w-6 h-6 flex items-center justify-center left-2">
                          $
                        </div>
                        <input
                          name="insurance"
                          type="number"
                          className="text-right px-3 pb-0 pl-8 relative outline-none border-none rounded-sm text-base font-bold w-full h-full box-border bg-inherit"
                          value={homeInsurance}
                          onChange={(e) => setHomeInsurance(Number(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* HOA Fees */}
                  <div className="flex justify-between h-14 mb-4">
                    <div className="flex items-center text-gray-900 w-1/2">
                      <div className="rounded-sm h-4 w-[5px] mr-2 bg-purple-500"></div>
                      <label className="font-normal leading-body m-0 p-0 text-left text-gray-900 text-base">
                        HOA fees
                      </label>
                    </div>
                    <div className="z-0 relative pt-0 items-center text-left w-1/2 sm:w-[160px]">
                      <div className="p-1 relative rounded-lg bg-inherit w-full border border-solid border-gray-300 ease-in-out duration-300 h-14">
                        <div className="mr-2 top-[20px] absolute ease-in-out duration-300 transition-all font-bold z-1 w-6 h-6 flex items-center justify-center left-2">
                          $
                        </div>
                        <input
                          name="hoa"
                          type="number"
                          className="text-right px-3 pb-0 pl-8 relative outline-none border-none rounded-sm text-base font-bold w-full h-full box-border bg-inherit"
                          value={hoaFees}
                          onChange={(e) => setHoaFees(Number(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Copy Link Button */}
                  <button className="inline-block rounded-lg leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-in-out text-gray-700 bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 px-4 h-10 w-auto mb-2">
                    Copy estimate link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MortgageCalculator