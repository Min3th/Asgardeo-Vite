import "../styles/HomePage.css";
import { DefaultLayout } from "../Layout/Default";

export const HomePage = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <div className="text-content">
              <h1>Naruto: Shippuden</h1>
              <p>
                a young ninja who dreams of becoming the Hokage, the strongest
                ninja and leader of his village. Despite facing adversity due to
                the nine-tailed fox demon sealed within him, Naruto's
                determination and unwavering belief in his dreams inspire those
                around him.
              </p>
              <button className="hero-button">Watch now</button>
            </div>
          </div>
        </div>
        <section className="category">
          <h2>Trending</h2>
          <div className="movie-list-container">
            <div className="resource-card">
              <div className="card-content">
                <img
                  className="movie-image"
                  src="https://www.toei-animation.com/wp-content/uploads/2019/02/one_piece_pro
duct.jpg"
                  alt="movie poster"
                />
                <h2>One piece</h2>
                <p>
                  Adventures of Monkey D. Luffy and his pirate crew in search of
                  the legendary treasure.
                </p>
                <a href="#" className="card-link">
                  Watch now <span>➔</span>
                </a>
              </div>
            </div>
            <div className="resource-card">
              <div className="card-content">
                <img
                  className="movie-image"
                  src="https://www.sheknows.com/wp-content/uploads/2024/03/how-to-watch-demo
n-slayer-season-4-FI.jpg"
                  alt="movie poster"
                />
                <h2>Demon slayer</h2>
                <p>
                  A young boy who becomes a demon slayer after his family is
                  slaughtered by demons.
                </p>
                <a href="#" className="card-link">
                  Watch now <span>➔</span>
                </a>
              </div>
            </div>
            <div className="resource-card">
              <div className="card-content">
                <img
                  className="movie-image"
                  src="https://wallpapercave.com/wp/wp10677784.jpg"
                  alt="movie poster"
                />
                <h2>Arcane</h2>
                <p>
                  Explores the origins of two iconic League of Legends
                  champions.
                </p>
                <a href="#" className="card-link">
                  Watch now <span>➔</span>
                </a>
              </div>
            </div>
            <div className="resource-card">
              <div className="card-content">
                <img
                  className="movie-image"
                  src="https://images.alphacoders.com/134/1346645.png"
                  alt="movie poster"
                />
                <h2>Blue eye samurai</h2>
                <p>
                  A young boy who becomes a demon slayer after his family is
                  slaughtered by demons.
                </p>
                <a href="#" className="card-link">
                  Watch now <span>➔</span>
                </a>
              </div>
            </div>
            <div className="resource-card">
              <div className="card-content">
                <img
                  className="movie-image"
                  src="https://images2.alphacoders.com/133/1336179.jpeg"
                  alt="movie poster"
                  Unset
                />
                <h2>Tokyo revengers</h2>
                <p>
                  Features Takemichi's time-traveling quest to save his
                  girlfriend.
                </p>
                <a href="#" className="card-link">
                  Watch now <span>➔</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};
