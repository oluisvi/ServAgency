export function About() {
  return (
    <section
      className="about section-pad page-shell"
      id="sobre"
      aria-labelledby="about-title"
    >
      <div className="about-copy">
        <span className="section-number">06</span>
        <h2 id="about-title">
          Tecnologia com proximidade, estratégia e responsabilidade.
        </h2>
        <p>
          Somos uma agência criada por dois profissionais de tecnologia que
          acreditam que boas soluções digitais começam com uma compreensão real
          do negócio.
        </p>
        <p>
          Combinamos desenvolvimento, design, marketing e automação para
          construir uma presença mais profissional e processos mais eficientes.
        </p>
        <p>
          Estamos tirando a ServAgency do papel em Jacareí, no Vale do Paraíba.
          Atendemos presencialmente na região e trabalhamos remotamente com
          empresas de todo o Brasil.
        </p>
      </div>
      <div
        className="founder-placeholders"
        aria-label="Informações dos fundadores a preencher"
      >
        <article>
          <div aria-hidden="true">01</div>
          <strong>Fundador 01</strong>
          <span>[Foto, nome e especialidade]</span>
        </article>
        <article>
          <div aria-hidden="true">02</div>
          <strong>Fundador 02</strong>
          <span>[Foto, nome e especialidade]</span>
        </article>
      </div>
    </section>
  );
}
