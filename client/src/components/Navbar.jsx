import * as React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../assets/skillswapLogobg.png"

function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-6xl bg-white rounded-2xl shadow-lg px-4 sm:px-6 py-3 flex items-center justify-between"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Logo and Brand */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
        {/* <AdbIcon sx={{ color: '#6366f1', fontSize: 32 }} /> */}
        <img src={logo} alt="SkillSwap Logo" className="w-15 h-15 sm:w-10 sm:h-10" />
        <span className="font-bold text-lg sm:text-xl text-[#18181b] tracking-wide">SkillSwap</span>
      </div>

      {/* Hamburger for mobile */}
      <div className="sm:hidden">
        <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>

      {/* Navigation Links */}
      <div className={`flex-col sm:flex-row flex items-center gap-6 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent rounded-b-2xl sm:rounded-none shadow-lg sm:shadow-none px-4 sm:px-0 py-4 sm:py-0 transition-all duration-200 ${mobileOpen ? 'flex' : 'hidden sm:flex'}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-base font-medium px-2 py-1 transition-colors ${
              isActive ? 'border-b-2 border-[#6366f1] text-[#6366f1]' : 'text-[#18181b] hover:text-[#6366f1]'
            }`
          }
          onClick={() => setMobileOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/browse"
          className={({ isActive }) =>
            `text-base font-medium px-2 py-1 transition-colors ${
              isActive ? 'border-b-2 border-[#6366f1] text-[#6366f1]' : 'text-[#18181b] hover:text-[#6366f1]'
            }`
          }
          onClick={() => setMobileOpen(false)}
        >
          Browse Skills
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-base font-medium px-2 py-1 transition-colors ${
              isActive ? 'border-b-2 border-[#6366f1] text-[#6366f1]' : 'text-[#18181b] hover:text-[#6366f1]'
            }`
          }
          onClick={() => setMobileOpen(false)}
        >
          About
        </NavLink>
        {/* Auth Buttons for mobile */}
        <div className="flex flex-col sm:hidden gap-2 mt-4">
          <Button
            variant="text"
            onClick={() => { navigate('/login'); setMobileOpen(false); }}
            sx={{
              color: '#6366f1',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem',
              px: 2,
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => { navigate('/signup'); setMobileOpen(false); }}
            sx={{
              background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
              color: '#fff',
              fontWeight: 700,
              borderRadius: '9999px',
              textTransform: 'none',
              fontSize: '1rem',
              px: 3,
              boxShadow: '0 2px 8px 0 rgba(99,102,241,0.15)',
              '&:hover': {
                background: 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)',
              },
            }}
          >
            Signup
          </Button>
        </div>
      </div>

      {/* Auth Buttons for desktop */}
      <div className="hidden sm:flex items-center gap-3">
        <Button
          variant="text"
          onClick={() => navigate('/login')}
          sx={{
            color: '#6366f1',
            fontWeight: 600,
            textTransform: 'none',
            fontSize: '1rem',
            px: 2,
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate('/signup')}
          sx={{
            background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
            color: '#fff',
            fontWeight: 700,
            borderRadius: '9999px',
            textTransform: 'none',
            fontSize: '1rem',
            px: 3,
            boxShadow: '0 2px 8px 0 rgba(99,102,241,0.15)',
            '&:hover': {
              background: 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)',
            },
          }}
        >
          Signup
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
