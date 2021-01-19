import { Layout, Hero, Team, Reviews, Cta } from '../components';
import { hero, reviews, team, cta } from '../data';

const Page = () => (
  <Layout>
    <div className="max-w-screen-lg mx-auto p-4">
      <h2 className="font-bold text-2xl mb-4">Hello world</h2>
    </div>
    <Hero {...hero}>
      <h2 className="text-2xl font-semibold text-white">
        <p>Dunder Mifflin Servers</p>
        <small>Providing the best backup services since 2002</small>
      </h2>
    </Hero>
    <Team {...team} />
    <Reviews {...reviews} />
    <Cta {...cta} />
  </Layout>
);

export default Page;
