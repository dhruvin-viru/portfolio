import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Contact({ darkMode }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseToast = () => {
    setToast(prev => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3002/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setToast({
          open: true,
          message: 'Message sent successfully! I will get back to you soon.',
          severity: 'success'
        });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Server returned an error');
      }
    } catch (error) {
      console.error(error);
      setToast({
        open: true,
        message: 'Could not connect to the backend server. Message failed to send.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const glassStyles = {
    backdropFilter: 'blur(12px)',
    background: darkMode ? 'rgba(19, 10, 36, 0.4)' : 'rgba(255, 255, 255, 0.6)',
    border: darkMode ? '1px solid rgba(147, 242, 3, 0.1)' : '1px solid rgba(104, 5, 241, 0.1)',
  };

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 3.5,
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.01)' : 'rgba(0, 0, 0, 0.01)',
      '& fieldset': {
        borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
      },
      '&:hover fieldset': {
        borderColor: 'primary.main',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'primary.main',
        borderWidth: '2px',
        boxShadow: darkMode ? '0 0 12px rgba(147, 242, 3, 0.2)' : '0 0 10px rgba(104, 5, 241, 0.15)',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'text.secondary',
      '&.Mui-focused': {
        color: 'primary.main',
      }
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 4, md: 6 },
        mb: { xs: 4, md: 6 },
        backgroundColor: 'transparent',
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
          Get In Touch
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px' }}>
          Have a project in mind or want to work together? Send me a message using the form below!
        </Typography>
      </Box>

      <Paper
        elevation={3}
        sx={{
          ...glassStyles,
          p: { xs: 4, md: 5 },
          borderRadius: 5,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, letterSpacing: 0.5 }}>
          Send Message
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3.5}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="outlined"
                sx={inputStyles}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                required
                type="email"
                label="Your Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                variant="outlined"
                sx={inputStyles}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                variant="outlined"
                sx={inputStyles}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                multiline
                rows={5}
                label="Your Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                variant="outlined"
                sx={inputStyles}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                disabled={loading}
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  px: 5,
                  py: 1.8,
                  fontSize: '1rem',
                  fontWeight: 800,
                  borderRadius: 4,
                  background: 'linear-gradient(45deg, #93F203, #6805F1)',
                  color: '#ffffff',
                  boxShadow: '0 4px 15px rgba(147, 242, 3, 0.25)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(147, 242, 3, 0.35)',
                  },
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Message feedback Toast */}
      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseToast} severity={toast.severity} sx={{ width: '100%', borderRadius: 3 }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
