import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AUTH_LINK } from '@src/libs/enum/link';

const HomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate(AUTH_LINK.LOGIN, {
            replace: true,
        });
    }, []);

    return (
        <></>
    );
};

export default HomePage;