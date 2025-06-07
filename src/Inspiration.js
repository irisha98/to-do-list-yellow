import { albums } from './albums';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Inspiration.css';
import { useState } from 'react';

function Inspiration () {
    const [currentTrack, setCurrentTrack] = useState();

    return <div className='inspiration-page'
    >
        <h1 className='inspiration-title'>Musical Inspiration</h1>
        <div className='slider-wrapper'>
        <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
        >
            {albums.map((album) => (
                <div key={album.id} className='album-card'>
                    <img src={album.cover} alt={album.title} className='album-cover' />
                    <h2>{album.artist}</h2>
                    <p>{album.title}</p>

                    <ul className='track-list'>
                        {Array.isArray(album.tracks) &&
                        album.tracks.map((track, index) => (
                            <li key={index}>
                                <button onClick={() => setCurrentTrack(track)}>
                                    {track.title}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {currentTrack && (
                    <div className='youtube-player'>
                        <iframe
                        src={currentTrack.embed}
                        style={{border:'none'}}
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title={currentTrack.title}
                        ></iframe>
                    </div>
                    )}
                </div>
            ))}
            </Slider>
            </div>
    </div>
}
 export default Inspiration;