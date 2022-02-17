let mostrarMultimedia = (() => {
    let parametros = (url, id) => {
        $(`#${id}`).attr("src", url)
    }
    return {
        parametrosPublicos: (url, id) => {
            return parametros(url, id);
        }
    }
})();

class Multimedia{
    constructor(url){
        let _url = url;

        this.getUrl = () => _url;
        this.setUrl = (nueva_url) => _url = nueva_url
    }

    get url(){
        return this.getUrl();
    }

    set url(nueva_url){
        return this.setUrl(nueva_url);
    }

    setInicio(){
        return console.log("Este método es para realizar un cambio en la URL del video");
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url)
        let _id = id;

        this.getId = () => _id;
    }

    get id(){
        return this.getId();
    }

    playMultimedia(){
        return mostrarMultimedia.parametrosPublicos(this.url, this.id);
    }

    setInicio(tiempo){
        let nueva_url = `${this.url}?start=${tiempo}`;
        return this.url(nueva_url);
    }
}

let musica1 = new Reproductor("https://www.youtube.com/embed/ec0XKhAHR5I", "musica")
let pelicula1 = new Reproductor("https://www.youtube.com/embed/6QkTCmhOzuA", "peliculas")
let serie1 = new Reproductor("https://www.youtube.com/embed/0STDZqXCTxs", "series")

$(() => {
    musica1.playMultimedia();

    pelicula1.setInicio(30);
    console.log(pelicula1)
    // pelicula1.playMultimedia();

    serie1.playMultimedia();
})
