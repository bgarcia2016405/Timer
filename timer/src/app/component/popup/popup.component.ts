import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  horas: Number;
  minutos: Number;
  segundos: Number;

  constructor() {
    this.horas = 0
    this.minutos = 0
    this.segundos = 0
   }

  ngOnInit(): void {
  }



}
