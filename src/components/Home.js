import React from 'react'
import image from '../../src/guatemala.jpg'

const Home = () => {
    return (
        <main>
            <img src={image} alt="" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 sm:p-10">
                <h1 className="text-6xl text-gray-100 font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Carson</h1>
                
            </section>
        </main>
    )
}

export default Home
