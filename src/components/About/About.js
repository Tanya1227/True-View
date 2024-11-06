import "./About.css"; 
import ContributorSection from './ContributorSection';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import tick from './tick.png';
import archery from './archery.png';
import gun from './rightimg3.png'
import img1 from './prob1.jpg'
import img2 from './prob2.jpg'
import res1 from './resource1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".fromtop-anim, .fade-effect, .aboutrightsec, .left-img-effect, .right-img-effect");

        const observer = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    const [showScrollUpButton, setShowScrollUpButton] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const showButtonThreshold = 200;

            // Show the scroll-up button when the user scrolls down
            setShowScrollUpButton(scrollY > showButtonThreshold);
        };

        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Remove event listener when the component is unmounted
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="about-banner">
                <div className="about-banner-front">
                    <div className="aboutleft">
                        <div className="aboutleftsec fromtop-anim">
                       Shop Smarter ,
                        <span className="aboutleftsec2 fromtop-anim blueText"> Shop in AR</span>
                            </div> 

                        


                        <p className="abouleftseccont fade-effect">
                            TrueView is a cutting-edge AR shopping platform that allows you to visualize products in your space before making a purchase.
                        </p> 
                       
                        <a href="#list-view">
    <button className="view-product-button">View Product</button>
</a>
                    </div>
                    <img src={gun} className="aboutrightsec" />
                </div> 
            </div>

            {showScrollUpButton && (
                <button className='scroll-up-button' onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            )}
        </>
    );
};

export default About;
