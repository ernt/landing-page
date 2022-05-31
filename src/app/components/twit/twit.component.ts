import { Component, OnInit } from '@angular/core';
import { CoctelService } from 'src/app/services/coctel.service';
import {Coctel} from "../../model/Coctel";

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {
  public coctel:Coctel={ id:0,
    title:'',
    price:0,
    category:'',
    description:'',
    image:'' }



  constructor( public coctelservice:CoctelService) {
   // console.log("TwitComponent::constructor()");
  }


 /* public fraseRecibida(coctel:Coctel) {
    console.log("Api entrante. " + coctel.title);
    this.coctel = coctel;
    debugger;
  }

  */
    ngOnInit(){

    this.coctelservice.getAllProducts( ).subscribe(coctel => (this.coctel=coctel) );
   // console.log("ngOnInit. FIN");
      //this.coctelservice.getAllProducts().subscribe(this.fraseRecibida);
    }

}
