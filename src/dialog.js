import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Icon,
    IconButton,
    Dialog as MUIDialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withStyles,
} from 'material-ui';

const Dialog = ({
                    actions,
                    cancelAction,
                    children,
                    classes,
                    fullScreen,
                    fullWidth,
                    maxWidth,
                    message,
                    open,
                    styleClasses,
                    title,
                }) => (
    <MUIDialog
        classes={{
            paperWidthMd: styleClasses['paperWidthMd'] || null,
            paperWidthSm: styleClasses['paperWidthSm'] || null,
            paperWidthXs: styleClasses['paperWidthXs'] || null,
        }}
        fullScreen={fullScreen}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
    >
        {!!cancelAction && (
            <IconButton classes={{ root: classes.close }} onClick={cancelAction}>
                <Icon classes={{ root: classes.closeIcon }}>clear</Icon>
            </IconButton>
        )}
        {title && <DialogTitle disableTypography>{title}</DialogTitle>}
        <DialogContent>
            <DialogContentText>{message}</DialogContentText>
            {children}
        </DialogContent>
        {!!actions && (
            <DialogActions>
                {actions.map((action, index) => (
                    <Button
                        color={action.color}
                        disabled={action.disabled}
                        key={`dialog-action-${index}`}
                        onClick={action.action}
                        raised={action.raised}
                    >
                        {action.label}
                    </Button>
                ))}
            </DialogActions>
        )}
    </MUIDialog>
);

Dialog.propTypes = {
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            action: PropTypes.func.isRequired,
            color: PropTypes.string,
            disabled: PropTypes.bool,
            raised: PropTypes.bool,
        })
    ),
    cancelAction: PropTypes.func,
    classes: PropTypes.object,
    fullScreen: PropTypes.bool,
    fullWidth: PropTypes.bool,
    maxWidth: PropTypes.oneOf([false, 'md', 'sm', 'xs']),
    message: PropTypes.string,
    open: PropTypes.bool.isRequired,
    styleClasses: PropTypes.shape({
        paperWidthMd: PropTypes.string,
        paperWidthSm: PropTypes.string,
        paperWidthXs: PropTypes.string,
    }),
    title: PropTypes.string.isRequired,
};

Dialog.defaultProps = {
    styleClasses: {},
};

export { Dialog };
export default withStyles(theme => ({
    close: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '40px',
        height: '40px',
    },
    closeIcon: {
        fontSize: '20px',
    },
}))(Dialog);
