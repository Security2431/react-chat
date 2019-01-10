import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ChatHeader from './ChatHeader'

const styles = theme => ({
  root: {
    display: 'flex',
  }
})

const AuthPage = ({ classes }) => (
  <div className={classes.root}>
    <ChatHeader />
  </div>
)

export default withStyles(styles)(AuthPage)
