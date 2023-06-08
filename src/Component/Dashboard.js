import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Oppr from '../Images/Vector.png'
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HelpIcon from '@mui/icons-material/Help';
import './main.css';
import SearchIcon from '@mui/icons-material/Search';
import Header from './Header';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TotalVisitsChart from './Chart';
import VisualData from './VisualData';
import Cards from './Cards';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const drawerWidth = 250;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (  

    <div className='side-drawer'>
      
      <Toolbar />  
    <List  >
    <ListItem style={{marginTop:'-25px'}} >
            <ListItemButton  >
            <ListItemIcon>
              <SearchIcon className='SearchIcon' style={{ fontSize: '3rem' }}/>  <span className='mt-2 ms-4 fw-bold text-dark' style={{ fontSize: '20px' }}>Consured</span>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
    
      <ListItem >
            <ListItemButton  >
            <ListItemIcon style={{color:'#7166F9',}}>
                <HouseIcon style={{ fontSize: '2rem' }}/> 
              </ListItemIcon>
              <ListItemText style={{borderRight:'3px solid #7166F9', opacity: '1'}}>Overview</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
            <ListItemIcon style={{color:'#000000'}}>
                <img src={Oppr}/> 
              </ListItemIcon>
              <ListItemText >Opportunities</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem   >
            <ListItemButton>
            <ListItemIcon style={{color:'#000000'}}>
                <PersonIcon style={{ fontSize: '2rem' }} /> 
              </ListItemIcon>
              <ListItemText > My Competitors</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem   >
            <ListItemButton>
            <ListItemIcon style={{color:'#000000'}}>
                <DescriptionIcon style={{ fontSize: '2rem' }}/> 
              </ListItemIcon>
              <ListItemText >Briefs</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem   >
            <ListItemButton>
            <ListItemIcon style={{color:'#000000'}}>
                <BookmarkIcon style={{ fontSize: '2rem' }}/> 
              </ListItemIcon>
              <ListItemText >Saved</ListItemText>
            </ListItemButton>
          </ListItem>
           
          <ListItem  className='side-menu' >
            <ListItemButton>
              <ListItemIcon style={{color:'#000000'}}>
              <SettingsIcon style={{ fontSize: '2rem' }}/>
              </ListItemIcon>
              <ListItemText >Settings</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem   >
            <ListItemButton>
              <ListItemIcon style={{color:'#000000'}}>
              <HelpIcon style={{ fontSize: '2rem' }}/>
              </ListItemIcon>
              <ListItemText >Help</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem  disabled >
            <ListItemButton>
              <ListItemIcon style={{color:'#000000'}}>
              <ExitToAppIcon style={{ fontSize: '2rem' }}/>
              </ListItemIcon>
              <ListItemText >Logout</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"#000000"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography >
          <Header />
        </Typography>
         <Typography>
         <Box sx={{ width: '100%' }} className="section-data">
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <Grid item  sm={6} md={6}>    
            <TotalVisitsChart />
            </Grid>
            <Grid item xs={12} sm={6} md={6} >    
            <Cards />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>    
            <VisualData />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>    
            <VisualData />
            </Grid>
      </Grid>
    </Box>
         </Typography>
      </Box>
    </Box>
  );
}



export default Dashboard;