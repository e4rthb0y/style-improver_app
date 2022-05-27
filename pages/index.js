import { useState } from 'react';

import Head from 'next/head';
import Mood from '../components/Mood';
import { moods, genders } from '../lib/Moods';
import GenderModal from '../components/GenderModal';

export default function Home() {
  const [gender, setGender] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Head>
        <title>Style Improver</title>
        <meta
          name="description"
          content="Get fashion suggestions based on your mood"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`grid grid-cols-2 gap-0 h-screen ${
          isOpen ? 'blur-xl' : 'blur-none'
        }`}
      >
        <div className="w-full py-2 px-3 fixed top-0 z-10">
          <button
            type="button"
            className="rounded-lg p-2 bg-white text-black"
            onClick={() => setIsOpen(true)}
          >
            Género
          </button>
        </div>

        {moods.map((m) => (
          <Mood key={m.key} mood={m} gender={gender} />
        ))}
      </main>

      <GenderModal
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
        genders={genders}
        gender={gender}
        setGender={setGender}
      />
    </div>
  );
}
