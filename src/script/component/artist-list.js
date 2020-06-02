import './artist-item.js';
import './artist-modal.js';

class ArtistList extends HTMLElement {

    set artists(artists) {
        this._artists = artists;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._artists.forEach(artist => {
            const artistItemElement = document.createElement("artist-item");
            const artistModal = document.createElement("artist-modal");
            artistItemElement.artist = artist;
            artistModal.artist = artist;
            this.appendChild(artistItemElement);
            this.appendChild(artistModal);
        })
    }

    renderLoader() {
        this.innerHTML = `
        <style> 
            .loader {
                position: fixed;
                left: 50%;
                top: 35%;
                border: 5px solid #f3f3f3;
                -webkit-animation: spin 1s linear infinite;
                animation: spin 1s linear infinite;
                border-top: 5px solid #555;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                z-index: 1000;
            }

            /* Safari */
            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
            }

            @keyframes spin {
                 0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
        }
        </style>
        <div class="loader"></div>`;
    }

    renderEmpty() {
        this.innerHTML = "";
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("artist-list", ArtistList);