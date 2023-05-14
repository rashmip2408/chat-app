import { useContext, useState, useEffect, useRef } from 'react';
import { Box, styled } from '@mui/material';
import Footer from './Footer';
import { AccountContext } from '../../../context/AccountProvider';
import { getMessages, newMessage } from '../../../services/Api';
import Message from './Message';


const Container = styled(Box)`
background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size:50%;
`

const Component = styled(Box)`
height:78vh;
overflow-y: scroll;
`

const GetMessage = styled(Box)`
padding: 1px 60px;
`

const Messages = ({ person, conversation }) => {

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const scrollRef = useRef();
    const { account, socket } = useContext(AccountContext);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [incomingMessage, setIncomingMessage] = useState(null);

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            });
        });
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        const getMessagesDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessagesDetails();
    }, [person._id, conversation._id, newMessageFlag]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' });
    }, [messages]);


    useEffect(() => {
        incomingMessage &&
            conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages(prev => [...prev, incomingMessage]);
    }, [incomingMessage, conversation]);

    const sendText = async (e) => {
        let code = e.keycode || e.which;

        if (code === 13) {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: value
            }

            socket.current.emit('sendMessage', message);

            await newMessage(message);
            setValue('');
            setNewMessageFlag(prev => !prev)
        }
    }

    return (
        <Container>
            <Component>
                {
                    messages && messages.map(message => (
                        <GetMessage ref={scrollRef}>
                            <Message message={message} />
                        </GetMessage>
                    ))
                }
            </Component>
            <Footer
                sendText={sendText}
                setValue={setValue}
                value={value}
            />

        </Container>
    );
}

export default Messages;