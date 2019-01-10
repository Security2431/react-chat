import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ChatMessageList from './ChatMessageList'
import MessageInput from './MessageInput'

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
})

const Chat = ({ classes, messages }) => (
  <main className={classes.content}>
    <ChatMessageList messages={messages} />
    <MessageInput />
  </main>
)

export default withStyles(styles)(Chat)
