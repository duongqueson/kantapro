import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const TRENDING_LIST = [
  {
    title: 'backpack',
  },
  {
    title: 'crossbody bag',
  },
  {
    title: 'wallet',
  },
  {
    title: 'handbag',
  },
];

function Search() {
  const [showResult, setShowResult] = useState(false);

  const refInput = useRef();

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <div>
      <HeadlessTippy
        visible={showResult}
        interactive
        appendTo="parent"
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <div className={cx('search-trending')}>
                <span className={cx('title')}>TRENDING</span>
                <div className={cx('trending-list')}>
                  {TRENDING_LIST.map((item, index) => {
                    return (
                      <div key={index} className={cx('trending-item')}>
                        <FontAwesomeIcon
                          className={cx('icon')}
                          icon={faMagnifyingGlass}
                        />
                        <span className={cx('trending-title')}>
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={cx('popular-products')}>
                <span className={cx('title')}>POPULAR PRODUCTS</span>
                <div className={cx('product-item')}></div>
              </div>
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            onFocus={() => setShowResult(true)}
            ref={refInput}
            placeholder="Search"
          />
          <button className={cx('search-btn')}>
            <SearchIcon width="1.2rem" height="1.2rem" />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
