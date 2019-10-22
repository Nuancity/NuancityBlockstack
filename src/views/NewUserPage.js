import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchTab from '../components/SearchTab';
import { Person } from 'blockstack';
  
// import { Breadcrumbs } from '@material-ui/core';
// import { styled  as muiStyle } from '@material-ui/styles';
// import { Button, Paper } from '@material-ui/core';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

const Wrapper = styled.div`{
    display: flex;
    align-items: flex-emd;
    padding-bottom: 5%
}`

const Left = styled.div`
    display: flex;
    width: 48vw;
    margin-top: 20px;
    background-color: white;
    justify-content: space-between;
    // border: solid silver 1.5px;
    border-radius: 15px;
    border-left: none;
    padding: 1%;
    border-right: none;
    align-items: center;
    // background-color: whitesmoke;
    // border: none;
    box-shadow: 2px 2px 3px 3px rgba(0,0,0,0.10);
`

const Right = styled( Left )`{
    border-right: none;
    border-left: none;
}`

const Header = styled.h2`{
    // border: solid red 2px;
    font-size: 1.8rem;
    padding-top: 2%;
    // display: flex;
    // justify-content: center;
    margin-left: 10%;
    
}`

const Div = styled.div`
    // border: solid red 2px;
    background-color: whitesmoke;
`

const Bottom = styled( Div )`{
    // height: 52px;
    background-color: #70607c;
    background-color: whitesmoke;
}`

const WelcomeMessage = styled.p`{
    // border: solid red 2px;
    background-color: whitesmoke;
    font-size: 1.6rem;
    margin-left: 10%;

}`

// const colors = {
//     'red' : '#ffebee',
//     'green' : '#e8f5e9',
//     'purple' : '#ede7f6',
//     'blue' :  '#e3f2fd',
// };

const NextButton = styled.button`{
    height: 50px;
    width: 300px;
    margin-left: 2%;
    margin-bottom: 25px;
    font-size: 2.5rem;
    letter-spacing: 2px;
    background-color: whitesmoke;
    border-bottom: solid purple 2px;
    outline: none;
    border-radius: 5px;
}`


const NewUserPage = ( props ) => {

    const [ authed, setAuthed ] = useState( false );
    const [ person, setPerson ] = useState( 
        { name: 'anonymous', avatarUrl: avatarFallbackImage } 
    );

    const { userSession } = props;

    useEffect( ( userSession ) => {
        try {
            setPerson( { person: new Person( userSession.loadUserData().profile ) } );
            setAuthed( true );
        }
        catch {
            setAuthed( false );
        }
    }, []);


    return (
        <Div>
            { ! userSession.isSignInPending() &&
                <Div>
                    <Div>
                        <Header> 
                            Welcome, { person.name || 'Yanna' }! Thanks for trying Nuancity. 
                        </Header>
                        <WelcomeMessage> To get started, choose at least <span style = {{
                            fontSize: '25px',
                            color: 'purple'
                        }}> 5 </span> areas that interest you </WelcomeMessage>
                    </Div>
        
                    <Wrapper>
                        <Left>
                            <SearchTab color = 'primary' count = { 6 } />
                            <SearchTab color = 'red' count = { 3 } />
                            <SearchTab color = 'secondary' count = { 5 } />
                        </Left>
                        <Right>
                            <SearchTab color = 'green' count = { 4 } />
                            <SearchTab color = 'purple' count = { 7 } />
                            <SearchTab color = 'blue' count = { 6 } />
                        </Right>
                    </Wrapper>
                    <Bottom>
                        <NextButton color='red' variant='outlined' size='large' > Next <i style={{ fontSize: '2rem'}} class="far fa-long-arrow-right"></i>
                        </NextButton>
                    </Bottom>
                </Div>
            }
        </Div>
    )
}

export default ( NewUserPage );