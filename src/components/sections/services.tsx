import { services } from "@/content/site";

export function Services() {
  return (
    <section className="section dark" id="solucoes">
      <div className="intro motion-clip">
        <span>02 / CAPABILITIES</span>
        <h2 data-parallax="0.025">Da presença digital ao sistema que opera por trás dela.</h2>
      </div>
      <div className="services motion-stagger">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.index}>
              <span>{service.index}</span>
              <Icon aria-hidden="true" />
              <div>
                <small>{service.label}</small>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
