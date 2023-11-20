import Links from "./components/Links";
import Searchbox from "./components/Searchbox";
import { FaFacebookF, FaYoutube, FaGithub, FaDochub, FaLinkedinIn, FaTypo3 } from "react-icons/fa";
import Time from "./components/Time";

export default function Home() {
  return (
    <div className="h-screen w-screen text-white flex flex-col gap-16 items-center justify-center bg-background">
      <Time/>
      <div className="title animate-bounce text-5xl font-bold">
        Welcome, <span className="text-sky-400">GreatGamer.</span>
      </div>
      <Searchbox />
      <div className="flex items-center gap-8 justify-around">
        <Links link="https://facebook.com">
          <FaFacebookF />
        </Links>
        <Links link="https://youtube.com">
          <FaYoutube />
        </Links>
        <Links link="https://github.com">
          <FaGithub />
        </Links>
        <Links link="https://docs.google.com">
          <FaDochub />
        </Links>
        <Links link="https://linkedin.com">
          <FaLinkedinIn />
        </Links>
        <Links link="https://monkeytype.com">
          <FaTypo3 />
        </Links>
      </div>
    </div>
  );
}
