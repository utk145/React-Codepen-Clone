import {AppBar,Toolbar,styled} from '@mui/material';

const Container = styled(AppBar)`
    background:#060606;
    height:9vh;
`

const Header=()=>{
    return(
        <Container position='static'>
            <Toolbar>
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111351.png" alt="CodepenImg" style={{width:'40px'}}/>
            </Toolbar>
        </Container>
        
    )
}
export default Header ;