import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip, Button, Avatar, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import {
    AutoAwesome,
    Speed,
    Engineering,
    SmartToy,
    AccountTree,
    Settings,
    TrendingUp,
    Schedule,
    CloudSync
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

// Features Data
const automationFeatures = [
    { icon: <AccountTree sx={{ fontSize: 30 }} />, title: 'Process Automation', description: 'Automate complex business processes with intelligent workflow management systems.', benefits: ['Reduced Manual Work', 'Faster Processing', 'Error Reduction', 'Cost Savings'], color: '#00D4FF' },
    { icon: <SmartToy sx={{ fontSize: 30 }} />, title: 'RPA Solutions', description: 'Robotic Process Automation to handle repetitive tasks across multiple systems.', benefits: ['24/7 Operation', 'High Accuracy', 'Scalable', 'Quick ROI'], color: '#FF6B6B' },
    { icon: <Settings sx={{ fontSize: 30 }} />, title: 'Smart Integration', description: 'Seamlessly connect disparate systems and applications with intelligent APIs.', benefits: ['Unified Data', 'Real-time Sync', 'Easy Maintenance', 'Future-proof'], color: '#4CAF50' },
    { icon: <CloudSync sx={{ fontSize: 30 }} />, title: 'Cloud Automation', description: 'Automate cloud infrastructure management and deployment processes.', benefits: ['Auto-scaling', 'Cost Optimization', 'Disaster Recovery', 'Monitoring'], color: '#9C27B0' },
];

// Stats Data
const automationStats = [
    { metric: '85%', label: 'Process Efficiency Gain', icon: <TrendingUp /> },
    { metric: '60%', label: 'Cost Reduction', icon: <Speed /> },
    { metric: '99.9%', label: 'Automation Uptime', icon: <Schedule /> },
    { metric: '50+', label: 'Processes Automated', icon: <Engineering /> },
];

// Process Steps
const processSteps = [
    { step: '1', title: 'Analysis', description: 'Analyze current processes and identify automation opportunities' },
    { step: '2', title: 'Design', description: 'Design automated workflows and integration architecture' },
    { step: '3', title: 'Implementation', description: 'Develop and deploy automation solutions' },
    { step: '4', title: 'Optimization', description: 'Monitor, maintain, and continuously improve automation' },
];

const AutomationSection: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            id="automation"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                        // radial-gradient(circle at 70% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.05) 0%, transparent 70%)
                    `,
                }}
            />

            <Container maxWidth="lg">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" sx={{ background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, mb: 3 }}>
                            Intelligent Automation
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.6, fontSize: '1.2rem' }}>
                            Transform your business operations with smart automation solutions that reduce manual work, increase efficiency, and drive growth.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Automation Features - Responsive Wrap */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start', gap: 3, mb: 10 }}>
                    {automationFeatures.map((feature, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }}>
                            <Card sx={{ width: isMobile ? '100%' : '340px', background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden', position: 'relative', '&:hover': { boxShadow: `0 20px 40px ${feature.color}20`, border: `1px solid ${feature.color}40` } }}>
                                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <Avatar sx={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}80)`, mr: 2, width: 50, height: 50 }}>
                                            {feature.icon}
                                        </Avatar>
                                        <Typography variant="h6" sx={{ fontWeight: 600, color: feature.color }}>
                                            {feature.title}
                                        </Typography>
                                    </Box>
                                    <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, flexGrow: 1 }}>
                                        {feature.description}
                                    </Typography>
                                    <Box>
                                        <Typography variant="body2" sx={{ mb: 1.5, color: 'text.secondary', fontWeight: 600 }}>
                                            Key Benefits:
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {feature.benefits.map((benefit, benefitIndex) => (
                                                <Chip key={benefitIndex} label={benefit} size="small" sx={{ background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`, border: `1px solid ${feature.color}30`, color: feature.color, fontWeight: 500 }} />
                                            ))}
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </Box>

                {/* Process Steps */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 600, background: 'linear-gradient(135deg, #00D4FF 0%, #FF6B6B 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Our Automation Process
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'space-between', gap: 4 }}>
                        {processSteps.map((step, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                                <Box sx={{ width: isMobile ? '100%' : '220px', textAlign: 'center' }}>
                                    <Box sx={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #00D4FF, #FF6B6B)', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2, fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                                        {step.step}
                                    </Box>
                                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>{step.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{step.description}</Typography>
                                </Box>
                            </motion.div>
                        ))}
                    </Box>
                </Box>

                {/* Stats Section */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mb: 10 }}>
                    {automationStats.map((stat, index) => (
                        <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                            <Box sx={{ background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)', p: 4, minWidth: '150px', textAlign: 'center' }}>
                                <Avatar sx={{ background: 'linear-gradient(135deg, #00D4FF, #FF6B6B)', mx: 'auto', mb: 2 }}>{stat.icon}</Avatar>
                                <Typography variant="h4" sx={{ fontWeight: 700, color: '#00D4FF', mb: 1 }}>{stat.metric}</Typography>
                                <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Box>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>Ready to Automate Your Business?</Typography>
                    <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                        Let's identify automation opportunities and implement solutions that drive efficiency and growth.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button variant="contained" size="large" sx={{ background: 'linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)', px: 6, py: 2, fontSize: '1.1rem', fontWeight: 600, borderRadius: 3, '&:hover': { background: 'linear-gradient(135deg, #4DD4FF 0%, #00D4FF 100%)', transform: 'translateY(-3px)', boxShadow: '0 12px 30px rgba(0, 212, 255, 0.4)' } }}>Get Automation Audit</Button>
                        <Button variant="outlined" size="large" sx={{ borderColor: '#FF6B6B', color: '#FF6B6B', px: 6, py: 2, fontSize: '1.1rem', fontWeight: 600, borderRadius: 3, '&:hover': { borderColor: '#FF8E8E', color: '#FF8E8E', backgroundColor: 'rgba(255, 107, 107, 0.1)', transform: 'translateY(-3px)' } }}>View Success Stories</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default AutomationSection;
