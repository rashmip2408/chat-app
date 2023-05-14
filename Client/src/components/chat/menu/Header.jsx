import { useContext, useState } from 'react';
import { Box, styled } from '@mui/material';
import { Autorenew as StatusIcon } from '@mui/icons-material';
import { Groups as CommunityIcon } from '@mui/icons-material';
import { Chat as MessageIcon } from '@mui/icons-material';
import { AccountContext } from '../../../context/AccountProvider';
import HeaderDropdown from './HeaderDropdown';
import ProfileInfo from '../../drawer/ProfileInfo';

const Component = styled(Box)`
height: 44px;
background: #F0F2F5;
padding: 8px 16px;
display:flex;
align-items: center;
`

const Wrapper = styled(Box)`
margin-left:auto;
&>*{
    margin-left:8px;
    padding:8px;
    color: #54656F;
};
&:first-child{
    font-size: 22px;
}
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    const { account } = useContext(AccountContext);

    return (
        <>
            <Component>
                <Image src={account.picture} alt="profile" onClick={() => toggleDrawer()} />
                <ProfileInfo open={openDrawer} setOpen={setOpenDrawer} />
                <Wrapper>
                    <CommunityIcon style={{}} />
                    <StatusIcon style={{}} />
                    <MessageIcon style={{ fontSize: '22px' }} />
                    <HeaderDropdown setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
        </>
    );
}

export default Header;