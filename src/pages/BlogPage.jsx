import SubpageLayout from '../components/SubpageLayout';

export default function BlogPage() {
  return (
    <SubpageLayout pageTitle="Blog | Patrycja Moeller" showBackToTop={false}>
      <main>
        <section>
          <p className="more_soon">More soon.</p>
          <p className="about_text">
            My favorite part is building the larger world of the artwork &amp; completely living
            in it. I make a playlist.
          </p>
        </section>

        <section className="spotify">
          <a
            href="https://open.spotify.com/playlist/55htoEUzjkDIuNXS6I7ldb"
            target="_blank"
            className="spotify_link"
            rel="noopener noreferrer"
          >
            Spotify playlist
          </a>
        </section>
      </main>
    </SubpageLayout>
  );
}
