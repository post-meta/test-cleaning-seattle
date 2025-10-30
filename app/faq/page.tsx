import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Test Cleaning Seattle | Professional Cleaning Services',
  description: 'Get answers to common questions about Test Cleaning Seattle services, pricing, coverage areas, and booking process. Professional cleaning services in Seattle, WA.',
  keywords: 'Seattle cleaning FAQ, house cleaning questions, maid service Seattle, cleaning prices Seattle, professional cleaners',
  openGraph: {
    title: 'FAQ - Test Cleaning Seattle | House Cleaning Services',
    description: 'Find answers to frequently asked questions about our professional cleaning services in Seattle, WA.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://testcleaningseattle.com/faq'
  }
}

interface FAQItem {
  id: number
  question: string
  answer: string
  category: 'services' | 'pricing' | 'process' | 'areas' | 'qualifications' | 'guarantees'
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What cleaning services does Test Cleaning Seattle offer?",
    answer: "We offer comprehensive residential and commercial cleaning services including regular house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, office cleaning, and specialized services like carpet cleaning and window washing. Our team handles everything from basic maintenance cleaning to detailed sanitization services.",
    category: 'services'
  },
  {
    id: 2,
    question: "How much does house cleaning cost in Seattle?",
    answer: "Our house cleaning rates in Seattle typically range from $120-$300 depending on home size, cleaning frequency, and specific services requested. Regular weekly cleanings start at $120 for smaller homes, while one-time deep cleaning services range from $200-$400. We provide free estimates based on your specific needs and home layout.",
    category: 'pricing'
  },
  {
    id: 3,
    question: "Which areas in Seattle do you serve?",
    answer: "Test Cleaning Seattle serves all neighborhoods throughout Seattle including Capitol Hill, Queen Anne, Ballard, Fremont, Wallingford, University District, West Seattle, Georgetown, and surrounding areas. We also service Bellevue, Redmond, Kirkland, and other nearby communities within a 25-mile radius of downtown Seattle.",
    category: 'areas'
  },
  {
    id: 4,
    question: "Are your cleaning staff licensed and insured?",
    answer: "Yes, Test Cleaning Seattle is fully licensed, bonded, and insured. All our cleaning professionals undergo thorough background checks, receive comprehensive training, and are covered by liability insurance. We carry workers' compensation insurance and general liability coverage up to $2 million for your complete peace of mind.",
    category: 'qualifications'
  },
  {
    id: 5,
    question: "Do you guarantee your cleaning services?",
    answer: "Absolutely! We offer a 100% satisfaction guarantee on all our cleaning services. If you're not completely satisfied with any aspect of our cleaning within 24 hours, we'll return to address any concerns at no additional charge. Your satisfaction is our top priority, and we stand behind the quality of our work.",
    category: 'guarantees'
  },
  {
    id: 6,
    question: "How do I schedule a cleaning appointment?",
    answer: "Scheduling with Test Cleaning Seattle is easy! You can book online through our website, call us at our Seattle number, or request a free estimate through our contact form. We typically respond within 2 hours and can often accommodate same-day or next-day service requests depending on availability.",
    category: 'process'
  },
  {
    id: 7,
    question: "What's included in a standard house cleaning?",
    answer: "Our standard house cleaning includes dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning bathrooms (toilets, sinks, tubs, showers), kitchen cleaning (countertops, appliances, sink), making beds, and trash removal. We also wipe down baseboards, light switches, and door handles as part of our thorough cleaning process.",
    category: 'services'
  },
  {
    id: 8,
    question: "Do you offer weekly, bi-weekly, or monthly cleaning services?",
    answer: "Yes, we offer flexible scheduling options including weekly, bi-weekly, monthly, and one-time cleaning services. Many Seattle clients prefer bi-weekly service as it maintains a consistently clean home while being cost-effective. We can customize a cleaning schedule that fits your lifestyle and budget.",
    category: 'services'
  },
  {
    id: 9,
    question: "What cleaning products do you use?",
    answer: "Test Cleaning Seattle uses eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. We can also accommodate clients with allergies or chemical sensitivities by using specific green cleaning products. If you have preferred cleaning products, we're happy to use those during our service.",
    category: 'process'
  },
  {
    id: 10,
    question: "How long does a typical house cleaning take?",
    answer: "Cleaning time varies based on home size and condition. A typical 2-bedroom apartment takes 2-3 hours, while a 4-bedroom house usually requires 3-5 hours. Initial deep cleanings take longer than maintenance cleanings. Our team works efficiently while maintaining high quality standards throughout the process.",
    category: 'process'
  },
  {
    id: 11,
    question: "Do I need to be home during the cleaning?",
    answer: "You don't need to be home during cleaning service. Many of our Seattle clients provide access instructions and go about their daily routines while we clean. We're fully insured and bonded, so you can trust us with keys or access codes. However, you're always welcome to be present if you prefer.",
    category: 'process'
  },
  {
    id: 12,
    question: "What's the difference between deep cleaning and regular cleaning?",
    answer: "Deep cleaning is a comprehensive, detailed cleaning that includes everything in regular cleaning plus intensive tasks like cleaning inside appliances, detailed bathroom scrubbing, baseboard cleaning, light fixture cleaning, and addressing areas typically missed in routine cleaning. Deep cleaning is recommended for first-time service or homes that haven't been professionally cleaned recently.",
    category: 'services'
  },
  {
    id: 13,
    question: "Can you clean my Seattle apartment or condo?",
    answer: "Absolutely! Test Cleaning Seattle specializes in cleaning Seattle apartments, condos, townhomes, and houses of all sizes. We're experienced with high-rise buildings, security systems, and building-specific requirements. Our team is familiar with most apartment complexes and condo buildings throughout the Seattle area.",
    category: 'areas'
  },
  {
    id: 14,
    question: "How much notice do you need to schedule cleaning?",
    answer: "While we can often accommodate same-day requests, we recommend scheduling at least 24-48 hours in advance to ensure availability. For recurring services, we'll establish a regular schedule that works for your routine. During busy periods, especially spring cleaning season, booking a week ahead is advisable.",
    category: 'process'
  },
  {
    id: 15,
    question: "Do you provide cleaning supplies and equipment?",
    answer: "Yes, Test Cleaning Seattle brings all necessary cleaning supplies, equipment, and tools to every job. This includes vacuum cleaners, mops, microfiber cloths, and professional-grade cleaning products. You don't need to worry about purchasing or storing cleaning supplies - we handle everything.",
    category: 'process'
  },
  {
    id: 16,
    question: "What payment methods do you accept?",
    answer: "We accept multiple payment methods including cash, check, all major credit cards (Visa, MasterCard, American Express), and electronic payments. Payment is typically due upon completion of service, though we can arrange alternative payment schedules for regular clients. All transactions are processed securely.",
    category: 'pricing'
  },
  {
    id: 17,
    question: "Can you help with move-out cleaning for rental properties?",
    answer: "Yes! Our move-out cleaning service is specifically designed to help Seattle renters get their full security deposit back. This comprehensive service includes deep cleaning all rooms, appliances, cabinets, closets, and addressing any areas property managers typically inspect. We know what landlords look for and ensure your rental meets their standards.",
    category: 'services'
  },
  {
    id: 18,
    question: "Are your cleaners employees or independent contractors?",
    answer: "All Test Cleaning Seattle cleaners are fully trained employees, not independent contractors. This means they're covered by our insurance, receive consistent training, and are held to our high standards. You can trust that anyone entering your home represents our company and upholds our commitment to quality and professionalism.",
    category: 'qualifications'
  },
  {
    id: 19,
    question: "What happens if something gets damaged during cleaning?",
    answer: "While damage is extremely rare due to our careful training and procedures, we carry comprehensive insurance that covers any accidental damage to your property. Simply report any concerns within 24 hours, and our insurance will handle the claim promptly. We take full responsibility for our team's work.",
    category: 'guarantees'
  },
  {
    id: 20,
    question: "Do you offer commercial cleaning services in Seattle?",
    answer: "Yes, Test Cleaning Seattle provides commercial cleaning services for offices, retail spaces, restaurants, and other businesses throughout Seattle. Our commercial services include daily maintenance cleaning, deep cleaning, floor care, restroom sanitization, and customized cleaning schedules to meet your business needs.",
    category: 'services'
  },
  {
    id: 21,
    question: "Can you clean homes with pets?",
    answer: "Absolutely! We love pets and are experienced cleaning homes with cats, dogs, and other animals. We use pet-safe cleaning products and can focus on areas that need extra attention due to pet hair, odors, or accidents. Just let us know about your pets when scheduling so we can prepare accordingly.",
    category: 'process'
  },
  {
    id: 22,
    question: "How far in advance should I book holiday cleaning?",
    answer: "For holiday cleaning services, especially around Thanksgiving, Christmas, and New Year's, we recommend booking 2-3 weeks in advance. These are our busiest times as Seattle families prepare for gatherings. Early booking ensures you get your preferred date and time for pre-party or post-party cleaning.",
    category: 'process'
  },
  {
    id: 23,
    question: "What makes Test Cleaning Seattle different from other cleaning services?",
    answer: "Test Cleaning Seattle stands out through our attention to detail, eco-friendly practices, fully trained employees, comprehensive insurance coverage, and strong local reputation. We're Seattle-based, understand local homes and lifestyles, and provide personalized service that larger franchises can't match. Our satisfaction guarantee reflects our confidence in our work.",
    category: 'qualifications'
  },
  {
    id: 24,
    question: "Do you clean vacation rentals and Airbnb properties?",
    answer: "Yes, we provide specialized cleaning services for Seattle vacation rentals, Airbnb properties, and short-term rentals. We understand the quick turnaround requirements and maintain cleaning checklists specific to guest expectations. We can work with your booking schedule to ensure properties are guest-ready between stays.",
    category: 'services'
  },
  {
    id: 25,
    question: "Can you accommodate special cleaning requests?",
    answer: "Definitely! Test Cleaning Seattle can accommodate most special requests including organizing services, refrigerator cleaning, oven deep cleaning, garage cleaning, and other custom tasks. Just discuss your specific needs when booking, and we'll let you know if we can help and any additional costs involved.",
    category: 'services'
  },
  {
    id: 26,
    question: "What if I need to cancel or reschedule my cleaning?",
    answer: "We understand schedules change. We ask for at least 24 hours notice for cancellations or rescheduling to avoid any fees. For same-day cancellations, a small fee may apply. We'll work with you to find a new time that works for your schedule. Regular clients have more flexibility with our cancellation policy.",
    category: 'process'
  },
  {
    id: 27,
    question: "Do you provide post-construction cleanup services?",
    answer: "Yes, Test Cleaning Seattle offers post-construction cleanup services for remodeling projects, new construction, and renovation work. This specialized service includes dust removal, debris cleanup, window cleaning, floor restoration, and detailed cleaning to make your space move-in ready after construction work.",
    category: 'services'
  },
  {
    id: 28,
    question: "How do you handle keys and home security?",
    answer: "We take home security very seriously. Keys are kept in a secure system, and only assigned team members have access. We can work with lockboxes, building security, or any access method you prefer. All employees are bonded and background-checked. We'll provide a record of who accessed your home and when.",
    category: 'process'
  },
  {
    id: 29,
    question: "What areas of Seattle do you serve most frequently?",
    answer: "We regularly service all Seattle neighborhoods, but we're particularly active in Capitol Hill, Queen Anne, Ballard, Fremont, Wallingford, Magnolia, and West Seattle. We also frequently serve Eastside communities like Bellevue, Redmond, and Kirkland. No area is too far - we'll travel anywhere within our service radius.",
    category: 'areas'
  },
  {
    id: 30,
    question: "Can you clean during specific hours or after business hours?",
    answer: "Yes, Test Cleaning Seattle offers flexible scheduling including early morning, evening, and weekend appointments. For commercial clients, we can clean after business hours or before opening. While standard hours are most cost-effective, we'll accommodate special timing needs whenever possible.",
    category: 'process'
  },
  {
    id: 31,
    question: "Do you offer discounts for regular cleaning services?",
    answer: "Yes! We offer significant discounts for regular weekly and bi-weekly cleaning services compared to one-time cleaning rates. Long-term clients also receive loyalty discounts and priority scheduling. We occasionally offer seasonal promotions and referral bonuses for customers who recommend us to friends and neighbors.",
    category: 'pricing'
  },
  {
    id: 32,
    question: "What training do your cleaning professionals receive?",
    answer: "All Test Cleaning Seattle employees complete comprehensive training covering cleaning techniques, safety protocols, customer service, and our quality standards. Training includes proper use of equipment, chemical safety, and specific procedures for different home types. We provide ongoing training to ensure consistent, high-quality service.",
    category: 'qualifications'
  },
  {
    id: 33,
    question: "Can you help prepare my home for special events?",
    answer: "Absolutely! We specialize in pre-event cleaning to ensure your Seattle home is perfect for parties, family gatherings, holidays, or special occasions. We can also provide post-event cleanup to restore your home to normal after entertaining. Many clients book both services for stress-free entertaining.",
    category: 'services'
  },
  {
    id: 34,
    question: "What happens during the initial consultation?",
    answer: "During your initial consultation, we'll assess your home's cleaning needs, discuss your preferences and priorities, explain our services, and provide a detailed quote. This usually takes 15-20 minutes and helps us understand exactly what you want. There's no obligation, and the consultation is completely free.",
    category: 'process'
  },
  {
    id: 35,
    question: "Do you clean high-rise condos and apartments in Seattle?",
    answer: "Yes, Test Cleaning Seattle regularly services high-rise condos and apartments throughout Seattle's downtown, South Lake Union, and other high-rise neighborhoods. Our team is familiar with building access procedures, elevators, and any special requirements for high-rise living. We coordinate with building management as needed.",
    category: 'areas'
  },
  {
    id: 36,
    question: "What quality control measures do you have?",
    answer: "Test Cleaning Seattle maintains quality through detailed checklists, regular supervisor inspections, customer feedback systems, and ongoing staff training. We follow up with clients after service and address any concerns immediately. Our team leaders spot-check work regularly