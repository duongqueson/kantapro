import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './ShoppingCart.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import { Transition } from 'react-transition-group';

import Button from '~/components/Button';
import { PopperWrapper } from '~/components/Popper';
import { ShoppingCartIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const duration = 500;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: `scaleY(0)`,
  transformOrigin: `top`
};

const transitionStyles = {
  entering: { transform: `scaleY(1)` },
  entered: { transform: `scaleY(1)` },
  exiting: { transform: `scaleY(0)` },
  exited: { transform: `scaleY(0)` },
};

function ShoppingCart() {
  const [inProp, setInProp] = useState(false);
  const dropdownRef = useRef();
  return (
    <div>
      <HeadlessTippy
        onMount={(instance) => {
          setInProp(true);
        }}

        onHide={(instance) => {
          const unmountInstance = () => {
            requestAnimationFrame(instance.unmount);

            // need to control when we remove the listener because transitionend fires multiple times
            instance.popper.firstChild.removeEventListener(
              "transitionend",
              unmountInstance
            );
          };

          instance.popper.firstChild.addEventListener(
            "transitionend",
            unmountInstance
          );

          setInProp(false);
        }}
        animation={true}
        interactive
        placement="bottom-start"
        offset={[12, 0]}
        render={(attrs) => (
          <Transition nodeRef={dropdownRef} in={inProp} timeout={duration}>
            {(state) => (
              <div
                ref={dropdownRef}
                style={{ ...defaultStyle, ...transitionStyles[state] }}
                className={cx('dropdown-cart')}
                tabIndex="-1"
                {...attrs}
              >
                <PopperWrapper>
                  <div className={cx('no-items')}>
                    <span className={cx('title')}>
                      Gi??? h??ng c???a b???n ??ang tr???ng
                    </span>
                    <Button className={cx('btn-buy-more')}>
                      TI???P T???C MUA H??NG
                    </Button>
                  </div>
                </PopperWrapper>
              </div>
            )}
          </Transition>
        )}
      >
        <div className={cx('shopping-cart')}>
          <Button leftIcon={<ShoppingCartIcon />}>Gi??? h??ng</Button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default ShoppingCart;
