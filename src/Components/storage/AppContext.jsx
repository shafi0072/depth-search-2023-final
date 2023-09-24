import { createClient, groq } from 'next-sanity';
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext()

const AppContext = ({ children }) => {
    const [author, setAuthor] = useState({})
    const [partners, setPartners] = useState([])
    const projectId = 'kwzw2vfn';
    const dataset = 'production'
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
            groq`*[_type == "author"]{
        _id,
        name,
        slug,
        image{
            asset->{
                _id,
                url
            }
        },
        bio,
        "dropdownData": dropdownData[]{
          title
        }
      }`
          )
          .then((data) => {
            console.log(data);
            setAuthor(data[0])
            // Access the full array of navbar data here
          });
      }, []);
      useEffect(() => {
        client
          .fetch(
            groq`*[_type == "partners"]{
        _id,
        name,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        bio,
        "dropdownData": dropdownData[]{
          title
        }
      }`
          )
          .then((data) => {
            console.log(data);
            setPartners(data)
            // Access the full array of navbar data here
          });
      }, []);
    const value = {}
    return (
        <UserContext.Provider value={value}> {children} </UserContext.Provider>
    );
};

export default AppContext;