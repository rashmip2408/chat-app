import { useState } from 'react';
import { MoreVert as MenuIcon } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';

const MenuOption = styled(MenuItem)`
font-family: "Segoe UI", Arial, sans-serif;
font-size:14px;
Color:#3b4a54;
padding: 10px 60px 10px 24px;
`


const HeaderDropdown = ({ setOpenDrawer }) => {

    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleLogout = () => {
        window.location.reload();
    };


    return (
        <>
            <MenuIcon onClick={handleClick} />
            <Menu
                id="basic-menu"
                keepMounted
                anchorEl={open}
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>

                <MenuOption onClick={() => { handleClose(); handleLogout(); }}>Log out</MenuOption>

            </Menu>
        </>

    );
}

export default HeaderDropdown;