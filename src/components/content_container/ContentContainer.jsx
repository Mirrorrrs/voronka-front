import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LogoText from "../../assets/LogoText.png"
import {Link} from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import {ListItemIcon} from "@mui/material";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import CabinIcon from '@mui/icons-material/Cabin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import {useLocation} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../../store/actions/userActions";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const ContentContainer = ({children, title}) => {
    const location = useLocation()

    const currentUser = useSelector(state=>state.user.currentUser)

    const [navItems, setNavItems] = useState([])

    useEffect(()=>{
        if (currentUser.role==4){
            setNavItems([
                {
                    title: "Перевод ребенку",
                    path: "/childTransfer",
                    icon:<CurrencyExchangeIcon/>
                },
            ])
        }else{
            setNavItems([
                {
                    title: "Лагеря",
                    path: "/camps",
                    icon:<CabinIcon/>
                },
                {
                    title: "Отряды",
                    path: "/groups",
                    icon:<GroupsIcon/>
                },
                {
                    title: "Пользователи",
                    path: "/users",
                    icon:<PersonAddAltRoundedIcon/>
                },
                {
                    title: "Расписание",
                    path: "/schedule",
                    icon:<AccessTimeIcon/>
                },
                {
                    title: "Статистика",
                    path: "/stats",
                    icon:<LeaderboardIcon/>
                },

            ])
        }
    },[currentUser])

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const nav = useNavigate()
    const dispatch = useDispatch()
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logoutHandler = () => {
        dispatch(userLogout())
        nav("/signin")
    }
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 2, ...(open && {display: 'none'})}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader style={{justifyContent: "space-between"}}>
                    <Link to={"/"}>
                        <img style={{
                            width: "70%",
                        }} src={LogoText} alt=""/>
                    </Link>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {navItems.map((el, index) => (
                        <Link key={index} style={{textDecoration:"none", color:"black"}} to={el.path}>
                        <ListItem  disablePadding sx={{
                            ...(location.pathname == el.path && { backgroundColor:'rgba(0, 0, 0, 0.04)'})
                        }}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {el.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={el.title}/>
                                </ListItemButton>
                        </ListItem>
                        </Link>
                    ))}

                    <ListItem  disablePadding>
                        <ListItemButton onClick={logoutHandler}>
                            <ListItemIcon>
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Выход"/>
                        </ListItemButton>
                    </ListItem>


                </List>

            </Drawer>
            <Main open={open}>
                <DrawerHeader/>
                {children}
            </Main>
        </Box>
    );
};

export default ContentContainer;