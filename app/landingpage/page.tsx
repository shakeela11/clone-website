import React from 'react'
import Image from 'next/image'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
const page = () => {

    
    return (

        <>
            {/* Hero section */}
            <div className=" roboto hero flex flex-col h-auto pt-10 gap-y-8 bg-red-200 overflow-hidden">
          
                <div className="nav_bar min-w-full flex-wrap  h-12 flex items-center justify-between pl-32 pr-32">
                    <div className="bg w-40 h-40 absolute ml-10 left-96  -top-16 bg-primary rounded-full"></div>
                    <div className="button flex w-32 gap-1 text-white font-semibold text-2xl uppercase leading-10 ">
                        <p className='text-black'>S<span className='text-red-500'>J</span></p>
                        <span className='text-red-500'>design</span>
                    </div>
                    
                    <div className=" links flex gap-8 text-sm font-bold leading-6 text-black relative ">
                   
                        <a href="#about">About</a>
                        <a href="#Services">Services</a>
                        <a href="#Portfolio">Portfolio</a>
                        <a href="#Blog">Blog</a>
                    </div>
                    <div className="logo pl-6 pr-6 pt-3 pb-3 rounded bg-black relative flex items-center justify-center text-white font-bold ">Let's Talk</div>
                </div>
                <div className="container h-[518px] pl-[124px] pr-[90px] flex-row  gap-12  flex ">
                    <div className="header_content w-[457px] h-[518px] pt-16 pb-20 flex flex-col gap-12 ">
                        <div className="section_headings  text-black flex flex-col gap-y-4 ">
                            <p className="tittle font-normal text-xl leading-7 font-mono">UX designer</p>
                            <h1 className="tittle font-mono font-extrabold text-5xl leading-normal">Hi There, I'm <span className='text-red-500'>Shakeela Naz</span></h1>
                            <p className="description text-base font-normal leading-6">Welcome to my Portfolio of captivating digital experiences. Explore my work and lets create something extraordinary together.</p>
                        </div>
                        <div className="CTAs h-12 flex gap-5 uppercase font-bold text-base ">
                            <button className='bg-black text-sm text-white rounded-md pt-3 pb-3 pl-14 pr-14'>Hire me</button>
                            <button className='bg-white text-black rounded-md pt-3 pb-3 pl-14 pr-14'>Portfolio</button>
                        </div>
                    </div>
                    <div className="header_img mt-8 h-[30.459rem] w-[42.938rem]   pt-10  flex items-center justify-center">
                    <div className="img ">
                    <Image src="/images/hero.png"  alt="Picture of the author" width="2000" height="2000"/> 
                    </div>
                </div>

                </div>
            </div>    
            
            {/* About section */}
                    <div id='about' className="roboto About h-[445px] overflow-hidden bg-bitter bg-gray-400 text-black flex flex-col gap-8 justify-center items-center text-center pl-48 pr-48 pt-16">
                <div className="about_heading flex flex-col gap-6 h-[150px] w-[810px] ">
                    <h1 className=' text-4xl font-bold leading-10 '>About Me</h1>
                    <p className=' text-base font-normal leading-6'>I'm Shakeela Naz, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.</p>
                </div>
                 
                <div className="about_container flex gap-16 ">
                    <div className="info01 flex flex-col gap-5 text-center w-[312px]  h-[119px]">
                        <h2 className='text-black-200  text-[64px] font-bold leading-10'>502</h2>
                        <p>Projects Done</p>
                    </div>
                    <div className="info02 flex flex-col gap-5 text-center w-[312px]  h-[119px]">
                        <h2 className='text-light_pink text-[64px] font-bold leading-10'>10+</h2>
                        <p>Years of Experiences</p>
                    </div>
                    <div className="info03 flex flex-col text-center gap-5 w-[312px]  h-[119px]">
                        <h2 className='text-light_pink text-[64px] font-bold leading-10'>273+</h2>
                        <p>Clients Served</p>
                    </div>
                </div>
                <div className="about_background  rounded-t-[90px] h-[124px] w-[124px] bg-primary">
                </div>
            </div>
              {/* Services section */}
              <div id='Services' className=" roboto service_section overflow-hidden  h-[527px] z-50  pt-16 pb-16 pl-[100px] pr-[124px] bg-white">
                <div className="service_container w-[1192px] h-[399px] gap-8 flex flex-col items-center">
                    <div className="services_heading flex flex-col items-center justify-center text-center  w-[1192px] h-[126px] gap-6">
                        <h1 className=' text-4xl text-black font-bold leading-[54px] '>Services</h1>
                      <div className='w-[810px]'>  <p className="description text-light_black text-base font-normal">Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p> </div>
                    </div> 
                    <div className="services text-light_black flex flex-row h-[241px] gap-8">
                        <div className="service01 flex flex-col  p-4 gap-6">
                            <div className="vector">
                            <Image 
                            src="/images/vector.png"
                            width={68}
                            height={68}
                            alt="Picture of the author"
                            />
                            </div>
                            <h2 className='text-[18px] font-bold leading-6'>Design</h2>
                            <p className='text-light_black leading-[21px] font-normal text-[14px]'>I specialize in web development and design, creating visually appealing, user-friendly digital experiences.</p>
                        </div>
                        <div className="service02 flex flex-col p-4 gap-6">
                            <div className="vector">
                            <Image 
                            src="/images/vector1.png"
                            width={120}
                            height={120}
                            alt="Picture of the author"
                            />
                        </div>
                            <h2 className='text-[18px] font-bold leading-6'>Branding</h2>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                            <p className='text-light_black leading-[21px] font-normal text-[14px]'>I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.</p>
                        </div>
                        <div className="service03 flex flex-col p-4 gap-6">
                            <div className="vector">
                            <Image 
                            src="/images/vector2.png"
                            width={78}
                            height={78}
                            alt="Picture of the author"
                            />
                        </div>
                            <h2 className='text-[18px] font-bold leading-6'>UX Research</h2>
                            <p className='text-light_black leading-[21px] font-normal text-[14px]'>"I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.</p>
                        </div>
                        <div className="service04 flex flex-col p-4 gap-6">
                            <div className="vector">
                            <Image 
                            src="/images/vector 03.png"
                            width={78}
                            height={78}
                            alt="Picture of the author"
                            />
                        </div>                                  
                            <h2 className='text-[18px] font-bold leading-6'>Usability Testing</h2>                                                                                                                                                                                                                                                                                               
                            <p className='text-light_black leading-[21px] font-normal text-[14px]'>I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.</p>
                        </div>
                    </div>
               </div>
            </div>
            {/* Portfolio section */}
            <div id='Portfolio' className="portfolio_section  roboto overflow-hidden  bg-[#F7F7F7] h-[940.67px]">
                <div className="portfolio_heading h-[318px] flex flex-col items-center justify-center text-center gap-[10px]  pt-[50px] pb-[142px]  bg-red-200 ">
                    <div className="Portfolio_sectionHeading  h-[126px] w-[1192px] flex flex-col justify-center items-center gap-6">
                    <h1 className=' text-4xl text-black font-bold leading-[54px] '>Portfolio</h1>
                        <div className="p_description h-12 w-[810px]">
                        <p className="description text-light_black text-base font-normal">Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</p>
                        </div>                        
                        </div>
                    
                </div>
                <div className="portfolio_cardsContainer h-[722.67px] flex justify-center items-center flex-col gap-16 pl-[124px] pr-[124px] pb-16">
                    <div className="row flex flex-row gap-16 w-[1192px]  h-[297.33px]">
                        <div className="card01  w-[354.67px] h-[297.33px] flex flex-col gap-8">
                            <div className="cardImg h-[198.33px] w-[354.67px]">
                            <Image 
                            src="/images/ep.png"
                            width={500}
                            height={600}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                            </div>
                            <div className="cardContent  h-[67px] flex w-[354.67px] justify-between">
                                <div className="headline_subhead flex flex-col gap-4 w-[242px] h-[67px]">
                                    <h2 className=' text-black text-xl font-bold leading-6'>Educational Platform</h2>
                                    <h6 className=' text-light_black font-normal text-sm leading-5'>Web Design / Usability Testing</h6>
                                </div>
                                <div className="liner mt-6 flex justify-center items-center  h-[37.67px] w-[37.67] bg-primary rounded-full p-[7.53px] ">
                                <Image 
                            src="/images/tad.png"
                            width={20}
                            height={20}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                                </div>
                            </div>
                        </div>
                        <div className="card02  w-[354.67px] h-[297.33px] flex flex-col gap-8">
                            <div className="cardImg h-[198.33px] w-[354.67px]">
                            <Image 
                            src="/images/tad.png"
                            width={500}
                            height={600}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                            </div>
                            <div className="cardContent  h-[67px] flex w-[354.67px] justify-between">
                                <div className="headline_subhead flex flex-col gap-4 w-[242px] h-[67px]">
                                    <h2 className=' text-black text-xl font-bold leading-6'>Travel App Design</h2>
                                    <h6 className=' text-light_black font-normal text-sm leading-5'>UX Research / App Design </h6>
                                </div>
                                <div className="liner mt-6 flex justify-center items-center  h-[37.67px] w-[37.67] bg-primary rounded-full p-[7.53px] ">
                                <Image 
                            src="/send.svg"
                            width={20}
                            height={20}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                                </div>
                            </div>
                        </div>
                        <div className="card03  w-[354.67px] h-[297.33px] flex flex-col gap-8">
                            <div className="cardImg h-[198.33px] w-[354.67px]">
                            <Image 
                            src="/images/pp.png"
                            width={500}
                            height={600}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                            </div>
                            <div className="cardContent  h-[67px] flex w-[354.67px] justify-between">
                                <div className="headline_subhead flex flex-col gap-4 w-[242px] h-[67px]">
                                    <h2 className=' text-black text-xl font-bold leading-6'>Personal Page</h2>
                                    <h6 className=' text-light_black font-normal text-sm leading-5'>Web Design</h6>
                                </div>
                                <div className="liner mt-6 flex justify-center items-center  h-[37.67px] w-[37.67] bg-primary rounded-full p-[7.53px] ">
                                <Image 
                            src="/send.svg"
                            width={20}
                            height={20}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                                </div>
                            </div>
                        </div>
                   </div>
                    <div className="row flex flex-row gap-16 w-[1192px] mb-40 h-[297.33px]">
                    <div className="card04  w-[354.67px] h-[297.33px] flex flex-col gap-8">
                            <div className="cardImg h-[198.33px] w-[354.67px]">
                            <Image 
                            src="/images/card4.png"
                            width={500}
                            height={600}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                            </div>
                            <div className="cardContent  h-[67px] flex w-[354.67px] justify-between">
                                <div className="headline_subhead flex flex-col gap-4 w-[242px] h-[67px]">
                                    <h2 className=' text-black text-xl font-bold leading-6'>Furniture Mobile App</h2>
                                    <h6 className=' text-light_black font-normal text-sm leading-5'>App Design</h6>
                                </div>
                                <div className="liner mt-6 flex justify-center items-center  h-[37.67px] w-[37.67] bg-primary rounded-full p-[7.53px] ">
                                <Image 
                            src="/send.svg"
                            width={20}
                            height={20}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                                </div>
                            </div>
                        </div>
                        <div className="card05  w-[354.67px] h-[297.33px] flex flex-col gap-8">
                            <div className="cardImg h-[198.33px] w-[354.67px]">
                            <Image 
                            src="/images/card5.png"
                            width={500}
                            height={600}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                            </div>
                            <div className="cardContent  h-[67px] flex w-[354.67px] justify-between">
                                <div className="headline_subhead flex flex-col gap-4 w-[242px] h-[67px]">
                                    <h2 className=' text-black text-xl font-bold leading-6'>Coffee House Page</h2>
                                    <h6 className=' text-light_black font-normal text-sm leading-5'>UX Research / Web Design </h6>
                                </div>
                                <div className="liner mt-6 flex justify-center items-center  h-[37.67px] w-[37.67] bg-primary rounded-full p-[7.53px] ">
                                <Image 
                            src="/send.svg"
                            width={20}
                            height={20}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                                </div>
                            </div>
                        </div>
                        <div className="card06  w-[354.67px] h-[297.33px] flex flex-col gap-8">
                            <div className="cardImg h-[198.33px] w-[354.67px]">
                            <Image 
                            src="/images/card6.png"
                            width={500}
                            height={600}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                            </div>
                            <div className="cardContent  h-[67px] flex w-[354.67px] justify-between">
                                <div className="headline_subhead flex flex-col gap-4 w-[242px] h-[67px]">
                                    <h2 className=' text-black text-xl font-bold leading-6'>House Services Page</h2>
                                    <h6 className=' text-light_black font-normal text-sm leading-5'>Web Design / Marketing</h6>
                                </div>
                                <div className="liner mt-6 flex justify-center items-center  h-[37.67px] w-[37.67] bg-primary rounded-full p-[7.53px] ">
                                <Image 
                            src="/send.svg"
                            width={20}
                            height={20}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            {/* Skills section */}
            <div  className="skills_section  roboto overflow-hidden  h-[34.625rem] bg-[#F7F7F7] justify-center items-center flex flex-col gap-16 pt-[5.625rem] pb-[5.625rem] pr-[11.75rem] pl-[11.75rem]">
                <div className="skill_heading flex flex-col gap-6 h-[7.875rem] w-[50.625rem] items-center justify-center text-center">
                <h1 className=' text-4xl text-black font-bold leading-[54px] '>Core Design Skills</h1>
                        <div className="p_description h-12 w-[50.625rem]">
                        <p className="description text-light_black text-base font-normal">I excel in essential design skills, creating visually stunning and functional digital experiences. From UI design to UX research, my passion is to craft effective and memorable digital solutions.</p>
                        </div>
                </div>
                <div className="skill_container flex gap-[7.5rem] h-[11.5rem] ">
                    <div className="left w-[29.5rem] h-[11.5rem] flex flex-col gap-2 ">
                        <div className="skill01 flex flex-col h-14 gap-2 ">
                            <h5 className='font-bold leading-6 text-base text-black'>Interaction Design</h5>
                            <div className="bar h-6 gap-4 flex ">
                                <div className="frame w-[26.25rem] h-[0.313rem] mt-[0.6rem] flex">
                                  <div className='h-[0.313rem] w-[20.813rem] bg-black rounded-l-[0.385rem]'></div>
                                  <div className='h-[0.313rem] w-[5.438rem] border-black border-[1px] rounded-r-[0.385rem]'></div>
                                </div>
                                <p className='font-bold leading-6 text-base text-black'>60%</p>
                            </div>
                        </div>
                        <div className="skill02 flex flex-col h-14 gap-2 ">
                            <h5 className='font-bold leading-6 text-base text-black'>Usability Testing</h5>
                            <div className="bar h-6 gap-4 flex ">
                                <div className="frame w-[26.25rem] h-[0.313rem] mt-[0.6rem] flex">
                                  <div className='h-[0.313rem] w-[18.625rem] bg-black rounded-l-[0.385rem]'></div>
                                  <div className='h-[0.313rem] w-[7.688rem] border-black border-[1px] rounded-r-[0.385rem]'></div>
                                </div>
                                <p className='font-bold leading-6 text-base text-black'>70%</p>
                            </div>
                        </div>
                        <div className="skill03 flex flex-col h-14 gap-2 ">
                            <h5 className='font-bold leading-6 text-base text-black'>User Research</h5>
                            <div className="bar h-6 gap-4 flex ">
                                <div className="frame w-[26.25rem] h-[0.313rem] mt-[0.6rem] flex">
                                  <div className='h-[0.313rem] w-[12.813rem]  bg-black rounded-l-[0.385rem]'></div>
                                  <div className='h-[0.313rem] w-[14rem] border-black border-[1px] rounded-r-[0.385rem]'></div>
                                </div>
                                <p className='font-bold leading-6 text-base text-black'>45%</p>
                            </div>
                        </div>
                    </div>
                    <div className="left w-[29.5rem] h-[11.5rem] flex flex-col gap-2 ">
                        <div className="skill04 flex flex-col h-14 gap-2 ">
                            <h5 className='font-bold leading-6 text-base text-black'>Figma</h5>
                            <div className="bar h-6 gap-4 flex ">
                                <div className="frame w-[26.25rem] h-[0.313rem] mt-[0.6rem] flex">
                                  <div className='h-[0.313rem] w-[25.25rem] bg-black rounded-l-[0.385rem]'></div>
                                  <div className='h-[0.313rem] w-[1.125rem] border-black border-[1px] rounded-r-[0.385rem]'></div>
                                </div>
                                <p className='font-bold leading-6 text-base text-black'>95%</p>
                            </div>
                        </div>
                        <div className="skill05 flex flex-col h-14 gap-2 ">
                            <h5 className='font-bold leading-6 text-base text-black'>Prototyping</h5>
                            <div className="bar h-6 gap-4 flex ">
                                <div className="frame w-[26.25rem] h-[0.313rem] mt-[0.6rem] flex">
                                  <div className='h-[0.313rem] w-[23.625rem] bg-black rounded-l-[0.385rem]'></div>
                                  <div className='h-[0.313rem] w-[2.625rem] border-black border-[1px] rounded-r-[0.385rem]'></div>
                                </div>
                                <p className='font-bold leading-6 text-base text-black'>80%</p>
                            </div>
                        </div>
                        <div className="skill06 flex flex-col h-14 gap-2 ">
                            <h5 className='font-bold leading-6 text-base text-black'>Information Architecture</h5>
                            <div className="bar h-6 gap-4 flex ">
                                <div className="frame w-[26.25rem] h-[0.313rem] mt-[0.6rem] flex">
                                  <div className='h-[0.313rem] w-[50%] bg-black rounded-l-[0.385rem]'></div>
                                  <div className='h-[0.313rem] w-[50%] border-black border-[1px] rounded-r-[0.385rem]'></div>
                                </div>
                                <p className='font-bold leading-6 text-base text-black'>50%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Testimonials section */}
             <div className="testimonial_section  roboto pb-[5.625rem] justify-center items-center flex flex-col gap-[0.625rem] pl-[5.45rem] pr-[7.75rem]  h-[25.875rem] bg-red-200 ">
            <div className="testimonials_bg  rotate-180  rounded-t-[100px] h-[100px] w-[110px] bg-red-500">
            </div>
                <div className="testimonials_container w-[74.5rem] h-[16.25rem]  pl-[3rem] pt-[4rem] text-center  justify-center items-center flex flex-col gap-8">
                    <h2 className=' font-bold text-4xl leading-[3.375rem] text-black'>Testemonials</h2>
                    <div className="testimonial w-[74.5rem] h-[4.5rem] flex justify-between ">
                        <div className="arrow_right">
                        <div className="arrow_left">
                        <Image 
                            src="/images/left arrow.png"
                                width={18}
                                height={18}
                            alt="Picture of the author"
                        />
                        </div>
                        </div>
                        <div className="message w-[48rem] text-light_black h-[4.5rem]">
                            <p className='font-normal text-4 leading-6 '>Shakeela's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!</p>
                        </div>
                        <div className="arrow_left">
                        <Image 
                            src="/images/right arrow.png"
                                width={18}
                                height={18}
                            alt="Picture of the author"
                        />
                        </div>
                    </div>
                    <div className="client_imgOrInfo w-[23rem] h-[4.375rem] items-center flex gap-4">
                        <div className="clientImg h-[4.375rem] w-[4.375rem] overflow-hidden justify-center flex items-center border-2 border-light_pink rounded-[50%]">
                        <Image 
                            src="/images/client image.png"
                                width={100}
                                height={100}
                                objectFit='contain'
                            alt="Picture of the author"
                        />
                        </div>
                        <div className="clientInfo text-black leading-6 text-base font-bold">
                        Jhon Smith<span className='text-light_black font-normal'>/ CEO of XYZ Company</span>
                         </div>
                    </div>
                </div>

            </div>
             {/* Blog section */}
             <div id='blog' className="blog_section  roboto h-[48.259rem] flex justify-center overflow-hidden items-center  flex-col gap-[48px] pt-[5.625rem] pb-[5.625rem] pl-[7.75rem] pr-[7.75rem] bg-[#F7F7F7]">
                <div className="blog_heading w-[49.938rem] h-[7.375rem] flex flex-col justify-center items-center gap-4">
                    <h2 className='font-bold text-4xl leading-[3.375rem] text-black'>Design Insights and Inspiration</h2>
                    <p className='text-light_black text-center text-base font-normal'>Discover industry insights, expert tips, and design inspiration. Stay updated with the latest trends in web design and user experience.</p>
                </div>
                <div className="blog_content pl-3 w-[1192px] h-[26.634rem] flex justify-between">
                    <div className="contentCard01 w-[21rem] h-[26.634rem] flex flex-col gap-8 bg-white text-black">
                        <div className="blogImg w-[21rem] h-[12.634rem]">
                        <Image 
                            src="/images/d1.png"
                            width={500}
                            height={600}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                        </div>
                        <div className="blogContent h-[12rem] w-[21rem]  flex flex-col gap-4 pl-4 pr-4 pb-4">
                            <div className="blogContainer flex flex-col gap-2">
                                <h6 className='text-light_black font-normal text-xs leading-5'>August 15, 2023 / UX</h6>
                                <h3 className=' text-base font-bold leading-6 text-black'>Typography Tips for Design Success</h3>
                                <p className='text-light_black text-sm leading-5 font-normal'>Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs.</p>
                            </div>
                            <div className="blogCTALink w-[5.75rem] h-[1.125rem] flex justify-center items-center gap-2">
                                <div className="readMe h-[1.125rem] w-[4.25rem]">
                                    <p className=' font-bold leading-[18px] text-xs'>Read Me</p>
                                </div>
                                <div className="arrow w-4 mt-[0.29rem] h-4">
                                <Image 
                            src="/images/right arrow.png"
                            width={6}
                            height={6}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentCard02 w-[21rem] h-[26.634rem] flex flex-col gap-8 bg-white text-black">
                        <div className="blogImg w-[21rem] h-[12.634rem]">
                        <Image 
                            src="/images/d2.png"
                            width={500}
                            height={600}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                        </div>
                        <div className="blogContent h-[12rem] w-[21rem]  flex flex-col gap-[3.4rem] pl-4 pr-4 pb-4">
                            <div className="blogContainer flex flex-col gap-2">
                                <h6 className='text-light_black font-normal text-xs leading-5'>August 15, 2023 / UX</h6>
                                <h3 className=' text-base font-bold leading-6 text-black'>Color Psychology in UX</h3>
                                <p className='text-light_black text-sm leading-5 font-normal'>Explore how color choices impact user emotions and decision-making in UX design.</p>
                            </div>
                            <div className="blogCTALink w-[5.75rem] h-[1.125rem] flex justify-center items-center gap-2">
                                <div className="readMe h-[1.125rem] w-[4.25rem]">
                                    <p className=' font-bold leading-[18px] text-xs'>Read Me</p>
                                </div>
                                <div className="arrow w-4 mt-[0.29rem] h-4">
                                <Image 
                            src="/images/right arrow.png"
                            width={6}
                            height={6}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentCard03 w-[21rem] h-[26.634rem] flex flex-col gap-8 bg-white text-black">
                        <div className="blogImg w-[21rem] h-[12.634rem]">
                        <Image 
                            src="/images/d3.png"
                            width={500}
                            height={600}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                        </div>
                        <div className="blogContent h-[12rem] w-[21rem]  flex flex-col gap-12 pl-4 pr-4 pb-4">
                            <div className="blogContainer flex flex-col gap-2 ">
                                <h6 className='text-light_black font-normal text-xs leading-5'>August 15, 2023 / UX</h6>
                                <h3 className=' text-base font-bold leading-6 text-black'>Boosting UX with Microinteractions</h3>
                                <p className='text-light_black text-sm leading-5 font-normal'>Discover the power of microinteractions in enhancing user experience and engagement.</p>
                            </div>
                            <div className="blogCTALink w-[5.75rem] h-[1.125rem] flex justify-center items-center gap-2">
                                <div className="readMe h-[1.125rem] w-[4.25rem]">
                                    <p className=' font-bold leading-[18px] text-xs'>Read Me</p>
                                </div>
                                <div className="arrow w-4 mt-[0.29rem] h-4">
                                <Image 
                            src="/images/right arrow.png"
                            width={6}
                            height={6}
                            objectFit='contain'
                            alt="Picture of the author"
                            />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              {/* Contact section */}
              <div className="contact_section  roboto h-[44.688rem] overflow-hidden bg-red-200 flex gap-[3.65rem] p-[7.75rem]">
                 
                 <div className="contactInfo w-[34.75rem] h-[29.188rem] flex flex-col justify-between">
                     <div className="contactInfoContainer w-[34.75rem] h-[19.875rem] flex flex-col gap-16 ">
                   
                         <div className="contactHeading h-[7.375rem] w-[34.75rem] flex flex-col gap-4">
                             <h1 className=' text-black text-4xl font-bold leading-[54px]'>Get In Touch</h1>
                             <p className=' text-light_black font-normal text-base leading-6'>Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</p>
                         </div>
                         
                         <div className="contactInfo h-[8.5rem]  w-[34.75rem] flex flex-col gap-8">
                             <div className="frame01  h-6 flex gap-4">
                                 <div className="phone w-[50px] h-[50px] text-black  text-[25px]">
                                 <BiSolidPhoneCall />
                  </div>
                                 <p className=' text-base font-normal leading-6 text-light_black'>+1205 5872 321</p>
                             </div>
                             <div className="frame02 w-[291px] h-6 flex gap-4">
                                 <div className="email w-[50px] h-[50px] text-black  text-[25px]">
                                 <MdEmail />
                                 </div>
                                 <p className=' text-base font-normal leading-6 text-light_black'> contact@shakeelanazdesign.com</p>
                             </div>
                             <div className="frame03 w-[566px] h-6 flex gap-4">
                                 <div className="location w-[50px] h-[50px] text-black  text-[25px]">
                                 <FaLocationDot />
                                 </div>
                                 <p className=' text-base font-normal leading-6 text-light_black'>bani gala, street no 4, islamabad</p>
                             </div>
                         </div>
                     </div>
                     <div className="socialIcons h-[1.875rem] w-[12rem] flex gap-6">
                         <div className="icon w-[30px] h-[30px] rounded-full bg-white justify-center flex items-center text-black">
                         <FaTwitter />
                         </div>
                         <div className="icon w-[30px] h-[30px] rounded-full bg-white justify-center flex items-center text-black">
                         <FaInstagram />
                         </div>
                         <div className="icon w-[30px] h-[30px] rounded-full bg-white justify-center flex items-center text-black">
                         <FaDribbble />
                         </div>
                         <div className="icon w-[30px] h-[30px] rounded-full bg-white justify-center flex items-center text-black">
                         <FaFacebookF />
                         </div>
 
 
                     </div>
                 </div>
                 <div className="textFields  w-[34.75rem] h-[29.188rem] flex flex-col gap-8">
                     <div className="textField h-[24.188rem]  w-[34.75rem] flex flex-col gap-6">
                         <input className=' text-gray-700 w-[34.75rem] bg-white h-[49px] font-normal text-sm leading-[21px] pt-[14px] pb-[14px] pl-4 pr-4' placeholder='First Name' type="text" />
                         <input className=' text-gray-700 w-[34.75rem] bg-white h-[49px] font-normal text-sm leading-[21px] pt-[14px] pb-[14px] pl-4 pr-4' placeholder='Email' type="text" />
                         <input className=' text-gray-700 w-[34.75rem] bg-white h-[49px] font-normal text-sm leading-[21px] pt-[14px] pb-[14px] pl-4 pr-4' placeholder='Phone Number' type="text" />
                         <div className="messageInput flex justify-start items-start w-[34.75rem] bg-white h-[10.5rem] "><input className=' text-gray-700 font-normal w-[34.75rem] text-sm leading-[21px] pt-[14px] pb-[14px] pl-4 pr-4' placeholder='Your Message' type="text" /></div>
                     </div>
                     <div className="Button w-[233px] h-[48px] bg-black text-white font-bold text-base leading-6 gap-3 flex justify-center items-center pt-3 pb-3 pl-14 pr-14">
                         <p>Send Message</p>
                     </div>
                 </div>
                 
             </div>
             {/* Footer Section */}
             <div className="footer_section  roboto h-[22.466rem] py-[5rem] flex justify-center items-center bg-black px-[18.75rem]">
                 <div className="footerContainer w-[47.75rem] h-[12.466rem] flex items-center flex-col gap-16">
                     <div className="footerLinksContainer h-[3.375rem] w-[47.75rem] justify-center items-center flex gap-[120px]">
                         <div className="links flex gap-8 w-[185px] h-[30px] text-white font-bold leading-6 text-xl">
                             <a href="#about">About</a>
                             <a href="#Services">Services</a>
                         </div>
                         <div className="logo w-[162px] h-[54px] flex gap-1 font-semibold text-4xl leading-[54px] text-white">
                             <p>S<span className='text-red-600'>J</span></p>
                             <p className='text-red-600'>Design</p>
                         </div>
                         <div className="links flex gap-8 w-[185px] h-[30px] text-white font-bold leading-6 text-xl">
                             <a href="#Portfolio">Portfolio</a>
                             <a href="#blog">Blog</a>
                         </div>
                     </div>
                     <div className="footerTextSocialMedia w-[13.5rem] h-[5.091rem] items-center flex flex-col gap-8">
                         <p className=' text-gray-400 font-normal text-base leading-6'>Follow me on social media.</p>
                         <div className="socialLinks text-white flex gap-8 w-[11.17rem] h-[1.591rem] font-normal text-2xl">
                             <FaInstagram />
                             <FaTwitter />
                             <FaDribbble />
                             <FaFacebookF />
                         </div>
                     </div>
                 </div>
             </div>
        </>
  )
}

export default page