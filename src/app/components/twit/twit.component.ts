import { Component, OnInit } from '@angular/core';
import { Coctel } from 'src/app/model/coctel';
import { CoctelService } from 'src/app/services/coctel.service';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent implements OnInit {

    data:Coctel[]= [];
  

  constructor( public coctelservice:CoctelService) { }

  ngOnInit(){

    this.coctelservice.getservice("margarita");
    }

}
