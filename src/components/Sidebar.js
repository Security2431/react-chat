import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import ExploreIcon from '@material-ui/icons/Explore'
import ChatList from './ChatList'

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100vh',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  }
})

const Sidebar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <div className={classes.drawerHeader}>
      <TextField
        fullWidth
        margin="normal"
        placeholder="Search chats..."
      />
    </div>
    <Divider />
    <ChatList chats={chats} />
    <BottomNavigation showLabels>
      <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
  </Drawer>
)

export default withStyles(styles)(Sidebar)
