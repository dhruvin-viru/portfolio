import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import StorageIcon from '@mui/icons-material/Storage';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// Default Fallback Projects with custom gradient backgrounds for the mockup headers
const defaultProjects = [
  {
    title: 'BillStacker',
    subtitle: 'SaaS Billing Application',
    description:
      'A responsive billing & invoice management platform with dynamic card layouts, quick filters, form validations, and clean API error handling. Built to handle real-world billing workflows.',
    tech: ['React.js', 'Node.js', 'Firebase', 'MUI', 'CSS3'],
    liveLink: 'https://billstacker.vercel.app/',
    githubLink: 'https://github.com/dhruvin-viru/billstacker',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #0d1b2a 100%)',
    accentColor: '#3b82f6',
    icon: <StorageIcon sx={{ fontSize: 40, color: 'rgba(255,255,255,0.85)' }} />,
  },
  {
    title: 'BookStore Inventory',
    subtitle: 'Inventory Management System',
    description:
      'A full CRUD book inventory system with React Context API, Formik validation, add/edit modals, and live state syncing. Clean table UI with search and category filters.',
    tech: ['React.js', 'Context API', 'Formik', 'REST API', 'CSS3'],
    liveLink: 'https://book-inventery-nu.vercel.app/',
    githubLink: 'https://github.com/dhruvin-viru/book-inventery',
    gradient: 'linear-gradient(135deg, #065f46 0%, #022c22 100%)',
    accentColor: '#22c55e',
    icon: <MenuBookIcon sx={{ fontSize: 40, color: 'rgba(255,255,255,0.85)' }} />,
  },
  {
    title: 'Quiz App',
    subtitle: 'Interactive Knowledge Platform',
    description:
      'An engaging frontend quiz application featuring animated question states, score tracking, instant feedback, responsive layout, and clean global state management.',
    tech: ['React.js', 'Custom CSS', 'useState', 'useEffect'],
    liveLink: 'https://quiz-app-lilac-one-27.vercel.app/',
    githubLink: 'https://github.com/dhruvin-viru/quiz-app',
    gradient: 'linear-gradient(135deg, #581c87 0%, #1e1b4b 100%)',
    accentColor: '#a855f7',
    icon: <FolderOpenIcon sx={{ fontSize: 40, color: 'rgba(255,255,255,0.85)' }} />,
  },
];

function Projects({ darkMode }) {
  // Always use the hardcoded defaultProjects (real links, real data)
  const projects = defaultProjects;

  const glassStyles = {
    backdropFilter: 'blur(12px)',
    background: darkMode ? 'rgba(19, 10, 36, 0.4)' : 'rgba(255, 255, 255, 0.6)',
    border: darkMode ? '1px solid rgba(147, 242, 3, 0.1)' : '1px solid rgba(104, 5, 241, 0.1)',
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 4, md: 6 },
        mb: { xs: 4, md: 6 },
        backgroundColor: 'transparent',
        position: 'relative',
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
            display: 'inline-block',
          }}
        >
          Featured Projects
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px' }}>
          Check out some of my recent web applications, built with clean modular design patterns and fully responsive layouts.
        </Typography>
      </Box>

      {/* Projects Grid — 3 columns on desktop */}
      <Grid container spacing={4}>
        {projects.map((project, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Card
              sx={{
                ...glassStyles,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 5,
                boxShadow: 'none',
                transition: 'all 0.3s ease-in-out',
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: 'primary.main',
                  boxShadow: darkMode
                    ? '0 15px 30px rgba(147, 242, 3, 0.18)'
                    : '0 15px 25px rgba(104, 5, 241, 0.08)',
                }
              }}
            >
              {/* Card preview header */}
              <Box
                sx={{
                  height: '140px',
                  background: project.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* macOS-style traffic dots */}
                <Stack direction="row" spacing={0.8} sx={{ position: 'absolute', top: 12, left: 14 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#eab308' }} />
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e' }} />
                </Stack>

                {/* Live badge */}
                <Box sx={{
                  position: 'absolute', top: 10, right: 14,
                  px: 1.2, py: 0.3, borderRadius: 10,
                  background: 'rgba(34,197,94,0.15)',
                  border: '1px solid rgba(34,197,94,0.4)',
                }}>
                  <Typography variant="caption" sx={{ color: '#22c55e', fontWeight: 800, fontSize: '0.65rem' }}>
                    ● LIVE
                  </Typography>
                </Box>

                {/* Accent glow + icon */}
                <Box sx={{
                  width: 68, height: 68, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)',
                  border: `1px solid ${project.accentColor}40`,
                  boxShadow: `0 0 24px ${project.accentColor}30`,
                }}>
                  {project.icon}
                </Box>
              </Box>

              <CardContent sx={{ p: 3, flexGrow: 1 }}>
                <Typography variant="caption" sx={{
                  color: project.accentColor || 'primary.main',
                  fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5
                }}>
                  {project.subtitle}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, mt: 1, mb: 1.5, fontSize: '1.2rem' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.75, fontSize: '0.88rem' }}>
                  {project.description}
                </Typography>

                {/* Technology Chips */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                  {project.tech.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.72rem',
                        height: 26,
                        backgroundColor: darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                        border: darkMode
                          ? '1px solid rgba(255,255,255,0.08)'
                          : '1px solid rgba(0,0,0,0.08)',
                        color: 'text.primary',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>

              <CardActions sx={{ px: 3, pb: 3, pt: 0, justifyContent: 'space-between' }}>
                <Button
                  size="small"
                  component="a"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<LaunchIcon sx={{ fontSize: 15 }} />}
                  sx={{
                    textTransform: 'none', fontWeight: 800,
                    color: project.accentColor || 'primary.main',
                    '&:hover': { background: `${project.accentColor}12` },
                  }}
                >
                  Live Preview
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  component="a"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon sx={{ fontSize: 15 }} />}
                  sx={{
                    textTransform: 'none', fontWeight: 700,
                    borderRadius: 2.5,
                    borderColor: darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                    color: 'text.secondary',
                    fontSize: '0.8rem',
                    '&:hover': {
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      background: 'transparent',
                    },
                  }}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Global GitHub CTA */}
      <Box sx={{ mt: 6, textAlign: 'left' }}>
        <Button
          variant="contained"
          component="a"
          href="https://github.com/dhruvin-viru"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          sx={{
            px: 4.5,
            py: 1.8,
            fontSize: '1rem',
            fontWeight: 800,
            borderRadius: 4,
            background: 'linear-gradient(45deg, #6805F1, #93F203)',
            color: '#ffffff',
            boxShadow: '0 4px 15px rgba(104, 5, 241, 0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(104, 5, 241, 0.4)',
            }
          }}
        >
          Explore More on GitHub
        </Button>
      </Box>
    </Box>
  );
}

export default Projects;
