import { Box } from '@mui/material';
import { useNavigate } from 'react-router';

function Footer() {
  const navigate = useNavigate();

  const linkStyle = {
    fontFamily: 'Public Sans',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    fontFeatureSettings: "'liga' off",
    color: '#FFFFFF',
    cursor: 'pointer',
  };

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
        <Box
          onClick={() => navigate('/')}
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

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px' }}>
          <Box onClick={() => navigate('/about')} sx={linkStyle}>About</Box>
          <Box onClick={() => navigate('/terms')} sx={linkStyle}>Terms of Use</Box>
          <Box onClick={() => navigate('/privacy')} sx={linkStyle}>Privacy policy</Box>
          <Box onClick={() => navigate('/help')} sx={linkStyle}>Help</Box>
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
          © 2026 MMDB. All rights reserved.
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;