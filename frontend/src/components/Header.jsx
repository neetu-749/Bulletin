import { AppBar, Toolbar, styled } from '@mui/material'
import { Menu } from '@mui/icons-material';


const StyledHeader = styled(AppBar)`
    background: white;
    height: 70px;
`;

const MenuIcon = styled(Menu)`
    color: #000;
`;

const Image = styled('img')({
    height: 50,
    paddingTop: 9,
    margin: 'auto',
    paddingRight: 70
});


const Header = () => {

    const url =`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMgzp0GkUxGF42Z_JSwg_Jlz8ordgiqnukw&usqp=CAU`;
    

    return (
        <StyledHeader position="static">
            <Toolbar>
                <MenuIcon />
                <Image src={url} alt='logo'/>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;