import {Inter} from 'next/font/google'
import {setMaxIdleHTTPParsers} from "http";

// const inter = Inter({ subsets: ['latin'] })


export default function Home({posts}) {

    console.log(posts)

    return (
        <div>
            <h1>Welcome to my blog</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

        </div>
    )
}


// SSR
// export const getServerSideProps = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
//     const posts = await res.json();
//
//
//     return {
//         props: {
//             posts
//         }
//     }
// }

// SSG
export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`);
    const posts = await res.json();


    return {
        props: {
            posts
        },
        revalidate: 20
    }
}



