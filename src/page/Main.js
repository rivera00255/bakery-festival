import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Content from '../components/Content';

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

const Title = styled.h2`
    text-align: center;
    margin: 100px 0 20px 0;
    font-weight: 700;
    font-size: 1.2rem;
`;

const List = styled.div`
    width: 720px;
    margin: 0 auto;
`;

function Main() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://rivera00255.github.io/bakery-festival/data/data.json')
        .then(res => {
            setList(res.data)
        }).catch(err => console.log(err));
    }, []);

    return ( 
        <Container>
            <Wrapper>
                <Image src='https://lh3.googleusercontent.com/ewMP0Lnb37tCYUiUSOQyfzkUhTPypPpvZr2Ly3GB2mUn2jMe3ZOxcj66_dj7DcUOnJ3O2q9_m2Raw7-mxPcrv2mGh58fHp0-5WTdxe90pDZiZMEV6d3uMw=w1920-h1280-n' alt='main banner' />
            </Wrapper>
            <Wrapper>
                <Title>빵집 라인업</Title>
                <List>
                    {
                        list.map(item => (
                            <Content item={item} />
                        ))
                    }
                </List>
            </Wrapper>
        </Container>
     );
}

export default Main;