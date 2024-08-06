// import gsap from "gsap";
// import { useEffect } from "react";

// const About = () => {
//   useEffect(() => {
//     gsap.to(".heading", {
//       x: 50,
//       duration: 1,
//       opacity:1,
//     });
//     gsap.fromTo(".about" , {
//         y:200,
//         opacity:0,
        
//     }, {
//         y:0,
//         duration:1,
//         opacity:1,
//         delay:2
//     })
//     gsap.fromTo(".interest" , {
//         x:-500,
//         opacity:0,
//     }, {
//         x:0,
//         opacity:1,
//         duration:1,
//         delay:2,
//     })
//   });
//   return (
//     <div className="text-white overflow-x-hidden">
//       <h2 className="md:text-[4rem] md:ml-5 md:mt-48 heading">
//         A Developer who is just developing ideas and creating it.
//       </h2>
//       <div className="about">
//         <h2 className="text-center font-bold md:mt-12 md:text-4xl about">
//           About me
//         </h2>
//         <ul className="md:mt-14 list-disc md:ml-10 md:text-2xl">
//           <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
//             Completed High school in 2023
//           </li>
//           <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
//             Earned A grade in Full stack development
//           </li>
//           <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
//             Woked as a Freelancer
//           </li>
//           <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
//             Developed projects in team and contributed to pen source
//           </li>
//           <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
//             Currently pursuing graduation from University of Delhi (DU)
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h2 className="interest text-right md:mt-10 md:text-5xl mr-10 overflow-y-hidden font-bold">
//           Interests
//         </h2>
//         <hr className="md:ml-auto md:w-48 bg-blue-800 md:h-1 border-none" />
//         <ul className="md:mt-14 md:ml-10 md:text-2xl text-end md:mr-10">
//           <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
//             Interested in Cricket
//           </li>
//           <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
//             Fitness
//           </li>
//           <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
//             Cycling
//           </li>
//           <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
//             Sports
//           </li>
//           <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
//             Travel
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default About;


import gsap from "gsap";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    gsap.to(".heading", {
      x: 50,
      duration: 1,
      opacity: 1,
    });
    gsap.fromTo(
      ".about",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        delay: 2,
      }
    );
    gsap.fromTo(
      ".interest",
      {
        x: -500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 2,
      }
    );
  }, []);

  return (
    <div className="text-white overflow-x-hidden p-4 md:p-10">
      <h2 className="text-2xl md:text-[4rem] md:ml-2 md:leading-relaxed md:mt-24 heading">
        A Developer who is just developing ideas and creating them.
      </h2>
      <div className="about">
        <h2 className="text-center font-bold text-2xl md:mt-12 md:text-4xl about">
          About me
        </h2>
        <ul className="mt-8 md:mt-14 list-disc ml-5 md:ml-10 text-lg md:text-2xl">
          <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
            Completed High school in 2023
          </li>
          <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
            Earned A grade in Full stack development
          </li>
          <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
            Worked as a Freelancer
          </li>
          <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
            Developed projects in a team and contributed to open source
          </li>
          <li className="mt-8 hover:translate-x-24 transform transition-transform delay-150">
            Currently pursuing graduation from the University of Delhi (DU)
          </li>
        </ul>
      </div>
      <div>
        <h2 className="interest text-right mt-10 md:mt-10 text-3xl md:text-5xl mr-5 md:mr-10 overflow-y-hidden font-bold">
          Interests
        </h2>
        <hr className="ml-auto w-24 md:w-48 bg-blue-800 h-1 border-none" />
        <ul className="mt-8 md:mt-14 ml-5 md:ml-10 text-lg md:text-2xl text-right md:text-end mr-5 md:mr-10">
          <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
            Interested in Cricket
          </li>
          <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
            Fitness
          </li>
          <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
            Cycling
          </li>
          <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
            Sports
          </li>
          <li className="mt-8 hover:-translate-x-24 transform transition-transform delay-150">
            Travel
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
