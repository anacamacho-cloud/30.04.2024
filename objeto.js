class Obj {
    constructor (string1, string2){
         this.string1 = string1 //variavel de interface
         this.string2 = string2
    }

    metodo1(){
        window.open(this.site);
    }

    metodo2(){
        
    }
}

class Calebe {
    constructor (site){
           this.site = site;
    }

    exibirSite(){
        window.open(this.site);
    }
}

var novoObj = newObj ("https://term.ooo/4/");
novoObj.exibirSite();
