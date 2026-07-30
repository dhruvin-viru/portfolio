import React from 'react';
import { Box, Typography, Grid, LinearProgress, Stack, Paper } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import CategoryIcon from '@mui/icons-material/Category';
import TranslateIcon from '@mui/icons-material/Translate';

function About({ darkMode }) {
  const strengths = [
    'Quick Learner',
    'Strong UI sense',
    'Clean Code Writing',
    'Team Collaboration',
    'Consistent Practice',
    'Analytical thinking',
  ];

  const languages = [
    { name: 'Gujrati', level: 95, desc: 'Fluent' },
    { name: 'Hindi', level: 90, desc: 'Fluent' },
    { name: 'English', level: 75, desc: 'Intermediate' },
  ];

  const glassStyles = {
    backdropFilter: 'blur(12px)',
    background: darkMode ? 'rgba(19, 10, 36, 0.4)' : 'rgba(255, 255, 255, 0.6)',
    border: darkMode ? '1px solid rgba(147, 242, 3, 0.1)' : '1px solid rgba(104, 5, 241, 0.1)',
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 4, md: 6 },
        mb: { xs: 4, md: 6 },
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      {/* Section Title */}
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
          About Me
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px' }}>
          A look into my professional background, key developer strengths, and languages.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Objective & Strengths */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={4}>
            <Paper
              elevation={3}
              sx={{
                ...glassStyles,
                p: 4,
                borderRadius: 5,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <WorkspacePremiumIcon color="primary" /> Career Objective
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                To work as a Full Stack Developer in a growth-oriented company where I can use my frontend expertise, learn backend deeply, and build real-world applications.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{
                ...glassStyles,
                p: 4,
                borderRadius: 5,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>
                Key Strengths
              </Typography>
              <Grid container spacing={2}>
                {strengths.map((strength) => (
                  <Grid size={{ xs: 6 }} key={strength}>
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: 3,
                        background: darkMode ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                        borderLeft: '4px solid',
                        borderLeftColor: 'primary.main',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateX(5px)',
                        },
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        {strength}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Stack>
        </Grid>

        {/* Education & Languages */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={4}>
            {/* Education */}
            <Paper
              elevation={3}
              sx={{
                ...glassStyles,
                p: 4,
                borderRadius: 5,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <SchoolIcon color="primary" /> Education
              </Typography>

              <Stack spacing={3}>
                <Box sx={{ position: 'relative', pl: 3.5, borderLeft: '2px solid rgba(147, 242, 3, 0.3)' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '-6px',
                      top: '4px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                    }}
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                    B.C.A. (Bachelor of Computer Applications)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                    Veer Narmad South Gujarat University (VNSGU) | 2026
                  </Typography>
                </Box>

                <Box sx={{ position: 'relative', pl: 3.5, borderLeft: '2px solid rgba(147, 242, 3, 0.3)' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '-6px',
                      top: '4px',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'primary.main',
                    }}
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                    Full Stack Developer Course
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5 }}>
                    Creative Design & Multimedia Institute (CDMI)
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>
                    Frontend Completed | Backend Ongoing (2026 - Present)
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            {/* Languages & Interests */}
            <Grid container spacing={3}>
              {/* Languages */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Paper
                  elevation={3}
                  sx={{
                    ...glassStyles,
                    p: 3,
                    height: '100%',
                    borderRadius: 4,
                    boxSizing: 'border-box',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TranslateIcon color="primary" fontSize="small" /> Languages
                  </Typography>
                  <Stack spacing={2.2}>
                    {languages.map((lang) => (
                      <Box key={lang.name}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {lang.name}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {lang.desc}
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={lang.level}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>

              {/* Interests */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <Paper
                  elevation={3}
                  sx={{
                    ...glassStyles,
                    p: 3,
                    height: '100%',
                    borderRadius: 4,
                    boxSizing: 'border-box',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CategoryIcon color="primary" fontSize="small" /> Interests
                  </Typography>
                  <Stack spacing={1.8}>
                    {['Web Development', 'UI/UX Design', 'Learning New Tech'].map((interest) => (
                      <Box
                        key={interest}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: 'secondary.main',
                          }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {interest}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
