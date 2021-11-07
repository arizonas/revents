import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

export default function SignedInMenu({setAuthenticated}) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown pointing='top left' text='Bob'>
        <Dropdown.Menu>
            <Dropdown.Item as={Link} to='createEvent' text='Creat Event' icon='plus' />
            <Dropdown.Item text='My Profile' icon='user' />
            <Dropdown.Item onClick={() => setAuthenticated(false)} text='Sign Out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}