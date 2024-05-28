import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Section = styled('section')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(8, 4),
  textAlign: 'center',
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(16, 4),
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontSize: '2.5rem',
  fontWeight: 'bold',
  [theme.breakpoints.up('md')]: {
    fontSize: '3.75rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4.5rem',
  },
}));

const Subheading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  fontSize: '1.125rem',
  fontWeight: 'normal',
  color: theme.palette.text.secondary,
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem',
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
  },
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

const ContactSection = () => {
  return (
    <Section>
      <Container maxWidth="xl">
        <Heading variant="h1">
          Get in Contact with Us
        </Heading>
        <Subheading variant="body1">
          We're here to help you with any questions or concerns. Feel free to reach out to us anytime.
        </Subheading>
        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="inherit"
          >
            Learn More
          </Button>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default ContactSection;
