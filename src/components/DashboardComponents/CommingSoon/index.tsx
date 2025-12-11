'use client';

import { useState } from 'react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');

  const handleNotify = () => {
    alert(`We'll notify: ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Coming Soon</h1>
      <p className="text-gray-600 mb-6">
        We&#39;re working on our new website, Stay tuned!
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 w-full max-w-md mb-4">
        <input
          type="email"
          placeholder="john.doe@gmail.com"
          className="flex-grow rounded-full px-4 py-2 border text-[12px] border-gray-300 text-[#212121] shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleNotify}
          className="mt-2 sm:mt-0 sm:ml-2 bg-black text-[12px] text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Notify Me
        </button>
      </div>

      <p className="text-sm text-gray-400">
        Be the first to know about the latest updates and get exclusive offer on our grand opening
      </p>

      <footer className="absolute bottom-4 text-sm text-gray-400">
        © 2019 tiendo.com
      </footer>
    </div>
  );
}
