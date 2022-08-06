import DashboardLayout from './components/DashboardLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

// Custom theme
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4b5078',
    },
    secondary: {
      main: '#4fc3f7',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(22,22,22,0.87)',
      secondary: 'rgba(0,0,0,0.54)',
    },
    divider: 'rgba(148,148,148,0.12)',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <DashboardLayout />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
