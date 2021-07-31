import React, { useEffect, useState } from 'react'
import sanityClient from '../client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}

const About = () => {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, [])

    if (!author) return <div>Loading...</div>
    return (
        <main className="bg-gray-100 min-h-screen">
            
            <div className="p-5 lg:pt-48 container mx-auto pb-20">
                <section className="bg-gray-700 rounded-lg shadow-2xl lg:flex p-5">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 mb-6 sm:mb-0" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-gray-400 mb-4">
                            Hi. I'm{" "}
                            <span className="text-gray-400">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={author.bio} projectId="12ntefkc" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
