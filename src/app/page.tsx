use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy2DReveal from '@/components/sections/layouts/howtobuy/2DRevealHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import LogoFooter from '@/components/sections/layouts/footer/LogoFooter';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'brainRot', colorTemplate: 1, textAnimation: 'expand' }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
          logoSrc="/images/logo.svg"
          logoAlt="BrainRoot Logo"
          brandName="BrainRoot Memecoin"
        />
      </div>

      <div id="hero" data-section="hero">
        <VoidHero
          title="Welcome to BrainRoot Memecoin"
          description="Join the meme movement!"
          tagLabel="Meme Power"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about">
        <BaseAbout
          title="About BrainRoot"
          descriptions={[
            "BrainRoot merges the brilliance of memes with exciting crypto possibilities, transforming playful ideas into vibrant communities!",
            "Our mission is to make crypto fun, approachable, and transparent, with an emphasis on community participation and enjoyment."
          ]}
          image="/images/logo.svg"
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2DReveal
          steps={[
            { title: "Step 1: Connect Wallet", description: "Connect your crypto wallet to participate." },
            { title: "Step 2: Choose Amount", description: "Decide how much BrainRoot you'd like to buy." },
            { title: "Step 3: Confirm Purchase", description: "Finalize and confirm your purchase of BrainRoot!" }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understanding our token structure and distribution is essential high-level info for all participants."
          tokenData={[
            { value: "10M", description: "Total Tokens" },
            { value: "1M", description: "Liquidity" },
            { value: "100K", description: "Community Incentives" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <LogoFooter
          logoSrc="/images/logo.svg"
          logoText="BrainRoot"
          columns={[
            { title: "Links", items: [
              { label: "Home", onClick: () => console.log('Home Clicked') },
              { label: "About", onClick: () => console.log('About Clicked') },
              { label: "How to Buy", onClick: () => console.log('How to Buy Clicked') },
              { label: "Tokenomics", onClick: () => console.log('Tokenomics Clicked') }
            ]},
            { title: "Community", items: [
              { label: "Discord", onClick: () => console.log('Discord Clicked') },
              { label: "Twitter", onClick: () => console.log('Twitter Clicked') }
            ]},
            { title: "Other", items: [
              { label: "Privacy Policy", onClick: () => console.log('Privacy Policy Clicked') }
            ]}
          ]}
          copyrightText="© 2023 BrainRoot Memecoin. All Rights Reserved."
          onPrivacyClick={() => console.log('Privacy Policy Clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}