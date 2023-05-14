import { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { AccountContext } from '../../context/AccountProvider';

const ImageContainer = styled(Box)`
display:flex;
justify-content:center;
padding: 30px 0;
`

const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
});

const Wrapper = styled(Box)`
background:#ffffff;
padding:15px 30px 10px;
box-shadow: 1px 0px 1px #9BA4B5;
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
font-size:14px;
& :first-child {
color:#00A884;
font-size:14px;
font-wight:lighter;
}
& :last-child{
    margin:19px 0 0 0;
    color:#3B4A54;
    font-size:15px;
}
`

const DescriptionContainer = styled(Box)`
font-size:14px;
padding:16px 30px 24px;
& > p{
    font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
    color: #7b8b94;
    font-size:14px;
    font-wight:lighter;
}
`

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="profile"></Image>
            </ImageContainer>
            <Wrapper>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </Wrapper>

            <DescriptionContainer>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </DescriptionContainer>

            <Wrapper>
                <Typography>About</Typography>
                <Typography>Hey there! I am using WhatsApp.</Typography>
            </Wrapper>
        </>
    );
}
export default Profile;