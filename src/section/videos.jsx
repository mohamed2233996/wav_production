import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleUp, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import Slider from 'react-slick';
import { getVideosOrder } from '../actions/getVideosOrder';
import { getTop4 } from '../actions/getTop4';
import OrderVideoModal from '../Pages/OrderVideo/OrderVideoModal';
import { Link } from 'react-router-dom';
import JoinUsVideoModal from '../Components/joinUsVideoModal';

const Videos = () => {
    // const [videosOrder, setVideosOrder] = useState([]);
    // const [top4, setTop4] = useState([]);
    const [orderInfo, setOrderInfo] = useState();
    const [openModel, setOpenModel] = useState(false);
    const [openPopUp, setOpenPopUp] = useState(null);
    const [openJoin, setOpenJoin] = useState(false);


    const settings = {
        dots: false,
        arrows: true,
        nextArrow:
            <div>
                <FaChevronRight />
            </div>
        ,
        prevArrow:
            <div>
                <FaChevronLeft />
            </div>
        ,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
    };

    const StarsCateg = [
        {
            id: 1,
            name: 'Actors',
            imgScr: "https://i.imgur.com/6Q6Zz4B.jpg",
            link: "Actors"
        },
        {
            id: 2,
            name: 'Musicians',
            imgScr: "https://i.imgur.com/c858xO1.jpg",
            link: "Musicians"
        },
        {
            id: 3,
            name: 'Content creators',
            imgScr: "https://i.imgur.com/g7Y40lO.jpg",
            link: "Content"
        },
        {
            id: 4,
            name: 'youtubers ',
            imgScr: "https://i.imgur.com/F8o1Z5o.jpg",
            link: "Youtubers"

        },
        {
            id: 5,
            name: 'Athletes',
            imgScr: "https://i.imgur.com/e6aYd0R.jpg",
            link: "Athletes"
        },
    ]

    const videosOrder = [
        {
            id: 1,
            name: 'Star 1',
            imgScr: "https://i.imgur.com/6Q6Zz4B.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.8,
            prise: 550
        },
        {
            id: 2,
            name: 'Star 2',
            imgScr: "https://i.imgur.com/c858xO1.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.7,
            prise: 650
        },
        {
            id: 3,
            name: 'Star 3',
            imgScr: "https://i.imgur.com/g7Y40lO.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.9,
            prise: 750
        },
        {
            id: 4,
            name: 'Star 4',
            imgScr: "https://i.imgur.com/F8o1Z5o.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.5,
            prise: 850
        },
        {
            id: 5,
            name: 'Star 5',
            imgScr: "https://i.imgur.com/e6aYd0R.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.6,
            prise: 950
        },
        {
            id: 6,
            name: 'Star 6',
            imgScr: "https://i.imgur.com/6Q6Zz4B.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.8,
            prise: 1050
        },
        {
            id: 7,
            name: 'Star 7',
            imgScr: "https://i.imgur.com/c858xO1.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.7,
            prise: 1150
        },
        {
            id: 8,
            name: 'Star 8',
            imgScr: "https://i.imgur.com/g7Y40lO.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.9,
            prise: 1250
        },
        {
            id: 9,
            name: 'Star 9',
            imgScr: "https://i.imgur.com/F8o1Z5o.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.5,
            prise: 1350
        },
        {
            id: 10,
            name: 'Star 10',
            imgScr: "https://i.imgur.com/e6aYd0R.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.6,
            prise: 1450
        }
    ]

    const top4 = [
        {
            id: 1,
            name: 'Star 1',
            imgScr: "https://i.imgur.com/6Q6Zz4B.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.8,
            prise: 550,
            priseDis: 400,
        },
        {
            id: 2,
            name: 'Star 2',
            imgScr: "https://i.imgur.com/c858xO1.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.7,
            prise: 650,
            priseDis: 500,
        },
        {
            id: 3,
            name: 'Star 3',
            imgScr: "https://i.imgur.com/g7Y40lO.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.9,
            prise: 750,
            priseDis: 600,
        },
        {
            id: 4,
            name: 'Star 4',
            imgScr: "https://i.imgur.com/F8o1Z5o.jpg",
            link: "",
            category: "Tiktoker",
            rate: 4.5,
            prise: 850,
            priseDis: 700,
        }

    ]

    // useEffect(() => {
    //     const Top4 = getTop4()
    //     setTop4(Top4)
    // }, []);

    // useEffect(() => {
    //     const StarsCateg = getVideosOrder()
    //     setVideosOrder(StarsCateg)
    // }, []);

    const handleVideoClick = (order) => {
        setOrderInfo(order)
        setOpenModel(true)
    }


    return (
        <div className={`pt-20 pb-40 bg-cover bg-[#30B7971A]`}>
            <div className="container m-auto">
                <div className="flex flex-col">
                    <h1 className='text-center text-5xl font-bold text-black mb-12'>Personalized videos from your favorite stars</h1>
                    <div className='flex flex-row justify-center' >
                        <Link to="/OrderVideo/All" className="flex flex-row items-center text-2xl gap-4 px-10 py-4 rounded-full font-bold bg-white text-black hover:bg-[#30B797] hover:text-white transition">
                            Order now
                            <FaChevronRight />
                        </Link>
                    </div>
                    <div className="flex justify-around items-center gap-8 flex-wrap mt-16">
                        {
                            StarsCateg.map((i, index) => {
                                return (
                                    <div key={index} className='flex flex-col items-center'>
                                        <img className='w-48 h-48 rounded-full' src={i.imgScr} />
                                        <Link to={
                                            `/OrderVideo/${i.link}`
                                        } className='text-black font-bold my-2 text-2xl underline text-center'>{i.name}</Link>
                                    </div>
                                )
                            }
                            )
                        }
                        <div className='flex flex-col items-center' onClick={() => {
                            setOpenJoin(true)
                        }}>
                            <div className='w-48 h-48 rounded-full hover:bg-[#30B797] transition bg-[#484848] text-white flex items-center justify-center text-8xl'>
                                <FiPlus />
                            </div>
                            <button
                                className='text-black font-bold my-2 text-2xl underline text-center'
                            >join us</button>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='slider-container relative mt-16'>
                        <h2 className='text-start text-3xl font-bold mb-12'>VIP</h2>
                        <Slider {...settings}>
                            {
                                videosOrder?.map((i, index) => {
                                    return (
                                        <div
                                            key={index} className='m-auto mb-28'>
                                            <Link
                                                to={
                                                    `Stars/${i.name}`
                                                }>
                                                <img className='w-56 h-60 rounded-lg' src={i.imgScr} /></Link>
                                            <div className='order-text'>
                                                <Link
                                                    to={
                                                        `Stars/${i.name}`
                                                    } className='text-start text-2xl font-bold'>{i.name}</Link>
                                                <p className='text-start text-lg'>{i.category}/Singer</p>
                                                <div className="rate flex flex-row gap-1 items-center">
                                                    <span>{i.rate}</span>
                                                    <FaStar className="text-yellow-500" />
                                                </div>
                                                <div className='relative mt-3'
                                                    onMouseEnter={() => setOpenPopUp(openPopUp === i.id ? null : i.id)}
                                                    onMouseLeave={() => setOpenPopUp(null)}
                                                >
                                                    <button
                                                        className={`${openPopUp === i.id ? 'text-[#30B797] bg-white' : "text-white"} w-full justify-center bg-[#30B797]  font-bold p-2 rounded-full border border-[#30B797] hover:text-[#30B797] hover:bg-white transition-all flex flex-row items-center gap-2 text-lg`}>
                                                        Order Now
                                                        {openPopUp === i.id ?
                                                            <FaAngleUp /> :
                                                            <FaAngleRight />}
                                                    </button>
                                                    {openPopUp === i.id ?
                                                        <div className='rounded-sm bg-white shadow-sm absolute top-10 right-0 w-max'>
                                                            <button
                                                                onClick={() => {
                                                                    handleVideoClick({
                                                                        artistName: i.name,
                                                                        videoType: "Personal"
                                                                    }
                                                                    )
                                                                }}
                                                                className='order-popupBtn flex flex-row gap-2 items-center py-4 font-bold px-2 text-lg hover:bg-[#4D39CF] hover:text-white'>
                                                                Personal video
                                                                <span className='text-[#30B797]'>60 EGP</span>
                                                                <span className='text-[#4D39CF]'><FaAngleRight /></span>
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    handleVideoClick({
                                                                        artistName: i.name,
                                                                        videoType: "Business"
                                                                    })
                                                                }}
                                                                className='order-popupBtn flex flex-row gap-2 items-center py-4 font-bold px-2 text-lg hover:bg-[#4D39CF] hover:text-white'>
                                                                Business Work
                                                                <span className='text-[#30B797]'>40 EGP</span>
                                                                <span className='text-[#4D39CF]'><FaAngleRight /></span>
                                                            </button>
                                                        </div> :
                                                        ""}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div data-aos="zoom-in">
                        <h2 className='text-start text-3xl font-bold mb-12'>Top 4</h2>
                        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
                            {
                                top4?.map((i, index) => {
                                    return (
                                        <div key={index} className='rounded-xl border border-[#B5B5C3]'>
                                            <div className="p-3 border-b border-[#B5B5C3]">
                                                <Link
                                                    to={
                                                        `Stars/${i.name}`
                                                    }><img className='w-full rounded-xl' src={i.imgScr} /></Link>
                                                <div className='order-text'>
                                                    <div className="flex justify-center my-2">
                                                        <span className='px-4 py-1 text-black font-bold bg-[#EFEFF2] w-full text-center'>{i.category}</span>
                                                        {/* <div className="prise flex flex-row items-center gap-2">
                                                            <p className='font-bold line-through'>$ {i.prise}</p>
                                                            <p className='text-lg font-bold text-[#5751E1]'>$ {i.priseDis}</p>
                                                        </div> */}
                                                    </div>
                                                    <div className="flex justify-between my-2">
                                                        <Link
                                                            to={
                                                                `Stars/${i.name}`
                                                            } className='text-start text-2xl font-bold'>{i.name}</Link>
                                                        <div className="rate flex flex-row gap-1 items-center">
                                                            <FaStar className="text-yellow-500" />
                                                            <span>{`(${i.rate} Reviews)`}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='relative'
                                                onMouseEnter={() => setOpenPopUp(openPopUp === i.name ? null : i.name)}
                                                onMouseLeave={() => setOpenPopUp(null)}
                                            >
                                                <button
                                                    className={`${openPopUp === i.name ? 'text-[#30B797] bg-white' : "text-white"} w-full justify-center bg-[#30B797]  font-bold p-2 rounded-b-xl hover:text-[#30B797] hover:bg-white transition-all flex flex-row items-center gap-2 text-lg`}>
                                                    Order Now
                                                    {openPopUp === i.name ?
                                                        <FaAngleUp /> :
                                                        <FaAngleRight />}
                                                </button>
                                                {openPopUp === i.name ?
                                                    <div className='rounded-sm bg-white shadow-sm absolute top-10 right-0 w-max'>
                                                        <button
                                                            onClick={() => {
                                                                handleVideoClick({
                                                                    artistName: i.name,
                                                                    videoType: "Personal"
                                                                }
                                                                )
                                                            }}
                                                            className='order-popupBtn flex flex-row gap-2 items-center py-4 font-bold px-2 text-lg hover:bg-[#4D39CF] hover:text-white'>
                                                            Personal video
                                                            <span className='text-[#30B797]'>60 EGP</span>
                                                            <span className='text-[#4D39CF]'><FaAngleRight /></span>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                handleVideoClick({
                                                                    artistName: i.name,
                                                                    videoType: "Business"
                                                                })
                                                            }}
                                                            className='order-popupBtn flex flex-row gap-2 items-center py-4 font-bold px-2 text-lg hover:bg-[#4D39CF] hover:text-white'>
                                                            Business Work
                                                            <span className='text-[#30B797]'>40 EGP</span>
                                                            <span className='text-[#4D39CF]'><FaAngleRight /></span>
                                                        </button>
                                                    </div> :
                                                    ""}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {
                    openModel && (
                        <OrderVideoModal
                            handleClose={() => setOpenModel(false)}
                            orderInfo={orderInfo}
                        />
                    )
                }
                {
                    openJoin && (
                        <JoinUsVideoModal
                            handleClose={() => setOpenJoin(false)}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Videos;
