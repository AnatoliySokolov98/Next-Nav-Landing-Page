import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import Feature from "@/components/feature";
import Profile from "@/components/profile";
import { cardData, profileData } from "@/config/data";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-y-10">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex-col">
          <div className="inline-block text-center justify-center">
            <h1 className={title({ size: "lg" })}>NEXT.NAV</h1>
            <br />
            <br />
            <h2 className={title({ size: "sm" })}>
              Navigate and Create routes&nbsp;
            </h2>
            <h2 className={title({ color: "blue", size: "sm" })}>
              easily&nbsp;
            </h2>
            <br />
            <h2 className={title({ size: "sm" })}>
              in your Next.js application
            </h2>
            <br />
            <h3 className={subtitle({ class: "mt-4" })}>
              User friendly VSCode extension
            </h3>
            <h3 className={title({ color: "green", size: "sm" })}>
              (20k+ downloads)
            </h3>
          </div>
          <div className="flex gap-3 justify-center mt-10">
            <Link
              isExternal
              as={NextLink}
              href={siteConfig.links.store}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              <Image
                width={20}
                height={20}
                src="/vscode-alt.svg"
                alt="Vscode logo"
              />
              Download from Store
            </Link>
            <Link
              isExternal
              as={NextLink}
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center gap-3 mt-20">
        <h2 className={title({ size: "md" })}> Features Demo </h2>
        {cardData.map((datum) => (
          <Feature
            header={datum.header}
            bullets={datum.bullets}
            path={datum.path || ""}
            alttext={datum.alttext || ""}
            key={datum.header}
          />
        ))}
      </section>

      <section className=" flex flex-col items-center justify-center gap-3 mt-10">
        <h2 className={title({ size: "md" })}> Tutorial Video </h2>
        <iframe
          className="mt-5 rounded-3xl w-[65vw] h-[40vw]"
          src="https://www.youtube.com/embed/zfmwY87crUg?si=LJ6-d-7KV-na0qFu"
          title="Next.Nav Tutorial (Updated Version 1.1)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>

      <section className="flex flex-col items-center gap-3 mt-20">
        <h2 className={title({ size: "md" })}>
          {" "}
          Meet Our Fantastic Team of Software Engineers
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-10 w-[80vw] mt-10">
          {profileData.map((datum) => (
            <Profile key={datum.header} {...datum} />
          ))}
        </div>
      </section>
    </section>
  );
}
