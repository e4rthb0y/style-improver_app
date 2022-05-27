import PaletteModel, { moods } from '../../lib/Moods';

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ColorPalettes(props) {
  const { query } = useRouter();

  return (
    <div
      className="pb-8 min-h-screen"
      style={{ backgroundColor: '#2c3e50' }}
    >
      <div className="container mx-auto px-10 pt-8">
        <h1 className="text-4xl font-bold text-white mb-10 capitalize">
          Paleta de colores - {query.slug}
        </h1>

        <Link
          href={{
            pathname: '/suggestions',
            query: { mood: props.mood, gender: query.gender },
          }}
        >
          <a>
            {props.models.map((model) => (
              <div key={model.name} className="mb-8">
                <h2 className="w-full px-2 py-1 bg-gray-900 text-white capitalize">
                  {model.name}
                </h2>
                <div className="flex">
                  {model.colors.map((c) => (
                    <div
                      key={c}
                      className="flex-1"
                      style={{
                        backgroundColor: `rgb(${c[0]}, ${c[1]}, ${c[2]})`,
                        paddingTop: '20%',
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = moods.map((mood) => ({ params: { slug: mood.key } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const paletteModel = new PaletteModel();
  let models = await paletteModel.getModels();

  const mood = moods.filter((m) => m.key === params.slug)[0];

  models = models.map(async (m) => ({
    name: m.replace(/_/g, ' '),
    colors: await paletteModel.getPalette(m, [
      mood.colors[0],
      mood.colors[1],
      'N',
      'N',
      'N',
    ]),
  }));

  models = await Promise.all(models);

  const props = {
    models,
    mood: mood.key,
  };

  return { props };
}
