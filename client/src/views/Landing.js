import { withStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import styled from 'styled-components';
import React from 'react';

const TopStyles = styled.div`
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: whitesmoke;
`
    const Header = styled.h2`
        width: 55vw;
        margin-left: 5%;
        font-size: 1.7rem;
        letter-spacing: 3px;
        margin-top: 2%;
        color: 
        #393a4d;
    `

    const Photo = styled.img`
        width: 50vw;
        height: 60vh;
        margin-left: 47%;
    `

    const Buttons = styled.div`
        width: 24vw;
        display: flex;
        margin-left: 60%;
        justify-content: space-between;
    `

const Features = styled.div`
    height: 65vh;
    display: flex;
    background-color: #f5f5f5;
    justify-content: space-around;
    padding-bottom: 5%;
`

const Bottom = styled.div`
    background-color: #f5f5f5;
    padding-bottom: 4%;
    // background: url( ${ props => props.img } );
    // background-size: contain;
`
    const Chart = styled.img`
        width: 70vw;
        margin-top: 3%;
        margin-left: 25%;
    `
    const BottomButtons = styled(Buttons)`
        margin-left: 5%;
        margin-top: 5%;
    `
// =============================================

const styles = () => ({ 
    featureCard: { 
        height: "40vh", 
        width: "30%", 
        paddingBottom: "2%",
        marginTop: "8%", 
        boxShadow: "1px 1px 1px 1px #4c8893"  
    }, 
    browseButton: { 
        borderColor: "#009588", 
        color: "#009588", 
        '&:hover': {
            backgroundColor: green[ 50 ],
            borderColor: "#009588", 
        },
    },
});

// =============================================


const Landing = ( props ) => {
    const { classes } = props


// =============================================

    let FeatureCopy = ( header, p ) => {
        const Content = styled.p` 
            padding: 7%;
        `
        const CardTitle = styled.p`
            padding: 2%;
            background: rgb(179,177,224);
            background: linear-gradient(180deg, rgba(179,177,224,0.6713060224089635) 0%, rgba(195,210,215,1) 100%);
        `
        header = 'Feature 1';

        p = ' Maecenas et eros arcu. Aenean dignissim commodo dolor sit amet iaculis. Nullam libero orci, dignissim id est vitae, viverra dapibus ipsum. Nunc elementum vehicula lorem, vel malesuada nibh maximus at. Sed pellentesque justo orci, sit amet porttitor arcu sollicitudin sit amet. Aenean eu porttitor diam. ';

        return (
            <Paper className={ classes.featureCard } elevation='1' >
                <CardTitle> { header } </CardTitle>
                <Content> { p } </Content>
            </Paper>
        )
    }

    // =============================================

    return (
        <div>
            <TopStyles >
                <Header> Peer Review Reimagined. Social Learning Streamlined. Information Organized. Creativity Unleashed.</Header>
                <Photo src='/images/undraw_posting.svg' alt='calender' />
                {/* <Buttons >
                    <Button href='https://www.nuancity.com/topics' variant='outlined' size='large' color='primary' > Browse Content </Button> 
                    <Button className={ classes.browseButton } variant='outlined' size='large' color='primary' > Request Access </Button> 
                </Buttons> */}
            </TopStyles>

            <Features >
                <FeatureCopy />
                <FeatureCopy />
                <FeatureCopy />
            </Features>

            <Bottom img='assets/images/geometric.jpg'>
                <Chart src='https://res.cloudinary.com/color-shift-studio/image/upload/v1556155919/manaje/CreateDocument.gif' />
                <BottomButtons >
                    <Button href='/browse' variant='outlined' size='large' color='primary' > Browse Content </Button> 
                    <Button className={ classes.browseButton } variant='outlined' size='large' color='primary' > Request Access </Button> 
                </BottomButtons>
            </Bottom>
        </div>
    )
}

export default withStyles( styles )( Landing );
