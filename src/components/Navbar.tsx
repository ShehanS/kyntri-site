import React, {useEffect, useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {motion} from 'framer-motion';
import {AutoAwesome, Close as CloseIcon, Code, ContactMail, Menu as MenuIcon, Psychology} from '@mui/icons-material';
const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navItems = [
        {name: 'Services', href: '#services', icon: <Code/>},
        {name: 'AI/ML', href: '#ai-ml', icon: <Psychology/>},
        {name: 'Automation', href: '#automation', icon: <AutoAwesome/>},
        {name: 'Contact', href: '#contact', icon: <ContactMail/>},
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
        setMobileOpen(false);
    };

    const drawer = (
        <Box sx={{width: 250, height: '100%', background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2}}>
                <Typography variant="h6" sx={{fontWeight: 700, color: '#00D4FF'}}>
                    Kyntri
                </Typography>
                <IconButton onClick={handleDrawerToggle} sx={{color: 'white'}}>
                    <CloseIcon/>
                </IconButton>
            </Box>
            <List>
                {navItems.map((item, index) => (
                    <ListItem
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                            },
                        }}
                    >
                        <ListItemText
                            primary={item.name}
                            sx={{
                                color: 'white',
                                '& .MuiListItemText-primary': {
                                    fontWeight: 500,
                                },
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: scrolled
                        ? 'rgba(10, 10, 10, 0.95)'
                        : 'rgba(10, 10, 10, 0.8)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: scrolled
                        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                        : 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                }}
            >
                <Toolbar sx={{py: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    {/* Left - Logo and Name */}
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.6}}
                    >
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Box
                                sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mr: 2,
                                }}
                            >
                                <img style={{width: "40px", height: "40px"}} src="logo.png"/>
                            </Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    background: 'rgb(0, 212, 255)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                KYNTRI
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* Center - Desktop Navigation */}
                    <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center', gap: 1, position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                            >
                                <Button
                                    onClick={() => scrollToSection(item.href)}
                                    sx={{
                                        color: 'white',
                                        fontWeight: 500,
                                        px: 2,
                                        py: 1,
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        '&:hover': {
                                            background: 'rgba(0, 212, 255, 0.1)',
                                            color: '#00D4FF',
                                            transform: 'translateY(-2px)',
                                        },
                                    }}
                                >
                                    {item.name}
                                </Button>
                            </motion.div>
                        ))}
                    </Box>

                    {/* Right - Get Started Button */}
                    <Box sx={{display: {xs: 'none', md: 'block'}}}>
                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6, delay: 0.4}}
                        >
                            {/*<Button*/}
                            {/*    variant="contained"*/}
                            {/*    onClick={() => scrollToSection('#contact')}*/}
                            {/*    sx={{*/}
                            {/*        background: 'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box',*/}
                            {/*        border: '2px solid transparent',*/}
                            {/*        borderRadius: 3,*/}
                            {/*        color:"#FFFFFF",*/}
                            {/*        px: 3,*/}
                            {/*        py: 1,*/}
                            {/*        fontWeight: 600,*/}
                            {/*        textTransform: 'none',*/}
                            {/*        transition: 'all 0.4s ease',*/}
                            {/*        '&:hover': {*/}
                            {/*            background: 'linear-gradient(black, black) padding-box, linear-gradient(137deg, rgba(251, 0, 255, 1) 19%, rgba(0, 51, 255, 1) 65%) border-box',*/}
                            {/*            transform: 'translateY(-2px)',*/}
                            {/*            boxShadow: '0 0 12px rgba(0, 51, 255, 0.4)',*/}
                            {/*        },*/}
                            {/*    }}*/}

                            {/*>*/}
                            {/*    Get Started*/}
                            {/*</Button>*/}
                        </motion.div>
                    </Box>

                    {/* Mobile Menu Button */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            display: {md: 'none'},
                            color: 'white',
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', md: 'none'},
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                        background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)',
                        border: 'none',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
