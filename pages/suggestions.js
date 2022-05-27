import { moods } from '../lib/Moods';

import { createClient } from 'pexels';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Suggestions() {
  const sizes = [
    {
      value: 'xs',
    },
    {
      value: 's',
    },
    {
      value: 'm',
    },
    {
      value: 'l',
    },
    {
      value: 'xl',
    },
  ];

  const [size, setSize] = useState(sizes[0]);
  const [pictures, setPictures] = useState([]);

  const { query } = useRouter();

  useEffect(() => {
    async function getImages() {
      const client = createClient(
        '563492ad6f91700001000001e59f854ec6864b5aab4a1d935053568d'
      );

      const mood = moods.filter(f => f.key === query.mood)[0];
      const pexelsQuery = mood?.query[query.gender];

      client.photos.search({ query: pexelsQuery, per_page: 7 }).then((res) => setPictures(res.photos));
    }

    getImages();
  }, [query]);

  return (
    <div className="pb-8 bg-indigo-900 min-h-screen">
      <div className="container mx-auto px-10 pt-8">
        {pictures.map((pic) => (
          <div key={pic.id} className="flex font-sans pb-8">
            <div className="flex-none w-56 relative">
              <Image
                src={pic.src.large}
                alt={pic.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
                layout="fill"
              />
            </div>
            <form className="flex-auto p-6 bg-white rounded-r-lg">
              <div className="flex flex-wrap">
                <h1 className="flex-auto font-medium text-slate-900 capitalize">
                  {pic.alt}
                </h1>
                <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                  ${(pic.width / 10).toFixed(2)}
                </div>
                <div className="text-sm font-medium text-slate-400">
                  In stock
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm font-bold">
                  {sizes.map((s) => (
                    <label key={s.value}>
                      <input
                        className="sr-only peer"
                        name="size"
                        type="radio"
                        value={s.value}
                        checked={size.value === s.value}
                        onChange={() => setSize(s)}
                      />
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white uppercase">
                        {s.value}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 mb-5 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button
                    className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"
                    type="submit"
                  >
                    Comprar
                  </button>
                  <button
                    className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900"
                    type="button"
                  >
                    Wishlist
                  </button>
                </div>
                <button
                  className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50"
                  type="button"
                  aria-label="Like"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
