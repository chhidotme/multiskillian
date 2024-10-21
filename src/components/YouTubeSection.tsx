// src/components/YouTubeSection.tsx

'use client';

import Link from 'next/link';

export default function YouTubeSection() {
  const videos = [
    {
      id: 'qTlnq9AO6u4',
      title: 'How to change name in distrokid',
      description: 'Fastest way to change name in distrokid',
    },
    {
      id: 'w8jkH7faWpc',
      title: 'Adobe firefly Image Generator',
      description: 'Generate images with firefly',
    },
    {
      id: 'whjtgTnQXxQ',
      title: 'variation from image in midjourney',
      description: 'create variation of your image in midjourney',
    },
  ];

  return (
    <section id="youtube" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="overflow-hidden bg-white shadow rounded">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">{video.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{video.description}</p>
                <Link
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900">
                    Watch Video
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="https://www.youtube.com/@multiskillian?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Subscribe to Our Channel
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
