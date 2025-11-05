import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Chip,
    Avatar,
    useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import {
    Psychology,
    AutoAwesome,
    Speed,
    Analytics,
    SmartToy,
    Storage,
    TrendingUp,
    Visibility,
    Language,
    Memory
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const aiSolutions = [
    {
        icon: <Psychology sx={{ fontSize: 30 }} />,
        title: 'Machine Learning Models',
        description: 'Custom ML models tailored to your specific use cases and data patterns.',
        technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'],
        color: '#00D4FF',
        gradient: 'linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)',
    },
    {
        icon: <Visibility sx={{ fontSize: 30 }} />,
        title: 'Computer Vision',
        description: 'Advanced image and video analysis for object detection, recognition, and processing.',
        technologies: ['OpenCV', 'YOLO', 'CNN', 'Object Detection'],
        color: '#FF6B6B',
        gradient: 'linear-gradient(135deg, #FF6B6B 0%, #E53E3E 100%)',
    },
    {
        icon: <Language sx={{ fontSize: 30 }} />,
        title: 'Natural Language Processing',
        description: 'Text analysis, sentiment analysis, chatbots, and language understanding systems.',
        technologies: ['BERT', 'GPT', 'Transformers', 'NLTK'],
        color: '#4CAF50',
        gradient: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
    },
    {
        icon: <Analytics sx={{ fontSize: 30 }} />,
        title: 'Predictive Analytics',
        description: 'Forecast trends, behaviors, and outcomes using advanced statistical models.',
        technologies: ['Time Series', 'Regression', 'Classification', 'Clustering'],
        color: '#FF9800',
        gradient: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
    },
    {
        icon: <SmartToy sx={{ fontSize: 30 }} />,
        title: 'Intelligent Automation',
        description: 'AI-powered automation solutions that learn and adapt to your business processes.',
        technologies: ['RPA', 'Workflow AI', 'Smart Bots', 'Process Mining'],
        color: '#9C27B0',
        gradient: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',
    },
    {
        icon: <Memory sx={{ fontSize: 30 }} />,
        title: 'Deep Learning',
        description: 'Neural networks and deep learning solutions for complex pattern recognition.',
        technologies: ['Neural Networks', 'LSTM', 'GANs', 'Reinforcement Learning'],
        color: '#F44336',
        gradient: 'linear-gradient(135deg, #F44336 0%, #C62828 100%)',
    },
];

const stats = [
    { number: '95%', label: 'Accuracy Rate', icon: <TrendingUp /> },
    { number: '50+', label: 'AI Projects', icon: <Storage /> },
    { number: '24/7', label: 'Monitoring', icon: <Speed /> },
    { number: '99.9%', label: 'Uptime', icon: <AutoAwesome /> },
];

const AISolutionsSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            id="ai-ml"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
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
                        AI/ML Solutions
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
                        Harness the power of artificial intelligence and machine learning to transform
                        your business processes, gain insights from data, and automate complex tasks.
                    </Typography>
                </motion.div>

                {/* AI Solutions Cards */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 3,
                        width: '100%',
                        mb: 10,
                    }}
                >
                    {aiSolutions.map((solution, index) => (
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
                                    width: isMobile ? '100%' : 340,
                                    height: 380,
                                    background: 'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 3,
                                            p: 2,
                                            borderRadius: 2,
                                            background: `linear-gradient(135deg, ${solution.color}15, ${solution.color}05)`,
                                            border: `1px solid ${solution.color}30`,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                p: 1.5,
                                                borderRadius: 2,
                                                background: solution.gradient,
                                                color: 'white',
                                                mr: 2,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {solution.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 600, color: "#FFFFFF" }}>
                                            {solution.title}
                                        </Typography>
                                    </Box>

                                    <Typography color="#FFFFFF" sx={{ mb: 3, lineHeight: 1.5, fontSize: '0.9rem' }}>
                                        {solution.description}
                                    </Typography>

                                    <Box sx={{ mb: 2 }}>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1, color: '#FFFFFF', fontWeight: 600, fontSize: '0.8rem' }}
                                        >
                                            Technologies:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {solution.technologies.map((tech, techIndex) => (
                                                <Chip
                                                    key={techIndex}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        background: `#02071a`,
                                                        border: `1px solid ${solution.color}30`,
                                                        color: solution.color,
                                                        fontWeight: 500,
                                                        fontSize: '0.7rem',
                                                        height: '24px',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </Box>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
                            gap: 3,
                            mt: 8,
                        }}
                    >
                        {stats.map((stat, index) => (
                            <Box
                                key={index}
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    background: 'linear-gradient(black, black) padding-box, linear-gradient(317deg, rgba(0, 51, 255, 1) 19%, rgba(251, 0, 255, 1) 65%) border-box',
                                    border: '2px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 3,
                                }}
                            >
                                <Box sx={{ color: '#00D4FF', mb: 1 }}>
                                    {stat.icon}
                                </Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 700,
                                        color: '#FFFFFF',
                                        mb: 1,
                                    }}
                                >
                                    {stat.number}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default AISolutionsSection;
