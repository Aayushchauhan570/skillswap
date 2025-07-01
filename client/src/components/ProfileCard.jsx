import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Box,
  IconButton,
  Stack
} from '@mui/material';
import {
  Email, Phone, Public, LocationOn,
  Facebook, Twitter, Instagram, LinkedIn
} from '@mui/icons-material';



export default function ProfileCard({ profile }) {
    
  return (
    <Card sx={{ maxWidth: 900, mx: 'auto', mt: 4, p: 2, borderRadius: 4, boxShadow: 5 }}>
      <Grid container spacing={2}>
        {/* Left - Avatar and Name */}
        <Grid item xs={12} md={4} textAlign="center">
          <Avatar
            src={profile.avatarUrl || profile.name.charAt(0).toUpperCase()}
            sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
          />
          <Typography variant="h5" fontWeight="bold">
            {profile.name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {profile.bio}
          </Typography> */}
        </Grid>

        {/* Right - Info */}
        <Grid item xs={12} md={8}>
          <CardContent
            sx={{
              background: 'linear-gradient(to right, #ec4899, #f97316)',
              borderRadius: 2,
              color: 'white'
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center">
                  <LocationOn sx={{ mr: 1 }} /> 
                  <Typography variant="body2">City, State, 123456</Typography>
                </Box>
                <Box display="flex" alignItems="center" mt={1}>
                  <Email sx={{ mr: 1 }} />
                  <Typography variant="body2">{profile.email}</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center">
                  <Phone sx={{ mr: 1 }} />
                  <Typography variant="body2">1234-5678-900</Typography>
                </Box>
                <Box display="flex" alignItems="center" mt={1}>
                  <Public sx={{ mr: 1 }} />
                  <Typography variant="body2">www.yourdomain.com</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>

        {/*video section */}
        {profile.youtubeUrl && (
        <div className="mt-4">
           <iframe
            width="100%"
            height="200"
            src={profile.youtubeUrl.replace("watch?v=", "embed/")}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </div>
        )}
        
        {/* Social Media Footer */}
        <Grid item xs={12} mt={2} textAlign="center">
          <Typography variant="body2" gutterBottom>
            More Follow Us On Social:
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <IconButton><Facebook /></IconButton>
            <IconButton><Twitter /></IconButton>
            <IconButton><Instagram /></IconButton>
            <IconButton><LinkedIn /></IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
