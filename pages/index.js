import { Layout, Hero, Team, Reviews, ComboBox } from '../components';
import { hero, combobox } from '../data';

const Page = () => (
  <Layout>
    <div className="max-w-screen-lg mx-auto p-4">
      <h2 className="font-bold text-2xl">Hello world</h2>
    </div>
    <Hero {...hero}>
      <h2 className="text-2xl font-semibold text-white">
        <p>Dunder Mifflin Servers</p>
        <small>Providing the best backup services since 2002</small>
      </h2>
    </Hero>
    <div className="max-w-screen-lg mx-auto px-4 mb-4">
      <Team />
      <Reviews />
      <div className="grid lg:grid-cols-2 gap-4">
        <ComboBox {...combobox.one} />
        <ComboBox {...combobox.two} />
      </div>
    </div>
  </Layout>
);

export default Page;
