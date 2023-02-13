import { tw } from 'twind';

interface IButton {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
}

const Button = ({ primary, modifier, children, ...rest }: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 rounded`;
  const styles = primary
    ? `bg-fuchsia text-white  hover:bg-indigo-700`
    : `bg-white text-gray-600 border-pink-500 hover:bg-gray-100`;

  return (
    <button
      onClick={() => {
        window.location.href = `https://api.whatsapp.com/send/?phone=919051346574`;
      }}
      type="button"
      className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
