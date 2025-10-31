import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Test Cleaning Seattle | Professional Cleaning Services',
  description: 'Get answers to common questions about Test Cleaning Seattle\'s professional cleaning services, pricing, scheduling, and service areas in Seattle, WA.',
  keywords: 'cleaning service FAQ, Seattle cleaning questions, house cleaning answers, commercial cleaning, residential cleaning, cleaning prices Seattle',
  openGraph: {
    title: 'FAQ - Test Cleaning Seattle | Your Cleaning Questions Answered',
    description: 'Find answers to frequently asked questions about professional cleaning services in Seattle, WA.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://testcleaningseattle.com/faq'
  }
};

interface FAQItem {
  question: string;
  answer: string;
  category: 'services' | 'pricing' | 'process' | 'areas' | 'qualifications' | 'guarantees';
}

const faqData: FAQItem[] = [
  {
    question: "What cleaning services does Test Cleaning Seattle offer?",
    answer: "We provide comprehensive residential and commercial cleaning services including regular house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, office cleaning, and specialized services like carpet cleaning and window washing.",
    category: "services"
  },
  {
    question: "How much does house cleaning cost in Seattle?",
    answer: "Our residential cleaning services typically range from $120-$300 depending on home size, cleaning frequency, and specific requirements. We offer free estimates and can customize packages to fit your budget and needs.",
    category: "pricing"
  },
  {
    question: "Do you serve my area in Seattle?",
    answer: "Test Cleaning Seattle serves all neighborhoods throughout Seattle including Capitol Hill, Ballard, Fremont, Queen Anne, Wallingford, Green Lake, Magnolia, and surrounding areas. Contact us to confirm service availability in your specific location.",
    category: "areas"
  },
  {
    question: "Are your cleaners insured and bonded?",
    answer: "Yes, all Test Cleaning Seattle employees are fully insured, bonded, and background-checked for your peace of mind. We carry comprehensive liability insurance to protect your property and belongings during cleaning services.",
    category: "qualifications"
  },
  {
    question: "What is included in your satisfaction guarantee?",
    answer: "We offer a 24-hour satisfaction guarantee. If you're not completely happy with our cleaning service, contact us within 24 hours and we'll return to re-clean any areas at no additional charge.",
    category: "guarantees"
  },
  {
    question: "How do I schedule a cleaning appointment?",
    answer: "You can schedule online through our website, call us directly, or text us. We offer flexible scheduling including same-day service when available. Our booking system allows you to choose your preferred date, time, and cleaning type.",
    category: "process"
  },
  {
    question: "What's the difference between regular cleaning and deep cleaning?",
    answer: "Regular cleaning covers routine maintenance like dusting, vacuuming, and bathroom/kitchen cleaning. Deep cleaning is more thorough, including baseboards, light fixtures, inside appliances, and areas not covered in regular cleaning. We recommend deep cleaning for first-time service or seasonal cleanings.",
    category: "services"
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you don't need to be present during cleaning. Many clients provide access instructions or hide keys. Our trusted, background-checked team can clean while you're at work or running errands, and we'll secure your home when finished.",
    category: "process"
  },
  {
    question: "What cleaning supplies do you use?",
    answer: "We use professional-grade, eco-friendly cleaning products that are safe for families and pets. We bring all necessary supplies and equipment. If you have specific product preferences or allergies, we can accommodate special requests.",
    category: "process"
  },
  {
    question: "How long does a typical house cleaning take?",
    answer: "Cleaning time varies by home size and service type. A standard 3-bedroom home typically takes 2-3 hours for regular cleaning, while deep cleaning may take 4-6 hours. We provide estimated timeframes during your consultation.",
    category: "process"
  },
  {
    question: "Do you clean apartments and condos?",
    answer: "Absolutely! We clean residential properties of all sizes including studio apartments, condos, townhomes, and large houses throughout Seattle. Our services are scalable to match your space and needs.",
    category: "services"
  },
  {
    question: "What are your payment options?",
    answer: "We accept cash, check, and all major credit cards. Payment is due upon completion of service. For recurring clients, we can set up automatic billing for your convenience.",
    category: "pricing"
  },
  {
    question: "Can you work around my schedule?",
    answer: "Yes, we offer flexible scheduling including evenings and weekends. We understand Seattle's busy lifestyle and work to accommodate your preferred cleaning times, whether weekly, bi-weekly, monthly, or one-time service.",
    category: "process"
  },
  {
    question: "Do you provide commercial cleaning services?",
    answer: "Yes, Test Cleaning Seattle provides professional commercial cleaning for offices, retail spaces, medical facilities, and other businesses throughout Seattle. We offer daily, weekly, or customized cleaning schedules for commercial clients.",
    category: "services"
  },
  {
    question: "What happens if something gets damaged during cleaning?",
    answer: "While rare, if any damage occurs during our service, we're fully insured to cover repairs or replacement. Report any issues immediately, and we'll work quickly to resolve the situation through our insurance coverage.",
    category: "guarantees"
  },
  {
    question: "How far in advance should I book cleaning service?",
    answer: "We recommend booking 1-2 weeks in advance for regular service, especially during busy seasons. However, we often accommodate same-day or next-day requests based on availability. Contact us to check current scheduling options.",
    category: "process"
  },
  {
    question: "Do you offer move-out cleaning services?",
    answer: "Yes, we specialize in move-out cleaning to help you get your security deposit back. Our comprehensive move-out service includes deep cleaning of all rooms, appliances, cabinets, and often-missed areas that landlords inspect.",
    category: "services"
  },
  {
    question: "Are there any additional fees I should know about?",
    answer: "Our quotes include all standard cleaning tasks. Additional fees may apply for extra services like oven cleaning, refrigerator interior, or extremely cluttered spaces. We discuss any potential additional costs upfront during your estimate.",
    category: "pricing"
  },
  {
    question: "What areas of Seattle do you service?",
    answer: "We serve all Seattle neighborhoods including Downtown, Belltown, South Lake Union, Eastlake, University District, Phinney Ridge, Greenwood, Crown Hill, and extending to nearby areas like Shoreline and parts of King County.",
    category: "areas"
  },
  {
    question: "How experienced are your cleaning professionals?",
    answer: "Our team consists of trained, experienced cleaning professionals with an average of 3+ years in the industry. All team members complete our comprehensive training program and ongoing education to maintain our high service standards.",
    category: "qualifications"
  },
  {
    question: "Can you clean my vacation rental or Airbnb?",
    answer: "Yes, we provide specialized vacation rental and Airbnb cleaning services with quick turnaround times between guests. We understand the importance of preparing your property quickly and thoroughly for incoming guests.",
    category: "services"
  },
  {
    question: "What if I need to cancel or reschedule my appointment?",
    answer: "We understand plans change. Please provide at least 24 hours notice for cancellations or rescheduling to avoid any fees. We'll work with you to find a new time that fits your schedule.",
    category: "process"
  },
  {
    question: "Do you offer discounts for regular customers?",
    answer: "Yes, we offer competitive pricing for recurring weekly, bi-weekly, and monthly services. Regular customers also receive priority scheduling and loyalty discounts. Contact us to discuss the best package for your needs and budget.",
    category: "pricing"
  },
  {
    question: "How do you handle pets during cleaning?",
    answer: "We love pets! Please let us know about your furry friends when booking. We can work around pets' schedules and use pet-safe products. Some clients prefer to secure pets in a safe room during cleaning for everyone's comfort.",
    category: "process"
  },
  {
    question: "What makes Test Cleaning Seattle different from other cleaning companies?",
    answer: "We combine professional expertise with local Seattle knowledge, eco-friendly practices, comprehensive insurance, and our satisfaction guarantee. Our team is reliable, trustworthy, and committed to exceeding your expectations with every visit.",
    category: "qualifications"
  },
  {
    question: "Do you clean windows?",
    answer: "Yes, interior window cleaning is included in our deep cleaning service. We also offer exterior window cleaning as an add-on service. Our window cleaning ensures streak-free results and improved natural light in your Seattle home.",
    category: "services"
  },
  {
    question: "Can you help with post-construction cleanup?",
    answer: "Absolutely! We specialize in post-construction and renovation cleanup, removing dust, debris, and construction residue. This detailed service prepares your newly renovated space for immediate use and enjoyment.",
    category: "services"
  },
  {
    question: "How do you ensure quality control?",
    answer: "We maintain quality through detailed checklists, regular team training, customer feedback reviews, and periodic quality inspections. Our team leaders ensure consistent service standards across all appointments.",
    category: "qualifications"
  },
  {
    question: "What should I do to prepare for my cleaning service?",
    answer: "Simply pick up personal items and clutter so our team can focus on cleaning surfaces. Secure valuables, provide any special instructions, and ensure clear access to all areas you want cleaned. We handle the rest!",
    category: "process"
  },
  {
    question: "Do you offer green cleaning options?",
    answer: "Yes, we use eco-friendly, non-toxic cleaning products as our standard practice. These products are safe for children, pets, and the environment while still providing effective cleaning results throughout your Seattle home.",
    category: "services"
  },
  {
    question: "How much does deep cleaning cost compared to regular cleaning?",
    answer: "Deep cleaning typically costs 25-50% more than regular cleaning due to the additional time and detailed work involved. However, once you establish regular service after a deep clean, maintenance visits are more efficient and cost-effective.",
    category: "pricing"
  },
  {
    question: "Can you clean my home office?",
    answer: "Certainly! We clean home offices including dusting electronics (exterior), organizing surfaces, vacuuming, and sanitizing work areas. We're careful around computer equipment and important documents while ensuring a clean, productive workspace.",
    category: "services"
  },
  {
    question: "What training do your employees receive?",
    answer: "All team members complete comprehensive training covering cleaning techniques, safety protocols, customer service, and our quality standards. We also provide ongoing education about new products, methods, and industry best practices.",
    category: "qualifications"
  },
  {
    question: "Do you work on holidays?",
    answer: "We're available for cleaning services most days throughout the year, including some holidays. Holiday availability may vary, and we recommend booking early for service during holiday periods when demand is higher.",
    category: "process"
  },
  {
    question: "How do you handle keys and home security?",
    answer: "We treat key security seriously with secure key storage, detailed access logs, and bonded employees. Many clients use lockboxes or smart locks for added security. We always secure your home properly when leaving.",
    category: "process"
  },
  {
    question: "What if I have allergies or sensitivities?",
    answer: "Please inform us of any allergies or sensitivities when booking. We can use hypoallergenic products, avoid certain chemicals, or focus on specific areas. Our goal is providing effective cleaning while maintaining your health and comfort.",
    category: "process"
  },
  {
    question: "Do you provide cleaning for senior citizens?",
    answer: "Yes, we're honored to help Seattle's senior community maintain clean, healthy homes. We offer gentle, respectful service and can accommodate special needs or physical limitations while providing thorough cleaning.",
    category: "services"
  },
  {
    question: "How do you price larger homes or estates?",
    answer: "Larger properties are priced based on square footage, number of rooms, and specific requirements. We provide detailed on-site estimates for homes over 4,000 square feet to ensure accurate pricing for your unique property.",
    category: "pricing"
  },
  {
    question: "Can you clean seasonal items or do spring cleaning?",
    answer: "Absolutely! We offer seasonal cleaning services including spring cleaning, holiday preparation cleaning, and seasonal organization. These services help refresh your home and prepare for changing seasons in the Pacific Northwest.",
    category: "services"
  },
  {
    question: "What happens during bad weather in Seattle?",
    answer: "Seattle weather rarely stops us! We monitor conditions and communicate about any necessary schedule adjustments due to severe weather. Our team is experienced with Pacific Northwest conditions and equipped for year-round service.",
    category: "process"
  }
];

const categories = {
  services: "Services",
  pricing: "Pricing",
  process: "Process",
  areas: "Service Areas",
  qualifications: "Qualifications",
  guarantees: "Guarantees"
};

export default function FAQ() {
  const groupedFAQs = faqData.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about Test Cleaning Seattle's professional cleaning services. 
              Can't find what you're looking for? Contact us directly for personalized assistance.
            </p>
          </header>

          <div className="space-y-12">
            {Object.entries(groupedFAQs).map(([categoryKey, faqs]) => (
              <section key={categoryKey} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  {categories[categoryKey as keyof typeof categories]}
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
</h3>
</div>
</div>
</h2>
</section>
</div>
</p>
</h1>
</header>
</div>
</div>
}
}
}