import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ProdService{

    constructor() {
        
    }

    prodDetails = [
        {
        id: 1,
        prodName: 'Goodnight Punpun',
        prodImg:'https://images-na.ssl-images-amazon.com/images/I/919CVJ70zuL.jpg',
        prodDesc: 'Example',
        prodPrice:0,
    },
        {
        id: 2,
        prodName: 'Sandman Morte',
        prodImg:'https://images-na.ssl-images-amazon.com/images/I/41WbgthzV3L.jpg',
        prodDesc: 'Example',
        prodPrice:0,
    },
        {
        id: 3,
        prodName: 'Berserk',
        prodImg:'https://sm.ign.com/ign_br/screenshot/default/volume-27_7wbd.jpg',
        prodDesc: 'Example',
        prodPrice:0,
    },
        {
        id: 4,
        prodName: 'Vinland Saga',
        prodImg:'https://i.pinimg.com/originals/dc/41/03/dc410390c7a53ddeca5b128d92d534ed.jpg',
        prodDesc: 'Example',
        prodPrice:0,
    }
    ,
        {
        id: 5,
        prodName: 'Vagabond',
        prodImg:'https://images-na.ssl-images-amazon.com/images/I/51S6jRDsn8L.jpg',
        prodDesc: 'Example',
        prodPrice:0,
    }
    ,
        {
        id: 6,
        prodName: 'Monster',
        prodImg:'https://images-na.ssl-images-amazon.com/images/I/815xJbtOVfL.jpg',
        prodDesc: 'Example',
        prodPrice:0,
    }
    ]
   
}