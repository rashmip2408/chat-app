import { Box, Typography, styled } from '@mui/material';
import { formatDate } from '../../../utils/common-utils';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';

const SendMessage = styled(Box)`
background:#D9FDD3;
max-width: 60%;
width: fit-content;
margin-left:auto;
padding:5px;
display:flex;
border-radius: 10px;
word-break:break-word;
`;

const GetMessage = styled(Box)`
background:#FFFFFF;
max-width: 60%;
width: fit-content;
padding:5px;
display:flex;
border-radius: 10px;
word-break:break-word;
`;

const Text = styled(Typography)`
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
font-size: 14px;
color: #111b21;
padding:0 15px 2px 5px;
`

const TimeStamp = styled(Typography)`
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
font-size: 11px;
color: #667781;
margin-top:8px;
word-break: keep-all;
`

export const Message = ({ message }) => {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === message.senderId ?
                    <SendMessage>
                        <Text>{message.text}</Text>
                        <TimeStamp>{formatDate(message.createdAt)}</TimeStamp>
                    </SendMessage> :
                    <GetMessage>
                        <Text>{message.text}</Text>
                        <TimeStamp>{formatDate(message.createdAt)}</TimeStamp>
                    </GetMessage>
            }

        </>
    );
}

export default Message;