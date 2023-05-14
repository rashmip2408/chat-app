import * as React from 'react';
import { Drawer, Box, Typography, styled } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Profile from './Profile';


const DrawerStyle = {
    top: '17px',
    left: 20,
    height: '95%',
    width: '450px',
    boxShadow: 'none'
}

// "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;

const Header = styled(Box)`
background:#008069;
height:109px;
display:flex;
& > svg, & > p {
color:#ffffff;
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
font-size:19px;
font-weight:500;
margin-top:auto;
padding:15px;
}
`

const Component = styled(Box)`
background:#F0F2F5;
height:85%;
`

const ProfileInfo = ({ open, setOpen }) => {

    const toggleDrawer = () => {
        setOpen(false);
    }

    return (
        <Drawer
            open={open}
            onClose={toggleDrawer}
            PaperProps={{ sx: DrawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => setOpen(false)} style={{ fontSize: '25px' }} />
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile />
            </Component>

        </Drawer>
    );
}

export default ProfileInfo;