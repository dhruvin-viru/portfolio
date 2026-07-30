import React, { useState, useEffect, useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Box, CircularProgress, Typography } from '@mui/material';
import ProfileCard from './component/ProfileCard';
import Hero from './component/Hero';
import About from './component/About';
import Process from './component/Process';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fadePreloader, setFadePreloader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadePreloader(true);
      const hideTimer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(hideTimer);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: { main: darkMode ? '#93F203' : '#6805F1' },
          secondary: { main: darkMode ? '#6805F1' : '#93F203' },
          background: {
            default: darkMode ? '#070210' : '#f5f3ff',
            paper: darkMode ? '#130a24' : '#ffffff',
          },
          text: {
            primary: darkMode ? '#f8fafc' : '#0f0525',
            secondary: darkMode ? '#94a3b8' : '#4c3b6f',
          },
        },
        typography: {
          fontFamily: "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 },
          h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 },
          h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 },
          h4: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
          h5: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
          h6: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
          body1: { fontFamily: "'Work Sans', sans-serif" },
          body2: { fontFamily: "'Work Sans', sans-serif" },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: { borderRadius: 14, textTransform: 'none', fontWeight: 600, padding: '10px 24px' },
            },
          },
          MuiPaper: {
            styleOverrides: { root: { backgroundImage: 'none' } },
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.98); opacity: 0.8; }
          100% { transform: scale(1.02); opacity: 1; }
        }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Black Preloader */}
      {loading && (
        <Box sx={{
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundColor: '#000',
          zIndex: 999999,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          opacity: fadePreloader ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
          pointerEvents: 'none',
        }}>
          <Typography variant="h3" sx={{
            fontWeight: 900, color: '#fff', mb: 4,
            letterSpacing: '0.2em', textAlign: 'center',
            textShadow: '0 0 10px rgba(147,242,3,0.6), 0 0 20px rgba(104,5,241,0.4)',
            animation: 'pulse 1.5s infinite alternate',
          }}>
            DHRUVIN VIRADIYA
          </Typography>
          <CircularProgress size={48} thickness={4}
            sx={{ color: '#93F203', filter: 'drop-shadow(0 0 8px #93F203)' }}
          />
        </Box>
      )}

      {/* Page Shell — no Navbar */}
      <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
        color: 'text.primary',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}>

        {/* ── Two-column layout ── */}
        <Box sx={{
          flexGrow: 1,
          maxWidth: '1400px',
          mx: 'auto',
          width: '100%',
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 5 },
          alignItems: 'flex-start',
        }}>

          {/* Left: sticky profile card */}
          <Box sx={{
            width: { xs: '100%', md: '320px', lg: '360px' },
            flexShrink: 0,
            position: { md: 'sticky' },
            top: { md: '24px' },
          }}>
            {/* Pass setDarkMode so ProfileCard can toggle theme */}
            <ProfileCard darkMode={darkMode} setDarkMode={setDarkMode} />
          </Box>

          {/* Right: scrolling sections */}
          <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Process darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Contact darkMode={darkMode} />
          </Box>

        </Box>

        <Footer darkMode={darkMode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
