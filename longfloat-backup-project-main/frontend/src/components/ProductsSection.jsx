// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
// import { Input } from './ui/input';
// import { Edit3, FileText, LayoutDashboard, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

// const liveProducts = [
//   {
//     id: 1,
//     name: 'Wriety',
//     description: 'Generate, refine, and structure content with intelligent writing assistance.',
//     subtext: 'Create professional content 10x faster',
//     icon: Edit3,
//     status: 'live',
//     link: null,
//     brochureUrl: 'https://customer-assets.emergentagent.com/job_thinkcraft-2/artifacts/w1x5dwxr_Advanced%20Brochur.pdf',
//     specSheetUrl: 'https://customer-assets.emergentagent.com/job_thinkcraft-2/artifacts/jlq3d7k2_Advanced%20Specs.pdf',
//   },
//   {
//     id: 2,
//     name: 'Wriety AI API',
//     description: 'Integrate Wriety\'s AI capabilities directly into your applications and workflows.',
//     subtext: 'Build with enterprise-grade AI infrastructure',
//     icon: Edit3,
//     status: 'live',
//     link: null,
//     brochureUrl: 'https://customer-assets.emergentagent.com/job_thinkcraft-2/artifacts/7x40m4s7_AI%20API%20Broucher.pdf',
//     specSheetUrl: 'https://customer-assets.emergentagent.com/job_thinkcraft-2/artifacts/oe28j7zg_AI%20API%20Specs.pdf',
//   },
// ];

// const comingSoonProducts = [
//   {
//     id: 3,
//     name: 'Note Taking AI',
//     description: 'Capture, summarize, and retrieve information with AI-powered organization.',
//     subtext: 'Never lose an important idea again',
//     icon: FileText,
//     status: 'coming-soon',
//     link: null,
//   },
//   {
//     id: 4,
//     name: 'Productivity Board',
//     description: 'Manage tasks, ideas, and workflows with intelligent automation.',
//     subtext: 'Boost team productivity by 40%',
//     icon: LayoutDashboard,
//     status: 'coming-soon',
//     link: null,
//   },
//   {
//     id: 5,
//     name: 'AI Appliance for MSMEs',
//     description: 'Automate everyday business operations with purpose-built AI solutions.',
//     subtext: 'Enterprise capabilities at MSME pricing',
//     icon: Briefcase,
//     status: 'coming-soon',
//     link: null,
//   },
// ];

// export default function ProductsSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleProductClick = (product) => {
//     // Only handle coming soon products for waitlist
//     if (product.status === 'coming-soon') {
//       setSelectedProduct(product);
//       setIsModalOpen(true);
//       setIsSubmitted(false);
//       setEmail('');
//     }
//     // Live products don't navigate anywhere - buttons handle their own actions
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setEmail('');
//       setSelectedProduct(null);
//     }, 200);
//   };

//   const handleSubmitWaitlist = async (e) => {
//     e.preventDefault();
//     if (!email || !email.includes('@')) return;

//     setIsSubmitting(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     setIsSubmitting(false);
//     setIsSubmitted(true);
//   };

//   // const renderProductCard = (product, index) => {
//   //   const Icon = product.icon;
//   //   const isLive = product.status === 'live';

//   //   return (
//   //     <div
//   //       key={product.id}
//   //       onClick={() => handleProductClick(product)}
//   //       className={`group relative overflow-hidden transition-all duration-500 cursor-pointer flex flex-col bg-white border border-gray-50 hover:border-gray-200 rounded-lg ${
//   //         isLive
//   //           ? 'hover:shadow-lg hover:-translate-y-1'
//   //           : 'hover:shadow-md hover:-translate-y-1'
//   //       } animate-stagger-${index}`}
//   //       style={{
//   //         animationDelay: `${index * 0.1}s`,
//   //       }}
//   //     >
//   //       {/* Card content - flex grows to push action area to bottom */}
//   //       <div className="flex-grow px-12 py-16">
//   //         {/* Icon */}
//   //         <div
//   //           className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-8 transition-all duration-500 ${
//   //             isLive
//   //               ? 'bg-gray-900 text-white group-hover:scale-105'
//   //               : 'bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-105'
//   //           }`}
//   //         >
//   //           <Icon className="w-6 h-6" strokeWidth={1.5} />
//   //         </div>

//   //         {/* Title with inline status */}
//   //         <div className="mb-6">
//   //           <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-2 transition-colors duration-300">
//   //             {product.name}
//   //           </h3>
//   //           <p className={`text-xs font-light tracking-wide uppercase ${
//   //             isLive ? 'text-gray-900' : 'text-amber-700'
//   //           }`}>
//   //             {isLive ? 'Live' : 'Coming Soon'}
//   //           </p>
//   //         </div>

//   //         {/* Content */}
//   //         <p className="text-base leading-relaxed text-gray-600 mb-4 transition-colors duration-300 group-hover:text-gray-700">
//   //           {product.description}
//   //         </p>
//   //         <p className="text-sm font-light text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
//   //           {product.subtext}
//   //         </p>
//   //       </div>

//   //       {/* Fixed action area at bottom */}
//   //       <div className="px-12 pb-16 pt-0">
//   //         {/* CTA buttons for live product */}
//   //         {isLive && (
//   //           <div className="flex flex-col sm:flex-row gap-3 pt-8 border-t border-gray-100">
//   //             <Button
//   //               variant="outline"
//   //               size="sm"
//   //               className="flex-1 border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-sm font-normal transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:bg-transparent disabled:hover:text-current rounded-lg"
//   //               onClick={(e) => {
//   //                 e.stopPropagation();
//   //                 if (product.brochureUrl) {
//   //                   window.open(product.brochureUrl, '_blank', 'noopener,noreferrer');
//   //                 }
//   //               }}
//   //               disabled={!product.brochureUrl}
//   //             >
//   //               View Brochure
//   //             </Button>
//   //             <Button
//   //               variant="outline"
//   //               size="sm"
//   //               className="flex-1 border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-sm font-normal transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:bg-transparent disabled:hover:text-current rounded-lg"
//   //               onClick={(e) => {
//   //                 e.stopPropagation();
//   //                 if (product.specSheetUrl) {
//   //                   window.open(product.specSheetUrl, '_blank', 'noopener,noreferrer');
//   //                 }
//   //               }}
//   //               disabled={!product.specSheetUrl}
//   //             >
//   //               View Spec Sheet
//   //             </Button>
//   //           </div>
//   //         )}

//   //         {/* Join waitlist prompt for coming soon */}
//   //         {!isLive && (
//   //           <div className="pt-8 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
//   //             <div className="flex items-center justify-between text-sm">
//   //               <span className="text-gray-600 font-normal group-hover:text-gray-900 transition-colors duration-300">
//   //                 Join the waitlist
//   //               </span>
//   //               <div className="flex items-center gap-1 text-gray-400 group-hover:text-gray-900 transition-all duration-300">
//   //                 <span className="text-xs font-light">Get notified</span>
//   //                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//   //               </div>
//   //             </div>
//   //           </div>
//   //         )}
//   //       </div>

//   //       {/* Bottom indicator line - very subtle */}
//   //       <div
//   //         className="absolute bottom-0 left-0 right-0 h-px bg-gray-900 transform transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100"
//   //       ></div>
//   //     </div>
//   //   );
//   // };
// const renderProductCard = (product, index) => {
//   const Icon = product.icon;
//   const isLive = product.status === 'live';

//   return (
//     <div
//       key={product.id}
//       onClick={() => handleProductClick(product)}
//       className={`group relative overflow-hidden transition-all duration-500 cursor-pointer flex flex-col bg-white rounded-lg ${
//         isLive
//           ? 'hover:shadow-lg hover:-translate-y-1'
//           : 'hover:shadow-md hover:-translate-y-1'
//       } animate-stagger-${index}`}
//       style={{ animationDelay: `${index * 0.1}s` }}
//     >
//       {/* 🔹 THIN BORDER (top / left / right only) */}
//       <div
//         className="
//           pointer-events-none
//           absolute inset-0
//           rounded-lg
//           border border-gray-900
//           opacity-0
//           group-hover:opacity-100
//           transition-opacity duration-500
//         "
//       />

//       {/* 🔹 THICK BOTTOM LINE (same as previous cards) */}
//       <div
//         className="
//           pointer-events-none
//           absolute bottom-0 left-0 right-0
//           h-[6px]
//           bg-gray-900
//           scale-x-0
//           group-hover:scale-x-100
//           transition-transform duration-500
//           origin-center
//           rounded-b-lg
//         "
//       />

//       {/* Card content */}
//       <div className="flex-grow px-12 py-16">
//         {/* Icon */}
//         <div
//           className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-8 transition-all duration-500 ${
//             isLive
//               ? 'bg-gray-900 text-white group-hover:scale-105'
//               : 'bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-105'
//           }`}
//         >
//           <Icon className="w-6 h-6" strokeWidth={1.5} />
//         </div>

//         {/* Title */}
//         <div className="mb-6">
//           <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-2">
//             {product.name}
//           </h3>
//           <p
//             className={`text-xs font-light tracking-wide uppercase ${
//               isLive ? 'text-gray-900' : 'text-amber-700'
//             }`}
//           >
//             {isLive ? 'Live' : 'Coming Soon'}
//           </p>
//         </div>

//         {/* Description */}
//         <p className="text-base leading-relaxed text-gray-600 mb-4">
//           {product.description}
//         </p>
//         <p className="text-sm font-light text-gray-500">
//           {product.subtext}
//         </p>
//       </div>

//       {/* Bottom CTA area (unchanged) */}
//       <div className="px-12 pb-16 pt-0">
//         {isLive && (
//           <div className="flex flex-col sm:flex-row gap-3 pt-8 border-t border-gray-100">
//             {/* Buttons unchanged */}
//           </div>
//         )}

//         {!isLive && (
//           <div className="pt-8 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
//             <div className="flex items-center justify-between text-sm">
//               <span className="text-gray-600 group-hover:text-gray-900">
//                 Join the waitlist
//               </span>
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

//   return (
//     <>
//       <section id="products" className="py-32 px-6 lg:px-12 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
//               The Longfloat AI Ecosystem
//             </h2>
//             <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
//               A comprehensive suite of AI-powered tools designed to work seamlessly together.
//             </p>
//           </div>

//           {/* LIVE Products Row - Each spans 3 columns in 6-column grid */}
//           <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8 auto-rows-fr">
//             {liveProducts.map((product, index) => (
//               <div key={product.id} className="md:col-span-3 flex">
//                 {renderProductCard(product, index)}
//               </div>
//             ))}
//           </div>

//           {/* Coming Soon Products Row - Each spans 2 columns in 6-column grid */}
//           <div className="grid grid-cols-1 md:grid-cols-6 gap-8 auto-rows-fr">
//             {comingSoonProducts.map((product, index) => (
//               <div key={product.id} className="md:col-span-2 flex">
//                 {renderProductCard(product, index + liveProducts.length)}
//               </div>
//             ))}
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes stagger-fade-in {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .animate-stagger-0 {
//             animation: stagger-fade-in 0.8s ease-out both;
//           }

//           .animate-stagger-1 {
//             animation: stagger-fade-in 0.8s ease-out 0.1s both;
//           }

//           .animate-stagger-2 {
//             animation: stagger-fade-in 0.8s ease-out 0.2s both;
//           }

//           .animate-stagger-3 {
//             animation: stagger-fade-in 0.8s ease-out 0.3s both;
//           }

//           .animate-stagger-4 {
//             animation: stagger-fade-in 0.8s ease-out 0.4s both;
//           }
//         `}</style>
//       </section>

//       {/* Waitlist Modal */}
//       <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
//         <DialogContent className="sm:max-w-md">
//           {!isSubmitted ? (
//             <>
//               <DialogHeader>
//                 <DialogTitle className="text-2xl font-light tracking-tight text-gray-900">
//                   {selectedProduct?.name}
//                 </DialogTitle>
//                 <DialogDescription className="text-base text-gray-600 font-light">
//                   This product is coming soon. Join the waitlist to be notified when it launches.
//                 </DialogDescription>
//               </DialogHeader>
//               <form onSubmit={handleSubmitWaitlist} className="space-y-6 mt-4">
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-normal text-gray-700">
//                     Email address
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="you@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="w-full"
//                     disabled={isSubmitting}
//                   />
//                 </div>
//                 <Button
//                   type="submit"
//                   className="w-full bg-gray-900 hover:bg-gray-800 text-white py-5 text-sm font-normal transition-all duration-300"
//                   disabled={isSubmitting || !email}
//                 >
//                   {isSubmitting ? 'Joining...' : 'Join Waitlist'}
//                 </Button>
//               </form>
//             </>
//           ) : (
//             <div className="py-8 text-center">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-900 mb-6">
//                 <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
//               </div>
//               <DialogTitle className="text-2xl font-light tracking-tight text-gray-900 mb-3">
//                 You're on the list!
//               </DialogTitle>
//               <DialogDescription className="text-base text-gray-600 font-light mb-6">
//                 Thank you for joining the waitlist for {selectedProduct?.name}. We'll keep you updated on our progress and let you know as soon as it launches.
//               </DialogDescription>
//               <p className="text-sm text-gray-500 font-light">
//                 Keep an eye on your inbox for updates.
//               </p>
//               <Button
//                 onClick={handleCloseModal}
//                 variant="outline"
//                 className="mt-8 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
//               >
//                 Close
//               </Button>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }




import React, { useState } from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Input } from './ui/input';
import {
  Edit3,
  FileText,
  LayoutDashboard,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

/* -------------------- DATA -------------------- */

const liveProducts = [
  {
    id: 1,
    name: 'Wriety',
    description:
      'Generate, refine, and structure content with intelligent writing assistance.',
    subtext: 'Create professional content 10x faster',
    icon: Edit3,
    status: 'live',
    brochureUrl:
      'https://customer-assets.emergentagent.com/job_thinkcraft-2/artifacts/w1x5dwxr_Advanced%20Brochur.pdf',
    specSheetUrl:
      'https://customer-assets.emergentagent.com/job_thinkcraft-2/artifacts/jlq3d7k2_Advanced%20Specs.pdf',
  },
  {
    id: 2,
    name: 'Wriety AI API',
    description:
      "Integrate Wriety's AI capabilities directly into your applications and workflows.",
    subtext: 'Build with enterprise-grade AI infrastructure',
    icon: Edit3,
    status: 'live',
    brochureUrl:
      'https://customer-assets.emergentagent.com/job_thinkcraft-2/artifacts/7x40m4s7_AI%20API%20Broucher.pdf',
    specSheetUrl:
      'https://customer-assets.emergentagent.com/job_thinkcraft-2/artifacts/oe28j7zg_AI%20API%20Specs.pdf',
  },
];

const comingSoonProducts = [
  {
    id: 3,
    name: 'Note Taking AI',
    description:
      'Capture, summarize, and retrieve information with AI-powered organization.',
    subtext: 'Never lose an important idea again',
    icon: FileText,
    status: 'coming-soon',
  },
  {
    id: 4,
    name: 'Productivity Board',
    description:
      'Manage tasks, ideas, and workflows with intelligent automation.',
    subtext: 'Boost team productivity by 40%',
    icon: LayoutDashboard,
    status: 'coming-soon',
  },
  {
    id: 5,
    name: 'AI Appliance for MSMEs',
    description:
      'Automate everyday business operations with purpose-built AI solutions.',
    subtext: 'Enterprise capabilities at MSME pricing',
    icon: Briefcase,
    status: 'coming-soon',
  },
];

/* -------------------- COMPONENT -------------------- */

export default function ProductsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProductClick = (product) => {
    if (product.status === 'coming-soon') {
      setSelectedProduct(product);
      setIsModalOpen(true);
      setEmail('');
      setIsSubmitted(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProduct(null);
      setEmail('');
      setIsSubmitted(false);
    }, 200);
  };

  const handleSubmitWaitlist = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  /* -------------------- CARD -------------------- */

  const renderProductCard = (product, index) => {
    const Icon = product.icon;
    const isLive = product.status === 'live';

    return (
      <div
        key={product.id}
        onClick={() => handleProductClick(product)}
        className={`group relative flex flex-col h-full bg-white rounded-lg cursor-pointer
          border border-gray-200
          transition-all duration-500
          hover:-translate-y-1
          ${isLive ? 'hover:shadow-lg' : 'hover:shadow-md'}
          animate-stagger-${index}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Bottom hover indicator */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[6px] bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-lg" />

        {/* Content */}
        <div className="flex-grow px-12 py-16">
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-8 transition-all duration-500 ${
              isLive
                ? 'bg-gray-900 text-white group-hover:scale-105'
                : 'bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-105'
            }`}
          >
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </div>

          <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-2">
            {product.name}
          </h3>

          <p
            className={`text-xs uppercase tracking-wide mb-6 ${
              isLive ? 'text-gray-900' : 'text-amber-700'
            }`}
          >
            {isLive ? 'Live' : 'Coming Soon'}
          </p>

          <p className="text-base leading-relaxed text-gray-600 mb-4">
            {product.description}
          </p>
          <p className="text-sm font-light text-gray-500">
            {product.subtext}
          </p>
        </div>

        {/* Separator */}
        <div className="mx-12 border-t border-gray-100" />

        {/* CTA */}
        <div className="px-12 pt-8 pb-16">
          {isLive && (
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(product.brochureUrl, '_blank');
                }}
              >
                View Brochure
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(product.specSheetUrl, '_blank');
                }}
              >
                View Spec Sheet
              </Button>
            </div>
          )}

          {!isLive && (
            <div className="flex items-center justify-between text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              <span>Join the waitlist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          )}
        </div>
      </div>
    );
  };

  /* -------------------- JSX -------------------- */

  return (
    <>
      <section id="products" className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
              The Longfloat AI Ecosystem
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              A comprehensive suite of AI-powered tools designed to work seamlessly together.
            </p>
          </div>

          {/* Live products */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8 items-stretch">
            {liveProducts.map((p, i) => (
              <div key={p.id} className="md:col-span-3 h-full">
                {renderProductCard(p, i)}
              </div>
            ))}
          </div>

          {/* Coming soon products */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-stretch">
            {comingSoonProducts.map((p, i) => (
              <div key={p.id} className="md:col-span-2 h-full">
                {renderProductCard(p, i + liveProducts.length)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-md">
          {!isSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-light tracking-tight">
                  {selectedProduct?.name}
                </DialogTitle>
                <DialogDescription>
                  This product is coming soon. Join the waitlist to be notified when it launches.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmitWaitlist} className="space-y-4 mt-4">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  {isSubmitting ? 'Joining…' : 'Join Waitlist'}
                </Button>
              </form>
            </>
          ) : (
            <div className="py-8 text-center">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-4" />
              <DialogTitle>You’re on the list!</DialogTitle>
              <Button onClick={handleCloseModal} className="mt-6">
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Animations */}
      <style jsx>{`
        @keyframes stagger {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        [class^='animate-stagger-'] {
          animation: stagger 0.8s ease-out both;
        }
      `}</style>
    </>
  );
}
