import { Component, OnInit } from '@angular/core';
import {InfoService} from './info.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  providers:[InfoService]
})
export class FrontComponent implements OnInit {

  
  constructor(private details:InfoService) { }

  ngOnInit(): void {
  }
}
