import React from 'react';
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import {motion} from 'framer-motion';
import dashboard from "../../public/dashboard.json";
import Lottie from "lottie-react";
const HeroSection: React.FC = () => {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }

    };
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: '#02071a',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: Math.random() * 4 + 2,
                        height: Math.random() * 4 + 2,
                        background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.3)`,
                        borderRadius: '50%',
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <Container maxWidth="xl">
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        mt: {xs: 12, md: 10},
                                        background: '#FFFFFF',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontWeight: 700,
                                        lineHeight: 1.1,
                                        fontSize: {xs: '2.5rem', sm: '3.5rem', md: '4rem'},
                                    }}
                                >
                                    Kyntri
                                    <br />
                                    Technology
                                    <br />
                                    Solutions
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mb: 4,
                                        mt: 3,
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        lineHeight: 1.6,
                                        fontWeight: 400,
                                        fontSize: {xs: '1rem', sm: '1.25rem'},
                                    }}
                                >
                                    Harness the power of AI/ML, automation, <br/>and cutting-edge
                                    software development to transform your business.
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.6}}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => scrollToSection('#contact')}
                                    sx={{
                                        background: 'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box',
                                        border: '2px solid transparent',
                                        borderRadius: 3,
                                        color:"#FFFFFF",
                                        px: 3,
                                        py: 1,
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        transition: 'all 0.4s ease',
                                        '&:hover': {
                                            background: 'linear-gradient(black, black) padding-box, linear-gradient(137deg, rgba(251, 0, 255, 1) 19%, rgba(0, 51, 255, 1) 65%) border-box',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 0 12px rgba(0, 51, 255, 0.4)',
                                        },
                                    }}

                                >
                                    Get Started
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: {xs: '300px', sm: '400px', md: '500px'},
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Lottie animationData={dashboard} loop={true}  style={{ width: '800px', height: '800px' }}/>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
