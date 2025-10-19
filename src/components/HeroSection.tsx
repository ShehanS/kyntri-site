import React from 'react';
import { Box, Typography, Button, Container, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import {
    Psychology,
    AutoAwesome,
    Speed,
    Code,
    CloudQueue,
    Security
} from '@mui/icons-material';

const HeroSection: React.FC = () => {
    const techStack = [
        { label: 'AI/ML', icon: <Psychology />, color: '#00D4FF' },
        { label: 'Automation', icon: <AutoAwesome />, color: '#FF6B6B' },
        { label: 'Performance', icon: <Speed />, color: '#4CAF50' },
        { label: 'Development', icon: <Code />, color: '#FF9800' },
        { label: 'Cloud', icon: <CloudQueue />, color: '#9C27B0' },
        { label: 'Security', icon: <Security />, color: '#F44336' },
    ];

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
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
                    background: `
                        radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%), 
                        // radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 50% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)
                    `,
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

            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
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
                                        mt: 10,
                                        background: 'linear-gradient(135deg, #A4FF58 0%, #2C6CFF 50%, #4CAF50 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        fontWeight: 700,
                                        lineHeight: 1.1,
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
                                        mb: 3,
                                        color: 'text.secondary',
                                        lineHeight: 1.6,
                                        fontWeight: 400,
                                    }}
                                >
                                    Harness the power of AI/ML, automation, and cutting-edge
                                    software development to transform your business.
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            background: 'linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)',
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            borderRadius: 2,
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, #4DD4FF 0%, #00D4FF 100%)',
                                                transform: 'translateY(-3px)',
                                                boxShadow: '0 12px 30px rgba(0, 212, 255, 0.4)',
                                            },
                                        }}
                                    >
                                        Start Your Project
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            borderColor: '#FF6B6B',
                                            color: '#FF6B6B',
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            borderRadius: 2,
                                            '&:hover': {
                                                borderColor: '#FF8E8E',
                                                color: '#FF8E8E',
                                                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                                                transform: 'translateY(-3px)',
                                                boxShadow: '0 12px 30px rgba(255, 107, 107, 0.3)',
                                            },
                                        }}
                                    >
                                        View Portfolio
                                    </Button>
                                </Box>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                                    Our Technology Stack:
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                                    {techStack.map((tech, index) => (
                                        <motion.div
                                            key={tech.label}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                        >
                                            <Chip
                                                icon={tech.icon}
                                                label={tech.label}
                                                sx={{
                                                    background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                                                    border: `1px solid ${tech.color}40`,
                                                    color: tech.color,
                                                    fontWeight: 600,
                                                    '&:hover': {
                                                        background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}20)`,
                                                        transform: 'translateY(-2px)',
                                                    },
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: 600,
                                    background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)',
                                    borderRadius: 4,
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                {/* Animated background grid */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: `
                                            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                                            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                                        `,
                                        backgroundSize: '50px 50px',
                                        opacity: 0.3,
                                    }}
                                />

                                {/* Floating tech elements */}
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={tech.label}
                                        style={{
                                            position: 'absolute',
                                            width: 60,
                                            height: 60,
                                            background: `linear-gradient(135deg, ${tech.color}, ${tech.color}80)`,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1.5rem',
                                            boxShadow: `0 0 20px ${tech.color}40`,
                                        }}
                                        animate={{
                                            x: [0, 20, 0],
                                            y: [0, -20, 0],
                                            rotate: [0, 180, 360],
                                        }}
                                        transition={{
                                            duration: 4 + index,
                                            repeat: Infinity,
                                            delay: index * 0.5,
                                        }}
                                        initial={{
                                            x: Math.random() * 400 - 200,
                                            y: Math.random() * 400 - 200,
                                        }}
                                    >
                                        {tech.icon}
                                    </motion.div>
                                ))}

                                {/* Central content */}
                                <motion.div
                                    animate={{
                                        y: [-10, 10, -10],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                    style={{ textAlign: 'center', zIndex: 10 }}
                                >
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 50%, #4CAF50 100%)',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontWeight: 700,
                                            mb: 2,
                                        }}
                                    >
                                       Analytic
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            color: 'text.secondary',
                                            mb: 1,
                                        }}
                                    >
                                        Innovation Hub
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'text.secondary',
                                            maxWidth: 300,
                                            mx: 'auto',
                                        }}
                                    >
                                        Transforming ideas into intelligent solutions
                                    </Typography>
                                </motion.div>

                                {/* Glow effect */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: 200,
                                        height: 200,
                                        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
                                        borderRadius: '50%',
                                        filter: 'blur(20px)',
                                    }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
