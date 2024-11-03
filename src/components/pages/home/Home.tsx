"use client";

import Image from "next/image";
// import { useTranslations } from "next-intl";
import "./Home.scss";

import homeImg from "@/assets/images/home/main.jpg";

interface IHomeProps {}

export function Home(props: IHomeProps) {
  // const t = useTranslations("");

  return (
    <section className="have_footer have_NavigationBar home">
      <header>
        <figure>
          <Image
            src={homeImg}
            className="frontImage"
            width={500}
            height={500}
            alt="Rui Oliveira"
          />
        </figure>
      </header>
      <main>
        <h1 className="title">{/* t("home.title") */} Home Title</h1>
        <h2
          data-texteffect={/* t("home.subTitle.first") */}
          className="subTitle first"
        >
          {/* t("home.subTitle.first") */} Sub Title First
        </h2>
        <h3
          data-texteffect={/* t("home.subTitle.second") */}
          className="subTitle second"
        >
          {/* t("home.subTitle.second") */} Sub Title Second
        </h3>
        <h3
          data-texteffect={/* t("home.subTitle.third") */}
          className="subTitle third"
        >
          {/* t("home.subTitle.third") */} Sub Title Third
        </h3>
      </main>
    </section>
  );
}

export default Home;
