import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import RightAside from '../HomeLayout/RightAside';
import NewsDetailsCard from '../NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const { id } = useParams();
    const allNews = useLoaderData();

    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = allNews.find(news => news.id === id);
        setNews(newsDetails);
    }, [allNews, id]);

    // console.log(news)

    return (
        <div className='container mx-auto'>
            <header className='my-20'>
                <Header></Header>
                <div className='my-8'>

                    <Navbar></Navbar>
                </div>
            </header>
            <main className='grid grid-cols-12 gap-8'>
                <section className='col-span-9'>
                    <h2 className='text-xl font-semibold mb-5'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;