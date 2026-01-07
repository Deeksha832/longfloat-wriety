// import React from 'react';
// import { Button } from './ui/button';
// import { GraduationCap, Users2, TrendingUp, Check, ArrowRight } from 'lucide-react';

// const segments = [
//   {
//     icon: GraduationCap,
//     title: 'Education & Learning',
//     description: 'Save time, enable interactive learning, and reduce manual effort for educators using AI built for education.',
//     features: [
//       'AI-assisted learning',
//       'Lesson Planning',
//       'AI enabled activities',
//     ],
//   },
//   {
//     icon: Users2,
//     title: 'Teams & Enterprises',
//     description: 'Align teams, streamline workflows, and turn ideas into action with AI-powered collaboration built for organizations.',
//     features: [
//       'Team collaboration',
//       'Workflow automation',
//       'Enterprise security',
//     ],
//   },
//   {
//     icon: TrendingUp,
//     title: 'SMEs & Businesses',
//     description: 'Automate daily operations, create content faster, and compete effectively with AI built for growing businesses.',
//     features: [
//       'Cost-effective tools',
//       'Business automation',
//       'Scalable solutions',
//     ],
//   },
// ];

// export default function WhoIsItFor() {
//   return (
//     <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50/50 to-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
//             Who is Longfloat AI for?
//           </h2>
//           <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
//             Purpose-built solutions for every type of organization, from classrooms to corporations.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {segments.map((segment, index) => {
//             const Icon = segment.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden bg-white border border-gray-50 hover:border-gray-200 rounded-lg transition-all duration-500 px-12 py-16 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
//                 style={{
//                   animationDelay: `${index * 0.1}s`,
//                 }}
//               >
//                 {/* Icon */}
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-8 transition-all duration-500 group-hover:scale-105">
//                   <Icon className="w-6 h-6" strokeWidth={1.5} />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-6">
//                   {segment.title}
//                 </h3>
//                 <p className="text-base text-gray-600 leading-relaxed mb-6">
//                   {segment.description}
//                 </p>

//                 {/* Features list */}
//                 <ul className="space-y-3 mb-8">
//                   {segment.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-gray-700">
//                       <Check className="w-4 h-4 mr-2 text-gray-900" strokeWidth={2} />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* CTA */}
//                 <div className="pt-8 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
//                   <div className="flex items-center text-sm text-gray-600 font-normal group-hover:text-gray-900 transition-colors duration-300">
//                     <span>Explore solutions</span>
//                     <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
//                   </div>
//                 </div>

//               <div
//                   className="absolute bottom-0 left-0 right-0 h-px bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
//                 ></div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }





// import React from 'react';
// import { GraduationCap, Users2, TrendingUp, Check, ArrowRight } from 'lucide-react';

// const segments = [
//   {
//     icon: GraduationCap,
//     title: 'Education & Learning',
//     description:
//       'Save time, enable interactive learning, and reduce manual effort for educators using AI built for education.',
//     features: ['AI-assisted learning', 'Lesson Planning', 'AI enabled activities'],
//   },
//   {
//     icon: Users2,
//     title: 'Teams & Enterprises',
//     description:
//       'Align teams, streamline workflows, and turn ideas into action with AI-powered collaboration built for organizations.',
//     features: ['Team collaboration', 'Workflow automation', 'Enterprise security'],
//   },
//   {
//     icon: TrendingUp,
//     title: 'SMEs & Businesses',
//     description:
//       'Automate daily operations, create content faster, and compete effectively with AI built for growing businesses.',
//     features: ['Cost-effective tools', 'Business automation', 'Scalable solutions'],
//   },
// ];

// export default function WhoIsItFor() {
//   return (
//     <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50/50 to-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
//             Who is Longfloat AI for?
//           </h2>
//           <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
//             Purpose-built solutions for every type of organization, from classrooms to corporations.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {segments.map((segment, index) => {
//             const Icon = segment.icon;

//             return (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden bg-white border border-gray-50 hover:border-gray-200 rounded-lg transition-all duration-500 px-12 py-16 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {/* Icon */}
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-8 transition-all duration-500 group-hover:scale-105">
//                   <Icon className="w-6 h-6" strokeWidth={1.5} />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-6">
//                   {segment.title}
//                 </h3>
//                 <p className="text-base text-gray-600 leading-relaxed mb-6">
//                   {segment.description}
//                 </p>

//                 {/* Features */}
//                 <ul className="space-y-3 mb-8">
//                   {segment.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-gray-700">
//                       <Check className="w-4 h-4 mr-2 text-gray-900" strokeWidth={2} />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* CTA */}
//                 <div className="pt-8 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
//                   <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
//                     <span>Explore solutions</span>
//                     <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
//                   </div>
//                 </div>


//                 {/* Hover underline */}
// {/* Hover border overlay */}
// <div
//   className="
//     pointer-events-none
//     absolute inset-0
//     border-[6px] border-gray-900
//     opacity-0 scale-95
//     group-hover:opacity-100 group-hover:scale-100
//     transition-all duration-500
//     rounded-lg
//   "
// ></div>

// </div>   
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



// import React from 'react';
// import { GraduationCap, Users2, TrendingUp, Check, ArrowRight } from 'lucide-react';

// const segments = [
//   {
//     icon: GraduationCap,
//     title: 'Education & Learning',
//     description:
//       'Save time, enable interactive learning, and reduce manual effort for educators using AI built for education.',
//     features: ['AI-assisted learning', 'Lesson Planning', 'AI enabled activities'],
//   },
//   {
//     icon: Users2,
//     title: 'Teams & Enterprises',
//     description:
//       'Align teams, streamline workflows, and turn ideas into action with AI-powered collaboration built for organizations.',
//     features: ['Team collaboration', 'Workflow automation', 'Enterprise security'],
//   },
//   {
//     icon: TrendingUp,
//     title: 'SMEs & Businesses',
//     description:
//       'Automate daily operations, create content faster, and compete effectively with AI built for growing businesses.',
//     features: ['Cost-effective tools', 'Business automation', 'Scalable solutions'],
//   },
// ];

// export default function WhoIsItFor() {
//   return (
//     <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50/50 to-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
//             Who is Longfloat AI for?
//           </h2>
//           <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
//             Purpose-built solutions for every type of organization, from classrooms to corporations.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {segments.map((segment, index) => {
//             const Icon = segment.icon;

//             return (
//               <div
//                 key={index}
//                 className="group relative bg-white rounded-lg px-12 py-16 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
//               >
//                 {/* THIN BORDER (top / left / right) */}
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute inset-0
//                     rounded-lg
//                     border border-gray-900
//                     opacity-0
//                     group-hover:opacity-100
//                     transition-opacity duration-500
//                   "
//                 />

//                 {/* THICK BOTTOM BORDER */}
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute bottom-0 left-0 right-0
//                     h-[6px]
//                     bg-gray-900
//                     scale-x-0
//                     group-hover:scale-x-100
//                     transition-transform duration-500
//                     origin-center
//                     rounded-b-lg
//                   "
//                 />

//                 {/* Icon */}
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-8 transition-all duration-500 group-hover:scale-105">
//                   <Icon className="w-6 h-6" strokeWidth={1.5} />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-6">
//                   {segment.title}
//                 </h3>
//                 <p className="text-base text-gray-600 leading-relaxed mb-6">
//                   {segment.description}
//                 </p>

//                 {/* Features */}
//                 <ul className="space-y-3 mb-8">
//                   {segment.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-gray-700">
//                       <Check className="w-4 h-4 mr-2 text-gray-900" strokeWidth={2} />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* CTA */}
//                 <div className="pt-8 border-t border-gray-100 transition-colors duration-300 group-hover:border-gray-200">
//                   <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
//                     <span>Explore solutions</span>
//                     <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }










import React from 'react';
import { GraduationCap, Users2, TrendingUp, Check, ArrowRight } from 'lucide-react';

const segments = [
  {
    icon: GraduationCap,
    title: 'Education & Learning',
    description:
      'Save time, enable interactive learning, and reduce manual effort for educators using AI built for education.',
    features: ['AI-assisted learning', 'Lesson Planning', 'AI enabled activities'],
  },
  {
    icon: Users2,
    title: 'Teams & Enterprises',
    description:
      'Align teams, streamline workflows, and turn ideas into action with AI-powered collaboration built for organizations.',
    features: ['Team collaboration', 'Workflow automation', 'Enterprise security'],
  },
  {
    icon: TrendingUp,
    title: 'SMEs & Businesses',
    description:
      'Automate daily operations, create content faster, and compete effectively with AI built for growing businesses.',
    features: ['Cost-effective tools', 'Business automation', 'Scalable solutions'],
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Who is Longfloat AI for?
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto">
            Purpose-built solutions for every type of organization, from classrooms to corporations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;

            return (
              <div
                key={index}
                className="
                  group relative bg-white rounded-lg px-12 py-16 cursor-pointer
                  border border-gray-200
                  transition-all duration-500
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                {/* THICK BOTTOM BORDER */}
                <div
                  className="
                    pointer-events-none
                    absolute bottom-0 left-0 right-0
                    h-[6px]
                    bg-gray-900
                    scale-x-0
                    group-hover:scale-x-100
                    transition-transform duration-500
                    origin-center
                    rounded-b-lg
                  "
                />

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-8 transition-all duration-500 group-hover:scale-105">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-6">
                  {segment.title}
                </h3>

                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {segment.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {segment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 mr-2 text-gray-900" strokeWidth={2} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-8 border-t border-gray-100 transition-colors duration-300 group-hover:border-gray-200">
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    <span>Explore solutions</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
