import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

/******
 * size can be 'lg''md''sm''xl''xs'false
 */
const CustomModal = ({
  isOpen,
  size = '',
  handleClose,
  title,
  handleSuccess,
  children,
  leftBtnText = 'Cancel',
  rightBtnText = 'Ok',
  hideLetfBtn = false,
  hideRightBtn = false,
  dialogClasses,
  dialogTitleClasses,
  dialogContentClasses,
  dialogActionClasses,
  buttonClasses,
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth={size}
      onClose={handleClose}
      open={isOpen}
      aria-labelledby={title}
      className={dialogClasses}
      data-testid="dialog">
      <DialogTitle
        classes={dialogTitleClasses}
        id={title}
        onClose={handleClose}>
        {title}
      </DialogTitle>
      {children && (
        <DialogContent className={dialogContentClasses} dividers>
          {children}
        </DialogContent>
      )}
      <DialogActions className={dialogActionClasses}>
        {!hideLetfBtn && (
          <Button
            className={buttonClasses}
            onClick={handleClose}
            color="primaryy">
            {leftBtnText}
          </Button>
        )}
        {!hideRightBtn && (
          <Button
            className={buttonClasses}
            onClick={handleSuccess}
            autoFocus
            color="secondary">
            {rightBtnText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default CustomModal;
