import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import { createClient, groq } from 'next-sanity';
import Team from './Team';

const About = () => {
    const [teams, setTeams] = useState([])
    const projectId = 'kwzw2vfn';
    const dataset = 'production'
    const apiVersion = "2023-05-03";
    const client = createClient({
        projectId,
        dataset,
        apiVersion, // https://www.sanity.io/docs/api-versioning
        useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
      });
      useEffect( () => {
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
            setTeams(data)
            // Access the full array of navbar data here
          });
      }, []);
    return (
        <div>
            <Banner teams={teams?.length}/>
            <Team teams={teams}/>
        </div>
    );
};

export default About;