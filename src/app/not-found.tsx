import SiteFooter from "@/components/landing/SiteFooter";
import SiteHeader from "@/components/landing/SiteHeader";
import "./landing.css";

export default function NotFound() {
  return (
    <main id="top" className="landing not-found-page">
      <section className="not-found-hero">
        <div className="grid-lines" aria-hidden="true" />
        <SiteHeader />
        <div className="not-found-content">
          <p className="not-found-code" aria-hidden="true">
            404
          </p>
          <h1>The page you are looking for doesn&apos;t exist</h1>
          <p className="not-found-description">
            Try to use a correct url or go back to homepage to start again
          </p>
          <a className="not-found-home-link" href="/">
            Back to Home
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
