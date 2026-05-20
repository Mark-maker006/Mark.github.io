import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Help() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            How Can We Help You Manage Your Workforce?
          </h1>

          <p className="mt-6 md:text-xl">
            Welcome to Mark.cc's Help Center! We're here to assist you in making
            the most of your HR management journey. Whether you're new to our
            platform or looking to optimize your experience, you've come to the
            right place.
          </p>

          <p className="mt-6 md:text-xl">
            Managing your workforce has never been easier. With Mark.cc, you can
            effortlessly track your employees, schedule interviews securely, and
            streamline recruitment—all from a simple, easy-to-use dashboard. Our
            goal is to provide a safe and straightforward way to handle your HR
            operations so you can focus on what matters most.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}