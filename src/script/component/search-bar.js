class SearchBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    get category(){
      return this.querySelector("#categorySelect").value;
    }

    render() {
        this.innerHTML = `
        <div class="col-lg-12 text-center mt-5">
            <h1>Cari Artis Musik Favoritmu!</h1>
        </div>
       <div class="col-md-auto">
        <div class="input-group mb-3">
        <div class="col-6 col-md-4">
          <select class="form-control" name="categorySelect" id="categorySelect">
            <option selected>Pilih pencarian terkait</option>
            <option value="biodata"> Biodata dari...</option>
            <option value="album"> Album dari...</option>
          </select>
        </div>
          <input type="search" class="form-control" id="searchElement" placeholder="Tulis nama artis...">
          <div class="input-group-append">
            <button class="btn btn-primary" id="searchButtonElement" type="submit"> <i class="fa fa-search"></i></button>
          </div>
        </div>
       </div>
       `;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);