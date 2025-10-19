import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AISolutionsSection from './components/AISolutionsSection';
import AutomationSection from './components/AutomationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ overflowX: 'hidden', width:"100%" }}>
                <Navbar />
                <main>
                    <HeroSection />
                    <ServicesSection />
                    <AISolutionsSection />
                    <AutomationSection />
                    <ContactSection />
                </main>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default App;



