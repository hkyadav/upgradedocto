import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Food & Beverages`,
    description: `Dwell into the delightful experience of our onboard dining. Our restaurants and bars are simply unmissable.`,
  },
  {
    title: `Accomodation`,
    description: `Wake up to breathtaking views await you every morning while you sail to a different location every day.`,
  },
  {
    title: `Destinations`,
    description: `A cruise vacation with Cordelia Cruises takes you to some of the most gorgeous Indian and international destinations.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-brand-primary font-semibold tracking-wide uppercase`)}>
          Luxury Sea Vacation
        </h2>
        <p className={tw(`mt-2 pb-4 text-4xl lg:text-6xl font-bold tracking-tight text-gray-900`)}>
          Best Sea Trans Luxury Vacation Service
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4 text-brand-primary`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-brand-primary`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            {/* <Image src="/images/b.jpg" alt="couples on cruise" width={650} height={500} /> */}
            <img src="./images/b.jpg" alt="couples on cruise" width={650} height={500} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
