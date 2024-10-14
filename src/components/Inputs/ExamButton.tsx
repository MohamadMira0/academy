import { Link } from 'react-router-dom';

type ButtonProps = {
  className: string;
  title: string;
  'data-modal-target'?: string;
  'data-modal-toggle'?: string;
  onClick?: () => void;
};
export default function ExamButton({
  className,
  title,
  'data-modal-target': dataModalTarget,
  'data-modal-toggle': dataModalToggle,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={className}
      title={title}
      data-modal-target={dataModalTarget}
      data-modal-toggle={dataModalToggle}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
