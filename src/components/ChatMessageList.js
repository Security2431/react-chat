/* eslint no-underscore-dangle: 0 */
/* eslint react/jsx-one-expression-per-line:0 */
import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ChatMessage from './ChatMessage'

const styles = theme => ({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
})

class ChatMessageList extends React.Component {
  componentDidMount() {
    this.scrollDownHistory()
  }

  componentDidUpdate() {
    this.scrollDownHistory()
  }

  scrollDownHistory() {
    if (this.messagesWrapper) {
      this.messagesWrapper.scrollTop = this.messagesWrapper.scrollHeight
    }
  }

  render() {
    const {
      classes, messages, match, activeUser,
    } = this.props

    // If there is no active chat, then show a tip
    if (!match.params.chatId) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
            Start messaging...
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <b>Global</b> to explore communities around here.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <b>Recents</b> to see your recent conversations.
          </Typography>
        </Paper>
      )
    }

    return messages && messages.length ? (
      <div className={classes.messagesWrapper}>
        {messages.map(message => (
          <ChatMessage
            key={message._id}
            activeUser={activeUser}
            {...message}
          />
        ))}
      </div>
    ) : (
      <Typography variant="display1">
        There is no messages yet...
      </Typography>
    )
  }
}

export default withRouter(withStyles(styles)(ChatMessageList))
