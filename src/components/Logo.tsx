import logo from 'asset/logo-green.svg';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export default function Logo(props: Props) {
  const { width = 32, height = 32, className = 'rounded' } = props;
  return (
    <div className="text-center p-2">
      <img
        src={logo}
        width={width}
        height={height}
        alt="mdSilo"
        className={className}
      />
    </div>
  );
}
