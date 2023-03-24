
import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)(( {theme})=> ({
    background: '#fd5532',
    display: 'flex',
    color: '#FFFFFF',
    alignItems: 'center',
    height: 48,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));


const Image = styled('img')({
    height: 35,
    '&:last-child':{
        margin: '0 5px 0 20px'
    }
})

const Text= styled(Typography)`
     font-size: 14px;
     font-weight: 300;
     margin-left: 50px;
`



const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return(
        <Container>
            <Text>
                For the best experience use bulletin on your smartphone
            </Text>
            <Box style={{display:'flex', marginLeft:'auto'}}>
                <Image src={appleStore} alt="appleStore"/>
                <Image src={googleStore} alt="googleStore"/>
            </Box>
        </Container>
    )
}

export default InfoHeader;