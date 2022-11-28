import { React, useState } from 'react';
import { TextField } from '@material-ui/core';
import AddressAutocomplete from '../lib/AddressAutocomplete';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DesignOps/AddressAutocomplete',
  component: AddressAutocomplete,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
};

const Template = (args, props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const toggleMenu = () => setShowMenu(true);

  const handleInput = (event) => {
    const searchWord = event.target.value.toLowerCase();
    setSearchTerm(searchWord);
    console.log('searchTerm', searchTerm);
  };

  const handleSearch = () => {
    const MenuListProps = ['Ocean Ave', 'NSH Road', 'Manning Road'];
    const filteredData = MenuListProps.filter((el) => {
      if (!searchTerm) {
        return el;
      } else {
        return el.toLowerCase().includes(searchTerm);
      }
    });

    console.log('filtereddata', filteredData);
    setSearchResults(filteredData);
    console.log('searchresult', searchResults);
    return filteredData;
  };

  const setValue = (event) => {
    const inputSearch = event.target.value;
    setSearchValue(inputSearch);
    console.log('searchvalue', searchValue);
  };

  return (
    <AddressAutocomplete
      {...args}
      toggleMenu={toggleMenu}
      isOpen={showMenu}
      handleInput={handleInput}
      searchResults={searchResults}
      handleSearch={handleSearch}
      setValue={setValue}></AddressAutocomplete>
  );
};

export const DefaultAddressAutocomplete = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultAddressAutocomplete.args = {
  autocompleteHeader: 'Heading',
  placeholder: 'Begin search...',
  MenuListProps: ['Ocean Ave', 'NSH Road', 'Manning Road'],
};
