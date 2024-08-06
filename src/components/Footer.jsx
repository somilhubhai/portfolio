import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-gradient-to-l md:mt-10 from-black  to-blue-500 md:p-24">
        <hr className="bg-white p-0 w-full" />
        <div className="flex md:mt-10">
          <h2 className="md:ml-60 text-gray-300 hover:text-white">
            Somil Gupta
          </h2>
          <a href="https://github.com/somilhubhai/" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="md:ml-96 hover:scale-110 transition-transform transform duration-200"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
