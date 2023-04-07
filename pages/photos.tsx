import React from "react";
import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import PhotoStyles from "../styles/Photos.module.css";
import Link from "next/link";

const photos = ({photos}) => {
    return (
        <div>
            <HeadInfo title="my blog photos" description="asdsaddsf" keyword="asdfasdfasdf"></HeadInfo>
            <h1>Photos</h1>


            <ul className={PhotoStyles.photos}>
                {photos.map((photo) => (
                        <li key={photo.id}>
                            <Link href={`/photos/${photo.id}`}>
                                <Image src={photo.thumbnailUrl} alt={photo.title} width={100} height={100}/>
                                <span>{photo.title}</span>
                            </Link>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
    const photos = await res.json();

    return {
        props : {
            photos
        }
    }
}


export default photos;