import { Box, InputBase, styled } from '@mui/material';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';


const Container = styled(Box)`
height:62px;
background: #F0F2F5;
padding: 0 15px;
display:flex;
align-items: center;
width:100%;
& > * {
    margin:8px;
    color: #54656F;
}
`;

const Input = styled(Box)`
background: #FFFFFF;
border-radius:10px;
width: 84%;
margin-left:8px;
`
const InputField = styled(InputBase)`
width:100%;
padding:5px;
padding-left: 16px;
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
font-size:15px;
`

const Emoji = styled(EmojiEmotionsOutlinedIcon)`
font-size: 29px;
`

const ClipIcon = styled(AttachFileOutlinedIcon)`
transform: scalex(-1) rotate(-45deg);
font-size: 25px;
`;

const Mic = styled(MicOutlinedIcon)`
font-size: 28px;
margin-left:1px;
`
const Footer = ({ sendText, setValue, value }) => {


    return (
        <Container>
            <Emoji />
            <ClipIcon />
            <Input>
                <InputField placeholder='Type a message'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                ></InputField>
            </Input>
            <Mic />
        </Container>
    );
}

export default Footer;