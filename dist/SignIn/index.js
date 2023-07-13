'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = SignInSide;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Avatar = require('@material-ui/core/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CssBaseline = require('@material-ui/core/CssBaseline');

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Link = require('@material-ui/core/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _LockOutlined = require('@material-ui/icons/LockOutlined');

var _LockOutlined2 = _interopRequireDefault(_LockOutlined);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

var _CustomModal = require('../CustomModal');

var _CustomModal2 = _interopRequireDefault(_CustomModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      height: '50vh',
      width: '80%',
      margin: 'auto'
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
});

function SignInSide(_ref) {
  var firstLabel = _ref.firstLabel,
    handleClick = _ref.handleClick,
    validation = _ref.validation;

  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    forgotPasswordModal = _useState2[0],
    setModalForgotPassword = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    signupModal = _useState4[0],
    setModalSignup = _useState4[1];

  var onLoginSubmit = function onLoginSubmit(e) {
    e.preventDefault();

    //const email = e.target.email.value;
    //const password = e.target.password.value;

    if (validation === 'true') {
      handleClick();
    }
  };
  var handleCloseForgotPassword = function handleCloseForgotPassword() {
    return setModalForgotPassword(false);
  };
  var handleCloseSignup = function handleCloseSignup() {
    return setModalSignup(false);
  };
  var handleForgotPassword = function handleForgotPassword(e) {
    setModalForgotPassword(true);
  };

  var handleSignUp = function handleSignUp(e) {
    setModalSignup(true);
  };

  return _react2.default.createElement(
    _Grid2.default,
    { container: true, component: 'main', className: classes.root },
    _react2.default.createElement(
      _CustomModal2.default,
      {
        isOpen: forgotPasswordModal,
        size: 'md',
        leftBtnText: 'Cancel',
        rightBtnText: 'Submit',
        handleSuccess: handleCloseForgotPassword,
        handleClose: handleCloseForgotPassword,
        title: 'Forgot Password'
      },
      _react2.default.createElement(
        'p',
        null,
        'Please enter your email address here to get forgot password link'
      ),
      _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(_TextField2.default, {
          id: 'outlined-basic',
          label: 'Email',
          variant: 'outlined',
          type: 'email',
          fullWidth: true
        })
      )
    ),
    _react2.default.createElement(
      _CustomModal2.default,
      {
        isOpen: signupModal,
        size: 'md',
        leftBtnText: 'Cancel',
        rightBtnText: 'Submit',
        handleSuccess: handleCloseSignup,
        handleClose: handleCloseSignup,
        'data-testid': 'CustomModel',
        title: 'SignUp'
      },
      _react2.default.createElement(
        'p',
        null,
        'Please enter your email address here to SignUp'
      ),
      _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(_TextField2.default, {
          id: 'outlined-basic',
          label: 'Email',
          variant: 'outlined',
          type: 'email',
          fullWidth: true
        })
      )
    ),
    _react2.default.createElement(_CssBaseline2.default, null),
    _react2.default.createElement(_Grid2.default, { item: true, xs: false, sm: 4, md: 7, className: classes.image }),
    _react2.default.createElement(
      _Grid2.default,
      { item: true, xs: 12, sm: 8, md: 5, component: _Paper2.default, elevation: 6, square: true },
      _react2.default.createElement(
        'div',
        { className: classes.paper },
        _react2.default.createElement(
          _Avatar2.default,
          { className: classes.avatar },
          _react2.default.createElement(_LockOutlined2.default, null)
        ),
        _react2.default.createElement(
          _Typography2.default,
          { component: 'h1', variant: 'h5' },
          'Sign in'
        ),
        _react2.default.createElement(
          'form',
          { className: classes.form, onSubmit: onLoginSubmit },
          _react2.default.createElement(_TextField2.default, {
            variant: 'outlined',
            margin: 'normal',
            required: true,
            fullWidth: true,
            id: 'email',
            label: firstLabel ? firstLabel : 'Email Address',
            name: 'email',
            autoComplete: 'email',
            autoFocus: true,
            'data-testid': 'text-email'
          }),
          _react2.default.createElement(_TextField2.default, {
            variant: 'outlined',
            margin: 'normal',
            required: true,
            fullWidth: true,
            name: 'password',
            label: 'Password',
            type: 'password',
            id: 'password',
            autoComplete: 'current-password',
            'data-testid': 'text-password'
          }),
          _react2.default.createElement(_FormControlLabel2.default, {
            control: _react2.default.createElement(_Checkbox2.default, { value: 'remember', color: 'primary' }),
            label: 'Remember me'
          }),
          _react2.default.createElement(_FormControlLabel2.default, {
            control: _react2.default.createElement(_Checkbox2.default, { value: 'agree', color: 'primary' }),
            label: 'Agree'
          }),
          _react2.default.createElement(
            _Button2.default,
            {
              type: 'submit',
              fullWidth: true,
              variant: 'contained',
              color: 'primary',
              className: classes.submit,
              'data-testid': 'button_click'
            },
            'Sign In'
          ),
          _react2.default.createElement(
            _Grid2.default,
            { container: true },
            _react2.default.createElement(
              _Grid2.default,
              { item: true, xs: true },
              _react2.default.createElement(
                _Link2.default,
                { variant: 'body2', onClick: handleForgotPassword },
                'Forgot password?'
              )
            ),
            _react2.default.createElement(
              _Grid2.default,
              { item: true },
              _react2.default.createElement(
                _Link2.default,
                { variant: 'body2', onClick: handleSignUp },
                "Don't have an account? Sign Up"
              )
            )
          )
        )
      )
    )
  );
}