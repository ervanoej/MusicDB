class ArtistModal extends HTMLElement {

    set artist(artist) {
        this._artist = artist;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="modal fade bd-example-modal-lg" id="artistModal${this._artist.idArtist}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">${this._artist.strArtist}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img class="img-fluid" src="${this._artist.strArtistWideThumb}" alt="Artist Thumb">
                <hr>
                <p>${this._artist.strBiographyEN}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
            `;
    }
}

customElements.define("artist-modal", ArtistModal);