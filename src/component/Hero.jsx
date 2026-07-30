import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Stack, Chip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EmailIcon from '@mui/icons-material/Email';

// Typewriter hook
function useTypewriter(phrases, typingSpeed = 60, deletingSpeed = 35, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const current = phrases[phraseIdx];

    const tick = () => {
      if (!isDeleting) {
        setDisplayed((prev) => {
          if (prev.length < current.length) return current.slice(0, prev.length + 1);
          return prev;
        });
        if (displayed.length >= current.length - 1) {
          timer.current = setTimeout(() => setIsDeleting(true), pause);
          return;
        }
      } else {
        setDisplayed((prev) => {
          if (prev.length > 0) return prev.slice(0, prev.length - 1);
          return prev;
        });
        if (displayed.length <= 1) {
          setIsDeleting(false);
          setPhraseIdx((idx) => (idx + 1) % phrases.length);
          return;
        }
      }
      timer.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    };

    timer.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer.current);
  }, [displayed, isDeleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

const TYPING_PHRASES = [
  'Creating Clean, Modern Frontend Code',
  'Building Scalable Backend Systems',
  'Crafting Pixel-Perfect UI Experiences',
  'Shipping Fast, Beautiful Web Apps',
];

const TECH_STACKS = [
  'React.js', 'JavaScript (ES6+)', 'Material-UI',
  'Tailwind CSS', 'Node.js', 'Express.js', 'Git & GitHub'
];

function Hero({ darkMode }) {
  const typedText = useTypewriter(TYPING_PHRASES);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        background: darkMode
          ? 'radial-gradient(circle at 10% 20%, rgba(20, 10, 36, 0.4) 0%, rgba(7, 2, 16, 0) 90%)'
          : 'radial-gradient(circle at 10% 20%, rgba(245, 243, 255, 0.4) 0%, rgba(237, 233, 254, 0) 90%)',
        position: 'relative',
        borderRadius: 5,
        mb: { xs: 6, md: 8 },
        p: { xs: 4, md: 6 },
        border: darkMode ? '1px solid rgba(255,255,255,0.02)' : '1px solid rgba(0,0,0,0.02)',
        overflow: 'hidden',
      }}
    >
      {/* Devix Blur Orb */}
      <Box sx={{
        position: 'absolute', top: '-10%', right: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(147, 242, 3, 0.08) 0%, rgba(147, 242, 3, 0) 70%)',
        filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none',
      }} />

      <Box sx={{ width: '100%' }}>

        {/* Label */}
        <Typography variant="subtitle1" sx={{
          fontWeight: 800, color: 'primary.main',
          textTransform: 'uppercase', letterSpacing: 4,
          mb: 2.5, fontSize: '0.9rem'
        }}>
          Specialist Web Developer
        </Typography>

        {/* Name */}
        <Typography variant="h1" sx={{
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
          fontWeight: 900, lineHeight: 1.15, mb: 3,
          color: 'text.primary', letterSpacing: -0.5
        }}>
          Hi, I'm{' '}
          <Box component="span" sx={{
            background: darkMode
              ? 'linear-gradient(45deg, #93F203 30%, #6805F1 90%)'
              : 'linear-gradient(45deg, #6805F1 0%, #9333ea 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Dhruvin Viradiya
          </Box>
        </Typography>

        {/* ── TYPEWRITER subtitle ── */}
        <Box sx={{ mb: 4.5, minHeight: { xs: '3.5rem', md: '2.8rem' } }}>
          <Typography variant="h4" sx={{
            fontSize: { xs: '1.15rem', sm: '1.5rem', md: '1.75rem' },
            fontWeight: 700, color: 'text.secondary',
            display: 'inline',
          }}>
            {typedText}
          </Typography>
          {/* Blinking cursor */}
          <Box component="span" sx={{
            display: 'inline-block',
            width: '3px', height: { xs: '1.15rem', md: '1.75rem' },
            backgroundColor: 'primary.main',
            ml: '3px', verticalAlign: 'middle',
            borderRadius: '2px',
            animation: 'blink 0.85s step-end infinite',
            '@keyframes blink': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0 },
            },
          }} />
        </Box>

        {/* Bio */}
        <Typography variant="body1" sx={{
          fontSize: '1.05rem', color: 'text.secondary',
          lineHeight: 1.85, mb: 5.5, maxWidth: '700px',
        }}>
          Passionate frontend developer and computer applications graduate (B.C.A.) specializing in
          pixel-perfect web apps using React, Material-UI, Tailwind CSS, and Node.js.
        </Typography>

        {/* CTA Buttons */}
        <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap', mb: 6 }}>
          <Button
            variant="contained"
            onClick={() => handleScrollTo('projects')}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              px: 4.5, py: 2, fontSize: '1rem', fontWeight: 800,
              borderRadius: 4,
              background: darkMode
                ? 'linear-gradient(45deg, #93F203 20%, #6805F1 100%)'
                : 'linear-gradient(45deg, #6805F1 0%, #9333ea 100%)',
              color: '#ffffff',
              boxShadow: darkMode
                ? '0 4px 15px 0 rgba(147, 242, 3, 0.35)'
                : '0 4px 15px 0 rgba(104, 5, 241, 0.35)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: darkMode
                  ? '0 6px 22px 0 rgba(147, 242, 3, 0.45)'
                  : '0 6px 22px 0 rgba(104, 5, 241, 0.45)',
              },
            }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleScrollTo('contact')}
            endIcon={<EmailIcon />}
            sx={{
              px: 4.5, py: 2, fontSize: '1rem', fontWeight: 800,
              borderRadius: 4, borderWidth: 2, borderColor: 'primary.main',
              color: 'text.primary', transition: 'all 0.3s ease',
              '&:hover': {
                borderWidth: 2, borderColor: 'primary.main',
                transform: 'translateY(-2px)',
                background: darkMode ? 'rgba(147,242,3,0.06)' : 'rgba(104,5,241,0.06)',
              },
            }}
          >
            Contact Me
          </Button>
        </Box>

        {/* ── Tech Stacks Row ── */}
        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" sx={{
            fontWeight: 800, color: 'text.secondary',
            textTransform: 'uppercase', letterSpacing: 2,
            display: 'block', mb: 1.5, fontSize: '0.75rem'
          }}>
            Primary Tech Stacks
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
            {TECH_STACKS.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  fontWeight: 700, fontSize: '0.78rem',
                  height: 32,
                  backgroundColor: darkMode ? 'rgba(147,242,3,0.05)' : 'rgba(104,5,241,0.05)',
                  border: `1px solid ${darkMode ? 'rgba(147,242,3,0.18)' : 'rgba(104,5,241,0.18)'}`,
                  color: 'text.primary',
                  transition: 'all 0.25s',
                  '&:hover': {
                    backgroundColor: darkMode ? 'rgba(147,242,3,0.14)' : 'rgba(104,5,241,0.12)',
                    borderColor: 'primary.main',
                    transform: 'translateY(-2px)',
                    color: 'primary.main',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default Hero;
