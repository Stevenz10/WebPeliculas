import { useState } from 'react'
import dummy from './no-image.jpg'
import Movie from './Movie'
import './App.css'
import axios from 'axios'
function App() {
  let movieList = [
    {
      "page": 1,
      "results": [
        {
          "adult": false,
          "backdrop_path": "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
          "genre_ids": [
            28,
            878,
            27
          ],
          "id": 615656,
          "original_language": "en",
          "original_title": "Meg 2: The Trench",
          "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
          "popularity": 3784.306,
          "poster_path": "/drCySAAAvegq1vQRGRqPKN9f00w.jpg",
          "release_date": "2023-08-02",
          "title": "Meg 2: The Trench",
          "video": false,
          "vote_average": 7,
          "vote_count": 1523
        },
        {
          "adult": false,
          "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
          "genre_ids": [
            35,
            12,
            14
          ],
          "id": 346698,
          "original_language": "en",
          "original_title": "Barbie",
          "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
          "popularity": 3176.933,
          "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
          "release_date": "2023-07-19",
          "title": "Barbie",
          "video": false,
          "vote_average": 7.4,
          "vote_count": 3954
        },
        {
          "adult": false,
          "backdrop_path": "/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
          "genre_ids": [
            12,
            28,
            14
          ],
          "id": 335977,
          "original_language": "en",
          "original_title": "Indiana Jones and the Dial of Destiny",
          "overview": "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
          "popularity": 1903.363,
          "poster_path": "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
          "release_date": "2023-06-28",
          "title": "Indiana Jones and the Dial of Destiny",
          "video": false,
          "vote_average": 6.7,
          "vote_count": 1440
        },
        {
          "adult": false,
          "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
          "genre_ids": [
            16,
            35,
            10751,
            14,
            10749
          ],
          "id": 976573,
          "original_language": "en",
          "original_title": "Elemental",
          "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
          "popularity": 1357.708,
          "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
          "release_date": "2023-06-14",
          "title": "Elemental",
          "video": false,
          "vote_average": 7.8,
          "vote_count": 1795
        },
        {
          "adult": false,
          "backdrop_path": "/waBWlJlMpyFb7STkFHfFvJKgwww.jpg",
          "genre_ids": [
            28,
            18
          ],
          "id": 678512,
          "original_language": "en",
          "original_title": "Sound of Freedom",
          "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
          "popularity": 1014.163,
          "poster_path": "/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
          "release_date": "2023-07-03",
          "title": "Sound of Freedom",
          "video": false,
          "vote_average": 8.1,
          "vote_count": 427
        },
        {
          "adult": false,
          "backdrop_path": "/2QL5j6mB4ZpyBcVr0WO9H9MQGBu.jpg",
          "genre_ids": [
            28,
            12,
            18,
            14,
            36
          ],
          "id": 734253,
          "original_language": "hi",
          "original_title": "आदिपुरुष",
          "overview": "7000 years ago, Ayodhya's Prince Raghava and Prince Sesh along with the Mighty Vanar Warriors travels to the island of Lanka with an aim to rescue Raghava's wife Janaki, who has been abducted by Lankesh, the king of Lanka.",
          "popularity": 930.556,
          "poster_path": "/1H2xEZOixs0z0JKwyjANZiKNNVJ.jpg",
          "release_date": "2023-06-16",
          "title": "Adipurush",
          "video": false,
          "vote_average": 5.1,
          "vote_count": 30
        },
        {
          "adult": false,
          "backdrop_path": "/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg",
          "genre_ids": [
            27,
            14
          ],
          "id": 635910,
          "original_language": "en",
          "original_title": "The Last Voyage of the Demeter",
          "overview": "The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.",
          "popularity": 894.959,
          "poster_path": "/nrtbv6Cew7qC7k9GsYSf5uSmuKh.jpg",
          "release_date": "2023-08-09",
          "title": "The Last Voyage of the Demeter",
          "video": false,
          "vote_average": 7.3,
          "vote_count": 460
        },
        {
          "adult": false,
          "backdrop_path": "/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
          "genre_ids": [
            27,
            9648,
            53
          ],
          "id": 968051,
          "original_language": "en",
          "original_title": "The Nun II",
          "overview": "Set four years after the ending of the the nun, this follows Sister Irene as she investigates a murder at a boarding school in France. While investigating she is once again forced to face the demonic force Valak, the Nun.",
          "popularity": 1294.378,
          "poster_path": "/cn6kjfbE8jhiBuhanIc2pwuzhG5.jpg",
          "release_date": "2023-09-06",
          "title": "The Nun II",
          "video": false,
          "vote_average": 6.6,
          "vote_count": 35
        },
        {
          "adult": false,
          "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
          "genre_ids": [
            16,
            28,
            12
          ],
          "id": 569094,
          "original_language": "en",
          "original_title": "Spider-Man: Across the Spider-Verse",
          "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
          "popularity": 804.191,
          "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
          "release_date": "2023-05-31",
          "title": "Spider-Man: Across the Spider-Verse",
          "video": false,
          "vote_average": 8.4,
          "vote_count": 4081
        },
        {
          "adult": false,
          "backdrop_path": "/1HzL603WOer58xtnrRYdSIL5K04.jpg",
          "genre_ids": [
            35,
            12
          ],
          "id": 912908,
          "original_language": "en",
          "original_title": "Strays",
          "overview": "When Reggie is abandoned on the mean city streets by his lowlife owner, Doug, Reggie is certain that his beloved owner would never leave him on purpose. But once Reggie falls in with Bug, a fast-talking, foul-mouthed stray who loves his freedom and believes that owners are for suckers, Reggie finally realizes he was in a toxic relationship and begins to see Doug for the heartless sleazeball that he is.",
          "popularity": 1208.164,
          "poster_path": "/muDaKftykz9Nj1mhRheMdbuNI9Z.jpg",
          "release_date": "2023-08-17",
          "title": "Strays",
          "video": false,
          "vote_average": 7.1,
          "vote_count": 117
        },
        {
          "adult": false,
          "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
          "genre_ids": [
            28,
            12,
            878
          ],
          "id": 667538,
          "original_language": "en",
          "original_title": "Transformers: Rise of the Beasts",
          "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
          "popularity": 869.31,
          "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
          "release_date": "2023-06-06",
          "title": "Transformers: Rise of the Beasts",
          "video": false,
          "vote_average": 7.5,
          "vote_count": 3103
        },
        {
          "adult": false,
          "backdrop_path": "/xVMtv55caCEvBaV83DofmuZybmI.jpg",
          "genre_ids": [
            53,
            28
          ],
          "id": 724209,
          "original_language": "en",
          "original_title": "Heart of Stone",
          "overview": "An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon.",
          "popularity": 804.533,
          "poster_path": "/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg",
          "release_date": "2023-08-09",
          "title": "Heart of Stone",
          "video": false,
          "vote_average": 7,
          "vote_count": 1003
        },
        {
          "adult": false,
          "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
          "genre_ids": [
            28,
            80,
            53
          ],
          "id": 385687,
          "original_language": "en",
          "original_title": "Fast X",
          "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
          "popularity": 726.518,
          "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
          "release_date": "2023-05-17",
          "title": "Fast X",
          "video": false,
          "vote_average": 7.3,
          "vote_count": 3599
        },
        {
          "adult": false,
          "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
          "genre_ids": [
            28,
            12,
            878
          ],
          "id": 298618,
          "original_language": "en",
          "original_title": "The Flash",
          "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
          "popularity": 765.357,
          "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
          "release_date": "2023-06-13",
          "title": "The Flash",
          "video": false,
          "vote_average": 6.9,
          "vote_count": 2750
        },
        {
          "adult": false,
          "backdrop_path": "/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg",
          "genre_ids": [
            16,
            35,
            28
          ],
          "id": 614930,
          "original_language": "en",
          "original_title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
          "overview": "After years of being sheltered from the human world, the Turtle brothers set out to win the hearts of New Yorkers and be accepted as normal teenagers through heroic acts. Their new friend April O'Neil helps them take on a mysterious crime syndicate, but they soon get in over their heads when an army of mutants is unleashed upon them.",
          "popularity": 1001.819,
          "poster_path": "/sGm09gLVyICQl8lVIHpmHZAgSNq.jpg",
          "release_date": "2023-07-31",
          "title": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
          "video": false,
          "vote_average": 7.3,
          "vote_count": 370
        },
        {
          "adult": false,
          "backdrop_path": "/AeR5k8Sp3zc2Ql4tT6CmgqspsEq.jpg",
          "genre_ids": [
            12,
            10751,
            14,
            10749
          ],
          "id": 447277,
          "original_language": "en",
          "original_title": "The Little Mermaid",
          "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
          "popularity": 679.591,
          "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
          "release_date": "2023-05-18",
          "title": "The Little Mermaid",
          "video": false,
          "vote_average": 6.6,
          "vote_count": 1863
        },
        {
          "adult": false,
          "backdrop_path": "/4Yon9Qmg3U4onL0OywXAHSkFTUG.jpg",
          "genre_ids": [
            28,
            18
          ],
          "id": 1163045,
          "original_language": "yo",
          "original_title": "Jagun Jagun",
          "overview": "A young man determined to become a powerful warrior joins an elite army, encountering the wrath of a maniacal warlord and the love of a fierce woman.",
          "popularity": 575.478,
          "poster_path": "/n0GXumEMtwgYj2M3YW4Iu0veYJg.jpg",
          "release_date": "2023-08-10",
          "title": "Jagun Jagun",
          "video": false,
          "vote_average": 6.6,
          "vote_count": 39
        },
        {
          "adult": false,
          "backdrop_path": "/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg",
          "genre_ids": [
            35,
            10749
          ],
          "id": 884605,
          "original_language": "en",
          "original_title": "No Hard Feelings",
          "overview": "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
          "popularity": 558.558,
          "poster_path": "/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg",
          "release_date": "2023-06-15",
          "title": "No Hard Feelings",
          "video": false,
          "vote_average": 7.2,
          "vote_count": 1147
        },
        {
          "adult": false,
          "backdrop_path": "/4vlsYpItGVZN1UWZGqQBoCzrUSw.jpg",
          "genre_ids": [
            53
          ],
          "id": 1030987,
          "original_language": "en",
          "original_title": "Sympathy for the Devil",
          "overview": "After being forced to drive a mysterious passenger at gunpoint, a man finds himself in a high-stakes game of cat and mouse where it becomes clear that not everything is as it seems.",
          "popularity": 530.007,
          "poster_path": "/afGdVMa80LMs6ibLP22CwM5uI4e.jpg",
          "release_date": "2023-07-20",
          "title": "Sympathy for the Devil",
          "video": false,
          "vote_average": 6.4,
          "vote_count": 78
        },
        {
          "adult": false,
          "backdrop_path": "/vcQQx1z5iUbqZ3uJXvfCCMN3HPb.jpg",
          "genre_ids": [
            28,
            35
          ],
          "id": 869855,
          "original_language": "nl",
          "original_title": "H4Z4RD",
          "overview": "Noah loves his girlfriend Lea and their daughter Zita dearly, just about as much as his extremely pimped car with vanity plate “H4Z4RD”. When his cousin offers him a seemingly simple job as a driver, it soon turns into an unlikely and nerve-racking race through Antwerp, which can only result in the end of Noah, his family or the car…",
          "popularity": 558.8,
          "poster_path": "/1dviyIqBrbnigrbodIvfMQj8mJ0.jpg",
          "release_date": "2022-07-20",
          "title": "H4Z4RD",
          "video": false,
          "vote_average": 6.2,
          "vote_count": 12
        }
      ],
      "total_pages": 39942,
      "total_results": 798832
    }
  ]
  const [movieTitle, setMovieTitle] = useState('')
  const [movies, setMovies] = useState(movieList[0])
  const [currentPage, setCurrentPage] = useState(1)
  const navbar = []
 
  async function handleSubmit(e){

    if(movieTitle){
      e.preventDefault()
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: movieTitle,
        api_key: '382fdebc1185faa5264960e4daf0c8db'
      },
      headers: {
      }
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setMovies(response.data)
    } catch (error) {
      console.error(error);
    }
    }
    else{
      console.log('No hay nada')
    }
  }

  async function handlePageChange(e){
    e.preventDefault()
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: movieTitle,
        api_key: '382fdebc1185faa5264960e4daf0c8db',
        page: e.target.id
      },
      headers: {
      }
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setCurrentPage(parseInt(e.target.id))
      setMovies(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  if (movies) {
    const totalPages = movies.total_pages;
    const numButtonsToShow = 10; // Número de botones de navegación que deseas mostrar

    const startPage = Math.max(1, currentPage - Math.floor(numButtonsToShow / 2));
    const endPage = Math.min(totalPages, startPage + numButtonsToShow - 1);

    if (currentPage > 1) {
      // Agrega un botón "Anterior" si no estás en la primera página
      navbar.push(
        <button key="prev" id={currentPage-1} onClick={handlePageChange}>
          ⬅️
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      navbar.push(
        <button key={i} id={i} onClick={handlePageChange}>
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      // Agrega un botón "Siguiente" si no estás en la última página
      navbar.push(
        <button key="next"  id={1+currentPage} onClick={handlePageChange}>
          ➡️
        </button>
      );
    }
  }
  console.log(movieList)
  return (
    <>
    <main>
      <h1 className='webTitle'>Buscador de peliculas chafas</h1>
      <form onSubmit={handleSubmit} className='form'>
        <button type="submit" className='btn'>Buscar</button>
        <input type="text" placeholder="Enter movie title" className='input' value={movieTitle} onChange={e=>setMovieTitle(e.target.value)}/>
      </form>
      <div className='movies'>
        {movies.results.map((movie, index) => (
          <Movie key={index} name={movie.title} year={movie.release_date} poster={movie.poster_path?"https://image.tmdb.org/t/p/w185"+movie.poster_path:dummy} />
        ))}
        <div className='navbar'>
          {navbar}
        </div>
      </div>
    </main>
    <footer>
        <p><b>Hecho por Steven Zheng</b></p>
    </footer>
    </>
  );
}

export default App
