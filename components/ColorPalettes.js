import { useState } from 'react';

export default function ColorPalettes() {
  return (
    <div style={{ backgroundColor: '#2c3e50', minHeight: '100vh' }}>
      <div className="container mx-auto px-10 pt-8">
        <h1 className="text-4xl font-bold text-white mb-10">
          Paleta de colores
        </h1>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {

    }
  }
}
