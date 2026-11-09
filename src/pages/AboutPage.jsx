import SubpageLayout from '../components/SubpageLayout';

export default function AboutPage() {
  return (
    <SubpageLayout
      pageClass="about-page"
      pageTitle="About | Patrycja Moeller"
      showBackToTop={false}
    >
      <main>
        <section className="about_text2_section">
          <h2 className="about_subtitle">Hi!</h2>
          <p className="about_text2">
            My name is Patrycja Moeller. I&apos;m a creative graphic designer and an aspiring
            frontend developer, with a head full of ideas and a passion for combining design with
            technology.
            <br />
            My work lives at the intersection of visual aesthetics and functionality, every
            project starts with understanding the message I want to communicate. My goal is to
            create projects that tell a story. If you have an interesting project, an idea to
            bring to life, or would like to talk about collaboration. <br />
            Don’t hesitate to contact me!
          </p>
        </section>
      </main>
    </SubpageLayout>
  );
}
