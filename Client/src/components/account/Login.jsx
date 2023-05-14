import { useContext } from 'react';
import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/Data';
import { AccountContext } from '../../context/AccountProvider';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { addUser } from '../../services/Api';

const dialogStyle = {
    height: '90%',
    width: '60%',
    maxWidth: '60%',
    maxHeight: '90%',
    marginTop: '10%',
    overflow: 'hidden'
}

const Component = styled(Box)`
display: flex;
`

const Container = styled(Box)`
padding:50px 20px 56px 60px;`

const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
})

const Title = styled(Typography)`
font-family: "Segoe UI", Arial, sans-serif;
color: rgb(65, 82, 93);
font-size: 28px;
font-weight: 300;
margin-bottom:30px`

const StyleList = styled(List)`
& > li {
    padding: 0;
    margin-top: 15px;
    font-family: "Segoe UI", Arial, sans-serif;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.87);
    line-height:28px;
}
`

const Login = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        console.log(decoded);
        setAccount(decoded);
        await addUser(decoded);
    }

    const onloginError = (res) => {
        console.log('Login Failed', res);
    }

    return (

        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>Use WhatsApp on your computer</Title>
                    <StyleList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu : or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Tap Link A Device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>

                    </StyleList>
                </Container>
                <Box style={{ position: 'relative' }}>
                    <QRCode src={qrCodeImage} alt='QR code'></QRCode>
                    <Box style={{ position: 'absolute', top: '43%', transform: 'translateX(30%)' }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onloginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    );
}

export default Login;