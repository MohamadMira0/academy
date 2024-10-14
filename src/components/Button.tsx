import { Link } from 'react-router-dom';

type ButtonProps = {
  to?: string;
  className: string;
  title: string;
  'data-modal-target'?: string;
  'data-modal-toggle'?: string;
  onClick?: () => void;
};
export default function Button({
  to,
  className,
  title,
  'data-modal-target': dataModalTarget,
  'data-modal-toggle': dataModalToggle,
  onClick,
}: ButtonProps) {
  return (
    <Link
      to={to}
      className={className}
      title={title}
      data-modal-target={dataModalTarget}
      data-modal-toggle={dataModalToggle}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}
