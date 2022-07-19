import { useCookies } from 'react-cookie';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
  const [cookies, setCookie] = useCookies(['headerTop']);

  const handleClose = () => {
    setCookie('headerTop', 'closed', {maxAge: 60*60*24})
  };

  return (
    <div className={cx('wrapper')}>
      {cookies.headerTop !== 'closed' && (
        <div className={cx('top')}>
          <div className={cx('message')}>
            <p>
              Sale Up to 40% OFF.{' '}
              <Button className={cx('show-collections')} to="/collections/all">
                Shop Now
              </Button>
            </p>
            <span onClick={handleClose} className={cx('close')}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
