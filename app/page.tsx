import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Home, Building, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Test Cleaning Seattle - Professional House & Office Cleaning Services',
  description: 'Trusted cleaning services in Seattle, WA. Residential and commercial cleaning with eco-friendly products. Book your free estimate today!',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Test Cleaning Seattle</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="tel:+12065551234" className="flex items-center text-blue-600 font-semibold">
                <Phone className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">(206) 555-1234</span>
              </a>
              <Link 
                href="#contact" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Seattle's Most Trusted 
                <span className="text-blue-600"> Cleaning Service</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional residential and commercial cleaning services throughout Seattle and surrounding areas. 
                We use eco-friendly products and guarantee 100% satisfaction with every clean.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  href="#contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg text-center"
                >
                  Schedule Free Estimate
                </Link>
                <a 
                  href="tel:+12065551234" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-lg text-center"
                >
                  Call Now: (206) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Licensed & Insured
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Eco-Friendly Products
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Same Day Service
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 font-semibold">5.0 Rating</span>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "Test Cleaning Seattle transformed our home! Their attention to detail is incredible, 
                  and they always use products that are safe for our kids and pets. Highly recommend!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Martinez</p>
                    <p className="text-gray-600 text-sm">Capitol Hill Resident</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Cleaning Services in Seattle
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cozy apartments in Belltown to large offices in South Lake Union, 
              we provide thorough, reliable cleaning services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Residential Cleaning</h4>
              <p className="text-gray-600 mb-6">
                Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas. 
                Perfect for busy Seattle families and professionals.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Deep cleaning and maintenance cleaning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Move-in and move-out cleaning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Post-construction cleanup
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Commercial Cleaning</h4>
              <p className="text-gray-600 mb-6">
                Professional office cleaning services for Seattle businesses. 
                Flexible scheduling including evenings and weekends to fit your operations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Daily, weekly, or monthly service
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Restroom and break room sanitization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Floor care and window cleaning
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Specialty Services</h4>
              <p className="text-gray-600 mb-6">
                Additional cleaning services to handle unique situations and maintain your property 
                in pristine condition year-round.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Carpet and upholstery cleaning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Window washing (interior/exterior)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  Holiday and event cleanup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Seattle Residents Choose Test Cleaning
            </h3>
            <p className="text-xl text-gray-600">
              Over 500 satisfied customers across Queen Anne, Capitol Hill, Ballard, and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction Guarantee</h4>
              <p className="text-gray-600">
                Not happy with our service? We'll return within 24 hours to make it right at no extra charge.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h4>
              <p className="text-gray-600">
                Same-day service available. We work around your schedule with evening and weekend appointments.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Products</h4>
              <p className="text-gray-600">
                Safe for children, pets, and the environment. We use only certified green cleaning supplies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="h-10 w-10 text-yellow-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">5-Star Service</h4>
              <p className="text-gray-600">
                Consistently rated 5 stars by Seattle customers. Licensed, bonded, and insured for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Serving All of Seattle and Beyond
            </h3>
            <p className="text-xl text-gray-600">
              Professional cleaning services throughout King County
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Seattle Neighborhoods</h4>
              <ul className="space-y-2 text-gray-600">