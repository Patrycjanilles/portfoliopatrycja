import SubpageLayout from '../components/SubpageLayout';

export default function ContactPage() {
  return (
    <SubpageLayout pageTitle="Contact | Patrycja Moeller" showBackToTop={false}>
      <main>
        <section>
          <h1 className="contact_title">
            If you’re interested in working together, feel free to get in touch.
          </h1>
          <h2 className="contact_subtitle">
            Just contact me at
            <br /> moeller.patrycja[at]gmail.com <br />
            +48794068624
          </h2>
        </section>
      </main>
    </SubpageLayout>
  );
}
