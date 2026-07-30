import React from 'react';
import { Box, Typography, Button, IconButton, Stack, Paper, Divider, Tooltip, Chip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MessageIcon from '@mui/icons-material/Message';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CodeIcon from '@mui/icons-material/Code';

function ProfileCard({ darkMode, setDarkMode }) {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: 8,
        backdropFilter: 'blur(20px)',
        background: darkMode
          ? 'linear-gradient(135deg, rgba(19,10,36,0.7) 0%, rgba(10,5,20,0.85) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(245,243,255,0.8) 100%)',
        border: darkMode
          ? '1px solid rgba(147,242,3,0.2)'
          : '1px solid rgba(104,5,241,0.15)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: darkMode
          ? '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
          : '0 20px 40px rgba(104,5,241,0.05)',
      }}
    >
      {/* Decorative glow */}
      <Box sx={{
        position: 'absolute', top: '-30px', right: '-30px',
        width: '100px', height: '100px',
        background: 'radial-gradient(circle, rgba(147,242,3,0.15) 0%, rgba(147,242,3,0) 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* ── Top bar: Available badge + dark/light toggle ── */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3.5 }}>

        {/* Available for Work badge */}
        <Box sx={{
          display: 'inline-flex', alignItems: 'center', gap: 1,
          px: 2, py: 0.8, borderRadius: 4,
          backgroundColor: darkMode ? 'rgba(147,242,3,0.08)' : 'rgba(104,5,241,0.06)',
          border: '1px solid', borderColor: 'primary.main',
        }}>
          <Box sx={{
            width: 8, height: 8, borderRadius: '50%',
            backgroundColor: '#93F203', boxShadow: '0 0 10px #93F203',
            animation: 'pulse 1.8s infinite alternate',
          }} />
          <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: 0.5 }}>
            Available for Work
          </Typography>
        </Box>

        {/* Dark / Light toggle */}
        <Tooltip title={darkMode ? 'Switch to Light' : 'Switch to Dark'} placement="left">
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            size="small"
            sx={{
              width: 36, height: 36,
              border: darkMode ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.12)',
              background: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
              color: 'primary.main',
              transition: 'all 0.3s',
              '&:hover': {
                background: darkMode ? 'rgba(147,242,3,0.12)' : 'rgba(104,5,241,0.12)',
                borderColor: 'primary.main',
                transform: 'rotate(20deg)',
              },
            }}
          >
            {darkMode ? <Brightness7Icon sx={{ fontSize: 18 }} /> : <Brightness4Icon sx={{ fontSize: 18 }} />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Profile Image */}
      <Box sx={{
        position: 'relative', width: 170, height: 170,
        mx: 'auto', mb: 3, borderRadius: '50%', padding: '5px',
        background: darkMode
          ? 'linear-gradient(45deg, #93F203 20%, #6805F1 100%)'
          : 'linear-gradient(45deg, #6805F1 0%, #9333ea 100%)',
        boxShadow: darkMode
          ? '0 10px 30px rgba(147,242,3,0.3)'
          : '0 10px 20px rgba(104,5,241,0.2)',
      }}>
        <Box
          component="img"
          src="/profile.jpg"
          alt="Dhruvin Viradiya"
          sx={{
            width: '100%', height: '100%', objectFit: 'cover',
            borderRadius: '50%',
            backgroundColor: darkMode ? '#070210' : '#fff',
            transition: 'transform 0.5s ease',
            '&:hover': { transform: 'scale(1.02)' },
          }}
          onError={(e) => { e.target.src = '/logo192.png'; }}
        />
      </Box>

      {/* Name + Role */}
      <Typography variant="h5" sx={{ fontWeight: 900, mb: 0.8, letterSpacing: 0.5 }}>
        Dhruvin Viradiya
      </Typography>
      <Typography variant="subtitle2" sx={{
        fontWeight: 800, color: 'primary.main',
        textTransform: 'uppercase', letterSpacing: 2, mb: 3,
      }}>
        Full Stack Developer
      </Typography>

      <Divider sx={{ my: 2.5, borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }} />

      {/* Contact Info */}
      <Stack spacing={2.5} sx={{ textAlign: 'left', mb: 4.5 }}>
        <Stack direction="row" spacing={2.5} alignItems="center">
          <IconButton size="small" sx={{
            background: darkMode ? 'rgba(147,242,3,0.08)' : 'rgba(104,5,241,0.06)',
            color: 'primary.main',
          }}>
            <EmailIcon fontSize="small" />
          </IconButton>
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 600 }}>
              Email
            </Typography>
            <Typography variant="body2" component="a"
              href="mailto:dhruvinviradiya1543@gmail.com"
              sx={{ fontWeight: 800, textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}
            >
              dhruvinviradiya1543@gmail.com
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2.5} alignItems="center">
          <IconButton size="small" sx={{
            background: darkMode ? 'rgba(147,242,3,0.08)' : 'rgba(104,5,241,0.06)',
            color: 'primary.main',
          }}>
            <PhoneIcon fontSize="small" />
          </IconButton>
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 600 }}>
              Phone
            </Typography>
            <Typography variant="body2" component="a"
              href="tel:+917283888838"
              sx={{ fontWeight: 800, textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}
            >
              +91 7283888838
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={2.5} alignItems="center">
          <IconButton size="small" sx={{
            background: darkMode ? 'rgba(147,242,3,0.08)' : 'rgba(104,5,241,0.06)',
            color: 'primary.main',
          }}>
            <RoomIcon fontSize="small" />
          </IconButton>
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', fontWeight: 600 }}>
              Location
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 800 }}>
              Surat, Gujarat, India
            </Typography>
          </Box>
        </Stack>
      </Stack>

      {/* Social Links */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2.5 }}>
        <Tooltip title="LinkedIn" placement="top">
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/dhruvin-viradiya-792989299"
            target="_blank" rel="noopener noreferrer"
            sx={{
              border: darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
              background: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
              transition: 'all 0.3s', p: 1.5,
              '&:hover': { color: '#0A66C2', transform: 'translateY(-3px)', backgroundColor: 'rgba(10,102,194,0.1)' },
            }}
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub Profile" placement="top">
          <IconButton
            component="a"
            href="https://github.com/dhruvin-viru"
            target="_blank" rel="noopener noreferrer"
            sx={{
              border: darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
              background: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
              transition: 'all 0.3s', p: 1.5,
              '&:hover': { color: 'primary.main', transform: 'translateY(-3px)', backgroundColor: 'rgba(147,242,3,0.1)' },
            }}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
      </Stack>

      {/* Portfolio source code link */}
      <Box sx={{ mb: 3.5 }}>
        <Button
          fullWidth
          component="a"
          href="https://github.com/dhruvin-viru/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<CodeIcon sx={{ fontSize: 16 }} />}
          endIcon={<GitHubIcon sx={{ fontSize: 15 }} />}
          size="small"
          sx={{
            py: 1,
            fontSize: '0.8rem',
            fontWeight: 700,
            borderRadius: 3,
            textTransform: 'none',
            color: 'text.secondary',
            border: darkMode
              ? '1px dashed rgba(255,255,255,0.10)'
              : '1px dashed rgba(0,0,0,0.12)',
            background: 'transparent',
            letterSpacing: 0.3,
            transition: 'all 0.25s',
            '&:hover': {
              color: 'primary.main',
              borderColor: 'primary.main',
              background: darkMode ? 'rgba(147,242,3,0.04)' : 'rgba(104,5,241,0.04)',
              transform: 'none',
            },
          }}
        >
          View Portfolio Source Code
        </Button>
      </Box>

      {/* Action Buttons */}
      <Stack spacing={2}>
        <Button
          fullWidth variant="contained"
          onClick={handleScrollToContact}
          startIcon={<MessageIcon />}
          sx={{
            py: 1.8, fontSize: '0.95rem', fontWeight: 800, borderRadius: 4,
            background: darkMode
              ? 'linear-gradient(45deg, #93F203 20%, #6805F1 100%)'
              : 'linear-gradient(45deg, #6805F1 0%, #9333ea 100%)',
            color: '#fff',
            boxShadow: darkMode
              ? '0 4px 15px rgba(147,242,3,0.25)'
              : '0 4px 15px rgba(104,5,241,0.25)',
            transition: 'all 0.3s',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: darkMode
                ? '0 6px 20px rgba(147,242,3,0.35)'
                : '0 6px 20px rgba(104,5,241,0.35)',
            },
          }}
        >
          Hire Me
        </Button>

        <Button
          fullWidth variant="outlined"
          component="a"
          href="/Dhruvin_Viradiya_Resume.pdf"
          download="Dhruvin Viradiya (FrontEnd Developer).pdf"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<CloudDownloadIcon />}
          sx={{
            py: 1.6, fontSize: '0.9rem', fontWeight: 700, borderRadius: 4,
            borderWidth: '2px',
            borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            color: 'text.primary',
            '&:hover': {
              borderWidth: '2px',
              borderColor: 'primary.main',
              background: darkMode ? 'rgba(147,242,3,0.05)' : 'rgba(104,5,241,0.05)',
            },
          }}
        >
          Download CV
        </Button>
      </Stack>
    </Paper>
  );
}

export default ProfileCard;
