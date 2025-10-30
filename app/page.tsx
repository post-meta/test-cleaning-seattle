import Link from 'next/link'
import { Phone, Mail, MapPin, Sparkles, Clock, Shield, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Test Cleaning Seattle</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(206) 555-0123</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@testcleaningseattle.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Professional Cleaning
              <span className="block text-blue-600">Services in Seattle</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the difference with our reliable, thorough, and eco-friendly cleaning services. 
              We make your home or office sparkle so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg">
                Get Free Quote
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
                Call Now
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">4.9/5 from 200+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Test Cleaning Seattle?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional cleaning services with attention to detail and customer satisfaction guaranteed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Insured & Bonded</h3>
              <p className="text-gray-600">
                Fully licensed, insured, and bonded for your peace of mind. Your property is protected with every clean.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                We use environmentally safe products that are tough on dirt but gentle on your family and pets.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Weekly, bi-weekly, or monthly services. We work around your schedule for maximum convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions for homes and businesses throughout Seattle.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Residential Cleaning</h3>
              <p className="text-gray-600 text-sm mb-4">Regular house cleaning services to keep your home pristine.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Learn More →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Cleaning</h3>
              <p className="text-gray-600 text-sm mb-4">Thorough top-to-bottom cleaning for move-ins or special occasions.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Learn More →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Cleaning</h3>
              <p className="text-gray-600 text-sm mb-4">Professional commercial cleaning for offices and businesses.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Learn More →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Move-Out Cleaning</h3>
              <p className="text-gray-600 text-sm mb-4">Complete cleaning service for moving out or preparing to sell.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a Sparkling Clean Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers in Seattle. Get your free quote today and experience the Test Cleaning difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              (206) 555-0123
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Test Cleaning Seattle</span>
              </div>
              <p className="text-gray-300 mb-4">
                Professional cleaning services you can trust. Serving Seattle and surrounding areas with excellence since 2020.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(206) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@testcleaningseattle.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Seattle, WA</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <div className="text-gray-300 space-y-1">
                <p>Capitol Hill</p>
                <p>Ballard</p>
                <p>Queen Anne</p>
                <p>Fremont</p>
                <p>+ More Seattle Areas</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Test Cleaning Seattle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}