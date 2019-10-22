import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { styled  as styledm } from '@material-ui/styles';
// import { engineering } from '../MockData.js';

const Wrapper = styled.div`{
    width: ${ props => props.width || '20vw' } 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    // background-color: whitesmoke;
}`

const List = styled.ul`{
    // border: solid silver 1px;
    display: flex;
    // flex-direction: column;
    height: 100%;
    align-items: space-around;
    display: flex;
    flex-direction: column;
}`

const getButtons = ( cnt ) => {
    let buttons = [];
    while ( cnt > 0 ) {
        buttons.push( cnt );
        cnt --;
    }
    return buttons;
}
const colors = {
    'red' : '#ffebee',
    'green' : '#e8f5e9',
    'purple' : '#ede7f6',
    'blue' :  '#e3f2fd',
    'primary' : '#e8eaf6',
    'secondary': '#fce4ec'
}  

const SearchTab = ( props ) => {

    const CustomButton = styledm( Button )({
        borderColor: props.color,
        color: props.color,
        backgroundColor: colors[ props.color ],
        '&:hover': {
            // border: `solid ${colors[ props.color ]} 2px`,
            border: `solid ${ props.color } 1px`,
            backgroundColor: props.color,
            color: 'white'
        },
        margin: '8px',
        // border: 'none'
    });




    return (
        <Wrapper>
            {
                ( props.color === 'primary' || props.color === 'secondary' ) ?
                <List>
                    { getButtons( props.count ).map( topic => {
                        return (
                            <li> <CustomButton variant = { props.variant || 'outlined' } color = { props.color } > Abnormal Psychology   </CustomButton> </li>
                        )
                    })
                    }
                </List> 
                :
                <List>
                    { getButtons( props.count ).map( num => {
                        return (
                            <li> <CustomButton color={ props.color } variant = { props.variant || 'outlined' } > Abnormal Psychology  </CustomButton> </li>
                        )
                    })
                    }
                </List>
            }
        </Wrapper>
    )
}

export default SearchTab;