'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface DrawerProps {
  open: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
  children: React.ReactNode;
}

const LeftDrawer: React.FC<DrawerProps> = ({ open, toggleDrawer, children }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <Box
        component="div"
        sx={{ width: 250, display: 'flex', flexDirection: 'column', height: '100%' }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {/* Close Button */}
        <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: 'flex-end', m: 1 }}>
          <CloseIcon />
        </IconButton>

        {/* Drawer Content (e.g., Navigation Links) */}
        <Box sx={{ p: 2 }}>
          {children}
        </Box>
      </Box>
    </Drawer>
  );
};

export default LeftDrawer;
