class FooterBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
    <style>
		.footer {
	  	position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background-color: #f6cd61;
		color: black;
		text-align: center;
		margin-top: auto;
		padding-top: 10px;
		-webkit-box-shadow: 0 8px 6px -6px #999;
    	-moz-box-shadow: 0 8px 6px -6px #999;
    	box-shadow: 0 8px 6px -6px #999;
	}
	</style>
	<div class="footer">
	  <p>MusicDB &#169; 2020</p>
	</div>`;
    }
}

customElements.define("footer-bar", FooterBar);