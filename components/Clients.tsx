// "use client";

// import React from "react";

// import { companies, testimonials } from "@/data";
// import { InfiniteMovingCards } from "./ui/InfiniteCards";

// const Clients = () => {
//   return (
//     <section id="testimonials" className="py-20">
//       <h1 className="heading">
//         Kind words from
//         <span className="text-purple"> satisfied clients</span>
//       </h1>

//       <div className="flex flex-col items-center max-lg:mt-10">
//         <div
//           // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
//           className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
//         >
//           <InfiniteMovingCards
//             items={testimonials}
//             direction="right"
//             speed="slow"
//           />
//         </div>

//         <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
//           {companies.map((company) => (
//             <React.Fragment key={company.id}>
//               <div className="flex md:max-w-60 max-w-32 gap-2">
//                 <img
//                   src={company.img}
//                   alt={company.name}
//                   className="md:w-10 w-5"
//                 />
//                 <img
//                   src={company.nameImg}
//                   alt={company.name}
//                   width={company.id === 4 || company.id === 5 ? 100 : 150}
//                   className="md:w-24 w-20"
//                 />
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;
// "use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        MY Tech 
        <span className="text-purple"> Skills </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Testimonial moving cards */}
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          {/* <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          /> */}
          {/* <InfiniteMovingCards
            items={[
              { src: "./", alt: "JavaScript" },
              { src: "/skills/react.png", alt: "React" },
              { src: "/skills/nodejs.png", alt: "Node.js" },
              { src: "/skills/html5.png", alt: "HTML5" },
              { src: "/skills/css3.png", alt: "CSS3" },
            ]}
            direction="left"
            speed="normal"
            pauseOnHover={true}
          /> */}
          {/* <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          /> */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
        </div>

        {/* Company logos with hover effect */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg p-2">
                {/* Company Logo */}
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-8 object-contain"
                />
                {/* Company Name */}
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20 object-contain mt-2"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;


