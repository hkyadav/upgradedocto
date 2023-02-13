import { tw } from 'twind';
import Premium from '@/constants/svg/premium.svg';
import Destination from '@/constants/svg/destination.svg';
import Beverages from '@/constants/svg/beverages.svg';
import Diving from '@/constants/svg/diving.svg';
import Kids from '@/constants/svg/kids.svg';
import Pay from '@/constants/svg/pay.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-brand-primary font-semibold tracking-wide uppercase`)}>facilities</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            How we help you live your dreams
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Premium width={20} height={20} fill="#770071" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl text-brand-primary`)}>Premium Facility</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Embrace the experience to stay in aesthetically designed rooms, meant to make you feel supremely
              comfortable.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Destination width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl text-brand-primary`)}>Great Destinations</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Cruise through the azure waters for 3 days 2 nights and witness the mesmerising views that will soothe
              your senses.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Beverages width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl text-brand-primary`)}>Bar & Lounge</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Serves customers beer and a variety of alcoholic beverages.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Diving width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl text-brand-primary`)}>Sea Diving</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Always witness the mesmerising views that will soothe your senses.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Pay width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl text-brand-primary`)}>Book Now & Pay Later*</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Reserve your room by paying an advance worth just 25% of the total amount.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Kids width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl text-brand-primary`)}>Kids Sail Free*</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              When travelling with Cordelia, kids under the age of 12 get to sail for free.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
