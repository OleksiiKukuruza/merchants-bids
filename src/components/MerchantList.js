import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  extendedFab: {
    position: 'fixed',
    bottom: 2 * theme.spacing.unit,
    right: 2 * theme.spacing.unit
  }
});

const MerchantList = ({ merchants, classes }) => (
  <List>
    {merchants.map(merchant => (
      <ListItem key={merchant.id} dense button>
        <Avatar alt={merchant.firstname} src={merchant.avatarUrl} />
        <ListItemText
          primary={`${merchant.firstname} ${merchant.lastname}`}
          secondary={merchant.email}
        />
        <ListItemSecondaryAction>
          <IconButton
            component={Link}
            to={`/merchants/${merchant.id}/edit`}
            aria-label="Edit"
          >
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
    <Button
      variant="fab"
      color="primary"
      aria-label="Add"
      component={Link} to="/merchants/new"
      className={classes.extendedFab}
    >
      <AddIcon />
    </Button>
  </List>
);

MerchantList.propTypes = {
  merchants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      hasPremium: PropTypes.bool.isRequired,
      bids: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          carTitle: PropTypes.string.isRequired,
          amount: PropTypes.number.isRequired,
          created: PropTypes.string.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default withStyles(styles)(MerchantList);
