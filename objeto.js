class Calebe {
    constructor (site){
           this.site = site;
    }

    exibirSite(){
        window.open(this.site);
    }
}

var novoObj = Calebe ("https://littlealchemy2.com/");
novoObj.exibirSite();
