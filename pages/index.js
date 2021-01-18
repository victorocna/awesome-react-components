import { useContext } from 'react';
import { AppContext, Layout, Hero, Team, Reviews } from '../components';

const Page = () => {
  const { hero, team, reviews } = useContext(AppContext);

  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto p-4">
        <h2 className="font-bold text-2xl mb-4">Hello world</h2>
      </div>
      {hero && <Hero {...hero} />}
      {team && <Team {...team} />}
      {reviews && <Reviews {...reviews} />}
    </Layout>
  );
};

export default Page;
