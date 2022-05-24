import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Cover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    display: none;
`;

const Shop = styled.div`
    width: 100%;
    margin-bottom: 100px;
    position: relative;
    opacity: ${props => props.opacity || '0.1'};
    transition: 1s;
    img {
        width: 100%;
        height: auto;
    }
    /* &:hover ${Cover} {
        display: block;
    } */
`;


function Content({item}) {

    const [isShow, setIsShow] = useState(false);
    const targetRef = useRef();

    const onScroll = ([entry]) => {
        setIsShow(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onScroll, {
            rootMargin: '0px',
            threshold: 0.5
        });

        if(targetRef.current) observer.observe(targetRef.current);

        return () => {
            if(targetRef.current) observer.unobserve(targetRef.current);
        }
    }, []);

    return ( 
        <Shop key={item.id} ref={targetRef} opacity={isShow ? '1' : '0.1'}>
            <img src={item.url} alt={item.name} />
            <Cover />
        </Shop>
     );
}

export default Content;