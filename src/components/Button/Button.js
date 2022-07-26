import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...passProps
}) {
  let Component = 'button';

  const classes = cx('wrapper', {
      [className]: className,
      primary,
      disabled,
  });

  const props = {
    onClick,
    onMouseEnter,
    onMouseLeave,
    ...passProps,
  };

  if(disabled) {
    Object.keys(props).forEach((key) => {
      if(key.startsWith('on') && typeof props[key] === 'function'){
        delete props[key];
      }
    })
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx(('icon'))}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx(('icon'))}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
