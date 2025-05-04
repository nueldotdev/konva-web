import Navbar from '@/components/Navbar'
import Image from 'next/image'

function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8 mt-16">
          <h1 className="text-5xl font-bold tracking-tight">
            Transform Business Cards into <br />
            <span className="text-red-600">Digital Contacts</span> Instantly
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scan, store, and manage business cards effortlessly. Never lose a contact again with Konva's smart contact management system.
          </p>

          {/* Email Capture Form */}
          <div className="max-w-md mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Start Free Trial
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              14-day free trial · No credit card required
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 border-y border-gray-100 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "1M+", label: "Cards Scanned" },
              { number: "98%", label: "Accuracy Rate" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600">{stat.number}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">How Konva Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Scan Card",
                description: "Take a photo of any business card using your phone"
              },
              {
                step: "2",
                title: "AI Processing",
                description: "Our AI extracts and organizes all the information"
              },
              {
                step: "3",
                title: "Save & Share",
                description: "Access contacts anywhere and share with your team"
              }
            ].map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>  

        {/* Bottom CTA */}
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Networking?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using Konva to streamline their contacts.
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition-colors text-lg">
            Start Your Free Trial
          </button>
        </div>

        {/* Trust Badges */}
        <div className="py-12 border-t border-gray-100">
          <div className="flex justify-center items-center space-x-12 opacity-70">
            {["Trusted", "Secure", "GDPR Compliant", "24/7 Support"].map((badge, index) => (
              <div key={index} className="text-gray-500 font-medium">{badge}</div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Instant Scanning",
              description: "Scan business cards in seconds with our AI-powered recognition"
            },
            {
              title: "Smart Organization",
              description: "Automatically categorize and organize your business contacts"
            },
            {
              title: "Easy Integration",
              description: "Sync with your favorite CRM and contact management tools"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page