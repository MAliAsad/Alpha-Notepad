import { Avatar,AppBar,Toolbar,makeStyles,Drawer,Typography,List,ListItem,ListItemIcon,ListItemText } from "@material-ui/core"
import { SubjectOutlined,AddCircleOutlineOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import {format} from "date-fns";


const drawerWidth=210;

const useStyles=makeStyles((theme)=>{
    return({
    page:{
        background: "#f9f9f9",
        width:"100%",
        height:"100vh",
        padding: theme.spacing(3)
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width:drawerWidth
    },
    root:{
        display:"flex"
    },
    active:{
        background: "#f4f4f4"
    },
    title:{
        padding: theme.spacing(2)
    },
    appbar:{
        width:`calc(100% - ${drawerWidth}px)`
    },
    toolbar:theme.mixins.toolbar,
    date:{
        flexGrow:1
    },
    avatar:{
        marginLeft: theme.spacing(2)
    }
})})

const Layout = ({children}) => {
    const classes=useStyles();
    const history=useHistory();
    const location=useLocation();

    const menuItems=[
        {
            text:"My Notes",
            icon:<SubjectOutlined color="primary" />,
            path:"/"
        },
        {
            text:"Create Notes",
            icon:<AddCircleOutlineOutlined color="primary" />,
            path:"/create"
        }
    ];

    return (
        <div className={classes.root} >

            <AppBar color="secondary" className={classes.appbar} elevation="0" >
                <Toolbar >
                    <Typography className={classes.date} >Today is the {format(new Date(),"do MMMM Y")}</Typography>
                    <Typography>Alpha</Typography>
                    <Avatar src="/AlphaPlus-logo.png" className={classes.avatar} />
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{paper:classes.drawerPaper}}
            >
                <div>

                    <Typography variant="h5" className={classes.title} >
                        Alpha Notes
                    </Typography>

                </div>

                <List>
                    {menuItems.map(item=>(
                        <ListItem key={item.text} button onClick={()=>history.push(item.path) } className={location.pathname==item.path?classes.active:null}  >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>


            </Drawer>

            <div className={classes.page} >
                <div className={classes.toolbar} ></div>
            {children}
            </div>
        </div>
    )
}

export default Layout
