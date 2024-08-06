import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Header = () => {
    const tl = gsap.timeline();
    useGSAP(() => {
        tl.from("h2" , {
            y:-30,
            opacity:0,
            duration:0.5,
            delay:0.4
        });
        tl.from("li" , {
            y:-30,
            duration:0.4,
            stagger:0.6,
            opacity:0,
        })
    })
  return (
    <>
      <nav className="flex md:items-center md:justify-between text-gray-400 font-bold md:px-4 md:py-3">
        <h2 className="nav-head hover:text-white">Somil Gupta</h2>
        <div className="flex md:gap-24 gap-4">
          <li className="list-none ml-32 hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="list-none hover:text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="list-none hover:text-white">
            <Link to="/contact">Contact me</Link>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Header