import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Status() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            System Status
          </h1>

          <p className="mt-6 md:text-xl">
            At Mark.cc, we prioritize the availability and security of your
            HR management tools. Our system status page provides real-time updates
            on the operational status of our platform, including services
            related to managing employees, tracking interviews, and streamlining
            recruitment processes. We are committed to maintaining a seamless
            experience so you can manage your workforce easily and confidently.
          </p>

          <p className="mt-6 md:text-xl">
            If you encounter any issues or have questions about our system, our
            team is here to support you. Stay informed with the latest updates
            to ensure you always have access to your HR tools when you need them
            most.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}