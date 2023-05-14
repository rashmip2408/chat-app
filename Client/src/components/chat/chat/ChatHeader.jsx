import { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { MoreVert as MenuIcon } from '@mui/icons-material';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
height: 44px;
padding: 8px 16px;
background: #F0F2F5;
display:flex;
align-items: center;
`

const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)`
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
font-size: 16px;
color: #111b21;
margin-left:12px !important;
`

const Status = styled(Typography)`
margin-left:12px !important;
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
font-size:13px;
color: #667781;
`
const RightContainer = styled(Box)`
margin-left:auto;

& > svg {
    padding:12px;
    color: #54656F;
    font-size: 25px;
}`

const ChatHeader = ({ person }) => {

    const { activeUsers } = useContext(AccountContext);

    return (
        <Component>
            <Image src={person.picture} alt='profile'></Image>
            <Box>
                <Name>
                    {person.name}
                </Name>
                <Status>
                    {activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}
                </Status>
            </Box>

            <RightContainer>
                <SearchIcon />
                <MenuIcon />
            </RightContainer>
        </Component>
    );
}

export default ChatHeader;