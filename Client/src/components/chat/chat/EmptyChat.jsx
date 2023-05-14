import chatImage from '../../../bc.png';
import { styled, Box, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const Canvas = styled(Box)`
background: #F0F2F5;
height:100%;
padding:30px, 0;
height:100%;
text-align:center;
`

const Container = styled(Box)`
padding:0 200px;
height: 100vh;
`

const Image = styled('img')({
    width: '100%',
    marginTop: 100
})

const Title = styled(Typography)`
margin:38px 0 10px 0;
font-size:32px;
color:#41525d;
font-weight:300;
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
`

const SubTitle = styled(Typography)`
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
color:#7b8b94;
font-size:14px;
`
const Footer = styled(Typography)`
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
color:#8696a0;
font-size:14px;
margin-top:120px;
`

const Line = styled(Box)`
border-top:6px solid #25D366;
margin-top:34px;
`

const EmptyChat = () => {
    return (
        <Canvas>
            <Container>
                <Image src={chatImage} alt='canvas'></Image>
                <Title>WhatsApp Web</Title>
                <SubTitle>Send and receive messages without keeping your phone online.</SubTitle>
                <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
                <Footer><LockIcon style={{ fontSize: 'small' }} />End-to-end encrypted</Footer>
                <Line />

            </Container>
        </Canvas>
    );
}

export default EmptyChat;