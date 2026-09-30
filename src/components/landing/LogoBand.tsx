import { brands } from "./assets";

export default function LogoBand() {
  return (
    <section className="logo-band" aria-label="Trusted by leading companies">
      <div className="logo-band-inner">
        {brands.map((brand) => (
          <div className="brand-lockup" key={brand.id}>
            <img src={brand.image} alt={brand.alt} className="w-10 h-10 lg:w-8 lg:h-8" />
            <span>Logoipsum</span>
          </div>
        ))}
      </div>
    </section>
  );
}
