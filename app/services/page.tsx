import Link from 'next/link';
import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      id: 'service-1',
      title: 'Residential Cleaning',
      description: 'Professional home cleaning services tailored to your needs. We provide thorough cleaning of all rooms, including kitchens, bathrooms, bedrooms, and living areas. Our experienced team uses eco-friendly products to ensure your home is spotless and safe.',
      features: ['Deep cleaning', 'Regular maintenance', 'Eco-friendly products', 'Licensed and insured'],
      href: '/services/service-1'
    },
    {
      id: 'service-2',
      title: 'Commercial Cleaning',
      description: 'Comprehensive office and commercial space cleaning solutions for businesses in Seattle. From small offices to large commercial buildings, we maintain clean, healthy work environments that boost productivity and impress clients.',
      features: ['Office buildings', 'Retail spaces', 'Medical facilities', 'Flexible scheduling'],
      href: '/services/service-2'
    },
    {
      id: 'service-3',
      title: 'Move-In/Move-Out Cleaning',
      description: 'Specialized cleaning services for moving transitions. Whether you\'re preparing your old home for new owners or getting your new space ready, we ensure every corner is thoroughly cleaned and sanitized.',
      features: ['Deep sanitization', 'Appliance cleaning', 'Cabinet interiors', 'Same-day availability'],
      href: '/services/service-3'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Cleaning Services</h1>
            <p className="text-xl text-blue-100">
              Professional cleaning solutions for homes and businesses in Seattle
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What's Included:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex-1"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-md text-blue-600 hover:bg-blue-50 transition-colors duration-200 flex-1"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact Test Cleaning Seattle today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Call Now: (123) 456-7890
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}