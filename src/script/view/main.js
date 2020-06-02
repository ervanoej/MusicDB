import '../component/artist-list.js';
import '../component/album-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const artistList = document.querySelector("artist-list");
    const albumList = document.querySelector("album-list");

    const onButtonSearchClicked = () => {
        if (searchElement.category === 'biodata') {
            artistList.renderLoader();
            const result = DataSource.searchArtist(searchElement.value)
            .then(result => {
                renderResult(result)
            })
            .catch( message => {
                fallbackResult(message);
            })} 
        else {
            albumList.renderLoader();
            const result = DataSource.searchAlbum(searchElement.value)
            .then(result => {
                renderResultAlbum(result)
            })
            .catch( message => {
                fallbackResultAlbum(message);
            })}
 };

    const renderResult = results => {
        artistList.artists = results;
        albumList.renderEmpty();
    };

    const renderResultAlbum = results => {
        albumList.album = results;
        artistList.renderEmpty();
    };

    const fallbackResult = message => {
        albumList.renderEmpty();
        artistList.renderError(message);
    };

    const fallbackResultAlbum = message => {
        artistList.renderEmpty();
        albumList.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;