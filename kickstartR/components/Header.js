import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default ({}) => (
  <Menu style={{ marginTop: 10 }}>
    <Link route="/">
      <a className="item">kickStartR</a>
    </Link>

    <Menu.Menu position="right">
      <Link route="/">
        <a className="item">Campaigns</a>
      </Link>
      <Link route="/campaigns/new">
        <a className="item">+</a>
      </Link>
    </Menu.Menu>
  </Menu>
);
