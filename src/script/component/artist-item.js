class ArtistItem extends HTMLElement {

    set artist(artist) {
        this._artist = artist;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
          .card {
            display:inline-block;
            width: 18rem;
          } 
          .card:hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .card-body > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
          }
        </style>
           <div class="card mb-5 mt-5">
              <img class="card-img-top" src="${this._artist.strArtistThumb}" alt="Artist Thumbnail">
              <div class="card-body">
                <h5 class="card-title">${this._artist.strArtist}</h5>
                <p class="card-text scroll">${this._artist.strBiographyEN}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fas fa-headphones"></i> Genre: ${this._artist.strGenre}</li>
                <li class="list-group-item"><i class="fas fa-guitar"></i> Style: ${this._artist.strStyle}</li>
                <li class="list-group-item"><i class="fas fa-grin"></i> Mood: ${this._artist.strMood}</li>
              </ul>
              <div class="card-body">
                <button class="btn btn-success" data-toggle="modal" data-target="#artistModal${this._artist.idArtist}"> Selengkapnya </button>
              </div>
            </div>
            `;
    }
}

customElements.define("artist-item", ArtistItem);