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
    }

    get url(){
        return this.getUrl();
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
        $(`#${this.id}`).attr("src", `${this.url}?start=${tiempo}`)
    }
}

let musica1 = new Reproductor("https://www.youtube.com/embed/sBI1oxp8f8U", "musica")
let pelicula1 = new Reproductor("https://www.youtube.com/embed/HKJ4Thgk1Js", "peliculas")
let serie1 = new Reproductor("https://www.youtube.com/embed/fVQUcaO4AvE", "series")

$(() => {
    musica1.playMultimedia();
    musica1.setInicio(60);

    pelicula1.playMultimedia();
    pelicula1.setInicio(20);

    serie1.playMultimedia();
    serie1.setInicio(12);
})