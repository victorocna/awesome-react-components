import { useContext } from 'react';
import { AppContext, Layout, Team, Reviews } from '../components';

const Page = () => {
  const { team, reviews } = useContext(AppContext);

  return (
    <Layout>
      <h2 className="font-bold text-2xl mb-4">Hello world</h2>
      {team && <Team {...team} />}
      {reviews && <Reviews {...reviews} />}
    </Layout>
  );
};

export default Page;
