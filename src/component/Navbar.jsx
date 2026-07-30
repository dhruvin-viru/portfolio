import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Stack,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Process', id: 'process' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

function Navbar({ darkMode, setDarkMode, onNavigate, currentPath }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Smart sticky: hide on scroll-down, reveal on scroll-up ──
  const [navVisible, setNavVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 10) {
        setNavVisible(true);
        setScrolled(false);
      } else {
        setScrolled(true);
        if (currentY < lastScrollY.current) {
          // Scrolling UP → show
          setNavVisible(true);
        } else if (currentY > lastScrollY.current + 6) {
          // Scrolling DOWN (with small threshold to avoid jitter) → hide
          setNavVisible(false);
        }
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = useTheme();

  const handleDrawerToggle = () => setMobileOpen((p) => !p);
  const handleSidebarToggle = () => setSidebarOpen((p) => !p);

  const handleScrollTo = (id) => {
    if (currentPath !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const mobileDrawer = (
    <Box sx={{ textAlign: 'center', p: 3, height: '100%', background: darkMode ? '#130a24' : '#ffffff' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 800, letterSpacing: 1 }}>
        DHRUVIN
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => handleScrollTo(item.id)}
              sx={{ textAlign: 'center', borderRadius: 3, mb: 1 }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          // Slide up/down based on scroll direction
          transform: navVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, box-shadow 0.3s ease',
          background: darkMode
            ? scrolled ? 'rgba(7, 2, 16, 0.92)' : 'rgba(7, 2, 16, 0.72)'
            : scrolled ? 'rgba(245, 243, 255, 0.96)' : 'rgba(245, 243, 255, 0.78)',
          backdropFilter: 'blur(20px)',
          boxShadow: scrolled
            ? darkMode
              ? '0 4px 24px rgba(0,0,0,0.4)'
              : '0 4px 24px rgba(104,5,241,0.08)'
            : 'none',
          borderBottom: darkMode
            ? '1px solid rgba(147, 242, 3, 0.08)'
            : '1px solid rgba(104, 5, 241, 0.1)',
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 2, md: 6 } }}>

          {/* Logo */}
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 800,
              cursor: 'pointer',
              background: darkMode
                ? 'linear-gradient(45deg, #93F203 30%, #6805F1 90%)'
                : 'linear-gradient(45deg, #6805F1 0%, #9333ea 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: 0.5,
            }}
            onClick={() => onNavigate('/')}
          >
            DHRUVIN V.
          </Typography>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                sx={{
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: 2.2,
                  py: 1,
                  borderRadius: 3,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    background: darkMode ? 'rgba(147, 242, 3, 0.08)' : 'rgba(104, 5, 241, 0.08)',
                    color: 'primary.main',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Right actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              color="inherit"
              sx={{
                border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                transition: 'all 0.25s',
                '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
              }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            {/* Mobile menu */}
            <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>

            {/* Desktop sidebar */}
            <IconButton
              color="inherit"
              onClick={handleSidebarToggle}
              sx={{
                display: { xs: 'none', md: 'flex' },
                border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.08)',
                transition: 'all 0.25s',
                '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <Toolbar />

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
        }}
      >
        {mobileDrawer}
      </Drawer>

      {/* Desktop Sidebar */}
      <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={handleSidebarToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 380,
            background: darkMode ? '#130a24' : '#ffffff',
            p: 4,
            boxSizing: 'border-box',
          },
        }}
      >
        <Stack spacing={4} sx={{ height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>Dhruvin Viradiya</Typography>
            <IconButton onClick={handleSidebarToggle}><CloseIcon /></IconButton>
          </Box>

          <Divider />

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Full Stack Developer</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              Specialized in crafting clean, high-performance React frontends and scalable Node.js backend solutions.
              Focused on pixel-perfect details and smooth user experiences.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Quick Contact</Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Email</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>dhruvinviradiya1543@gmail.com</Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Phone</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>+91 7283888838</Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Location</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>Surat, Gujarat, India</Typography>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ mt: 'auto' }}>
            <Stack direction="row" spacing={2}>
              <IconButton component="a" href="https://www.linkedin.com/in/dhruvin-viradiya-792989299" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </IconButton>
              <IconButton component="a" href="https://github.com/dhruvin-viru" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Drawer>
    </Box>
  );
}

export default Navbar;
