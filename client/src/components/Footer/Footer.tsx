import { Box } from '@mui/material';
import { Link } from 'react-router';

const linkStyle = {
  fontFamily: 'Public Sans',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  fontFeatureSettings: "'liga' off",
  color: '#FFFFFF',
  textDecoration: 'none',
  cursor: 'pointer',
};

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(272.5deg, #003055 0%, #034A81 100.67%)',
        pt: '44px',
        pb: '58px',
        px: 'clamp(24px, calc((100vw - 1170px) / 2), 135px)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <Link
          to="/"
          style={linkStyle}
        >
          <Box
            sx={{
              fontFamily: 'Rubik',
              fontWeight: 700,
              fontSize: '26.76px',
              lineHeight: '32px',
              color: '#418CFB',
              cursor: 'pointer',
            }}
          >
            MMDB
          </Box>
        </Link>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px' }}>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/terms" style={linkStyle}>Terms of Use</Link>
          <Link to="/privacy" style={linkStyle}>Privacy policy</Link>
          <Link to="/help" style={linkStyle}>Help</Link>
        </Box>

        <Box
          sx={{
            fontFamily: 'Public Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            fontFeatureSettings: "'liga' off",
            color: '#D1D5DB',
          }}
        >
          © {new Date().getFullYear()} MMDB. All rights reserved.
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;