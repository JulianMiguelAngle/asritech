import Image from "next/image";

import project from "./project.json";

import Star from "@assets/Star.svg";
import Rooster from "@assets/Rooster.svg";
import Dollars from "@assets/Dollars.avif";

import { Navbar } from "@components/Navbar";

export default function Home() {
  return (
    <main className="px-4 md:px-16 flex min-h-screen flex-col gap-y-36">
      <Navbar />

      <section className="flex flex-col items-center text-center">
        <article className={`
          max-w-[600px] font-bold text-neutral-700 relative  
          text-display-small sm:text-display-medium lg:text-display-large leading-display-small sm:leading-display-medium lg:leading-display-large tracking-display
        `}>
          <h1 className="text-center">Make Your</h1>

          <span style={{
            background: "linear-gradient(180deg, #E5195D 40%, #F0759D 70%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          className="text-center"> 
            Dream Website
          </span>

          <Image
            className="absolute top-[16px] left-2"
            src={Star}
            alt="Star vector"
          />

          <Image
            className="absolute top-[70px] right-4"
            src={Star}
            alt="Star vector"
          />

          <Image
            className="absolute top-[120px] left-0"
            src={Star}
            alt="Star vector"
          />

          <h1 className="text-center">Come True</h1>
        </article>

        <h2 className="text-neutral-600 text-body-small sm:text-body-medium lg:text-body-large">
          Young developers and designers who are passionate about learning and developing.
        </h2>
      </section>

      <section>
        <label htmlFor="" className="w-full h-fit flex bg-neutral-white-100">

          <span className="pb-3 pr-3 block bg-neutral-0 rounded-br-xl">
            <h1 className={`
                py-4 px-6 bg-primary-400 text-neutral-0 font-bold rounded-2xl text-h1-small leading-h1-small tracking-tracking-heading
                
              `}>
              We&nbsp;Make&nbsp;→
            </h1>
          </span>

          <div className="w-full flex bg-neutral-0 before:bg-neutral-white-100 before:w-full before:h-full before:rounded-tl-[20px] before:rounded-tr-[20px]" />
        </label>

        <section className="pt-16 lg:pt-20 bg-neutral-white-100 rounded-[20px_0_20px_20px] flex flex-col lg:flex-row items-center justify-center gap-24 overflow-hidden">
            <article className="flex items-center justify-center relative w-full max-w-[400px]">
              <section className={`
                *:w-fit *:py-4 *:px-6 *:bg-neutral-0 *:rounded-3xl *:shadow-feature absolute *:absolute z-10 top-0 left-0 right-0 bottom-0
                text-neutral-700 text-body-small sm:text-body-medium leading-body-small sm:leading-body-medium tracking-body
              `}>

                <h3 className="top-8 left-1">CMS</h3>
                <h3 className="top-1 right-6">Responsive Design</h3>
                <h3 className="bottom-1 right-1">Stunning Design</h3>
              </section>

              <section className={`
                  w-full max-w-[250px] sm:max-w-[300px]
                  aspect-square p-6 bg-primary-400 text-neutral-0 rounded-2xl font-bold rotate-[-8deg] flex items-center
                `}>
                <h2 className={`
                  text-h2-small sm:text-h2-medium lg:text-h2-large leading-h2-small sm:leading-h2-medium lg:leading-h2-large tracking-heading
                `}>
                  Company Profile / Landing page
                </h2>
              </section>

            </article>

            <article className="flex items-center justify-center relative w-full max-w-[400px]">
              <section className={`
                *:w-fit *:py-4 *:px-6 *:bg-neutral-0 *:rounded-3xl *:shadow-feature absolute *:absolute z-10 top-0 left-0 right-0 bottom-0
                text-neutral-700 text-body-small sm:text-body-medium leading-body-small sm:leading-body-medium tracking-body
              `}>

                <h3 className="top-6 left-0">Payment Gateway</h3>
                <h3 className="top-[-48px] right-1">Custom MVP Feature</h3>
                <h3 className="bottom-6 right-8">E-Commerce Functionality</h3>
              </section>

              <section className={`
                w-full max-w-[250px] sm:max-w-[300px]
                aspect-square p-6 bg-primary-400 text-neutral-0 rounded-2xl font-bold rotate-6 flex items-center  
              `}>
                <h2 className={`
                  text-h2-small sm:text-h2-medium lg:text-h2-large leading-h2-small sm:leading-h2-medium lg:leading-h2-large tracking-heading
                `}>
                  Fullstack website
                </h2>
              </section>

            </article>
        </section>
      </section>

      <section className="flex flex-col gap-y-8 items-center">
        <h1 className={`
          text-neutral-700 font-bold 
          text-h1-small sm:text-h1-medium lg:text-h1-large leading-h1-small sm:leading-h1-medium lg:leading-h1-large tracking-heading
        `}>
          And...
        </h1>

        <section className={`
          w-full max-w-[1000px] flex flex-col gap-y-3 md:gap-y-4
        `}>
          <section className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <article className={`
              py-8 px-6 min-h-[200px] bg-neutral-white-100 rounded-3xl
              max-w-[280px] justify-self-start text-neutral-600 font-medium flex flex-col gap-y-6
            `}>
              <Image
                className="h-[36px] w-[36px]"
                src={Rooster}
                alt="Rooster"
              />

              <h2 className="text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3-small sm:leading-h3-medium lg:leading-h3-large tracking-heading">
                Working from the rooster crowing (7 am) until 8 pm.
              </h2>
            </article>

            <article className={`
              py-8 px-6 w-full min-h-[200px] bg-neutral-white-100 rounded-3xl
              text-neutral-600 *:w-full
              flex gap-x-6
            `}>
              <h2 className={`
                max-w-[130px] sm:max-w-[180px]
                text-h2-small sm:text-h2-medium lg:text-h2-large leading-h2-small sm:leading-h2-medium lg:leading-h2-large tracking-heading font-medium  
              `}>
                You always need fast? Right?
              </h2>

              <h3 className={`
                py-1 text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3-small sm:leading-h3-medium lg:leading-h3-large tracking-heading
              `}>
                Take it easy. We will do it fast and well.
              </h3>
            </article>
          </section>

          <section className={`
            flex gap-x-3 sm:gap-x-4
            after:w-full after:bg-primary-white-0 after:rounded-3xl after:max-w-[400px]
          `}>
            <article className={`
              py-8 px-6 w-full min-w-[300px] min-h-[200px] max-w-[300px] sm:max-w-[580px]
              bg-neutral-white-100 rounded-3xl
              text-neutral-600 flex gap-x-6
            `}>
              <h2 className={`
                max-w-[150px] sm:max-w-[180px] lg:max-w-[360px]
                text-h2-small sm:text-h2-medium lg:text-h2-large leading-h2-small sm:leading-h2-medium lg:leading-h2-large tracking-heading font-medium
              `}>
                But first you need a consultation!
              </h2>

              <article className={`
                py-1 w-fit max-w-[120px] sm:max-w-[160px]
                text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3-small sm:leading-h3-medium lg:leading-h3-large tracking-heading  
              `}>
                <h3>you can do it</h3>
                <h3 className="font-medium text-primary-400">for free</h3>
              </article>
            </article>
          </section>

          <section className={`
            flex gap-x-3 sm:gap-x-4
            before:bg-primary-white-0 before:rounded-3xl before:w-full before:max-w-[578px]
          `}>
            <article className={`
              py-8 px-6 w-full min-h-[200px] min-w-[250px] max-w-[280px] lg:max-w-[400px] relative overflow-hidden
              bg-neutral-white-100 rounded-3xl text-neutral-600 
              flex flex-col justify-end gap-x-6
            `}>
              <Image
                className="w-[300px] absolute left-24 rotate-12"
                src={Dollars}
                alt="Dollars"
              />

              <article className="backdrop-blur-[2px] bg-[rgba(250, 250, 250, 0.01)] relative z-10">
                <h2 className="text-h2-small sm:text-h2-medium lg:text-h2-large leading-h2-small sm:leading-h2-medium lg:leading-h2-large tracking-heading font-bold">
                  Affordable Price
                </h2>

                <h3 className="text-additional-blue text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3-small sm:leading-h3-medium lg:leading-h3-large tracking-heading font-medium">
                  Start from $80
                </h3>
              </article>
            </article>
          </section>


        </section>
      </section>

      <section>
        <label htmlFor="" className={`w-full h-fit flex bg-neutral-0`}>

          <span className="pr-3 block bg-neutral-0">
            <h1 className={`
                py-4 px-6 bg-additional-purple text-neutral-0 font-bold rounded-2xl sm:rounded-[20px] lg:rounded-3xl 
                text-h1-small leading-h1-small sm:text-h1-medium sm:leading-h1-medium lg:text-h1-large lg:leading-h1-large tracking-heading
              `}>
              So..
            </h1>
          </span>

          <div className={`
            w-full flex bg-neutral-0 
            before:bg-neutral-white-100 before:w-full before:h-full 
            before:rounded-tl-2xl before:rounded-tr-2xl before:rounded-2xl
            before:sm:rounded-tl-[20px] before:sm:rounded-tr-[20px] before:sm:rounded-bl-[20px] 
            before:lg:rounded-tl-3xl before:lg:lgrounded-tr-3xl before:lg:lgrounded-bl-3xl
          `} />
        </label>

        <label htmlFor="" className={`
          w-full h-fit flex bg-neutral-white-100
          after:w-full after:min-w-[80px] after:h-full after:flex after:bg-neutral-0
        `}>

          <span className={`
            py-3 pr-3 block bg-neutral-0 
            rounded-br-2xl rounded-tr-2xl sm:rounded-br-[20px] sm:rounded-tr-[20px]
          `}>
            <h1 className={`
                py-4 px-6 bg-additional-purple min-w-[230px] sm:w-max text-neutral-0 font-bold rounded-2xl sm:rounded-[20px] lg:rounded-3xl 
                text-h1-small leading-h1-small sm:text-h1-medium sm:leading-h1-medium lg:text-h1-large lg:leading-h1-large tracking-heading
              `}>
              What has Asri Tech done?
            </h1>
          </span>
        </label>

        <section className={`
          pt-16 lg:pt-20 bg-neutral-white-100 flex flex-col lg:flex-row items-center justify-center gap-24 overflow-hidden  
          rounded-[16px_0_16px_16px] sm:rounded-[20px_0_20px_20px] lg:rounded-[24px_0_24px_24px]
        `}>
          {project.map((project) => {
            return (
              <article key={project.id + project.title} 
                className={`
                  relative overflow-hidden
                  w-[360px] h-[500px] rounded-tl-[20px] rounded-tr-[20px] flex flex-col
                `}
              >
                <Image
                  src={project.photo}                
                  alt={`Photo project ${project.title}`}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover"
                />

                {project.pinned && (
                  <p className={`
                    py-2 pl-3 pr-6 bg-primary-400 text-neutral-0 font-medium rounded-bl-2xl absolute top-0 right-0
                    text-h2-small sm:text-h2-medium lg:text-h2-large leading-h2-small sm:leading-h2-medium lg:leading-h2-large tracking-heading
                  `}>
                    ⁕ Pinned
                  </p>
                )}

                <section className="flex">
                  <h1 className={`
                    text-label-small sm:text-h2-medium lg:text-h2-large leading-label-small sm:leading-h2-medium lg:leading-h2-large tracking-heading
                  `}>
                    { project.title }
                  </h1>
                  
                  <span className="pt-4 pl-4 block rounded-tl-2xl sm:rounded-tl-[20px] lg:rounded-tl-3xl">
                    <a href={project.link} className={`
                      p-4 bg-gradient-orange text-neutral-0 font-medium rounded-2xl sm:rounded-[20px] lg:rounded-3xl
                      text-h3-small sm:text-h3-medium lg:text-h3-large leading-h3-small sm:leading-h3-medium lg:leading-h3-large tracking-heading
                    `}>
                      Check&nbsp;out&nbsp;👀
                    </a>
                  </span>
                </section>
              </article>
            );
          })}
            
        </section>
      </section>

      <p>Asri Tech is a collective consisting of young developers and designers who are passionate about learning and developing.</p>
      {/* <Footer /> */}
    </main>
  );
}
