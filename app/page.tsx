import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality
} from './sections';
import Nav from './components/nav';
//The metadata object holds information about the page that helps with SEO
// (Search Engine Optimization) and social sharing. The description is a brief
// summary of your page that might show up in search engine results. The openGraph
// object is a set of properties that provide information about your page to
// social media platforms when someone shares a link to your page.
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />{' '}
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />{' '}
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x w-full py-16 sm:py-32">
          <Subscribe />
        </section>
        <section className="padding-x padding-t bg-black pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}
