import { Card } from "compositions";
import { IconInfo } from "icons";
import { Flex } from "layout";
import {
  Button,
  ButtonGroup,
  Link,
  Text,
  TextContentHeading,
  TextContentTitle,
  TextHeading,
  TextStrong,
} from "primitives";
import "./MyLandingPage.css";

const imgLogo = "https://www.figma.com/api/mcp/asset/f23538d5-1cc6-45cf-96a0-db3f3ea1bddc";
const imgLogoFooter =
  "https://www.figma.com/api/mcp/asset/69cabc88-b538-4fc7-b503-2455865d833c";
const imgHeroImage =
  "https://www.figma.com/api/mcp/asset/51c60f9f-6339-435e-a32d-7712221f49c9";
const imgPlaceholder =
  "https://www.figma.com/api/mcp/asset/4c2aa0be-8704-4b18-a677-59c945d853e3";
const imgXLogo =
  "https://www.figma.com/api/mcp/asset/e97f15d4-bc75-4181-95f0-80321081b13e";
const imgInstagram =
  "https://www.figma.com/api/mcp/asset/680ff43e-3ab2-4c9c-a2bc-f44a79e4083d";
const imgYouTube =
  "https://www.figma.com/api/mcp/asset/c08435d7-e760-4896-8237-76387e1f40b0";
const imgLinkedIn =
  "https://www.figma.com/api/mcp/asset/d4d14a4b-6d7c-4dac-bce2-09e058980f00";

const NAV_LINKS: { label: string; active?: boolean }[] = [
  { label: "Products", active: true },
  { label: "Solutions" },
  { label: "Community" },
  { label: "Resources" },
  { label: "Pricing" },
  { label: "Contact" },
  { label: "Link" },
];

const FEATURE_BODY =
  "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.";

const FOOTER_COLUMNS = [
  {
    title: "Use cases",
    links: [
      "UI design",
      "UX design",
      "Wireframing",
      "Diagramming",
      "Brainstorming",
      "Online whiteboard",
      "Team collaboration",
    ],
  },
  {
    title: "Explore",
    links: [
      "Design",
      "Prototyping",
      "Development features",
      "Design systems",
      "Collaboration features",
      "Design process",
      "FigJam",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Best practices",
      "Colors",
      "Color wheel",
      "Support",
      "Developers",
      "Resource library",
    ],
  },
] as const;

export function MyLandingPage() {
  return (
    <div className="my-landing-page">
      <header className="my-landing-header">
        <Link href="#" aria-label="Home">
          <img
            className="my-landing-logo"
            src={imgLogo}
            alt=""
            width={40}
            height={35}
          />
        </Link>
        <nav className="my-landing-nav" aria-label="Primary">
          {NAV_LINKS.map(({ label, active = false }) => (
            <Link
              key={label}
              href="#"
              className={
                active
                  ? "my-landing-nav-pill my-landing-nav-pill-active"
                  : "my-landing-nav-pill"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="my-landing-header-actions">
          <ButtonGroup>
            <Button variant="neutral" onPress={() => { }}>
              Sign in
            </Button>
            <Button variant="primary" onPress={() => { }}>
              Register
            </Button>
          </ButtonGroup>
        </div>
      </header>

      <section className="my-landing-hero" aria-label="Hero">
        <div className="my-landing-hero-bg" aria-hidden>
          <img src={imgHeroImage} alt="" />
          <div className="my-landing-hero-scrim" />
        </div>
        <div className="my-landing-hero-inner">
          <TextContentTitle
            align="center"
            title="Title"
            subtitle="Subtitle"
          />
          <ButtonGroup align="center">
            <Button variant="neutral" onPress={() => { }}>
              Button
            </Button>
            <Button variant="primary" onPress={() => { }}>
              Button
            </Button>
          </ButtonGroup>
        </div>
      </section>

      <div className="my-landing-double-panel">
        <div className="my-landing-panel-image">
          <img src={imgPlaceholder} alt="" />
        </div>
        <div className="my-landing-panel-image">
          <img src={imgPlaceholder} alt="" />
        </div>
      </div>

      <section className="my-landing-features" aria-labelledby="my-landing-features-heading">
        <TextContentHeading
          id="my-landing-features-heading"
          heading="Heading"
          subheading="Subheading"
        />
        <div className="my-landing-features-grid">
          {Array.from({ length: 6 }, (_, i) => (
            <Card
              key={i}
              className="my-landing-feature-card"
              direction="horizontal"
              variant="stroke"
              padding="600"
              asset={<IconInfo size="32" aria-hidden />}
            >
              <Flex direction="column" gap="200">
                <TextHeading>Title</TextHeading>
                <Text>{FEATURE_BODY}</Text>
              </Flex>
            </Card>
          ))}
        </div>
      </section>

      <footer className="my-landing-footer">
        <div className="my-landing-footer-brand">
          <img
            className="my-landing-footer-logo"
            src={imgLogoFooter}
            alt=""
            width={24}
            height={35}
          />
          <div className="my-landing-social">
            <a href="#" aria-label="X">
              <img src={imgXLogo} alt="" width={24} height={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={imgInstagram} alt="" width={24} height={24} />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={imgYouTube} alt="" width={24} height={24} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={imgLinkedIn} alt="" width={24} height={24} />
            </a>
          </div>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title} className="my-landing-footer-column">
            <TextStrong className="my-landing-footer-column-title">
              {col.title}
            </TextStrong>
            {col.links.map((item) => (
              <Link key={item} href="#" className="my-landing-footer-link">
                {item}
              </Link>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
}
