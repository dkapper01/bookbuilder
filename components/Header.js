import PropTypes from 'prop-types';
import Link from 'next/link';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import Avatar from 'material-ui/Avatar';

import { styleToolbar } from './SharedStyles';

function Header({ user }) {
  return (
    <div>
      <Toolbar style={styleToolbar}>
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Grid item={10} xs={9} style={{ textAlign: 'left' }}>
            {user ? (
              <div>
                <Hidden smDown>
                  <Link prefetch href="/">
                    <a style={{ marginRight: '20' }}>Settings</a>
                  </Link>
                </Hidden>
              </div>
            ) : (
              <Link prefetch href="/">
                <Avatar
                  src="https://storage.googleapis.com/builderbook/logo.svg"
                  alt="Builder Book Logo"
                  style={{ margin: '0px auto 0px 20px' }}
                />
              </Link>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    displayName: PropTypes.string,
  }),
};

Header.defaultProps = {
  user: null,
};

export default Header;
