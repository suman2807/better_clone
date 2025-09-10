import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-700 py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                We're redefining homeownership
              </h1>
              <p className="text-xl text-green-100 mb-10">
                Better.com is redefining the homeownership process from the ground up. 
                We're using technology to make it faster and more efficient, and humans 
                to help make it better.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/start" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-white text-green-700 hover:bg-gray-100 h-14 px-8 w-full sm:w-auto"
                >
                  Get started
                </a>
                <a 
                  href="/careers" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-transparent border-2 border-white text-white hover:bg-green-800 h-14 px-8 w-full sm:w-auto"
                >
                  Join our team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-5xl font-bold text-green-700 mb-2">$100B+</div>
                <div className="text-lg text-gray-700">Home loans funded</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-green-700 mb-2">500K+</div>
                <div className="text-lg text-gray-700">Customers served</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-green-700 mb-2">1.5M+</div>
                <div className="text-lg text-gray-700">Homes closed on</div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our story began with a simple idea
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Better Mortgage was born out of necessity. It began when my wife and I 
                  applied for our first mortgage and got to experience firsthand the 
                  inefficient processes that have plagued the industry for decades.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We knew there had to be a better way. So we built one.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we're a team of engineers, designers, and mortgage experts 
                  working together to create a faster, more transparent, and more 
                  efficient mortgage experience for everyone.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://media.better.com/better-com/about-us/our-story.webp" 
                  alt="Better.com team" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our values
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We're guided by a set of core principles that shape how we work, 
                what we build, and who we are.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-green-700 text-4xl mb-4">01</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer First</h3>
                <p className="text-gray-700">
                  Everything we do is focused on providing the best possible experience 
                  for our customers.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-green-700 text-4xl mb-4">02</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-700">
                  We believe in clear communication and full disclosure throughout 
                  the entire process.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-green-700 text-4xl mb-4">03</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We're constantly pushing the boundaries of what's possible to 
                  improve the mortgage experience.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-green-700 text-4xl mb-4">04</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-700">
                  We do the right thing, even when no one is watching, and we hold 
                  ourselves to the highest ethical standards.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-green-700 text-4xl mb-4">05</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teamwork</h3>
                <p className="text-gray-700">
                  We believe that together we can accomplish more than any of us 
                  could achieve alone.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-green-700 text-4xl mb-4">06</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in everything we do, from the smallest 
                  details to the biggest initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in 
                technology, finance, and real estate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://media.better.com/better-com/about-us/vishal-garg.webp" 
                    alt="Vishal Garg" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Vishal Garg</h3>
                <p className="text-green-700 font-medium">Founder & CEO</p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://media.better.com/better-com/about-us/placeholder-leader.webp" 
                    alt="Leadership Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Leadership Team</h3>
                <p className="text-green-700 font-medium">CTO, CFO, CPO, and more</p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="https://media.better.com/better-com/about-us/placeholder-team.webp" 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Team</h3>
                <p className="text-green-700 font-medium">500+ employees across the US</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}