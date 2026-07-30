import React from 'react';
import { Box, Typography, Grid, Paper, Stack } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaletteIcon from '@mui/icons-material/Palette';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Process({ darkMode }) {
  const steps = [
    {
      num: '01',
      title: 'Plan',
      desc: 'Research, outline scope, gather requirements, and analyze details.',
      icon: <AssignmentIcon sx={{ fontSize: 26 }} />
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Wireframe, craft clean modern layouts, choose typography, and set palettes.',
      icon: <PaletteIcon sx={{ fontSize: 26 }} />
    },
    {
      num: '03',
      title: 'Code',
      desc: 'Build modular, highly responsive React frontend and robust Node.js backend.',
      icon: <CodeIcon sx={{ fontSize: 26 }} />
    },
    {
      num: '04',
      title: 'Test',
      desc: 'Verify visual layout, test form fields, check API calls, and clean up bugs.',
      icon: <BugReportIcon sx={{ fontSize: 26 }} />
    },
    {
      num: '05',
      title: 'Deploy',
      desc: 'Publish application to production, run checks, and implement SEO best practices.',
      icon: <RocketLaunchIcon sx={{ fontSize: 26 }} />
    }
  ];

  const glassStyles = {
    backdropFilter: 'blur(12px)',
    background: darkMode ? 'rgba(19, 10, 36, 0.4)' : 'rgba(255, 255, 255, 0.6)',
    border: darkMode ? '1px solid rgba(147, 242, 3, 0.1)' : '1px solid rgba(104, 5, 241, 0.1)',
  };

  return (
    <Box
      id="process"
      sx={{
        py: { xs: 4, md: 6 },
        mb: { xs: 4, md: 6 },
        background: 'transparent',
      }}
    >
      {/* Section Header */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            mb: 1.5,
            background: darkMode
              ? 'linear-gradient(45deg, #93F203 30%, #6805F1 90%)'
              : 'linear-gradient(45deg, #6805F1 0%, #9333ea 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}
        >
          Work Process
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px' }}>
          A structured, professional workflow that turns creative ideas into clean, production-ready applications.
        </Typography>
      </Box>

      {/* Connected Steps Timeline */}
      <Grid container spacing={3} alignItems="stretch">
        {steps.map((step, idx) => (
            <Grid
              key={idx}
              sx={{
                flexBasis: { xs: '100%', sm: '50%', md: '20%' },
                maxWidth: { xs: '100%', sm: '50%', md: '20%' },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  ...glassStyles,
                  p: 3.5,
                  height: '100%',
                  borderRadius: 5,
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'primary.main',
                    boxShadow: darkMode
                      ? '0 10px 25px rgba(147, 242, 3, 0.15)'
                      : '0 10px 20px rgba(104, 5, 241, 0.08)',
                  }
                }}
              >
                {/* Step badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 15,
                    right: 20,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: darkMode ? 'rgba(147, 242, 3, 0.15)' : 'rgba(104, 5, 241, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '0.85rem',
                      fontWeight: 900,
                      color: 'primary.main'
                    }}
                  >
                    {step.num}
                  </Typography>
                </Box>

                {/* Icon wrapper */}
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: 3,
                    background: darkMode
                      ? 'linear-gradient(135deg, rgba(147, 242, 3, 0.08) 0%, rgba(104, 5, 241, 0.08) 100%)'
                      : 'linear-gradient(135deg, rgba(104, 5, 241, 0.04) 0%, rgba(147, 242, 3, 0.04) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                    mb: 3
                  }}
                >
                  {step.icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: '1.05rem' }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.85rem' }}>
                  {step.desc}
                </Typography>
              </Paper>
            </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Process;
