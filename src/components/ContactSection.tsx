import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Card,
    CardContent,
    Chip,
    Avatar,
    Divider,
    Grid
} from '@mui/material';

import { motion } from 'framer-motion';
import {
    Email,
    Phone,
    LocationOn,

    CheckCircle,
    Schedule,
    Support
} from '@mui/icons-material';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: <Email sx={{ fontSize: 30 }} />,
            title: 'Email Us',
            details: 'hello@techsolutions.com',
            description: 'Send us an email anytime',
            color: '#00D4FF',
        },
        {
            icon: <Phone sx={{ fontSize: 30 }} />,
            title: 'Call Us',
            details: '+1 (555) 123-4567',
            description: 'Mon-Fri from 9am to 6pm',
            color: '#FF6B6B',
        },
        {
            icon: <LocationOn sx={{ fontSize: 30 }} />,
            title: 'Visit Us',
            details: '123 Tech Street, Innovation City',
            description: 'Come say hello at our office',
            color: '#4CAF50',
        },
    ];

    const services = [
        'AI/ML Development',
        'Process Automation',
        'Cloud Solutions',
        'Data Analytics',
        'Custom Software',
        'Consulting',
    ];

    return (
        <Box
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)',
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
                       // radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                        // radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                       // radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.05) 0%, transparent 70%)
                    `,
                }}
            />

            <Container maxWidth="lg">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                background: 'white',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 700,
                                mb: 3,
                            }}
                        >
                            Let's Build Together
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                                maxWidth: '800px',
                                mx: 'auto',
                                lineHeight: 1.6,
                                fontSize: '1.2rem',
                            }}
                        >
                            Ready to transform your business with cutting-edge technology?
                            Let's discuss your project and create something amazing together.
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={6}>
                    {/* Contact Form */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                sx={{
                                    background: 'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                }}
                            >
                                <CardContent sx={{ p: 6 }}>
                                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                                        Start Your Project
                                    </Typography>

                                    <Box component="form" onSubmit={handleSubmit} noValidate>
                                        <Grid container spacing={3}>
                                            <Grid size={{ xs: 12, md: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    label="Your Name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 2,
                                                            '&:hover fieldset': {
                                                                borderColor: '#00D4FF',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#00D4FF',
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12, sm: 6 }}>
                                                <TextField
                                                    fullWidth
                                                    label="Email Address"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 2,
                                                            '&:hover fieldset': {
                                                                borderColor: '#00D4FF',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#00D4FF',
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12}}>
                                                <TextField
                                                    fullWidth
                                                    label="Company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 2,
                                                            '&:hover fieldset': {
                                                                borderColor: '#00D4FF',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#00D4FF',
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12}}>
                                                <TextField
                                                    fullWidth
                                                    label="Tell us about your project"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    multiline
                                                    rows={4}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: 2,
                                                            '&:hover fieldset': {
                                                                borderColor: '#00D4FF',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#00D4FF',
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid size={{ xs: 12}}>
                                                <Button
                                                    variant="contained"
                                                    type="submit"
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
                                                    Send Message
                                                </Button>

                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>

                    {/* Contact Info */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                                    Get in Touch
                                </Typography>
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 3,
                                                p: 2,
                                                borderRadius: 2,
                                                background: 'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box',
                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                '&:hover': {
                                                    border: `1px solid ${info.color}40`,
                                                    transform: 'translateY(-2px)',
                                                },
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    background: `linear-gradient(135deg, ${info.color}, ${info.color}80)`,
                                                    mr: 2,
                                                    width: 50,
                                                    height: 50,
                                                }}
                                            >
                                                {info.icon}
                                            </Avatar>
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                                    {info.title}
                                                </Typography>
                                                <Typography variant="body1" sx={{ color: info.color, fontWeight: 500 }}>
                                                    {info.details}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {info.description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>

                            <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                            <Box>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                    Our Services
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {services.map((service, index) => (
                                        <Chip
                                            key={index}
                                            label={service}
                                            size="small"
                                            sx={{
                                                background: 'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box',
                                                color: '#00D4FF',
                                                fontWeight: 500,
                                                '&:hover': {
                                                    background: 'linear-gradient(135deg, #00D4FF30, #00D4FF20)',
                                                },
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            <Box sx={{ mt: 4, p: 3, background: 'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box', borderRadius: 3, border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <CheckCircle sx={{ color: '#4CAF50', mr: 1 }} />
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        Free Consultation
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Schedule sx={{ color: '#FF9800', mr: 1 }} />
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        Quick Response
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Support sx={{ color: '#00D4FF', mr: 1 }} />
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        24/7 Support
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactSection;
