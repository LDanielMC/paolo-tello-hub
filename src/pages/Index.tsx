import paoloHero from "@/assets/paolo-hero.jpg";
import LinkCard from "@/components/LinkCard";
import GlowTrace from "@/components/GlowTrace";
import { Music, Instagram, Facebook } from "lucide-react";

const SpotifyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 15c2.5-1 5.5-1 8 0" />
    <path d="M7 12c3-1.5 7-1.5 10 0" />
    <path d="M6.5 9c3.5-2 8.5-2 11 0" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const AppleMusicIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
    <path d="M11 18V6l10-2v12" />
  </svg>
);

const Index = () => {
  return (
    <div className="relative min-h-svh bg-background overflow-hidden">
      <GlowTrace />

      {/* Hero background image */}
      <div className="absolute inset-0 opacity-0 animate-scale-in">
        <img
          src={paoloHero}
          alt="Paolo Tello"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-svh flex flex-col justify-end px-6 pb-8 pt-20 max-w-lg mx-auto lg:mx-0 lg:ml-[8vw]">
        {/* Artist name & tagline */}
        <div className="mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <h1 className="font-display font-light text-foreground" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", textWrap: "balance", lineHeight: 0.9 }}>
            PAOLO<br />TELLO
          </h1>
          <p className="font-display italic text-primary/80 text-lg mt-3">
            Una nueva voz del romanticismo latino.
          </p>
        </div>

        {/* Featured release */}
        <div className="mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <p className="text-ui text-[10px] text-muted-foreground mb-2 tracking-widest">DEBUT SINGLE · 2026</p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <LinkCard
            href="https://open.spotify.com/search/Paolo%20Tello"
            icon={<SpotifyIcon />}
            label="Spotify"
            sublabel="Escucha &quot;Te Amaré Más Allá&quot;"
            featured
            newRelease
            delay={700}
          />
          <LinkCard
            href="https://music.apple.com/search?term=Paolo+Tello"
            icon={<AppleMusicIcon />}
            label="Apple Music"
            delay={800}
          />
          <LinkCard
            href="https://music.youtube.com/search?q=Paolo+Tello"
            icon={<YouTubeIcon />}
            label="YouTube Music"
            delay={900}
          />
          <LinkCard
            href="https://www.instagram.com/paolotellomusic"
            icon={<Instagram size={22} strokeWidth={1.5} />}
            label="Instagram"
            sublabel="@paolotellomusic"
            delay={1000}
          />
          <LinkCard
            href="https://www.tiktok.com/@tellopaolo"
            icon={<TikTokIcon />}
            label="TikTok"
            sublabel="@tellopaolo"
            delay={1100}
          />
          <LinkCard
            href="https://www.facebook.com/share/18TB2FAYex/"
            icon={<Facebook size={22} strokeWidth={1.5} />}
            label="Facebook"
            delay={1200}
          />
        </div>

        {/* Footer / Booking */}
        <footer className="mt-10 opacity-0 animate-fade-up" style={{ animationDelay: "1400ms" }}>
          <div className="text-ui text-[10px] text-muted-foreground tracking-widest leading-relaxed">
            <p>Management & Booking: Fabián Tello</p>
            <a href="mailto:tellomunozpaolo@gmail.com" className="hover:text-primary transition-colors">
              tellomunozpaolo@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
