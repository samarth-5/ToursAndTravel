import React,{useEffect} from "react";
import './footer.css';
import vid2 from '../../Assets/vid2.mp4';
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";

import Aos from "aos";
import 'aos/dist/aos.css';



const Footer = () => {
    //adding a hook to create a scrollable animation
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);


    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={vid2} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel With Us...</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" data-aos="fade-up" placeholder="Enter E-Mail address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND<FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" />Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                            eveniet architecto consequatur cum quis eaque, quos ex laboriosam. 
                            Sint eius excepturi hic aut quas blanditiis nihil corrupti porro numquam alias!
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                            <FaLinkedin className="icon" />
                            <FaGithub className="icon" />
                            <RiInstagramFill className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">

                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rent Cars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Hostel World
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trip Advisor
                            </li>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Oceania
                            </li>
                        </div>

                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>Made with <FaHeart /> by Samarth</small>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Footer;