import { useCookies } from 'react-cookie';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Button from '~/components/Button';
import Search from '../Search';
import config from '~/config';
import { images } from '~/assets/images';
import { FavoriteIcon } from '~/components/Icons';
import ShoppingCart from '../ShoppingCart';

const cx = classNames.bind(styles);

function Header() {
  const [cookies, setCookie] = useCookies(['headerTop']);

  const handleClose = () => {
    setCookie('headerTop', 'closed', { maxAge: 60 * 60 * 24 });
  };

  return (
    <div className={cx('wrapper')}>
      {cookies.headerTop !== 'closed' && (
        <div className={cx('top')}>
          <div className="container">
            <div className={cx('message')}>
              <p>
                Sale Up to 40% OFF.{' '}
                <Button
                  className={cx('show-collections')}
                  to="/collections/all"
                >
                  Shop Now
                </Button>
              </p>
              <span onClick={handleClose} className={cx('close')}>
                &times;
              </span>
            </div>
          </div>
        </div>
      )}
      <div className={cx('bottom')}>
        <div className='container'>
          <div className={cx('panel-top')}>
            <span className={cx('hotline')}>Hotline: 0335060298</span>
            <select className={cx('language')}>
              <option>Tiếng Việt</option>
              <option>English</option>
            </select>
            <Search />
          </div>
          <div className={cx('panel-bottom')}>
            <Link to={config.routes.home} className={cx('logo-link')}>
              <img src={images.logo} alt='' />
            </Link>
            <div className={cx('actions')}>
              <span className={cx('ship-text')}>VẬN CHUYỂN TOÀN QUỐC</span>
              <div className={cx('actions-wrapper')}>
                {/* shopping cart */}
                <ShoppingCart />
                <div className={cx('favorite-list')}>
                  <Button leftIcon={<FavoriteIcon />} >Danh sách yêu thích</Button>
                </div>
                <div className={cx('customer-account')}>
                  <Button>Đăng nhập</Button>
                  <span>hoặc</span>
                  <Button>Tạo tài khoản</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
