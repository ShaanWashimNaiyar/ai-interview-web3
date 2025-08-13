// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <p className="text-sm">&copy; {new Date().getFullYear()} AI Interview Hub. All rights reserved.</p>

        {/* Right Side */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://twitter.com" target="_blank" className="hover:text-green-400 transition">Twitter</a>
          <a href="https://github.com" target="_blank" className="hover:text-green-400 transition">GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-green-400 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
