import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ankit from '../assets/ankit.jpg'
import Aboutbanner from '../components/Aboutbanner';



const About = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-emerald-100">
            <div className="">
                {/* Updated Header with shadow and background */}
                <Header className="shadow-lg bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white backdrop-blur-md" />
                <Aboutbanner />
                <div className="w-full mt-4 flex bg-transparent">
                    <div className="mt-2 mb-2 w-90 ml-36 h-85 ">
                        <img src="https://plus.unsplash.com/premium_photo-1681487924146-c091598b7e8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="ml-2 w-100 h-100 rounded-xl shadow-md" />
                    </div>
                    <div className="w-full lg:w-[60%] h-auto mt-4 lg:mt-2 lg:ml-12 bg-white/80 rounded-2xl shadow-xl p-8 border border-emerald-100 transition-transform hover:scale-[1.02] hover:shadow-2xl">
                        <div>
                            <h1 className="text-3xl font-extrabold text-center lg:text-left ml-0 lg:ml-20 text-emerald-700 tracking-wide drop-shadow">ABOUT COMPANY</h1>
                            <p className="mt-4 ml-0 lg:ml-2 text-[17px] text-justify text-gray-700 leading-relaxed">
                                Welcome to <span className="font-bold text-emerald-600">TravelSite</span>, your trusted travel companion!<br/>
                                We specialize in crafting unforgettable travel experiences tailored to your dreams.<br/>
                                Whether it's serene beaches, bustling cities, or adventurous mountain getaways, we bring your travel vision to life with seamless planning and personalized service.<br/>
                                With a network of global partners, affordable packages, and 24/7 customer support, TravelSite ensures every journey is stress-free and memorable.<br/>
                                Our mission is to inspire and enable people to explore the world with ease and joy.<br/>
                                Discover new destinations, create lasting memories, and travel smarter with TravelSite – where your adventure begins.<br/>
                                <span className="font-semibold text-emerald-500">Let’s go places, together!</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl font-bold underline text-emerald-700">ABOUT THE DEVELOPER</h1>
                    </div>
                    <div className="flex justify-center mt-6">
                        <div className="flex flex-col items-center border-2 border-emerald-200 p-6 shadow-lg bg-white/90 rounded-xl">
                            <img src={ankit} className="w-24 h-24 object-cover rounded-full border-4 border-emerald-300 shadow" alt="Ankit Vishwakarma" />
                            <span className="mt-2 font-semibold text-emerald-600 text-lg">Ankit Vishwakarma</span>
                            <p className="mt-2 text-center text-gray-700 text-[15px]">Founder & Developer of TravelSite. Dedicated to creating innovative travel solutions and making global exploration accessible for everyone.</p>
                        </div>
                    </div>
                </div>
                {/* Updated Footer with background and shadow */}
                <Footer className="mt-8 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 text-white shadow-inner backdrop-blur-md" />
            </div>
        </div>
    )
}

export default About