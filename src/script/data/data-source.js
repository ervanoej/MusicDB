class DataSource {
    static searchArtist(keyword) {
        return fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${keyword}`)
            .then(response => response.json())
            .then(responseJson => {
                if(responseJson.artists) {
                    return Promise.resolve(responseJson.artists);
                } else {
                    return Promise.reject(`${keyword} tidak ditemukan`)
                }
            })
    }

    static searchAlbum(keyword) {
        return fetch(`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${keyword}`)
            .then(response => response.json())
            .then(responJson => {
                if(responJson.album) {
                    return Promise.resolve(responJson.album);
                } else {
                    return Promise.reject(`${keyword} tidak ditemukan`);
                }
            })
    }
}

export default DataSource;