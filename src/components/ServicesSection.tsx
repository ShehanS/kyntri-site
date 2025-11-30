import React, { useState } from 'react';
import {
    Container,
    Card,
    CardContent,
    Typography,
    Box,
    Chip,
    Button,
    useMediaQuery,
    useTheme,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Close } from '@mui/icons-material';
import {
    Psychology,
    AutoAwesome,
    Speed,
    Code,
    CloudQueue,
    Analytics,
    Engineering,
} from '@mui/icons-material';

const services = [
    {
        icon: <Psychology sx={{ fontSize: 40 }} />,
        title: 'AI/ML Solutions',
        description:
            'Advanced machine learning models, neural networks, and AI-powered applications that transform data into actionable insights.',
        features: ['Deep Learning', 'Computer Vision', 'NLP', 'Predictive Analytics'],
        color: '#00D4FF',
        gradient: 'linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)',
    },
    {
        icon: <AutoAwesome sx={{ fontSize: 40 }} />,
        title: 'Intelligent Automation',
        description:
            'Streamline operations with smart automation solutions that reduce manual work and increase efficiency.',
        features: ['RPA', 'Workflow Automation', 'Process Optimization', 'Smart Bots'],
        color: '#FF6B6B',
        gradient: 'linear-gradient(135deg, #FF6B6B 0%, #E53E3E 100%)',
    },
    {
        icon: <Code sx={{ fontSize: 40 }} />,
        title: 'Software Development',
        description:
            'Custom software solutions built with modern technologies, scalable architecture, and best practices.',
        features: ['Web Applications', 'Mobile Apps', 'APIs', 'Microservices'],
        color: '#4CAF50',
        gradient: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
    },
    {
        icon: <CloudQueue sx={{ fontSize: 40 }} />,
        title: 'Cloud & DevOps',
        description:
            'Scalable cloud infrastructure and DevOps practices to ensure reliable, secure, and efficient deployments.',
        features: ['AWS/Azure/GCP', 'CI/CD', 'Containerization', 'Monitoring'],
        color: '#9C27B0',
        gradient: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',
    },
    {
        icon: <Analytics sx={{ fontSize: 40 }} />,
        title: 'Data Analytics',
        description:
            'Transform raw data into meaningful insights with advanced analytics, visualization, and business intelligence.',
        content: [
            'Business Intelligence: Unlock the story behind your data with interactive BI dashboards. Our experts use tools like Tableau and Power BI to make insights easy and actionable.',
            'Executive Summary & KPI Monitoring: Consolidated dashboards to showcase revenue growth, gross margin, customer acquisition cost (CAC) and more.',
            'Demand Forecasting & Inventory Movement: Harness advanced analytics combining past sales, seasonality, and weather data to accurately predict next-month demand and optimize inventory.',
            'Customer Segmentation & Lifetime Value: Unlock customer insights by segmenting with RFM analysis to boost loyalty and target high-value repeat buyers effectively.',
            'Sales Rep Performance & Incentive Planning: Analyze sales rep performance and optimize incentive planning.',
            'Promotion & Campaign Effectiveness: Measure campaign success with integrated sales and ad data to boost sales, optimize margins, and maximize ROI.',
            'Customer Churn Analysis: Identify customer churn before it happens — leverage data-driven insights to retain high-value subscribers and boost lifetime revenue.',
            'Product Profitability Analysis: Measure product profitability to optimize sales, margins, and ROI.',
        ],
        features: ['Data Mining', 'Visualization', 'BI Dashboards', 'Real-time Analytics'],
        color: '#FF9800',
        gradient: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
    },
    {
        icon: <Engineering sx={{ fontSize: 40 }} />,
        title: 'IoT Solutions',
        description:
            'Connect and manage devices with Internet of Things solutions for smart homes, cities, and industrial applications.',
        features: ['Device Management', 'Real-time Monitoring', 'Data Collection', 'Smart Sensors'],
        color: '#00BCD4',
        gradient: 'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
    },
    {
        icon: <Speed sx={{ fontSize: 40 }} />,
        title: 'Performance Optimization',
        description:
            'Enhance application performance with advanced optimization techniques and monitoring solutions.',
        features: ['Code Optimization', 'Database Tuning', 'Caching', 'Load Testing'],
        color: '#E91E63',
        gradient: 'linear-gradient(135deg, #E91E63 0%, #C2185B 100%)',
    },
];

const ServicesSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedService, setSelectedService] = useState<any>(null);

    const handleOpen = (service: any) => setSelectedService(service);
    const handleClose = () => setSelectedService(null);

    return (
        <Box
            id="services"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                        }}
                    >
                        Our Services
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        color="text.secondary"
                        sx={{
                            mb: 8,
                            maxWidth: '800px',
                            mx: 'auto',
                            fontSize: '1.2rem',
                            lineHeight: 1.6,
                        }}
                    >
                        Comprehensive technology solutions designed to accelerate your digital transformation and drive innovation across your organization.
                    </Typography>
                </motion.div>

                {/* Services Cards */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                        width: '100%',
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <Card
                                sx={{
                                    width: isMobile ? '100%' : 320,
                                    height: 400,
                                    background: 'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    // boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                    // '&:hover': {
                                    //     boxShadow: `0 8px 24px ${service.color}30`,
                                    //     border: `1px solid ${service.color}50`,
                                    //     transform: 'translateY(-8px)',
                                    // },
                                }}
                            >
                                {/*<Box sx={{ height: 4, background: service.gradient }} />*/}
                                <CardContent sx={{ p: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 3,
                                            p: 2,
                                            borderRadius: 2,
                                            background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                                            border: `1px solid ${service.color}30`,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 2,
                                                background: service.gradient,
                                                color: 'white',
                                                mr: 2,
                                            }}
                                        >
                                            {service.icon}
                                        </Box>
                                        <Typography variant="h5" sx={{ fontWeight: 600, color: "#FFFFFF" }}>
                                            {service.title}
                                        </Typography>
                                    </Box>

                                    <Typography color="#FFFFFF" sx={{ mb: 2, lineHeight: 1.5, fontSize: '0.9rem' }}>
                                        {service.description}
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1, color: '#FFFFFF', fontWeight: 600, fontSize: '0.8rem' }}
                                        >
                                            Key Features:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {service.features.map((feature, featureIndex) => (
                                                <Chip
                                                    key={featureIndex}
                                                    label={feature}
                                                    size="small"
                                                    sx={{
                                                        background: `#02071a`,
                                                        border: `1px solid ${service.color}30`,
                                                        color: service.color,
                                                        fontWeight: 500,
                                                        fontSize: '0.7rem',
                                                        height: '24px',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleOpen(service)}
                                        sx={{
                                            // borderColor: service.color,
                                            background:'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box',
                                            color: '#FFFFFF',
                                            fontWeight: 600,
                                            borderRadius: 2,
                                            fontSize: '0.8rem',
                                            py: 1,
                                            '&:hover': {
                                                borderColor: service.color,
                                                backgroundColor: `${service.color}10`,
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                    >
                                        Learn More
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </Box>
            </Container>

            {/* Fullscreen Dialog */}
            <Dialog
                open={Boolean(selectedService)}
                onClose={handleClose}
                fullScreen={isMobile}
                maxWidth="md"
                fullWidth
            >
                {selectedService && (
                    <>
                        <DialogTitle
                            sx={{
                                m: 0,
                                p: 2,
                                background: selectedService.gradient,
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            {selectedService.title}
                            <IconButton onClick={handleClose} sx={{ color: 'white' }}>
                                <Close />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent dividers>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {selectedService.description}
                            </Typography>
                            {selectedService.content && (
                                <Box component="ul" sx={{ pl: 3 }}>
                                    {selectedService.content.map((point: string, idx: number) => (
                                        <Typography key={idx} component="li" sx={{ mb: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>
                                            {point}
                                        </Typography>
                                    ))}
                                </Box>
                            )}
                            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                                Key Features:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {selectedService.features.map((feature: string, idx: number) => (
                                    <Chip
                                        key={idx}
                                        label={feature}
                                        size="small"
                                        sx={{
                                            background: `${selectedService.color}20`,
                                            color: selectedService.color,
                                            fontWeight: 500,
                                        }}
                                    />
                                ))}
                            </Box>
                        </DialogContent>

                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default ServicesSection;
