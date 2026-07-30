import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer({ darkMode }) {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: darkMode ? '#070210' : '#f5f3ff',
        borderTop: darkMode ? '1px solid rgba(147, 242, 3, 0.08)' : '1px solid rgba(104, 5, 241, 0.08)',
        color: 'text.secondary',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ mb: 4 }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                mb: 0.5,
                background: darkMode
                  ? 'linear-gradient(45deg, #93F203 30%, #6805F1 90%)'
                  : 'linear-gradient(45deg, #6805F1 0%, #9333ea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              DHRUVIN VIRADIYA
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Frontend-focused Full Stack Developer
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/dhruvin-viradiya-792989299"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ border: '1px solid rgba(255,255,255,0.05)', '&:hover': { color: 'primary.main' } }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/dhruvin-viru"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ border: '1px solid rgba(255,255,255,0.05)', '&:hover': { color: 'primary.main' } }}
            >
              <GitHubIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ mb: 4 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} Dhruvin Viradiya. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
            Built with React, Vite &amp; Node.js
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
