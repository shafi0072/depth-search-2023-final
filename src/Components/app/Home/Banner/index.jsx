import React, { useEffect, useState } from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { createClient, groq } from "next-sanity";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const index = () => {
  const [author, setAuthor] = useState({});
  console.log({ author });
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
        video{
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
        // console.log({data});
        setAuthor(data[0]);
        // Access the full array of navbar data here
      });
  }, []);

  // modal open close
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${author?.image?.asset?.url})` }}
        className="bg-image md:h-[75vh] lg:h-[90vh] w-full text-center flex flex-col items-center justify-center py-12 md:py-0"
      >
        <div className="text-white">
          <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-bold">
            {author?.name}
          </h2>
          <p className=" text-xl md:text-3xl font-semibold my-6">
            {author?.slug?.current}
          </p>
          <div className="mt-10">
            <button className="bg-primary px-6 py-4 rounded text-xl mr-4">
              GET A QOUTE
            </button>
            <button className="hidden md:inline bg-white text-black px-6 py-4 rounded text-lg">
              EXPLORE MORE
            </button>
          </div>
        </div>
        <div className="mt-8 cursor-pointer animate-pulse relative ">
          <div className="signal mt-1"></div>
          <PlayCircleOutlineOutlinedIcon
            onClick={handleOpen}
            className="absolute top-1 right-0"
            sx={{ fontSize: "100px", color: "white" }}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-full bg-transparent h-full relative ">
          {/* <video className="w-full h-full" type="video/mp4" src={author?.video?.asset?.url}>

         </video> */}

          <video className="w-full h-[100vh] mx-auto" autoPlay controls >

            <source  src={author?.video?.asset?.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <CloseIcon
            className="cursor-pointer absolute right-2 top-2  md:right-6 md:top-6"
            onClick={handleClose}
            sx={{ fontSize: "50px" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default index;
