import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, Home, Building } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      id: 'service-1',
      title: 'Residential Cleaning',
      description: 'Professional home cleaning services for your house or apartment. Our experienced team provides thorough, reliable cleaning using eco-friendly products to keep your living space spotless and healthy.',
      icon: <Home className="w-8 h-8 text-blue-600" />,
      features: ['Deep cleaning', 'Regular maintenance', 'Move-in/out cleaning', 'Eco-friendly products'],
      link: '/services/service-1'
    },
    {
      id: 'service-2',
      title: 'Commercial Cleaning',
      description: 'Comprehensive office and commercial space cleaning solutions. We help maintain a professional, clean environment for your business with flexible scheduling and customized cleaning plans.',
      icon: <Building className="w-8 h-8 text-green-600" />,
      features: ['Office cleaning', 'Retail spaces', 'Medical facilities', 'Flexible scheduling'],
      link: '/services/service-2'
    },
    {
      id: 'service-3',
      title: 'Deep Cleaning Specialists',
      description: 'Intensive deep cleaning services for when you need that extra level of cleanliness. Perfect for spring cleaning, post-construction cleanup, or preparing for special events.',
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      features: ['Post-construction cleanup', 'Spring cleaning', 'Move-in preparation', 'Event cleanup'],
      link: '/services/service-3'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Professional Cleaning Services
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Test Cleaning Seattle provides top-quality cleaning services throughout the Seattle area. 
              Choose from our range of professional cleaning solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <CardDescription className="text-gray-600 text-base mb-6 flex-grow">
                  {service.description}
                </CardDescription>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Service Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto space-y-3">
                  <Link href={service.link}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact Test Cleaning Seattle today for a free estimate and discover why we're Seattle's trusted cleaning service provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                  Get Free Estimate
                </Button>
              </Link>
              <Link href="tel:+1234567890">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 px-8">
                  Call Now: (123) 456-7890
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving Seattle & Surrounding Areas</h3>
            <p className="text-gray-600">
              Bellevue • Redmond • Kirkland • Bothell • Lynnwood • Shoreline • Renton • Kent
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}