import React,{useEffect} from "react";
import './main.css';
import img from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';

import Aos from "aos";
import 'aos/dist/aos.css';

import { TfiLocationPin } from "react-icons/tfi";
import { LuClipboardCheck } from "react-icons/lu";



const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'World Heritage Site',
        fees: '$600',
        description: 'Bali is the most popular Indonesian island known for its natural settings, scenic beaches, traditional culture, rich history, creativity, art and crafts, and the genuine warmth of the local people.'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Pichu',
        location: 'Peru',
        grade: 'Seven Wonders',
        fees: '$700',
        description: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru. he Historic Sanctuary of Machu Picchu is among the greatest artistic, architectural and land use achievements anywhere.'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Queensland',
        grade: 'World Heritage Site',
        fees: '$1200',
        description: 'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the worlds largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Cappadoica',
        location: 'Turkey',
        grade: 'World Heritage Site',
        fees: '$280',
        description: 'Cappadocia is a region spreading an area covering the provinces particularly to Nevsehir, Kirsehir, Nigde, Aksaray and Kayseri. The region of Cappadocia is a place where nature and history integrates.'
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Great Wall of China',
        location: 'China',
        grade: 'Seven Wonders',
        fees: '$350',
        description: 'Its main body consists of walls, horse tracks, watch towers, and shelters on the wall, and includes fortresses and passes along the Wall. The Great Wall reflects collision and exchanges between agricultural civilizations'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Forest',
        location: 'India',
        grade: 'World Heritage Site',
        fees: '$200',
        description: 'Its main body consists of walls, horse tracks, watch towers, and shelters on the wall, and includes fortresses and passes along the Wall. The Great Wall reflects collision and exchanges between agricultural civilizations'
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'World Heritage Site',
        fees: '$360',
        description: 'Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. It is said to be the largest religious monument in the world.'
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'Seven Wonders',
        fees: '$200',
        description: 'Taj Mahal is a UNESCO World Heritage Site and attracts millions of visitors from around the globe each year. It was commissioned in 1632 by the Mughal emperor, Shah Jahan.'
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Gangotri-Yamunotri',
        location: 'World Heritage Site',
        grade: 'Seven Wonders',
        fees: '$880',
        description: 'Gangotri is one of the four sites in the Chota Char Dham pilgrimage circuit. It is also the origin of the Ganges river and seat of the goddess Ganga. The river is called Bhagirathi at the source and acquires the name Ganga.'
    }
];


const Main = () => {
    //adding a hook to create a scrollable animation
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);


    return(
        <section className="main container section">

            <div className="secTitle">
                <h2 data-aos="fade-right" className="title">
                    Most visited destinations
                </h2>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return (
                            <div data-aos="fade-up" key={id} className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">

                                    <h4 className="destTitle">{destTitle}</h4>

                                    <span className="continent flex">
                                        <TfiLocationPin className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade} &nbsp; <small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS<LuClipboardCheck className="icon" />
                                    </button>
                                </div>

                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}



export default Main;