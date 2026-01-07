import React from 'react';

const brands = [
  { name: 'Aluha', logo: 'https://wriety.com/static/media/aluha-logo.8a44c818658f0a627532eca770971b68.svg' },
  { name: 'MSD', logo: 'https://wriety.com/static/media/msd-logo.8895ac043fec5952580c4241890ab2ea.svg' },
  { name: 'Newline', logo: 'https://wriety.com/static/media/newline-logo.e86b5cdf7067fbfc845fb37c9afbd8a1.svg' },
  { name: 'Horizon', logo: 'https://wriety.com/static/media/horizon-logo.6f244dc915c05429cc4db4ed8ab56e10.svg' },
  { name: 'QTouch', logo: 'https://wriety.com/static/media/qtouch-logo.eec24246ea5a1fd0c8fb75c10896741e.svg' },
  // { name: 'Google Classroom', logo: 'https://wriety.com/static/media/google-classroom.afb5a3cf2eee62b123d6c2cd85d498f3.svg' },
  // { name: 'EdLink', logo: 'https://wriety.com/static/media/ed-link-logo.8136bb989422b252ee76f4e229a96e36.svg' },
  // { name: 'Teams Classes', logo: 'https://wriety.com/static/media/teams-classes.1c8a41f2af1558d94be2ca4581752e05.svg' },
  // { name: 'Canvas', logo: 'https://wriety.com/static/media/canvas.cd88d166682000a785316b11f1c000bd.svg' },
];

// Triple for seamless loop
const allBrands = [...brands, ...brands, ...brands];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-gray-900 mb-3">
            Most trusted AI whiteboard solution worldwide
          </h2>
          {/* <p className="text-lg text-gray-500 font-light">
            worldwide
          </p> */}
        </div>

        {/* Animated brand logos */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling brands container */}
          <div className="brands-scroll-container">
            <div className="brands-scroll-content">
              {allBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="brand-item inline-flex items-center justify-center px-8 py-6"
                  title={brand.name}
                >
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brands-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .brands-scroll-content {
          display: flex;
          animation: scroll-brands 60s linear infinite;
          width: fit-content;
        }

        .brand-item {
          flex-shrink: 0;
        }

        @keyframes scroll-brands {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .brands-scroll-container:hover .brands-scroll-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
