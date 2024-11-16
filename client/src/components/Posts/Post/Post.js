import React from "react";
import useStyles from './styles.js';

const Post = () => {
    const classes = useStyles();
    return (
        <h1 className = {classes.something}>
            POST
        </h1>
    )
}

export default Post;