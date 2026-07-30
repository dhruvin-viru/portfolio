import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Stack, LinearProgress } from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';

const defaultSkills = [
  { name: 'React.js',           category: 'Frontend', level: 'Advanced',      value: 90 },
  { name: 'Material-UI (MUI)', category: 'Frontend', level: 'Advanced',      value: 88 },
  { name: 'Tailwind CSS',       category: 'Frontend', level: 'Intermediate',  value: 82 },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 'Intermediate',  value: 82 },
  { name: 'HTML5 / CSS3',       category: 'Frontend', level: 'Advanced',      value: 95 },
  { name: 'Node.js',            category: 'Backend',  level: 'Learning',      value: 58 },
  { name: 'Express.js',         category: 'Backend',  level: 'Learning',      value: 54 },
  { name: 'REST APIs',          category: 'Backend',  level: 'Learning',      value: 62 },
  { name: 'Git & GitHub',       category: 'Tools',    level: 'Intermediate',  value: 80 },
  { name: 'VS Code',            category: 'Tools',    level: 'Advanced',      value: 92 },
];

const LEVEL_STYLE = {
  'Advanced':     { bg: 'rgba(147,242,3,0.13)',  border: 'rgba(147,242,3,0.4)',   text: '#93F203' },
  'Intermediate': { bg: 'rgba(168,85,247,0.13)', border: 'rgba(168,85,247,0.4)',  text: '#a855f7' },
  'Learning':     { bg: 'rgba(234,179,8,0.13)',  border: 'rgba(234,179,8,0.4)',   text: '#eab308' },
};

const CATEGORIES = [
  { title: 'Frontend Development',    filter: 'Frontend', Icon: ExtensionIcon },
  { title: 'Backend (Ongoing)',       filter: 'Backend',  Icon: CodeIcon      },
  { title: 'Tools & Version Control', filter: 'Tools',    Icon: BuildIcon     },
];

function Skills({ darkMode }) {
  const [skills, setSkills] = useState(defaultSkills);

  useEffect(() => {
    fetch('http://localhost:3002/api/skills')
      .then(r => { if (r.ok) return r.json(); throw new Error(); })
      .then(data => {
        if (data?.length > 0) {
          setSkills(data.map(sk => {
            const fb = defaultSkills.find(d => d.name.toLowerCase() === sk.name.toLowerCase());
            return { ...sk, value: fb?.value ?? 70 };
          }));
        }
      })
      .catch(() => {});
  }, []);

  const glass = {
    backdropFilter: 'blur(14px)',
    background: darkMode ? 'rgba(19,10,36,0.5)' : 'rgba(255,255,255,0.72)',
    border: darkMode
      ? '1px solid rgba(147,242,3,0.12)'
      : '1px solid rgba(104,5,241,0.12)',
  };

  const barGradient = darkMode
    ? 'linear-gradient(90deg, #93F203 0%, #6805F1 100%)'
    : 'linear-gradient(90deg, #6805F1 0%, #9333ea 100%)';

  return (
    <Box id="skills" sx={{ py: { xs: 4, md: 6 }, mb: { xs: 4, md: 6 } }}>

      {/* Section Header */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h2" sx={{
          fontWeight: 800,
          fontSize: { xs: '1.75rem', md: '2.25rem' },
          mb: 1.5,
          background: darkMode
            ? 'linear-gradient(45deg, #93F203 30%, #6805F1 90%)'
            : 'linear-gradient(45deg, #6805F1 0%, #9333ea 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
        }}>
          My Tech Stacks
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px' }}>
          A detailed look at my technical expertise, categorised by frontend, backend, and development tools.
        </Typography>
      </Box>

      {/* ── Horizontal Row Cards ── */}
      <Stack spacing={3}>
        {CATEGORIES.map((cat, cIdx) => {
          const catSkills = skills.filter(
            s => s.category.toLowerCase() === cat.filter.toLowerCase()
          );

          return (
            <Paper key={cIdx} elevation={3} sx={{
              ...glass,
              borderRadius: 5,
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                boxShadow: darkMode
                  ? '0 8px 28px rgba(147,242,3,0.10)'
                  : '0 8px 24px rgba(104,5,241,0.08)',
              },
            }}>
              {/* ── Row: icon-label left | skills right ── */}
              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'stretch',
              }}>

                {/* LEFT: category icon + title */}
                <Box sx={{
                  flexShrink: 0,
                  width: { xs: '100%', sm: '180px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.5,
                  p: 3,
                  borderRight: { sm: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)' },
                  borderBottom: { xs: darkMode ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)', sm: 'none' },
                  background: darkMode
                    ? 'rgba(147,242,3,0.03)'
                    : 'rgba(104,5,241,0.03)',
                }}>
                  <Box sx={{
                    width: 48, height: 48, borderRadius: 3,
                    background: darkMode ? 'rgba(147,242,3,0.10)' : 'rgba(104,5,241,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'primary.main',
                    boxShadow: darkMode
                      ? '0 0 16px rgba(147,242,3,0.15)'
                      : '0 0 12px rgba(104,5,241,0.12)',
                  }}>
                    <cat.Icon sx={{ fontSize: 24 }} />
                  </Box>
                  <Typography variant="body2" sx={{
                    fontWeight: 800, fontSize: '0.85rem',
                    textAlign: 'center', lineHeight: 1.35,
                    color: 'text.primary',
                  }}>
                    {cat.title}
                  </Typography>
                </Box>

                {/* RIGHT: 2-column CSS grid of skill cards */}
                <Box sx={{
                  flex: 1,
                  p: 2.5,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 1.6,
                  alignContent: 'start',
                }}>
                  {catSkills.length === 0 ? (
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic', gridColumn: '1 / -1' }}>
                      Coming soon…
                    </Typography>
                  ) : catSkills.map((skill, sIdx) => {
                    const ls = LEVEL_STYLE[skill.level] ?? LEVEL_STYLE['Intermediate'];
                    return (
                      <Box key={sIdx} sx={{
                        p: '10px 14px',
                        borderRadius: 3,
                        background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                        border: darkMode
                          ? '1px solid rgba(255,255,255,0.06)'
                          : '1px solid rgba(0,0,0,0.06)',
                        transition: 'all 0.22s',
                        cursor: 'default',
                        '&:hover': {
                          background: darkMode ? 'rgba(147,242,3,0.06)' : 'rgba(104,5,241,0.06)',
                          borderColor: 'primary.main',
                          transform: 'translateY(-2px)',
                        },
                      }}>
                        {/* Name + badge row */}
                        <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 1,
                          mb: 1.2,
                        }}>
                          <Typography variant="body2" sx={{ fontWeight: 800, fontSize: '0.85rem', lineHeight: 1.3 }}>
                            {skill.name}
                          </Typography>
                          <Box sx={{
                            flexShrink: 0,
                            px: 1, py: '2px',
                            borderRadius: 10,
                            background: ls.bg,
                            border: `1px solid ${ls.border}`,
                          }}>
                            <Typography variant="caption" sx={{
                              fontWeight: 800, fontSize: '0.65rem',
                              color: ls.text, whiteSpace: 'nowrap',
                            }}>
                              {skill.level}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Progress bar */}
                        <LinearProgress
                          variant="determinate"
                          value={skill.value ?? 75}
                          sx={{
                            height: 5, borderRadius: 3,
                            backgroundColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                              background: barGradient,
                            },
                          }}
                        />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}

export default Skills;
