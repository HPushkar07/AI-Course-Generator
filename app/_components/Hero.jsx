import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-31 lg:flex lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold  text-primary sm:text-5xl">
          AI Cource Generator

          <strong className="font-extrabold text-black sm:block"> Custom Learning Path Powered by AI </strong>
        </h1>
  
        <p className="mt-6 sm:text-xl/relaxed">
          Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring sm:w-auto"
            href={'/dashboard'}
          >
            Get Started
          </a>
        
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
