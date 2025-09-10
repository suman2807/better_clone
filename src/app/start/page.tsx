import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Start() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-700 py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hi, I&apos;m Betsy!
              </h1>
              <p className="text-xl text-green-100 mb-2">
                What can I help you with?
              </p>
              <p className="text-lg text-green-100 mb-10">
                Complete your home loan application online in as little as 3 minutes. 
                With Better, getting a mortgage has never been easier.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-white text-green-700 hover:bg-gray-100 h-14 px-8 w-full sm:w-auto"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Options Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How can I help you today?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Whether you&apos;re buying your first home or refinancing, 
                I&apos;m here to guide you through the process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Buy a Home */}
              <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="text-green-700 text-5xl mb-6">🏠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy a Home</h3>
                <p className="text-gray-700 mb-6">
                  Start your journey to homeownership with our simple, 
                  online mortgage application.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pre-approval in under 3 minutes</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI-powered rate matching</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized loan options</span>
                  </li>
                </ul>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-green-700 text-white hover:bg-green-800 h-12 px-6 w-full"
                >
                  Start buying
                </a>
              </div>
              
              {/* Refinance */}
              <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="text-green-700 text-5xl mb-6">🔄</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Refinance</h3>
                <p className="text-gray-700 mb-6">
                  Lower your monthly payment or access your home&apos;s equity 
                  with a Better refinance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rate check in under 5 seconds</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cash-out options available</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No impact on your credit score</span>
                  </li>
                </ul>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-green-700 text-white hover:bg-green-800 h-12 px-6 w-full"
                >
                  Start refinancing
                </a>
              </div>
              
              {/* HELOC */}
              <div className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="text-green-700 text-5xl mb-6">💰</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">HELOC</h3>
                <p className="text-gray-700 mb-6">
                  Access up to 90% of your home equity as cash in as 
                  little as 7 days with Better HELOC.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>One Day HELOC™ available</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No closing costs</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flexible repayment options</span>
                  </li>
                </ul>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-green-700 text-white hover:bg-green-800 h-12 px-6 w-full"
                >
                  Start HELOC
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why choose Better?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We&apos;re reimagining the mortgage experience from the ground up.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-gray-700">
                  Our technology delivers decisions in minutes, not weeks.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
                <p className="text-gray-700">
                  Your data is protected with bank-level security.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Save Money</h3>
                <p className="text-gray-700">
                  Our technology helps you find the best rates and save thousands.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Human Support</h3>
                <p className="text-gray-700">
                  Real experts are available to help whenever you need them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-green-700">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-green-100 mb-10">
                Join over 500,000 homeowners who have chosen Better for their mortgage needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-white text-green-700 hover:bg-gray-100 h-14 px-8 w-full sm:w-auto"
                >
                  Get started
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-transparent border-2 border-white text-white hover:bg-green-800 h-14 px-8 w-full sm:w-auto"
                >
                  Speak with an expert
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}