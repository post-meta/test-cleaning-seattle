import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Cleaning Services Seattle | Test Cleaning Seattle',
  description: 'Professional residential cleaning services in Seattle, WA. Reliable, thorough, and affordable house cleaning with experienced cleaners. Call for your free quote today.',
  keywords: 'residential cleaning Seattle, house cleaning Seattle, home cleaning services, Seattle cleaners',
};

export default function Service1Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Residential Cleaning Services in Seattle
            </h1>
            <p className="text-xl mb-8">
              Transform your home with our thorough, reliable residential cleaning services. 
              Serving Seattle and surrounding areas with exceptional care and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1234567890" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call for Free Quote
              </a>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Residential Cleaning Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">100% Satisfaction Guaranteed</h3>
                <p className="text-gray-600">We're not satisfied until you are. If you're not happy with our service, we'll make it right.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Bonded & Insured</h3>
                <p className="text-gray-600">All our cleaning professionals are fully bonded and insured for your peace of mind.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">Weekly, bi-weekly, monthly, or one-time cleaning services to fit your busy schedule.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly Products</h3>
                <p className="text-gray-600">Safe, non-toxic cleaning products that are gentle on your family and pets while being tough on dirt.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
                <p className="text-gray-600">Our trained and experienced cleaning professionals deliver consistent, high-quality results every time.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
                <p className="text-gray-600">Fair, transparent pricing with no hidden fees. Get the best value for professional cleaning services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Simple 4-Step Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Your Quote</h3>
                <p className="text-gray-600">Contact us for a free, no-obligation quote. We'll assess your home's cleaning needs and provide transparent pricing.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Schedule Service</h3>
                <p className="text-gray-600">Choose a date and time that works for you. We offer flexible scheduling to fit your busy lifestyle.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Cleaning</h3>
                <p className="text-gray-600">Our trained team arrives on time with all supplies and equipment, delivering thorough, detailed cleaning.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Enjoy Your Clean Home</h3>
                <p className="text-gray-600">Relax and enjoy your spotless home. We guarantee your satisfaction with our quality cleaning service.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included in Our Residential Cleaning</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Kitchen</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Clean and sanitize countertops</li>
                  <li>• Clean exterior of appliances</li>
                  <li>• Clean sink and faucet</li>
                  <li>• Wipe down cabinet fronts</li>
                  <li>• Sweep and mop floors</li>
                  <li>• Empty trash and replace liner</li>
                </ul>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Bathrooms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Scrub and disinfect toilet</li>
                  <li>• Clean shower/tub and fixtures</li>
                  <li>• Wipe down vanity and sink</li>
                  <li>• Clean mirrors</li>
                  <li>• Sweep and mop floors</li>
                  <li>• Empty trash and replace liner</li>
                </ul>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Living Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dust furniture and surfaces</li>
                  <li>• Vacuum carpets and rugs</li>
                  <li>• Clean hardwood/tile floors</li>
                  <li>• Wipe down baseboards</li>
                  <li>• Clean light switches and handles</li>
                  <li>• Organize and tidy up</li>
                </ul>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Bedrooms</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Make beds (if requested)</li>
                  <li>• Dust nightstands and dressers</li>
                  <li>• Vacuum carpets</li>
                  <li>• Clean mirrors</li>
                  <li>• Empty wastebaskets</li>
                  <li>• Organize surfaces</li>
                </ul>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">General Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dust all accessible surfaces</li>
                  <li>• Clean door frames and handles</li>
                  <li>• Wipe down light switches</li>
                  <li>• Vacuum stairs</li>
                  <li>• Clean glass surfaces</li>
                  <li>• Spot clean walls</li>
                </ul>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Add-On Services</h3>