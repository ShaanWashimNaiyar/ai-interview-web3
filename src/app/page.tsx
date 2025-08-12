// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 to-gray-800 text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold mb-4">AI Interview Hub</h1>
        <p className="text-lg text-slate-300 mb-8">
          Practice technical & behavioral interviews, get AI feedback, and earn verifiable on-chain credentials.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold">
            Start Mock Interview
          </button>

          <button className="px-6 py-3 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-700">
            Connect Wallet (coming soon)
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Built with Next.js + Tailwind • Free-tier Web3 + AI
        </p>
      </div>
    </main>
  );
}
