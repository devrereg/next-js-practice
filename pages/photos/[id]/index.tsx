import React from "react";
import Image from "next/image";
import Link from "next/link";

const Index = ({photo}) => {

    const  {title, url} = photo;

    return (
        <div>
            <h2>{title}</h2>
            <Image src={url} alt={title} width={500} height={500}/>
            <Link href={'/photos'}>
                go back
            </Link>
        </div>
    )
}


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
    const photos = await res.json()

    const paths = photos.map((photo) => ({
        params: { id: photo.id.toString() },
    }))

    return { paths, fallback: false }
}


export const getStaticProps = async (context) => {

    const {id} = context.params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photo = await res.json();
    return {
        props: {
            photo
        }
    }
}


export default Index;