import React from 'react';
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Events from '../../Events/Events';

const Home = () => {
    return (
        <>
            <PageTitle title={'Home'}></PageTitle>
            <Events></Events>
        </>
    );
};

export default Home;