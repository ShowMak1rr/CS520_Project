import React, { useState } from 'react';
import { AppBar, Typography, Avatar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles'; // 使用 MUI 的 styled 方法
import logo from '../../images/logo.png';

// 使用 styled 创建样式
const PREFIX = 'Navbar';
const classes = {
    appBar: `${PREFIX}-appBar`,
    brandContainer: `${PREFIX}-brandContainer`,
    heading: `${PREFIX}-heading`,
    toolbar: `${PREFIX}-toolbar`,
    profile: `${PREFIX}-profile`,
    purple: `${PREFIX}-purple`,
    logout: `${PREFIX}-logout`,
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    [`&.${classes.appBar}`]: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
    },
    [`& .${classes.brandContainer}`]: {
        display: 'flex',
        alignItems: 'center',
    },
    [`& .${classes.heading}`]: {
        color: 'rgba(0,183,255,1)',
        textDecoration: 'none',
    },
    [`& .${classes.toolbar}`]: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    [`& .${classes.profile}`]: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    [`& .${classes.purple}`]: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Navbar = () => {
    const user = null; // 假设没有用户登录

    return (
        <StyledAppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <img className={classes.image} src={logo} alt="logo" height="60" width="40" />
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h2"
                    align="center"
                >
                    Experiences
                </Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            alt={user?.result?.name}
                            src={user?.result?.imageUrl}
                        >
                            {user?.result?.name?.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user?.result?.name}
                        </Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;
