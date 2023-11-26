import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constant";
import { fetchAllProjects } from "@/lib/action";
import { ProjectInterface } from "@/common.types";
import { Button } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
type ColumnProps = {
  title: string;
  links: Array<string>;
};

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = async () => {
  const data = (await fetchAllProjects()) as ProjectSearch;

  const projectsToDisplay = data?.projectSearch?.edges || [];

  return (
    <section className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-wrap gap-12">
          <div className=" gap-12">
            <Image src="/logo.png" width={150} height={54} alt="logo" />

            <p className="text-start text-sm font-normal mt-5 max-w-xs">
              BeInnovanass is the world&apos;s leading community for creatives
              to share, grow, and get hired.
            </p>
          </div>
          {/* <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          /> */}
          <div className="footer_column">
            <h4 className="font-semibold">BeInnovanass</h4>
            <ul className="flex flex-col gap-2 font-normal">
              <div className="flex-1 flex flex-col gap-4">
                <Link href="/overview">Overview</Link>
              </div>
              <div className="flex-1 flex flex-col gap-4 align-start">
                <Link href="/create-project">Try BeInnovanass</Link>
              </div>
            </ul>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <div className="footer_column">
            <h4 className="font-semibold">Development Resources</h4>
            <ul className="flex flex-col gap-2 font-normal">
              <div className="flex-1 flex flex-col gap-4">
                <Link href="/freelancing">Freelancing</Link>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Link href="/development-hiring">Development Hiring</Link>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Link href="/development-portfolio">Development Portfolio</Link>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <Link href="/development-education">Development Education</Link>
              </div>
            </ul>
          </div>
          {/* <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          /> */}

          <div className="flex-1 flex flex-col gap-4">
            <div className="footer_column">
              <h4 className="font-semibold">Company</h4>
              <ul className="flex flex-col gap-2 font-normal">
                <div className="flex-1 flex flex-col gap-4">
                  <Link href="/about">About</Link>
                </div>

                <div className="flex-1 flex flex-col gap-4 align-start">
                  <Link href="/support">Support</Link>
                </div>
                <div className="flex-1 flex flex-col gap-4 align-start">
                  <Link href="/terms-service">Terms of service</Link>
                </div>
                <div className="flex-1 flex flex-col gap-4 align-start">
                  <Link href="/privacy-policy">Privacy policy</Link>
                </div>
              </ul>
            </div>
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>@ 2023 BeInnovanass. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">
            {projectsToDisplay.length}
          </span>{" "}
          projects submitted
        </p>
      </div>
    </section>
  );
};

export default Footer;
