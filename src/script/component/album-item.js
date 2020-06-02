class AlbumItem extends HTMLElement {

    set albums(albums) {
        this._albums = albums;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style> 
          .card {
            display:inline-block;
            width: 16rem;
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
           <div class="card mt-5">
              <img class="card-img-top" src="${this._albums.strAlbumThumb}" alt="AlbumThumbnail">
              <div class="card-body">
                <h5 class="card-title">${this._albums.strAlbum}</h5>
                <p class="card-text scroll">${this._albums.strDescriptionEN}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fas fa-headphones"></i> Genre: ${this._albums.strGenre}</li>
                <li class="list-group-item"><i class="fas fa-guitar"></i> Style: ${this._albums.strStyle}</li>
                <li class="list-group-item"><i class="fas fa-tags"></i> Label: ${this._albums.strLabel}</li>
                <li class="list-group-item"><i class="fas fa-grin"></i> Mood: ${this._albums.strMood}</li>
              </ul>
              <div class="card-body">
                <button class="btn btn-success" data-toggle="modal" data-target="#artistModal${this._albums.idAlbum}"> Selengkapnya </button>
              </div>
            </div> 
            `;
    }
}

customElements.define("album-item", AlbumItem);