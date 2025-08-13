// src/app/components/Header.tsx
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-black-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide">
          AI Interview Hub
        </h1>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:block">
          <Link href="/" className="hover:text-green-400 transition">Home</Link>
          <a href="/interview" className="hover:text-green-400 transition">Start Interview</a>
          <a href="/leaderboard" className="hover:text-green-400 transition">Leaderboard</a>
          <a href="/about" className="hover:text-green-400 transition">About</a>
        </nav>

        {/* Wallet Button (placeholder for now) */}
        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}
