import React from 'react'
import {Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton,ListItemIcon,ListItemText,Typography,useTheme} from "@mui/material";
import { SettingsOutlined,
        ChevronLeft,
        ChevronRightOutlined,
        HomeOutlined, 
        ShoppingCartOutlined,
        Groups2Outlined, 
        ReceiptLongOutlined,
        PublicOutlined,
        PointOfSaleOutlined,
        TodayOutlined,
        CalendarMonthOutlined,
        AdminPanelSettingsOutlined,
        TrendingUpOutlined,
        PieChartOutline } from '@mui/icons-material';
import { useEffect,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assets/profile.jpeg"


const Sidebar = ({
    DrawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active,setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component="nav">
        {isSidebarOpen && (
            <Drawer
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                variant="persistent"
                anchor='left'
                sx={{
                    width:DrawerWidth,
                    "& .MuiDrawer-paper" : {
                        color : theme.palette.secondary[200],
                        backgroundColor : theme.palette.alt,
                        boxSizing : "border-box",
                        borderWidth : isNonMobile ? 0 : "2px",
                        width : DrawerWidth
                    }
                }}
            >
                <Box width="100%">
                    <Box margin="1.5rem 2rem 2rem 3rem">

                    </Box>

                </Box>
            </Drawer>
        )}
    </Box>
  )
}

export default Sidebar