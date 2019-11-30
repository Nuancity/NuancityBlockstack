import React from 'react';
import { useState } from 'react'
import styled from 'styled-components';
import { Button, Paper } from '@material-ui/core';
import Post from '../components/Post.jsx';
import Node from '../components/Node.jsx';
import Notification  from '../components/Notification';
import { withStyles } from '@material-ui/styles';
import { notifications, posts, peopleNetwork, resources } from '../MockData.js';

var faker = require('faker');

const Wrapper = styled.div`
    height: 100%;
    i {
        color: #393a4d;
    }
`
const DashboardTop = styled.div`
    top: 7vh;
    z-index: 2;
    display: flex;
    position: sticky;
    align-items: center;
    // border: solid rebeccapurple 3px;
    background-color: whitesmoke;

`
    const DrawerMenu = styled.div`
        width: 25vw;
        display: flex;
        align-items: center;
        // background-color: #5e6080;
        justify-content: space-around;
        // border-right: solid white 2px;
    `
    const DrawerContent = styled.div`{
        background-color: whitesmoke;
        width: 25vw;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: space-around;
    }`

const Mid = styled.div`{
    display: flex;
    // border: solid red 2px;
    height: 180vh;
}`

    const MainMenu = styled.div`
    height: 7vh;
    width: 80vw;
    display: flex;
    background-color: #ecf5e8;
    justify-content: space-around;
    background-color: whitesmoke;
    `

    const Posts = styled.div`{
        overflow: scroll;
        width: 80vw;
        display: flex;
        flex-direction: column;
        // border: solid blue 2px
    }`

    const Network = styled.div`{
        width: 80vw;
        height: 100vh;
        margin: 0 auto;
        // border: solid red 2px;
        // background-color: whitesmoke;
       
    }`
        const ConnectionsList = styled.div`{
            display: flex;
            flex-wrap: wrap;
            height: 90vh;
            overflow: scroll;
            // border: solid blue 2px
            justify-content: space-around;
            // width: 95%;
            height: 100%;
            background-color: white;
        }`

    const SavedResources = styled.div`{
        width: 80vw;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        overflow: scroll;
        justify-content: center;
        // border: solid blue 2px
    }`

    const styles = () => ({
        resourceCard: {
            margin: '4%',
            elevation: '3',
            width: '150px',
            height: '170px',
        },
        button: {
            '&:focus': {
                backgroundColor: '#e7e7e7'
            }
        }
    })

const Dashboard = ( props ) => {
    const { classes } = props;
    const [ view, setView ] = useState( 'newsfeed' );

    return (
        <Wrapper>
            <DashboardTop>
                <DrawerMenu>
                    <Button className = { classes.button } > <i class="fas fa-bell" style={ { fontSize: '1.2rem' } } /> </Button>
                    <Button className = { classes.button } > <i class="fad fa-users" style={ { fontSize: '1.2rem' } } /> </Button>
                    <Button disabled > <i class="fas fa-envelope" style={ { fontSize: '1.2rem' } } /> </Button>
                </DrawerMenu>
                <MainMenu>
                    <Button className = { classes.button } onClick= { () => setView( 'newsfeed' ) } > NewsFeed </Button>
                    <Button className = { classes.button } onClick= { () => setView( 'network' ) } > Network </Button>
                    <Button className = { classes.button } onClick= { () => setView( 'resources' ) } > Resources </Button>
                    <Button className = { classes.button } disabled onClick= { () => setView( 'worldview' ) } > Worldview </Button>
                    <Button className = { classes.button } disabled  onClick= { () => setView( 'writings' ) } > Writings </Button>
                </MainMenu>
            </DashboardTop>

            <Mid> 
                <DrawerContent>
                    { 
                        notifications.map( notif => {
                            return (
                                <Notification
                                    subject = { notif.person }
                                    action = { notif.action }
                                    object = { notif.object }
                                    time = { notif.time }
                                />
                            )
                        })
                    }
                </DrawerContent>

                { ( view === 'newsfeed' || view === 'writings' ) && 
                    <Posts>
                        {
                            posts.map( post => {
                                return (
                                    <Post 
                                        showComments = { false }
                                        isParentPost = { true }
                                        avatar = { post.avatar }
                                        time = { post.time }
                                        username = { post.username }
                                        content = { post.content }
                                        commentCount = { post.commentsCount }
                                        protestCount = { post.commentsCount }
                                        extensionCount = { post.commentsCount }
                                    />
                                )
                            })
                        }
                    </Posts>
                } 

                { ( view === 'network' ) && 
                    <Network>
                        <ConnectionsList>
                            {
                                peopleNetwork.map( datum => {
                                    return (
                                        <Node 
                                            name = { datum.name }
                                            alignmentScore = { datum.alignmentScore }
                                            classification = { datum.classification }
                                            requestDate = { datum.requestDate }
                                            decisionDate = { datum.decisionDate }
                                            avatar = { faker.internet.avatar() }
                                        />
                                    )
                                })
                            }
                        </ConnectionsList>
                    </Network>
                } 

                { ( view === 'resources' ) && 
                    <SavedResources>
                        {
                            resources.map( datum => {
                                return (
                                    <Paper className = { classes.resourceCard } >
                                    </Paper>
                                )
                            })
                        }
                  </SavedResources>
                } 
            </Mid>
        </Wrapper>
    )
}

export default withStyles( styles )( Dashboard );