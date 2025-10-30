import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Service2Page() {
  return (
    <>
      <Head>
        <title>Deep Cleaning Services Seattle - Test Cleaning Seattle</title>
        <meta name="description" content="Professional deep cleaning services in Seattle, WA. Comprehensive sanitization, detailed cleaning, and restoration. Call Test Cleaning Seattle for a quote today." />
        <meta name="keywords" content="deep cleaning Seattle, professional cleaning services, sanitization, detailed cleaning, Seattle WA" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">Test Cleaning Seattle</Link>
              <div className="flex space-x-6">
                <Link href="/" className="hover:text-blue-200">Home</Link>
                <Link href="/services" className="hover:text-blue-200">Services</Link>
                <Link href="/about" className="hover:text-blue-200">About</Link>
                <Link href="/contact" className="hover:text-blue-200">Contact</Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Professional Deep Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive deep cleaning solutions for homes and businesses in Seattle, WA. 
              Our thorough approach ensures every corner is spotless and sanitized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Call for Quote
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Our Deep Cleaning Service?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Coverage</h3>
                <p className="text-gray-600">Every surface, corner, and crevice receives attention. Our deep cleaning goes beyond regular maintenance.</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Health & Safety Focus</h3>
                <p className="text-gray-600">Eliminate allergens, bacteria, and harmful contaminants for a healthier living environment.</p>
              </div>
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Long-lasting Results</h3>
                <p className="text-gray-600">Our thorough process provides results that last longer than standard cleaning services.</p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Additional Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Professional-grade equipment and eco-friendly products
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Trained and insured cleaning professionals
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Flexible scheduling including weekends
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    100% satisfaction guarantee
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Perfect For</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                    </svg>
                    Spring cleaning and seasonal preparation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                    </svg>
                    Move-in/move-out cleaning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                    </svg>
                    Post-construction cleaning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                    </svg>
                    Commercial space preparation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Deep Cleaning Process
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                    <p className="text-gray-600">We conduct a thorough walkthrough to identify problem areas, assess cleaning requirements, and develop a customized cleaning plan for your space.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Preparation & Setup</h3>
                    <p className="text-gray-600">Our team arrives with professional-grade equipment and eco-friendly cleaning products. We protect furniture and prepare the workspace for deep cleaning.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Deep Cleaning Execution</h3>
                    <p className="text-gray-600">Systematic cleaning from top to bottom including baseboards, light fixtures, inside appliances, behind furniture, and all hard-to-reach areas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sanitization & Disinfection</h3>
                    <p className="text-gray-600">Complete sanitization of all surfaces using EPA-approved disinfectants, focusing on high-touch areas and potential germ hotspots.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Final Inspection</h3>
                    <p className="text-gray-600">Quality control check to ensure every area meets our standards. We address any missed spots and conduct a final walkthrough with you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Deep Cleaning Pricing Guide
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition duration-300">
                <h3 className="text-2xl font-semibold text-center mb-4">