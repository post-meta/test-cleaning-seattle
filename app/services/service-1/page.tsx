'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Service1Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      title: "Deep Sanitization",
      description: "Our professional-grade equipment and eco-friendly solutions eliminate 99.9% of bacteria and germs.",
      icon: "🧽"
    },
    {
      title: "Time-Saving",
      description: "Focus on what matters most while our expert team handles all your cleaning needs efficiently.",
      icon: "⏰"
    },
    {
      title: "Healthier Environment",
      description: "Reduce allergens and improve indoor air quality for you and your family's wellbeing.",
      icon: "🌿"
    },
    {
      title: "Professional Results",
      description: "Trained professionals deliver consistent, high-quality results every single time.",
      icon: "✨"
    },
    {
      title: "Flexible Scheduling",
      description: "Weekly, bi-weekly, or monthly service options that fit your busy Seattle lifestyle.",
      icon: "📅"
    },
    {
      title: "Bonded & Insured",
      description: "Complete peace of mind with fully licensed, bonded, and insured cleaning professionals.",
      icon: "🛡️"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We assess your space and discuss your specific cleaning needs and preferences."
    },
    {
      step: 2,
      title: "Custom Cleaning Plan",
      description: "Our team creates a tailored cleaning checklist based on your home's unique requirements."
    },
    {
      step: 3,
      title: "Professional Service",
      description: "Our trained cleaners arrive on time with all supplies and complete your custom cleaning plan."
    },
    {
      step: 4,
      title: "Quality Check",
      description: "We perform a thorough walkthrough to ensure every detail meets our high standards."
    },
    {
      step: 5,
      title: "Follow-up",
      description: "We check in to ensure your complete satisfaction and schedule your next service."
    }
  ];

  const pricingTiers = [
    {
      name: "Essential Clean",
      price: "$120-180",
      frequency: "Per Visit",
      features: [
        "Kitchen deep clean",
        "Bathroom sanitization", 
        "Living areas dusting & vacuuming",
        "Trash removal",
        "Basic floor cleaning"
      ]
    },
    {
      name: "Premium Clean",
      price: "$180-250",
      frequency: "Per Visit",
      popular: true,
      features: [
        "Everything in Essential",
        "Inside appliance cleaning",
        "Window cleaning (interior)",
        "Baseboard wiping",
        "Light fixture cleaning",
        "Cabinet front cleaning"
      ]
    },
    {
      name: "Luxury Clean",
      price: "$250-350",
      frequency: "Per Visit",
      features: [
        "Everything in Premium",
        "Inside oven cleaning",
        "Refrigerator deep clean",
        "Closet organization",
        "Garage cleaning",
        "Same-day service available"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does a typical cleaning service take?",
      answer: "Most residential cleanings take between 2-4 hours depending on the size of your home and the service level selected. We'll provide an accurate time estimate during your consultation."
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer: "No! We bring all professional-grade cleaning supplies and equipment. Our eco-friendly products are safe for your family and pets while delivering superior results."
    },
    {
      question: "Are your cleaners background checked?",
      answer: "Absolutely. All Test Cleaning Seattle team members undergo thorough background checks, are fully insured, and receive ongoing professional training to maintain our high standards."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Your satisfaction is guaranteed. If you're not completely happy with our service, we'll return within 24 hours to address any concerns at no additional cost."
    },
    {
      question: "How do I schedule recurring services?",
      answer: "We offer flexible scheduling for weekly, bi-weekly, or monthly services. You can book online, call us directly, or set up automatic recurring appointments for your convenience."
    },
    {
      question: "Do you clean during specific hours?",
      answer: "We typically service homes Monday through Friday from 8 AM to 6 PM, with some Saturday availability. We're happy to work around your schedule whenever possible."
    },
    {
      question: "What areas of Seattle do you serve?",
      answer: "We proudly serve all neighborhoods throughout Seattle and surrounding areas including Bellevue, Redmond, Kirkland, and other Eastside communities."
    },
    {
      question: "Is there a contract required?",
      answer: "No long-term contracts required! While we offer discounts for recurring services, you can book one-time cleanings or cancel recurring services with 48 hours notice."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Test Cleaning Seattle</Link>
            <div className="flex items-center space-x-4">
              <span>📞 Call for quote</span>
              <span>📍 Seattle, WA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Professional Residential Cleaning Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your Seattle home with our premium cleaning services. Experience the difference of professional-grade cleaning that saves you time and creates a healthier living environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Get Free Quote
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Cleaning Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Proven Cleaning Process</h2>
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Transparent Pricing</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the cleaning package that fits your needs and budget. All prices include supplies and equipment.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`rounded-lg p-8 border-2 ${tier.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} relative`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{tier.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-1">{tier.price}</div>
                <div className="text-gray-600 mb-6">{tier.frequency}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              * Final pricing depends on home size and specific requirements. Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full text-left p-6 bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <span className="text-2xl text-gray-400 flex-shrink-0">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 bg-white border-t border-gray-200">
                    <p className="text-gray-600 mt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Spotless Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied Seattle homeowners who trust Test Cleaning Seattle for their cleaning needs. 
            Book your service today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-lg">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-lg">
              Call for Immediate Quote
            </button>
          </div>
          <div className="mt-8 space-y-2">
            <p className="text-lg">📞 Call for quote | 📍 Serving all of Seattle, WA</p>
            <p className="text-blue-200">Licensed • Bonded • Insured • Satisfaction Guaranteed</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Test Cleaning Seattle</h3>
              <p className="text-gray-300">Professional cleaning services for Seattle homes and businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-white transition duration-200">Home</Link></li>
                <li><Link