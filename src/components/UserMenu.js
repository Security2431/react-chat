import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: theme.spacing.unit * 3,
  },
})

class UserMenu extends React.Component {
  state = {
    isModalOpen: false,
    anchorEl: null,
    username: '',
    firstName: '',
    lastName: '',
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.activeUser.username,
      firstName: nextProps.activeUser.firstName,
      lastName: nextProps.activeUser.lastName,
    })
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  toggleEditProfileModal = () => {
    // eslint-disable-next-line
    this.setState({ isModalOpen: !this.state.isModalOpen })
    this.handleClose()
  }

  handleSaveClick = () => {
    const { username, firstName, lastName } = this.state
    // eslint-disable-next-line
    this.props.onEditProfileClick({
      username,
      firstName,
      lastName,
    })
    this.toggleEditProfileModal()
  }

  handleLogoutClick = () => {
    // eslint-disable-next-line
    this.props.onLogoutClick()
    this.handleClose()
  }

  render() {
    const {
      anchorEl, isModalOpen, username, firstName, lastName,
    } = this.state
    const { classes, disabled } = this.props

    return (
      <React.Fragment>
        <IconButton
          color="inherit"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          disabled={disabled}
          onClick={this.handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.toggleEditProfileModal}>Edit Profile</MenuItem>
          <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
        </Menu>
        <Modal
          open={isModalOpen}
          className={classes.modalWrapper}
          onClose={this.toggleEditProfileModal}
        >
          <Paper className={classes.modal}>
            <Typography variant="title" id="modal-title">
              Edit profile
            </Typography>
            <TextField
              required
              fullWidth
              name="username"
              label="Username"
              placeholder="Enter your username..."
              type="text"
              margin="normal"
              value={username}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              name="firstName"
              label="First name"
              placeholder="Enter your first name..."
              type="text"
              margin="normal"
              value={firstName}
              onChange={this.handleInputChange}
            />
            <TextField
              fullWidth
              name="lastName"
              label="Last name"
              placeholder="Enter your last name..."
              type="text"
              margin="normal"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <Button color="primary" onClick={this.handleSaveClick}>
              Save
            </Button>
            <Button onClick={this.toggleEditProfileModal}>
              Close
            </Button>
          </Paper>
        </Modal>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(UserMenu)
