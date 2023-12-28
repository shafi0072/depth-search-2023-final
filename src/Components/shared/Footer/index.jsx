import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
const Footer = () => {
  return (
		// <div className="bg-[#121B21]">
		//   <div className="max-w-screen-2xl mx-auto px-16 pt-16 pb-10">
		//     <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 ">
		//       <div>
		//         <h2 className="text-xl font-semibold uppercase mb-2">United State</h2>

		//         <p className="text-xl">North Miami Beach</p>
		//         <p>Florida</p>
		//       </div>
		//       <div>
		//         <h2 className="text-2xl font-semibold uppercase mb-2">India</h2>

		//         <p className="text-xl">
		//           S R Iriz, Iriz, No. 889 6th Floor, Baner - Pashan Link Rd, Pune,
		//         </p>
		//         <p>Maharashtra 411021,India</p>
		//       </div>
		//       <div>
		//         <h2 className="text-xl font-semibold  uppercase mb-2">Bangladesh</h2>

		//         <p className="text-xl"> Bangobandu High Tech Park</p>
		//         <p>Rajshahi,Bangladesh</p>
		//       </div>
		//       <div>
		//         <h2 className="text-xl font-semibold mb-4">CONTACT</h2>
		//         <div className="space-y-3">
		//           <p className="flex items-center gap-2">
		//             <LocalPhoneOutlinedIcon />
		//             +8801763740664
		//           </p>
		//           <p className="flex items-center gap-2">
		//             <LocalPhoneOutlinedIcon />
		//             depthsearch.official@gmail.com
		//           </p>
		//           <p className="-ml-3">
		//             <ArrowRightIcon sx={{ fontSize: "50px" }} />
		//             <a
		//               className="cursor-pointer hover:text-blue-500"
		//               target="blank"
		//               href="https://www.designrush.com/agency/profile/depth-search"
		//             >
		//               Visit us in DESIGNRUSH
		//             </Link>
		//           </p>
		//           <div className="flex items-center gap-4 pt-3">
		//             <LinkedInIcon sx={{ fontSize: "30px" }} />
		//             <FacebookIcon sx={{ fontSize: "30px" }} />
		//             <InstagramIcon sx={{ fontSize: "30px" }} />
		//           </div>
		//         </div>
		//       </div>
		//     </div>
		//     <div className="text-white text-center pt-12">
		//       <hr className="max-w-screen-md mx-auto mb-4" />
		//       Copyright © 2023 - All right reserved by Depth Search IT Limited
		//     </div>
		//   </div>
		// </div>
		// bg-[#121B21]
		<div className='bg-gradient-to-tl from-[#242424] via-[#0a0a0a] to-[#16282f]'>
			{/* footer section start */}
			<div className='max-w-screen-2xl mx-auto md:px-16 px-4 md:pt-16 py-6 md:pb-10'>
				{/* top section start */}
				<div className='container mx-auto'>
					{/* title section start */}
					<div>
						<h1 className=' text-2xl sm:text-4xl md:text-5xl md:-ms-14 lg:text-4xl font-bold'>
							Let's Grow Your Brand
						</h1>
					</div>
					{/* title section end */}
					{/* item section start */}
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6  md:gap-12 lg:gap-22 my-10'>
						{/* content1 start */}
						<div>
							{/* item title start */}
							<h3 className='lg:text-2xl text-sky-400 md:text-lg sm:text-2xl font-bold mb-4 text-3xl'>
								Main Services
							</h3>
							{/* item title end */}
							{/* item list start */}
							<ul className='list-none ms-1'>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover '>
									{" "}
									{/* translateX-hover class for hover effect */}
									<Link href='/services'>Web Development</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover'>
									<Link href='/services'>Mobile App Development</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover'>
									<Link href='/services'>Digital Marketing</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover'>
									<Link href='/services'>Magento Web Design</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover'>
									<Link href='/services'>eCommerce Development</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl translateX-hover'>
									<Link href='/services'>WordPress Web Design</Link>
								</li>
							</ul>
							{/* item list end */}
						</div>
						{/* content1 end */}
						{/* content2 start */}
						<div>
							{/* item title start */}
							<h3 className='lg:text-2xl text-sky-400  md:text-lg sm:text-2xl font-bold mb-4 text-3xl'>
								Apps & Development
							</h3>
							{/* item title end */}
							{/* item list start */}
							<ul className='list-none ms-1'>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover'>
									<Link href='/services'>Flutter</Link>
								</li>
								
							
								
								<li className='lg:text-lg md:text-base sm:text-lg text-xl translateX-hover'>
									<Link href='/services'>React-Native</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl translateX-hover'>
									<Link href='/services'>Next Js</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl translateX-hover'>
									<Link href='/services'>Nest Js</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl translateX-hover'>
									<Link href='/services'>Aws (Amazon Web Services)</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl translateX-hover'>
									<Link href='/services'>Cloud Computing (DevOps)</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl translateX-hover'>
									<Link href='/services'>MERN Stack (MongoDB, Express.js, React.js, Node.js)</Link>
								</li>
							</ul>
							{/* item list end */}
						</div>
						{/* content2 end */}
						{/* content3 start */}
						
						{/* content3 end */}
						{/* content4 start */}
						<div>
							{/* item title start */}
							<h3 className='lg:text-2xl text-sky-400 md:text-lg sm:text-2xl font-bold mb-4 text-3xl'>
								Company
							</h3>
							{/* item title end */}
							{/* item list start */}
							<ul className='list-none ms-1'>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover'>
									<Link href='/about'>About Us</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover'>
									<Link href='/case-studies'>Case Studies</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover'>
									<Link href='/projects'>Projects</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl mb-1 translateX-hover'>
									<Link href='/services'>Our Services</Link>
								</li>
								<li className='lg:text-lg md:text-base sm:text-lg text-xl translateX-hover'>
									<Link href='/contact-us'>Contact Us</Link>
								</li>
							</ul>
							{/* item list end */}
						</div>
						{/* content4 end */}
					</div>
					{/* item section end */}
				</div>
				{/* top section end */}
				{/* bottom section start */}
				{/* logo section start */}
				<div className='flex justify-between items-center gap-1 relative'>
					<div className='flex sm:w-3/12 w-full gap-1 items-center'>
						<img
							className='md:w-10 w-5'
							src='https://i.ibb.co/5L1dmVz/logotwo.png'
							alt=''
						/>
						<span className='md:text-3xl text-lg font-bold cursor-pointer'>
							DEPTH SEARCH
						</span>
					</div>
					<div className='bg-white w-9/12 h-[3px] hidden sm:block'></div>
				</div>
				{/* logo section end */}
				{/* "location section start */}
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6  md:gap-12 lg:gap-22 my-10'>
						{/* item section start */}
						<div>
							<h3 className='lg:text-2xl md:text-lg sm:text-2xl font-bold mb-2 text-3xl'>
								Miami
							</h3>
							<p>
								<Link href='/services'>
									17975 Collins Avenue<br></br>Sunny Isles
									Beach,<br></br>FL 33160
								</Link>
							</p>
						</div>
						{/* item section end */}
						{/* item section start */}
						<div>
							<h3 className='lg:text-2xl md:text-lg sm:text-2xl font-bold mb-2 text-3xl'>
								Bangladesh
							</h3>
							<p>
								<Link href='/services'>
									Bangobandhu High-Tech Park<br></br>Rajshahi, Bangladesh
								</Link>
							</p>
						</div>
						{/* item section end */}
						{/* item section start */}
						<div>
							<h3 className='lg:text-2xl md:text-lg sm:text-2xl font-bold mb-2 text-3xl'>
								India
							</h3>
							<p>
								<Link href='/services'>
									625 W Adams St<br></br>Chicago, IL 60661
								</Link>
							</p>
						</div>
						{/* item section end */}
						{/* item section start */}
					
						{/* item section end */}
					</div>
				</div>
				{/* location section end */}
				{/* border start */}
				<div className='bg-white w-full h-[2px] mb-5'></div>
				{/* border end */}
				{/* contact section start */}
				<div className='container mx-auto'>
					<div className='block sm:flex sm:gap-6 md:gap-14'>
						<p className='mt-2'>
							<Link href='/services'>
								©{new Date().getFullYear()} Depth Search. All rights reserved
							</Link>
						</p>
						<p className='mt-2'>
							<Link href='/services'>Privacy Policy</Link>
						</p>
						<p className='mt-2'>
							<Link href='/services'>Call us at +8801763740664</Link>
						</p>
						<p className='mt-2'>
							<Link href='/services'>hello@depthsearch.net</Link>
						</p>
						<p className='mt-2'>
							<Link href='/services'>collaboration@depthsearch.net</Link>
						</p>
					</div>
				</div>
				{/* contact section end */}
				{/* bottom section end */}
			</div>
			{/* footer section end */}
		</div>
  );
};

export default Footer;
