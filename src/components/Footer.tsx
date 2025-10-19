import React from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    Grid,
    Link,
    Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import {
    LinkedIn,
    GitHub,
    Twitter,
    Email,
    Phone,
    LocationOn,
    Code,
    Psychology,
    AutoAwesome,
    CloudQueue
} from '@mui/icons-material';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <LinkedIn />, href: '#', label: 'LinkedIn' },
        { icon: <GitHub />, href: '#', label: 'GitHub' },
        { icon: <Twitter />, href: '#', label: 'Twitter' },
        { icon: <Email />, href: '#', label: 'Email' },
    ];

    const quickLinks = [
        { name: 'Services', href: '#services' },
        { name: 'AI/ML Solutions', href: '#ai-ml' },
        { name: 'Automation', href: '#automation' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        { name: 'AI/ML Development', icon: <Psychology /> },
        { name: 'Process Automation', icon: <AutoAwesome /> },
        { name: 'Cloud Solutions', icon: <CloudQueue /> },
        { name: 'Custom Software', icon: <Code /> },
    ];

    const contactInfo = [
        { icon: <Email />, text: 'hello@techsolutions.com' },
        { icon: <Phone />, text: '+1 (555) 123-4567' },
        { icon: <LocationOn />, text: '123 Tech Street, Innovation City' },
    ];

    return (
        <Box
            sx={{
                background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background decoration */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                        // radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)
                    `,
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={6} sx={{ py: 8 }}>
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 2,
                                        background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 2,
                                    }}
                                >
                                    <Code sx={{ color: 'white', fontSize: 28 }} />
                                </Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Kyntri
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 3,
                                    color: 'text.secondary',
                                    lineHeight: 1.6,
                                }}
                            >
                                Transforming businesses through cutting-edge AI/ML solutions,
                                intelligent automation, and innovative software development.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {socialLinks.map((social, index) => (
                                    <motion.div
                                        key={social.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                    >
                                        <IconButton
                                            href={social.href}
                                            sx={{
                                                background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                color: '#00D4FF',
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #00D4FF20, #00D4FF10)',
                                                    border: '1px solid #00D4FF40',
                                                    transform: 'translateY(-2px)',
                                                },
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={2}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                                Quick Links
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {quickLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link
                                            href={link.href}
                                            sx={{
                                                color: 'text.secondary',
                                                textDecoration: 'none',
                                                fontWeight: 500,
                                                '&:hover': {
                                                    color: '#00D4FF',
                                                    transform: 'translateX(5px)',
                                                },
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Services */}
                    <Grid item xs={12} sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                                Our Services
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 1,
                                                    background: 'linear-gradient(135deg, #00D4FF, #FF6B6B)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mr: 2,
                                                }}
                                            >
                                                {service.icon}
                                            </Box>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'text.secondary',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {service.name}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={3}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                                Contact Info
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {contactInfo.map((contact, index) => (
                                    <motion.div
                                        key={contact.text}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 1,
                                                    background: 'linear-gradient(135deg, #00D4FF, #FF6B6B)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mr: 2,
                                                }}
                                            >
                                                {contact.icon}
                                            </Box>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'text.secondary',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {contact.text}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 4 }} />

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 2,
                            pb: 4,
                        }}
                    >
                        <Typography variant="body2" color="text.secondary">
                            © Kyntri TechSolutions. All Rights Reserved.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Link
                                href="#"
                                sx={{
                                    color: 'text.secondary',
                                    textDecoration: 'none',
                                    '&:hover': { color: '#00D4FF' },
                                }}
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                sx={{
                                    color: 'text.secondary',
                                    textDecoration: 'none',
                                    '&:hover': { color: '#00D4FF' },
                                }}
                            >
                                Terms of Service
                            </Link>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Footer;
