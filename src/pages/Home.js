
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        }
        catch (error) {
            console.log("Error occur");
            setPosts([])
        }

        setLoading(false)
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div>
            {
                loading ? (<div className='w-screen h-screen flex items-center justify-center'>
                    <Spinner></Spinner>
                </div>) :
                    posts.length > 0 ?
                        (<div className='w-full'>
                            <div className='w-11/12 max-w-[1200px] mx-auto py-[5rem] flex flex-wrap gap-x-10 gap-y-5'>
                                {
                                    posts.map((post) => (
                                        <Product key={post.id} post={post}></Product>
                                    ))
                                }
                            </div>

                        </div>) :
                        (<div>
                            <p>No post available</p>
                        </div>)

            }
        </div>
    )
}

export default Home