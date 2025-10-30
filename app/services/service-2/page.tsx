import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service2Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Test Cleaning Seattle
            </Link>
            <div className="flex items-center space-x-6">
              <span className="text-lg">📞 Call for quote</span>
              <span className="text-lg">📍 Seattle, WA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Deep Cleaning Services in Seattle
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the ultimate transformation with our comprehensive deep cleaning service. 
            Perfect for move-ins, move-outs, spring cleaning, or when your space needs extra attention.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
            Get Your Free Quote Today
          </button>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Professional Deep Cleaning That Goes Beyond Surface Clean
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Our deep cleaning service is designed to tackle every corner, crevice, and surface 
                that regular cleaning might miss. We use professional-grade equipment and eco-friendly 
                products to deliver exceptional results that exceed your expectations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Top-to-bottom comprehensive cleaning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Professional-grade equipment and products</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Attention to often-overlooked areas</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Customizable service packages</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-blue-100 rounded-lg p-8 h-96 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Deep Cleaning Service Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Deep Cleaning Service?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-blue-600 text-4xl mb-4">🧽</div>
              <h3 className="text-xl font-semibold mb-3">Thorough & Comprehensive</h3>
              <p className="text-gray-600">
                We clean areas that are typically overlooked including baseboards, light fixtures, 
                inside appliances, and behind furniture for a truly deep clean.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-green-600 text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly Products</h3>
              <p className="text-gray-600">
                Safe for your family and pets, our environmentally conscious cleaning products 
                deliver powerful results without harmful chemicals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-purple-600 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold mb-3">Time-Saving Solution</h3>
              <p className="text-gray-600">
                Let our professional team handle the intensive cleaning while you focus on 
                more important things. We work efficiently to minimize disruption.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-orange-600 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-gray-600">
                Our trained and insured professionals have years of experience in deep cleaning 
                and know exactly how to handle every surface and material.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-red-600 text-4xl mb-4">💯</div>
              <h3 className="text-xl font-semibold mb-3">Satisfaction Guarantee</h3>
              <p className="text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee. If you're not 
                completely happy, we'll make it right.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="text-teal-600 text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                We work around your schedule with flexible appointment times including 
                evenings and weekends to fit your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Deep Cleaning Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Assessment & Planning</h3>
                  <p className="text-gray-600">
                    We start with a thorough walkthrough of your space to identify areas that need 
                    special attention and create a customized cleaning plan tailored to your needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Preparation & Protection</h3>
                  <p className="text-gray-600">
                    Our team prepares the area by moving furniture when necessary and protecting 
                    valuable items. We ensure all cleaning supplies and equipment are ready.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Top-to-Bottom Deep Clean</h3>
                  <p className="text-gray-600">
                    We systematically clean from ceiling to floor, tackling light fixtures, fans, 
                    baseboards, inside appliances, cabinets, and every surface with meticulous attention.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Sanitization</h3>
                  <p className="text-gray-600">
                    High-touch surfaces, bathrooms, and kitchens receive extra sanitization using 
                    professional-grade disinfectants for a truly hygienic environment.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Final Inspection & Touch-ups</h3>
                  <p className="text-gray-600">
                    We conduct a comprehensive final inspection to ensure every area meets our high 
                    standards, performing any necessary touch-ups before completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Transparent Pricing for Deep Cleaning Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-4">Studio/1 BR</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$150-250</span>
                <p className="text-gray-600 mt-2">400-700 sq ft</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>1 Bathroom deep clean</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Kitchen appliances inside & out</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>All surfaces & baseboards</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Light fixtures & ceiling fans</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
                Get Quote
              </button>
            </div>
            <div className="bg-white border-2 border-blue-600 rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">2-3 Bedroom</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$250-400</span>
                <p className="text-gray-600 mt-2">800-1500 sq ft</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>2-3 Bathrooms deep clean</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Full kitchen deep clean</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>All bedrooms & living areas</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Detailed window cleaning</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
                Get Quote
              </button>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-4">4+ Bedroom</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$400-600</span>
                <p className="text-gray-600 mt-2">1500+ sq ft</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>