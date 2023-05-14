import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, Box, styled } from '@mui/material';

const Component = styled(Box)`
height:45px;
border-bottom:1px solid #E9EDEF;
display:flex;
align-items: center;
`;

const Wrapper = styled(Box)`
background: #F0F2F5;
position: relative;
margin:0 13px;
width:100%;
border-radius:8px;
`;

const Icon = styled(Box)`
position:absolute;
height:100%;
padding:6px 8px 6px 10px;    
color: #54656F;
`;

const InputField = styled(InputBase)`
padding:16px;
padding-left: 65px;
height: 17px;
width:100%;
font-family:"Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
font-size:14px;

&::placholder{
    color:#667781;
}
`;


const Search = ({ setText }) => {


    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon fontSize="small" />
                </Icon>
                <InputField
                    placeholder='Search or start new chat'
                    onChange={(e) => setText(e.target.value)}
                />
            </Wrapper>
        </Component>
    );
}

export default Search;