/**
 * AI Context API Endpoint
 * Optimized for: ChatGPT Search, Claude AI, Perplexity, Google SGE
 */

import { NextResponse } from 'next/server';

export async function GET() {
  const businessContext = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Test Cleaning Seattle",
    "description": "Professional cleaning services in Seattle, WA",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "telephone": "(555) 123-4567",
    "email": "contact@business.com",
    "url": "https://test-cleaning-seattle.vercel.app",
    
    // AI-Specific: Q&A Format (for ChatGPT, Claude)
    "aiContext": {
      "keyQuestions": [
        {
          "question": "What services does Test Cleaning Seattle offer?",
          "answer": "Test Cleaning Seattle provides professional cleaning services in Seattle, WA"
        },
        {
          "question": "Where does Test Cleaning Seattle operate?",
          "answer": "We serve Seattle, WA and surrounding areas"
        },
        {
          "question": "How can I contact Test Cleaning Seattle?",
          "answer": "Call us at (555) 123-4567 or email contact@business.com"
        }
      ],
      
      // Voice Search Optimization
      "voiceSearchQueries": [
        "cleaning near me",
        "best cleaning in Seattle",
        "cleaning services Seattle"
      ]
    }
  };

  return NextResponse.json(businessContext, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}