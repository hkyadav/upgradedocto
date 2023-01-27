import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header style={{ backgroundImage: `url("/images/main.jpg")` }} className={tw(`${headerStyle} bg-center`)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center text-pink-500 leading-snug `)}
      >
        Your Journey, beyond expectations
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl text-white`)}>
          Make your journey wonderful and build your experiences.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Book now</Button>
        <span className={tw(`mx-2 text-white`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>
  </header>
);

export default Header;
