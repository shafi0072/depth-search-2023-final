import React, { useEffect, useState, useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createClient, groq } from "next-sanity";
import Link from "next/link";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);
  const projectId = "kwzw2vfn";
  const dataset = "production";
  const apiVersion = "2023-05-03";
  const client = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  });
  useEffect(() => {
    client
      .fetch(
        groq`*[_type == "team"]{
        _id,
        id,
        name,
        position,
        image{
            asset->{
                _id,
                url
            }
        },
        facebook,
        linkedin,
        github,
        twitter
      }`
      )
      .then((data) => {
        // console.log({data});
        setTeams(data);
        // Access the full array of navbar data here
      });
  }, []);
  const teamRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, [teamRef]);
  return (
    <div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-bold  text-gray-300">
              Our team
            </h2>
            <p className="font-light text-gray-300 sm:text-xl dark:text-gray-400">
              Top industry with proven experience who are hands- on in managing
              projects
            </p>
          </div>
          <div
            ref={teamRef}
            className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {teams
              ?.sort((a, b) => a.id - b.id)
              .slice(0, 8)
              .map((team, index) => (
                <div
                  key={index}
                  className={
                    isVisible &&
                    "team-animation text-center text-gray-500 dark:text-gray-400"
                  }
                >
                  <img
                    className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
                    src={team?.image?.asset?.url}
                    alt="Bonnie Avatar"
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">
                    <a href="#">{team?.name}</a>
                  </h3>
                  <p>{team?.position}</p>
                  <ul className="flex justify-center mt-4 space-x-4">
                    <li className="translateY-hover">
                      <a
                        href={team?.facebook}
                        className="text-[#39569c]  hover:text-gray-300
                         dark:hover:text-white"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="translateY-hover">
                      <a
                        href={team?.twitter}
                        className="text-[#00acee] hover:text-gray-300 dark:hover:text-white"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                    <li className="translateY-hover">
                      <a
                        href={team?.github}
                        className="text-gray-900 hover:text-gray-300 dark:hover:text-white dark:text-gray-300"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="translateY-hover">
                      <a
                        href="#"
                        className="text-[#ea4c89] hover:text-gray-300 dark:hover:text-white"
                      >
                        <LinkedInIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
          <div className="mt-10">
            <Link href={`/about`}>
              <button className="py-2 px-5 border rounded-md text-white">
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
