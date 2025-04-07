'use client';
import mantras from '@/lib/mantras';
import { useState } from 'react';

export default function MantraPage() {
  const [current, setCurrent] = useState(null);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🕉️ Mantra Learning</h1>

      {current ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">{current.title}</h2>
          <p className="text-2xl">{current.text}</p>
          <p className="italic text-gray-600">{current.translation}</p>
          <audio controls src={current.audioUrl} className="mt-4" />
          <button
            onClick={() => setCurrent(null)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Back to List
          </button>
        </div>
      ) : (
        <ul className="space-y-3">
          {mantras.map((m) => (
            <li key={m.slug}>
              <button
                onClick={() => setCurrent(m)}
                className="text-lg text-blue-600 underline"
              >
                {m.title}
              </button>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
}

