import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const classNames = require('classnames');

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '10px',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  inputBox: {
    width: '400px',
    borderRadius: '15px',
    border: '1px solid black',
  },
  menuList: {
    border: 'solid 1px grey',
    borderRadius: '4px',
    width: '600px',
    marginTop: '5px',
  },
  menuItem: {
    fontSize: '0.75em',
  },
}));

const AddressAutocomplete = (props) => {
  const {
    autocompleteHeader,
    placeholder,
    autoComplete,
    MenuListProps,
    menuListClasses,
    menuItemClasses,
    toggleMenu,
    handleInput,
    handleSearchSubmit,
    // searchTerm,
    handleSearch,
    searchResults,
    searchValue,
    setValue,
  } = props;

  const classes = useStyles();

  return (
    <div>
      <OutlinedInput
        {...(autocompleteHeader ? autocompleteHeader : 'Heading from lib')}
        placeholder={placeholder ? placeholder : 'Placeholder'}
        onKeyDown={handleInput}
        onKeyUp={handleSearch}
        id="searchBar">
        Start typing address...
      </OutlinedInput>
      {searchResults ? (
        <MenuList
          MenuListProps={MenuListProps}
          searchResults={searchResults}
          className={classNames(classes.menuList, menuListClasses)}>
          {searchResults.map((item, index) => (
            <MenuItem
              key={index}
              className={classNames(classes.menuItem, menuItemClasses)}
              // value={item}
            >
              {item}
            </MenuItem>
          ))}
        </MenuList>
      ) : (
        <MenuList
          MenuListProps={MenuListProps}
          searchResults={searchResults}
          className={classNames(classes.menuList, menuListClasses)}>
          {MenuListProps.map((item, index) => (
            <MenuItem
              key={index}
              className={classNames(classes.menuItem, menuItemClasses)}
              onClick={setValue}
              value={item}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </div>
  );
};

export default AddressAutocomplete;
