// src/app/page.tsx
export default function Home() {
  return (
    <section className="bg-gray-950 text-white min-h-screen flex flex-col justify-center items-center px-6">
      
      {/* Hero Text */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Decentralized <span className="text-green-400">AI Interview Hub</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Practice AI-driven mock interviews, get instant feedback, and earn verifiable on-chain credentials.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/interview"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Start Interview
          </a>
          <a
            href="/about"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-950 to-black opacity-90"></div>
    </section>
  );
}
