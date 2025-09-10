"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function MortgageCalculator() {
  // State for calculator inputs
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTax, setPropertyTax] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(1200);
  const [hoaFees, setHoaFees] = useState(0);
  const [pmi, setPmi] = useState(0);

  // Calculate down payment percentage when home price or down payment changes
  const handleHomePriceChange = (value: number) => {
    setHomePrice(value);
    setDownPaymentPercent((downPayment / value) * 100);
  };

  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent((value / homePrice) * 100);
  };

  const handleDownPaymentPercentChange = (value: number) => {
    setDownPaymentPercent(value);
    setDownPayment((value / 100) * homePrice);
  };

  // Calculate loan amount
  const loanAmount = homePrice - downPayment;

  // Calculate monthly mortgage payment
  const calculateMonthlyPayment = () => {
    // Monthly interest rate
    const monthlyRate = interestRate / 100 / 12;
    
    // Number of payments
    const numberOfPayments = loanTerm * 12;
    
    // Monthly principal and interest
    let monthlyPI = 0;
    if (monthlyRate > 0) {
      monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else {
      monthlyPI = loanAmount / numberOfPayments;
    }
    
    // Monthly property tax
    const monthlyTax = propertyTax;
    
    // Monthly home insurance
    const monthlyInsurance = homeInsurance / 12;
    
    // Monthly HOA fees
    const monthlyHoa = hoaFees;
    
    // Calculate PMI if down payment is less than 20%
    let monthlyPmi = 0;
    if (downPaymentPercent < 20) {
      monthlyPmi = (loanAmount * 0.005) / 12; // 0.5% annual PMI rate
    }
    
    // Total monthly payment
    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyHoa + monthlyPmi;
    
    return {
      principalAndInterest: monthlyPI,
      propertyTax: monthlyTax,
      homeInsurance: monthlyInsurance,
      hoaFees: monthlyHoa,
      pmi: monthlyPmi,
      total: totalMonthly
    };
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-700 py-12">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mortgage Calculator
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Estimate your monthly mortgage payment with our free calculator. 
                Adjust the values to see how different factors affect your payment.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>
                  
                  <div className="space-y-6">
                    {/* Home Price */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="block text-gray-700 font-medium">Home Price</label>
                        <span className="text-gray-900 font-medium">${homePrice.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="100000"
                        max="2000000"
                        step="10000"
                        value={homePrice}
                        onChange={(e) => handleHomePriceChange(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>$100K</span>
                        <span>$2M</span>
                      </div>
                    </div>
                    
                    {/* Down Payment */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="block text-gray-700 font-medium">
                          Down Payment
                        </label>
                        <div className="flex items-center">
                          <span className="text-gray-900 font-medium mr-2">
                            ${downPayment.toLocaleString()}
                          </span>
                          <span className="text-gray-500">
                            ({downPaymentPercent.toFixed(1)}%)
                          </span>
                        </div>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max={homePrice}
                        step="1000"
                        value={downPayment}
                        onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    
                    {/* Down Payment Percentage */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="block text-gray-700 font-medium">
                          Down Payment Percentage
                        </label>
                        <span className="text-gray-900 font-medium">
                          {downPaymentPercent.toFixed(1)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="0.1"
                        value={downPaymentPercent}
                        onChange={(e) => handleDownPaymentPercentChange(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>0%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    {/* Loan Term */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="block text-gray-700 font-medium">Loan Term</label>
                        <span className="text-gray-900 font-medium">{loanTerm} years</span>
                      </div>
                      <div className="flex space-x-4">
                        {[10, 15, 20, 30].map((term) => (
                          <button
                            key={term}
                            onClick={() => setLoanTerm(term)}
                            className={`px-4 py-2 rounded-full font-medium ${
                              loanTerm === term
                                ? "bg-green-700 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                          >
                            {term} yr
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Interest Rate */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="block text-gray-700 font-medium">Interest Rate</label>
                        <span className="text-gray-900 font-medium">
                          {interestRate.toFixed(2)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        step="0.01"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>1%</span>
                        <span>20%</span>
                      </div>
                    </div>
                    
                    {/* Property Tax */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="block text-gray-700 font-medium">
                          Property Tax (monthly)
                        </label>
                        <span className="text-gray-900 font-medium">
                          ${propertyTax.toLocaleString()}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        step="1"
                        value={propertyTax}
                        onChange={(e) => setPropertyTax(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>$0</span>
                        <span>$2,000</span>
                      </div>
                    </div>
                    
                    {/* Home Insurance */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="block text-gray-700 font-medium">
                          Home Insurance (annual)
                        </label>
                        <span className="text-gray-900 font-medium">
                          ${homeInsurance.toLocaleString()}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        step="100"
                        value={homeInsurance}
                        onChange={(e) => setHomeInsurance(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>$0</span>
                        <span>$5,000</span>
                      </div>
                    </div>
                    
                    {/* HOA Fees */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="block text-gray-700 font-medium">
                          HOA Fees (monthly)
                        </label>
                        <span className="text-gray-900 font-medium">
                          ${hoaFees.toLocaleString()}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={hoaFees}
                        onChange={(e) => setHoaFees(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>$0</span>
                        <span>$1,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Results Section */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Estimated Payment</h2>
                  
                  <div className="bg-green-50 rounded-lg p-6 mb-6">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-green-700 mb-2">
                        ${monthlyPayment.total.toFixed(0)}
                      </div>
                      <div className="text-gray-600">per month</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-700">Principal & Interest</span>
                        <span className="font-medium">
                          ${monthlyPayment.principalAndInterest.toFixed(0)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-700">Property Tax</span>
                        <span className="font-medium">
                          ${monthlyPayment.propertyTax.toFixed(0)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-700">Home Insurance</span>
                        <span className="font-medium">
                          ${monthlyPayment.homeInsurance.toFixed(0)}
                        </span>
                      </div>
                      
                      {hoaFees > 0 && (
                        <div className="flex justify-between pb-2 border-b border-gray-200">
                          <span className="text-gray-700">HOA Fees</span>
                          <span className="font-medium">
                            ${monthlyPayment.hoaFees.toFixed(0)}
                          </span>
                        </div>
                      )}
                      
                      {downPaymentPercent < 20 && (
                        <div className="flex justify-between pb-2 border-b border-gray-200">
                          <span className="text-gray-700">PMI</span>
                          <span className="font-medium">
                            ${monthlyPayment.pmi.toFixed(0)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Loan Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Loan Amount</span>
                        <span className="font-medium">
                          ${loanAmount.toLocaleString()}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-700">Down Payment</span>
                        <span className="font-medium">
                          ${downPayment.toLocaleString()} ({downPaymentPercent.toFixed(1)}%)
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-700">Loan Term</span>
                        <span className="font-medium">{loanTerm} years</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-700">Interest Rate</span>
                        <span className="font-medium">{interestRate.toFixed(2)}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href="/start" 
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-green-700 text-white hover:bg-green-800 h-14 px-8 w-full"
                    >
                      Get Pre-Approved
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Your Mortgage Payment</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included in Your Payment?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-700 text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Principal & Interest</h4>
                        <p className="text-gray-700">
                          The portion that goes toward paying down your loan balance (principal) 
                          and the cost of borrowing (interest).
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-700 text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Property Tax</h4>
                        <p className="text-gray-700">
                          Taxes you pay to your local government based on your home's value.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-700 text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Home Insurance</h4>
                        <p className="text-gray-700">
                          Protection for your home and belongings against damage or loss.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-700 text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">PMI (Private Mortgage Insurance)</h4>
                        <p className="text-gray-700">
                          Required if your down payment is less than 20% of the home's value.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <span className="text-green-700 text-sm font-bold">5</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">HOA Fees</h4>
                        <p className="text-gray-700">
                          Monthly or annual fees if your home is part of a homeowners association.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tips to Lower Your Payment</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Increase Your Down Payment</h4>
                        <p className="text-gray-700">
                          A larger down payment reduces your loan amount and may eliminate PMI.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Improve Your Credit Score</h4>
                        <p className="text-gray-700">
                          A higher credit score can qualify you for lower interest rates.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Shop Around for Rates</h4>
                        <p className="text-gray-700">
                          Compare offers from multiple lenders to find the best rate.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                        <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Consider a Longer Loan Term</h4>
                        <p className="text-gray-700">
                          Extending your loan term reduces monthly payments but increases total interest.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}