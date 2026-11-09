import SubpageLayout from '../components/SubpageLayout';
import { RevealImage } from '../components/LazyMedia';

export default function ProjectFridgeBook() {
  return (
    <SubpageLayout
      number="[ 5 ]"
      title="FridgeCook"
      pageTitle="FridgeCook | Patrycja Moeller"
      showSpotifyInFooter={false}
    >
      <main className="speakly_main">
        <section className="speakly_foto">
          <RevealImage src="/images/fridgebook-cover.jpg" alt="FridgeCook app" eager />
          <p className="text_speakly">FridgeCook</p>
        </section>

        <section className="speakly_hero">
          <p>
            Recipe app from fridge
            <br /> ingredients to a meal
          </p>
          <div className="project-hero-tags-web">
            <span>React</span>
            <span>TypeScript</span>
            <span>React Router</span>
            <span>Supabase</span>
          </div>
        </section>

        <section className="speakly_visit_button">
          <a
            href="https://fridgecook-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="speakly_visit_link"
          >
            Visit FridgeCook
            <svg
              className="speakly_arrow"
              width="34"
              height="32"
              viewBox="0 0 39 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0.999908 17.5809L37.0247 18.3972M37.0247 18.3972L19.6275 35.0234M37.0247 18.3972L20.3985 1.00002"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>

        <section className="speakly_visit_button">
          <a
            href="https://github.com/Patrycjanilles/fridgecook"
            target="_blank"
            rel="noopener noreferrer"
            className="speakly_visit_link"
          >
            View code on GitHub
          </a>
        </section>

        <section className="speakly_text_web">
          <p className="speakly_text_web_margin">
            About
            <br />
            FridgeCook matches recipes to ingredients you already have. I built it to practise
            React and TypeScript on a complete UI: routing, authentication, remote data, and a
            layout that works on phone and desktop.
          </p>
          <p className="speakly_text_web_margin">
            Role
            <br />
            Frontend developer. UI designed and coded by me.
          </p>
          <p className="speakly_text_web_margin">
            What I built
            <br />
            Nested routes with React Router (home, cookbook, recipe detail, favorites, login).
            Custom hooks for recipes, favorites, and auth. Supabase for sign-in and saved data;
            localStorage when logged out. Ingredient matching on the client. Desktop navigation
            and a mobile hamburger menu.
          </p>
        </section>
      </main>
    </SubpageLayout>
  );
}
