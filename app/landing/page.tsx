// @ts-nocheck

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingProductSteps } from '@/components/landing/LandingProductSteps';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import Image from '@/components/shared/Image';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';
import { CreditCard, Lock, Shield, TrendingUp, Users, Zap } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Header className="mb-4" />

      <LandingPrimaryImageCtaSection
        title="HR Management Made Easy"
        description="Take charge of your workforce with Mark.cc. Manage employees, interviews, and recruitment with ease."
        imageSrc="/static/images/1.webp"
        imageAlt="Dashboard Preview"
        imagePosition="right"
        imageShadow="hard"
        textPosition="left"
        withBackground={false}
        variant="primary"
        minHeight={350}
      >
        <Button size="xl" asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button size="xl" variant="outlinePrimary" asChild>
          <Link href="/pricing">Pricing</Link>
        </Button>
        <LandingSocialProof
          className="mt-6 w-full"
          avatarItems={[
            {
              imageSrc: '/static/images/people/1.webp',
              name: 'Sarah Johnson',
            },
            {
              imageSrc: '/static/images/people/2.webp',
              name: 'Michael Chen',
            },
            {
              imageSrc: '/static/images/people/3.webp',
              name: 'Emily Rodriguez',
            },
          ]}
          numberOfUsers={1100}
          suffixText="happy users"
        />
      </LandingPrimaryImageCtaSection>

      <div className="container-wide p-12 w-full flex flex-wrap items-center justify-center gap-6 dark:invert">
        <span className="w-full text-center text-sm opacity-70 dark:invert">
          As seen on
        </span>
        <Image
          src="/static/images/outlets/tech-crunch.svg"
          alt="TechCrunch"
          width={300}
          height={300}
          className="w-auto h-6"
        />
        <Image
          src="/static/images/outlets/the-new-york-times.svg"
          alt="The New York Times"
          width={300}
          height={300}
          className="w-auto h-8"
        />
        <Image
          src="/static/images/outlets/cnn.svg"
          alt="CNN"
          width={300}
          height={300}
          className="w-auto h-7"
        />
        <Image
          src="/static/images/outlets/the-verge.svg"
          alt="The Verge"
          width={300}
          height={300}
          className="w-auto h-7"
        />
      </div>

      <LandingFeatureList
        id="features"
        title="Everything you need to manage your money"
        description="Simple, powerful tools to help you take control of your finances."
        featureItems={[
          {
            title: 'See your spending, simply',
            description:
              'Track every transaction automatically. Get instant insights into where your money goes with beautiful, easy-to-understand charts and reports.',
            icon: <TrendingUp className="w-8 h-8" />,
          },
          {
            title: 'Send and receive money instantly',
            description:
              'Transfer money to friends and family in seconds. No fees, no waiting. Just fast, secure payments whenever you need them.',
            icon: <Zap className="w-8 h-8" />,
          },
          {
            title: 'Save money automatically',
            description:
              'Set savings goals and watch your money grow. Our smart algorithms help you save without thinking about it, building your financial future effortlessly.',
            icon: <CreditCard className="w-8 h-8" />,
          },
          {
            title: 'Bank-level security',
            description:
              'Your money and data are protected with 256-bit encryption. We use the same security standards as major banks to keep your information safe.',
            icon: <Shield className="w-8 h-8" />,
          },
          {
            title: 'Multi-account management',
            description:
              'Connect all your bank accounts in one place. Get a complete view of your finances and manage everything from a single dashboard.',
            icon: <Users className="w-8 h-8" />,
          },
          {
            title: 'Privacy guaranteed',
            description:
              "We never sell your data. Your financial information stays private and secure. You're in complete control of who sees what.",
            icon: <Lock className="w-8 h-8" />,
          },
        ]}
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingProductSteps
        title="How it Works"
        description="Get started with Mark.cc in three simple steps. No complicated setup, no hidden fees."
        display="grid"
        withBackground={false}
        variant="primary"
      >
        <LandingProductFeature
          title="1. Sign up in minutes"
          description="Create your account quickly and securely. Just enter your email, set a password, and you're ready to go. No lengthy forms or waiting periods."
          imageSrc="/static/images/2.webp"
          imageAlt="Sign up process"
          imagePosition="center"
          imageShadow="soft"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="2. Connect your bank accounts"
          description="Link your existing bank accounts safely using our secure connection. We support thousands of banks and credit unions across the country."
          imageSrc="/static/images/3.webp"
          imageAlt="Connect banks"
          imagePosition="center"
          imageShadow="soft"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="3. Start managing your money"
          description="View all your accounts in one place. Track spending, set budgets, and achieve your financial goals with powerful insights and automation."
          imageSrc="/static/images/4.webp"
          imageAlt="Manage money"
          imagePosition="center"
          imageShadow="soft"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
      </LandingProductSteps>

      <LandingProductFeature
        id="security"
        title="Your money is safe with us"
        descriptionComponent={
          <>
            <p className="mb-6">
              We take security seriously. Your financial data is protected with
              industry-leading encryption and security measures.{' '}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>256-bit encryption: </strong>
                  Bank-level security protects all your data
                </span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>FDIC insurance: </strong>
                  Your deposits are insured up to $250,000
                </span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Privacy guaranteed: </strong>
                  We never sell your personal information
                </span>
              </li>
            </ul>
          </>
        }
        imageSrc="/static/images/5.webp"
        imageAlt="Security features"
        imagePosition="right"
        imageShadow="hard"
        textPosition="left"
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
        imagePerspective="bottom"
        zoomOnHover
        minHeight={350}
      />

      <LandingTestimonialReadMoreWrapper>
        <LandingTestimonialGrid
          title="Loved by thousands of users"
          description="See what our customers have to say about managing their workforce with Mark.cc."
          testimonialItems={[
            {
              name: 'Sarah Anderson',
              text: 'Mark.cc made HR management so much easier for me. I can finally see where my team stands and make smarter decisions about hiring.',
              handle: '@sarahanderson',
              imageSrc: '/static/images/people/4.webp',
              url: '#',
              verified: true,
            },
            {
              name: 'John Bennett',
              text: "Mark.cc helped me finally understand my recruitment pipeline. Now I feel in control of hiring and we're actually growing the team faster.",
              handle: '@johnbennett',
              imageSrc: '/static/images/people/5.webp',
              url: '#',
              verified: true,
            },
            {
              name: 'Maria Garcia',
              text: "The interview scheduling feature is a game changer. I've hired more efficiently in three months with Mark.cc than I did all last year.",
              handle: '@mariagarcia',
              imageSrc: '/static/images/people/6.webp',
              url: '#',
            },
            {
              name: 'David Kim',
              text: 'I love how simple everything is. No confusing menus or complicated features. Just straightforward HR management that actually works.',
              handle: '@davidkim',
              imageSrc: '/static/images/people/7.webp',
              url: '#',
              verified: true,
            },
            {
              name: 'Emily Rodriguez',
              text: 'Being able to see all employee data in one place has been incredible. I finally have a complete picture of my team and can plan accordingly.',
              handle: '@emilyrodriguez',
              imageSrc: '/static/images/people/8.webp',
              url: '#',
            },
            {
              name: 'Michael Thompson',
              text: "The security features give me peace of mind. I know my employee data is protected and privacy is respected. That's worth everything to me.",
              handle: '@michaelthompson',
              imageSrc: '/static/images/people/9.webp',
              url: '#',
              verified: true,
            },
            {
              name: 'Jessica Lee',
              text: 'Mark.cc has completely changed how I manage my team. The insights and reports help me make better HR decisions every single day.',
              handle: '@jessicalee',
              imageSrc: '/static/images/people/10.webp',
              url: '#',
            },
            {
              name: 'Robert Martinez',
              text: "I was skeptical at first, but Mark.cc has exceeded all my expectations. It's intuitive, powerful, and has genuinely improved our HR processes.",
              handle: '@robertmartinez',
              imageSrc: '/static/images/people/11.webp',
              url: '#',
              verified: true,
            },
            {
              name: 'Amanda Chen',
              text: 'The instant money transfers are so convenient. I can split bills with friends or send money to family in seconds. No more waiting days for transfers.',
              handle: '@amandachen',
              imageSrc: '/static/images/people/12.webp',
              url: '#',
            },
          ]}
          withBackground={false}
          variant="primary"
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingSaleCtaSection
        id="pricing"
        title="Simple, fair pricing"
        description="No hidden fees. No surprises. Just transparent pricing that makes sense for everyone."
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <Button size="xl" asChild>
          <Link href="/plans">See Plans</Link>
        </Button>
      </LandingSaleCtaSection>

      <LandingFaqCollapsibleSection
        id="faq"
        title="Frequently Asked Questions"
        description="Got questions? We've got answers. Find everything you need to know about Mark.cc."
        faqItems={[
          {
            question: 'Is Mark.cc free to use?',
            answer:
              'Yes! Mark.cc offers a free plan with essential features. We also have premium plans with advanced features for teams who need more functionality. There are no hidden fees or surprise charges.',
          },
          {
            question: 'How secure is my employee data?',
            answer:
              'Your security is our top priority. We use 256-bit encryption, the same level of security used by major corporations. Your data is protected with multiple layers of security, and we never sell your personal information to third parties.',
          },
          {
            question: 'Which HR systems can I integrate with Mark.cc?',
            answer:
              'Mark.cc supports integration with thousands of HR systems and payroll providers. We work with all major providers and most regional systems. If you have questions about a specific integration, please contact our support team.',
          },
          {
            question: 'Can I use Mark.cc on my phone?',
            answer:
              'Absolutely! Mark.cc works seamlessly on all devices including smartphones, tablets, and desktop computers. Access your HR data anytime, anywhere with our responsive web app.',
          },
          {
            question: 'How does interview scheduling work?',
            answer:
              "Our smart scheduling system analyzes availability and preferences to automatically suggest optimal interview times. You can customize your scheduling rules, and we'll handle the rest automatically.",
          },
          {
            question: 'What if I need help or have questions?',
            answer:
              'Our customer support team is here to help! You can reach us via email, live chat, or phone. We also have a comprehensive help center with guides and tutorials to help you get the most out of Mark.cc.',
          },
        ]}
        withBackground={false}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingSaleCtaSection
        title="Ready to take control? Join Mark.cc today."
        description="Start managing your workforce smarter. Sign up free and see the difference in minutes."
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <Button size="xl" asChild>
          <Link href="/signup">Sign Up Free</Link>
        </Button>
      </LandingSaleCtaSection>

      <Footer className="mt-8" />
    </>
  );
}
