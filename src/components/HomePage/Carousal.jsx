import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import {CarousalU} from"./CarousalUI"
import { slider0, slider1, slider2 } from "./CarousalData";

export const CarousalUI = () => {
    const [offers, setOffers] = useState(0)
    const width  = 1024
    const properties = {
        duration: 20000,
        transitionDuration: 500,
        canSwipe: false,
        autoPlay: false,
        slidesToShow: width < 1024 ? 1 : 2,
        slidesToScroll: width < 1024 ? 1 : 2,
        prevArrow: <div className='absolute flex justify-center items-center right-72 top-30 w-30 h-30 rounded-tr-lg rounded-br-lg bg-white shadow-md ml-[1288px]  mt-[-500px]'>
            <NavigateBefore style={{ color: '#008cff', fontSize: 30 }} />
        </div>,
        nextArrow: <div className='absolute flex justify-center items-center right-40 top-30 w-30 h-30 rounded-tr-lg rounded-br-lg bg-white shadow-md ml-[1200px]  mt-[-500px]'>
            <NavigateNext style={{ color: '#008cff', fontSize: 30 }} />
        </div>
    }

  return (
    <CarousalU>
    <div className='homeContainer bg-white m-10 rounded-lg'>
            <div className='sliderContainer'>
                <div className='sliderTitle'>
                    <h2>Offers</h2>
                    <div className='sliderLinks mt-6'>
                        <p
                            className="indLinks"
                            style={{ borderBottom: offers === 0 ? "3px solid #008cff" : "" }}
                            onClick={() => setOffers(0)}
                        >ALL OFFERS</p>
                        <p
                            className="indLinks"
                            onClick={() => setOffers(1)}
                            style={{ borderBottom: offers === 1 ? "3px solid #008cff" : "" }}
                        >FLIGHTS</p>
                        <p
                            className="indLinks"
                            onClick={() => setOffers(2)}
                            style={{ borderBottom: offers === 2 ? "3px solid #008cff" : "" }}
                        >HOTELS</p>
                    </div>
                </div>
                {offers === 0 ?
                    <Slide {...properties} >
                        {
                            slider0.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className="each-slide ">
                                            <div className='ind-slide'>
                                                <div className='imageSection'>
                                                    <img src={item.first.thumbnail_image} alt="" />
                                                    <p>T&C's Apply</p>
                                                </div>
                                                <div className='contentSection'>
                                                    <div>
                                                        <p className="offerCardTitle">{item.first.title}</p>
                                                        <p className="offerCardSubTitle">{item.first.subTitle}</p>
                                                        <div className="divider" />
                                                        <p className="offerCardOffers">{item.first.offer}</p>
                                                    </div>
                                                    <div className='knowMore'>
                                                        <p>KNOW MORE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='each-slide'>
                                            <div className='ind-slide'>
                                                <div className='imageSection'>
                                                    <img src={item.second.thumbnail_image} alt="" />
                                                    <p>T&C's Apply</p>
                                                </div>
                                                <div className='contentSection'>
                                                    <div>
                                                        <p className="offerCardTitle">{item.second.title}</p>
                                                        <p className="offerCardSubTitle">{item.second.subTitle}</p>
                                                        <div className="divider" />
                                                        <p className="offerCardOffers">{item.second.offer}</p>
                                                    </div>
                                                    <div className='knowMore'>
                                                        <p>KNOW MORE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slide>
                    : offers === 1 ?
                        <Slide {...properties}>
                            {
                                slider1.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <div className="each-slide">
                                                <div className='ind-slide'>
                                                    <div className='imageSection'>
                                                        <img src={item.first.thumbnail_image} alt="" />
                                                        <p>T&C's Apply</p>
                                                    </div>
                                                    <div className='contentSection'>
                                                        <div>
                                                            <p className="offerCardTitle">{item.first.title}</p>
                                                            <p className="offerCardSubTitle">{item.first.subTitle}</p>
                                                            <div className="divider" />
                                                            <p className="offerCardOffers">{item.first.offer}</p>
                                                        </div>
                                                        <div className='knowMore'>
                                                            <p>KNOW MORE</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='each-slide'>
                                                <div className='ind-slide'>
                                                    <div className='imageSection'>
                                                        <img src={item.second.thumbnail_image} alt="" />
                                                        <p>T&C's Apply</p>
                                                    </div>
                                                    <div className='contentSection'>
                                                        <div>
                                                            <p className="offerCardTitle">{item.second.title}</p>
                                                            <p className="offerCardSubTitle">{item.second.subTitle}</p>
                                                            <div className="divider" />
                                                            <p className="offerCardOffers">{item.second.offer}</p>
                                                        </div>
                                                        <div className='knowMore'>
                                                            <p>KNOW MORE</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slide>
                        : offers === 2 &&
                        <Slide {...properties}>
                            {
                                slider2.map((item) => {
                                    return (
                                        <div key={item.id}>
                                            <div className="each-slide">
                                                <div className='ind-slide'>
                                                    <div className='imageSection'>
                                                        <img src={item.first.thumbnail_image} alt="" />
                                                        <p>T&C's Apply</p>
                                                    </div>
                                                    <div className='contentSection'>
                                                        <div>
                                                            <p className="offerCardTitle">{item.first.title}</p>
                                                            <p className="offerCardSubTitle">{item.first.subTitle}</p>
                                                            <div className="divider" />
                                                            <p className="offerCardOffers">{item.first.offer}</p>
                                                        </div>
                                                        <div className='knowMore'>
                                                            <p>KNOW MORE</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='each-slide'>
                                                <div className='ind-slide'>
                                                    <div className='imageSection'>
                                                        <img src={item.second.thumbnail_image} alt="" />
                                                        <p>T&C's Apply</p>
                                                    </div>
                                                    <div className='contentSection'>
                                                        <div>
                                                            <p className="offerCardTitle">{item.second.title}</p>
                                                            <p className="offerCardSubTitle">{item.second.subTitle}</p>
                                                            <div className="divider" />
                                                            <p className="offerCardOffers">{item.second.offer}</p>
                                                        </div>
                                                        <div className='knowMore'>
                                                            <p>KNOW MORE</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slide>
                }
            </div>
        </div>
    </CarousalU>
  );
};
