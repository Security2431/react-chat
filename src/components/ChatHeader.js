import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  AppBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
})

const ChatHeader = ({ classes }) => (
  <AppBar color="primary" className={classes.AppBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
        Dogecodes React Chat
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(ChatHeader)
