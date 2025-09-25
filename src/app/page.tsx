"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy2DReveal from '@/components/sections/layouts/howtobuy/2DRevealHTB';
import MinimalTokenomics from '@/components/sections/layouts/tokenomics/MinimalTokenomics';
import LogoFooter from '@/components/sections/layouts/footer/LogoFooter';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'brainRot', colorTemplate: 1, textAnimation: 'expand' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="/images/logo.svg"
          logoAlt="BrainRoot Logo"
          brandName="BrainRoot Memecoin"
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' },
          ]}
          buttonText="Join the Brain"
        />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero
          title="Welcome to BrainRoot"
          description="The ultimate memecoin experience."
          primaryButtonText="Start Now"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout
          title="About BrainRoot"
          descriptions={["BrainRoot Memecoin brings fun and excitement to crypto trading.", "Join our community for the latest updates."]}
          image="/images/logo.svg"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2DReveal
          steps={[
            { title: "Step 1", description: "Connect your wallet." },
            { title: "Step 2", description: "Select an amount." },
            { title: "Step 3", description: "Confirm and receive your tokens." }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <MinimalTokenomics
          title="Tokenomics Overview"
          description="A brief overview of our token distribution and mechanisms."
          items={[
            { value: "50%", description: "Token allocation for rewards and liquidity." },
            { value: "20%", description: "Reserved for marketing and development." },
            { value: "30%", description: "Liquidity pool for users." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <LogoFooter
          logoSrc="/images/logo.svg"
          logoAlt="BrainRoot Logo"
          columns={[
            { title: "Links", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
            { title: "Community", items: [{ label: "Join Discord", onClick: () => {} }, { label: "Follow Us", onClick: () => {} }] },
            { title: "Support", items: [{ label: "FAQs", onClick: () => {} }, { label: "Contact Us", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 BrainRoot Memecoin"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
