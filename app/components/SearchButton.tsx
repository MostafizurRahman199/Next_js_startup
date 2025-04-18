// app/ui/SearchButton.tsx
'use client';

import { useFormStatus } from 'react-dom';

export default function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="px-6 py-4  bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition font-semibold w-full md:w-auto"
      disabled={pending}
    >
      {pending ? 'Searching...' : 'Search'}
    </button>
  );
}
