class AlbumModal extends HTMLElement {

    set albums(albums) {
        this._albums = albums;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style> 
          .img-fluid{
            width: 50%;
            height: 50%;
          }
        </style>
        <div class="modal fade bd-example-modal-lg" id="artistModal${this._albums.idAlbum}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">${this._albums.strAlbum}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="text-center">
                  <img class="img-fluid" src="${this._albums.strAlbumThumb}" alt="Album Thumb">
                  <hr>
                 <p>${this._albums.strDescriptionEN}</p>
                </div>
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

customElements.define("album-modal", AlbumModal);