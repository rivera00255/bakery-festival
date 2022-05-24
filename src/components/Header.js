import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
    width: 100%;
    border-bottom: 1px solid #cfcfcf;
`;

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

const LocalNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Logo = styled.h1`
    width: 80px;
    margin: 10px;
    img {
        width: 100%;
        height: auto;
    }
`;

const GlobalNav = styled.nav`
    width: 100%;
    margin-bottom: 24px;
    ul {
        display: flex;
        justify-content: space-around;
    }
    li {
        cursor: pointer;
    }
`;

function Header() {
    return ( 
        <MainHeader>
            <Container>
                <LocalNav>
                    <Logo>
                        <img src='https://lh3.googleusercontent.com/eG4Qj2PBwR8oNY5jNt9G55cglnuARY1WSKXAOWcGcWdJedNc6fJKCHXSu7CUJ0ptS0spP1lQjYifvqc1g-4kYWZFqyJA3lN5oTnGs_9EibS6Y-3TELJVxw' alt='logo' />
                    </Logo>
                </LocalNav>
                <GlobalNav>
                    <ul>
                        <li>공지사항</li>
                        <li>빵집목록</li>
                        <li>프로그램</li>
                        <li>히스토리</li>
                    </ul>
                </GlobalNav>
            </Container>
        </MainHeader>
     );
}

export default Header;