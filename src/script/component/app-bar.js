class AppBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <style> 
        .navbar {
        	-webkit-box-shadow: 0 8px 6px -6px #999;
    		-moz-box-shadow: 0 8px 6px -6px #999;
    		box-shadow: 0 8px 6px -6px #999;
        	background: #e37222;
        }
        </style>
      <nav class="navbar fixed-top navbar-dark">
        <span class="navbar-brand mb-0 h1"><i class="fas fa-music"></i> MusicDB</span>
      </nav>`;
    }
}

customElements.define("app-bar", AppBar);