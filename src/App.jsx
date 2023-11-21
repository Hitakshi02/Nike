//Circle bracket works coz we are directly returning and not writing js
import {CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality} from './sections';
import Nav from './components/Nav'

const App = () =>(
  <main>
    <Nav/>
    {/* -l,-r,-b left,right and bottom  */}
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer/>
    </section>
  </main>
);
export default App;