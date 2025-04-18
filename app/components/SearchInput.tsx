'use client';

import { useState, useRef } from 'react';
import { X } from 'lucide-react'; // or use ✕ unicode if you don't want lucide

export default function SearchInput() {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    setValue('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full flex-1">
      <input
        ref={inputRef}
        type="text"
        name="query"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for startups, ideas, or people..."
        className="w-full  p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        required
      />
      {value && (
        <button
          type="button"
          onClick={clearInput}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white rounded-full bg-pink-600 p-2 hover:bg-pink-700"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
