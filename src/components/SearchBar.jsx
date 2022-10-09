import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('form')(({ theme }) => ({
    position: 'relative',
    height: '40px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    height: '40px',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      if(searchTerm) {
          navigate(`/search/${searchTerm}`);
          setSearchTerm('');
      }
  }     
    
  return (
    <Search onSubmit={handleSubmit}>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
        placeholder="Search…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        inputProps={{ 'aria-label': 'search' }}
        />
    </Search>
  )
}

export default SearchBar