import React from 'react'
import { ArrowDownOnSquareIcon } from '@heroicons/react/20/solid'

export default function Footer() {
    const essayUrl = '/WR152_Photo_Essay.docx'
    
    return (
      <div className="bg-yellow-700 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-3xl">Works Cited and Reflexion Essay</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Dominguez Aguirre, Norberto. "Experiences and Reflexions." 2009.
              </p>
  
            <a href={essayUrl} download="FinalReflectionEssay.docx">
            <button
              type="button"
              className="mt-10 inline-flex items-center gap-x-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <ArrowDownOnSquareIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              Download Final Reflection Essay
            </button>
          </a>
            </div>
          </div>
      </div>
    )
}
