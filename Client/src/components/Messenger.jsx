import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';
import Login from './account/Login';
import ChatDialog from './chat/ChatDialog';

const Canvas = styled(AppBar)`
height:100vh;
background:#D0D6DA;
`

const LoginHeader = styled(AppBar)`
height:223px; 
background:#00A884;
box-shadow: none;
`

const Header = styled(AppBar)`
height:127px; 
background-color:#00A884;
box-shadow: none;
`

const Icon = styled(WhatsApp)`
color:primary;
font-size:3rem;
margin-left: 19%;
margin-top:21px;
`

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (

        <Canvas>
            {
                account ?
                    <>
                        <Header>
                            <Toolbar>
                            </Toolbar>
                        </Header>
                        <ChatDialog />
                    </>
                    :
                    <>
                        <LoginHeader>
                            <Toolbar>
                                <Icon />
                                <Box sx={{ fontFamily: "Segoe UI", fontSize: "14px", fontWeight: "500", fontColor: "#ffffff", marginTop: "20px", marginLeft: "10px" }}>WHATSAPP WEB</Box>
                            </Toolbar>
                        </LoginHeader>
                        <Login />
                    </>
            }
        </Canvas>
    );
}

export default Messenger;