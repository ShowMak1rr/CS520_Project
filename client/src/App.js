import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import logo from './images/logo.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Container maxWidth = "lg">
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
                <img className = {classes.image} src = {logo} alt = "logo" height = "60" width = "40"/>
                <Typography className = {classes.heading} variant = "h2" align = "center">Experiences</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs = {12} sm = {7}>
                            <Posts></Posts>
                        </Grid>
                        <Grid item xs = {12} sm = {4}>
                            <Form></Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;