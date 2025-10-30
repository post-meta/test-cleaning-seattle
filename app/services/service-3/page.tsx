```tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Clock, Shield, Star, Phone, MapPin, Users, Sparkles } from 'lucide-react';

export default function Service3Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Deep Cleaning Services in Seattle
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transform your space with our comprehensive deep cleaning service. Perfect for move-ins, seasonal cleaning, or giving your home a fresh start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition duration-300">
                  Get Free Quote
                </button>
                <div className="flex items-center gap-2 text-lg">
                  <Phone className="w-5 h-5" />
                  <span>Call for quote</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">Serving Seattle, WA</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">5★</div>
                    <div className="text-sm">Rating</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-400">500+</div>
                    <div className="text-sm">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Deep Cleaning Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our thorough deep cleaning service goes beyond surface cleaning to tackle every corner, crevice, and forgotten area of your home or office.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-blue-600" />,
                title: "Comprehensive Coverage",
                description: "We clean areas that regular cleaning services miss, including baseboards, light fixtures, inside appliances, and behind furniture."
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: "Safe & Eco-Friendly",
                description: "Our deep cleaning products are environmentally safe, non-toxic, and effective against bacteria, allergens, and stubborn grime."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: "Experienced Team",
                description: "Our trained professionals have years of experience in deep cleaning techniques and use specialized equipment for superior results."
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: "Flexible Scheduling",
                description: "We work around your schedule with evening and weekend availability to minimize disruption to your daily routine."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
                title: "Satisfaction Guaranteed",
                description: "We're not happy until you are. If you're not completely satisfied, we'll return to make it right at no extra charge."
              },
              {
                icon: <Star className="w-8 h-8 text-blue-600" />,
                title: "Premium Results",
                description: "Transform your space into a pristine environment that looks, feels, and smells fresh and clean for weeks to come."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Deep Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every area of your space receives the attention it deserves.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Initial Assessment",
                  description: "We conduct a thorough walkthrough to identify problem areas, discuss your specific needs, and create a customized cleaning plan."
                },
                {
                  step: "02",
                  title: "Pre-Cleaning Preparation",
                  description: "We move furniture when necessary, protect surfaces, and organize our professional-grade equipment and eco-friendly cleaning products."
                },
                {
                  step: "03",
                  title: "Deep Clean Execution",
                  description: "Our team systematically cleans each room, tackling baseboards, light fixtures, inside appliances, windows, and all surfaces from top to bottom."
                },
                {
                  step: "04",
                  title: "Quality Inspection",
                  description: "We perform a detailed quality check with you, ensuring every area meets our high standards before considering the job complete."
                },
                {
                  step: "05",
                  title: "Final Walkthrough",
                  description: "We do a final inspection together, address any concerns, and provide maintenance tips to keep your space looking its best."
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Deep scrubbing of all surfaces",
                    "Detailed bathroom sanitization",
                    "Kitchen appliance interior cleaning",
                    "Baseboard and trim cleaning",
                    "Light fixture and ceiling fan cleaning",
                    "Window sill and frame cleaning",
                    "Cabinet front and handle cleaning",
                    "Floor deep cleaning and mopping",
                    "Dust removal from all surfaces",
                    "Vacuum and steam cleaning",
                    "Sanitization of high-touch areas",
                    "Trash removal and fresh liners"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Deep Cleaning Pricing Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing based on your space size and specific needs. All estimates include a detailed breakdown with no hidden fees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Studio/1 Bedroom",
                price: "$200 - $300",
                features: [
                  "1 bathroom deep clean",
                  "Kitchen appliance interior",
                  "All surfaces and fixtures",
                  "Floor deep cleaning",
                  "Window cleaning",
                  "3-4 hours service"
                ],
                popular: false
              },
              {
                title: "2-3 Bedrooms",
                price: "$300 - $450",
                features: [
                  "2 bathroom deep clean",
                  "Kitchen + dining areas",
                  "All bedrooms and living areas",
                  "Baseboard and trim cleaning",
                  "Light fixture cleaning",
                  "4-6 hours service"
                ],
                popular: true
              },
              {
                title: "4+ Bedrooms",
                price: "$450 - $650",
                features: [
                  "3+ bathroom deep clean",
                  "Large kitchen and common areas",
                  "Multiple bedrooms",
                  "Detailed surface cleaning",
                  "Complete home coverage",
                  "6-8 hours service"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-lg shadow-lg p-6 ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.title}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">One-time service</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-300 ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing Factors:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Base Pricing Includes:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Square footage assessment</li>
                  <li>• Number of rooms and bathrooms</li>
                  <li>• Standard deep cleaning tasks</li>
                  <li>• Professional equipment and supplies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Additional Services:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Carpet steam cleaning (+$50-$100)</li>
                  <li>• Garage or basement (+$75-$150)</li>
                  <li>• Interior window cleaning (+$25-$50)</li>
                  <li>• Move-in/out cleaning (+20%)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about