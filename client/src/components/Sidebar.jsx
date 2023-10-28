import React from 'react'
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,useTheme
} from "@mui/material";
import {
    SettingOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    ReciptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,

}from "@mui/icons-material"
import { useEffect,useState } from 'react';
import{ useLocation,useNavigate} from 'reac-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assets/profile.jpg"
const navItems = [
    {
        text:"Dashboard",
        icon:<HomeOutlined/>
    },
    {
        text:"Dashboard",
        icon:<HomeOutlined/>
    },
    {
        text:"Client Portfolio",
        icon:null,
    },
    {
        text:"Products/Sales",
        icon:<ShoppingCartOutlined/>

    },
    {
        text:"Customer",
        icon:<Groups2Outlined/>
    },
    {
        text:"Transactions",
        icon:<ReceiptLongOutlined/>
    },
    {
        text:"Geography",
        icon:<PublicOutlined/>
    },
    {
        text:"Sales",
        icon:null
    },
    {
        text:"Overview",
        icon:<PointOfSaleOutlined/>
    },
    {
        text:"Daily",
        icon:<TodayOutlined/>
    },
    {
        text:"Monthly",
        icon:<CalendarMonthOutlined/>
    },
    {
        text:"Breakdown",
        icon:<PieChartOutlined/>
    },
    {
        text:"Management",
        icon:null
    },
    {
        text:"Admin",
        icon:<AdminPanelSettingsOutlined/>
    },
    {
        text:"Performance",
        icon:<TrendingUpOutlined/>
    },
]



const Sidebar = () => ({
    drawerWidth,
    isSideOpen,
    setIsSidebarOpen}) =>{
        const {pathname} =useLocation();
        const[active,setActive] =useState("");
        const navigate = useNavigate();
        const theme =useTheme();
        useEffect(()=>{
            setActive(pathname.substring(1));
        },[pathname])
  return 
    <Box component='nav'>
        {isSidebarOpen && (
            <Drawer 
            open={isSidebarOpen}
            onClose={()=>setIsSidebarOpen(false)}
            variant ="persistent"anchor="left"
            sx={{
                width:drawerWidth,
                "&.MuiDrawer-paper":{
                    color:theme.palette.secondary[200],
                    backgroundColor:theme.palette.background.alt,
                    boxSixing:"border-box",
                    borderWidth: isNonMobile ? 0 : "2px",
                    width: drawerWidth
                }
            }}
            >
                <Box width="100%">
                    <Box m="1.5rem 2rem 2rem 3rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box display="flex" alignItems="center" gap="0.5rem">
                                <Typography variant ="h4" fontWeight="bold">ProSight App</Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft/>
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                    <List>
                        { }
                    </List>
                </Box>
            </Drawer>
        )}
    </Box>
  

  
}

export default Sidebar