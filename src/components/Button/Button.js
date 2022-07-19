import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Component = 'button';

  const classes = cx('wrapper', {
      [className]: className,
      primary,
  });

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    console.log(props);
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  return (
    <Component className={classes} {...props}>
      <span className={cx('title')}>{children}</span>
    </Component>
  );
}

export default Button;
