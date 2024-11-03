import arduinoImg from "@/assets/images/programming_languages/arduino.svg";
import cppImg from "@/assets/images/programming_languages/cpp.svg";
import cssImg from "@/assets/images/programming_languages/css.svg";
import gitImg from "@/assets/images/programming_languages/git.svg";
import htmlImg from "@/assets/images/programming_languages/html.svg";
import jsImg from "@/assets/images/programming_languages/js.svg";
import laderImg from "@/assets/images/programming_languages/lader.svg";
import linuxImg from "@/assets/images/programming_languages/linux.svg";
import nodeJsImg from "@/assets/images/programming_languages/nodeJs.svg";
import vscImg from "@/assets/images/programming_languages/vsc.svg";
import windowsImg from "@/assets/images/programming_languages/windows.svg";

export interface IProglanguageListProps {
  code: string;
  img: string;
}

export const proglanguageList: IProglanguageListProps[] = [
  {
    code: "arduino",
    img: arduinoImg,
  },
  {
    code: "cpp",
    img: cppImg,
  },
  {
    code: "css",
    img: cssImg,
  },
  {
    code: "git",
    img: gitImg,
  },
  {
    code: "html",
    img: htmlImg,
  },
  {
    code: "js",
    img: jsImg,
  },
  {
    code: "lader",
    img: laderImg,
  },
  {
    code: "linux",
    img: linuxImg,
  },
  {
    code: "nodeJs",
    img: nodeJsImg,
  },
  {
    code: "vsc",
    img: vscImg,
  },
  {
    code: "windows",
    img: windowsImg,
  },
];
