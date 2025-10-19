import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Chip,
    Button,
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
    },
    {
        icon: <Visibility sx={{ fontSize: 30 }} />,
        title: 'Computer Vision',
        description: 'Advanced image and video analysis for object detection, recognition, and processing.',
        technologies: ['OpenCV', 'YOLO', 'CNN', 'Object Detection'],
        color: '#FF6B6B',
    },
    {
        icon: <Language sx={{ fontSize: 30 }} />,
        title: 'Natural Language Processing',
        description: 'Text analysis, sentiment analysis, chatbots, and language understanding systems.',
        technologies: ['BERT', 'GPT', 'Transformers', 'NLTK'],
        color: '#4CAF50',
    },
    {
        icon: <Analytics sx={{ fontSize: 30 }} />,
        title: 'Predictive Analytics',
        description: 'Forecast trends, behaviors, and outcomes using advanced statistical models.',
        technologies: ['Time Series', 'Regression', 'Classification', 'Clustering'],
        color: '#FF9800',
    },
    {
        icon: <SmartToy sx={{ fontSize: 30 }} />,
        title: 'Intelligent Automation',
        description: 'AI-powered automation solutions that learn and adapt to your business processes.',
        technologies: ['RPA', 'Workflow AI', 'Smart Bots', 'Process Mining'],
        color: '#9C27B0',
    },
    {
        icon: <Memory sx={{ fontSize: 30 }} />,
        title: 'Deep Learning',
        description: 'Neural networks and deep learning solutions for complex pattern recognition.',
        technologies: ['Neural Networks', 'LSTM', 'GANs', 'Reinforcement Learning'],
        color: '#F44336',
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
            radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            // radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.05) 0%, transparent 70%)
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
                                background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 700,
                                mb: 3,
                            }}
                        >
                            AI/ML Solutions
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
                            Harness the power of artificial intelligence and machine learning to transform
                            your business processes, gain insights from data, and automate complex tasks.
                        </Typography>
                    </Box>
                </motion.div>

                {/* AI Solutions Responsive Wrap */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: isMobile ? 'center' : 'flex-start',
                        gap: 3,
                        mb: 10,
                    }}
                >
                    {aiSolutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <Card
                                sx={{
                                    width: isMobile ? '100%' : '340px',
                                    background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    '&:hover': {
                                        boxShadow: `0 20px 40px ${solution.color}20`,
                                        border: `1px solid ${solution.color}40`,
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Avatar
                                            sx={{
                                                background: `linear-gradient(135deg, ${solution.color}, ${solution.color}80)`,
                                                mr: 2,
                                                width: 50,
                                                height: 50,
                                            }}
                                        >
                                            {solution.icon}
                                        </Avatar>
                                        <Typography variant="h6" sx={{ fontWeight: 600, color: solution.color }}>
                                            {solution.title}
                                        </Typography>
                                    </Box>

                                    <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, flexGrow: 1 }}>
                                        {solution.description}
                                    </Typography>

                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="body2" sx={{ mb: 1.5, color: 'text.secondary', fontWeight: 600 }}>
                                            Technologies:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {solution.technologies.map((tech, techIndex) => (
                                                <Chip
                                                    key={techIndex}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        background: `linear-gradient(135deg, ${solution.color}20, ${solution.color}10)`,
                                                        border: `1px solid ${solution.color}30`,
                                                        color: solution.color,
                                                        fontWeight: 500,
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

                {/* Stats + CTA remain unchanged */}
                {/* ... keep your stats and CTA sections here exactly as before ... */}
            </Container>
        </Box>
    );
};

export default AISolutionsSection;
