import { Component, OnInit } from '@angular/core';
declare var Snap: any;
declare var mina: any;
@Component({
  selector: 'app-tablet-menu',
  templateUrl: './tablet-menu.component.html',
  styleUrls: ['./tablet-menu.component.scss']
})
export class TabletMenuComponent implements OnInit {
  isOpen = false;
  status;
  constructor() { }

  ngOnInit() {
  }
  clickEvent(ccc) {
    const s = Snap('#aaa');
    const pathEl = s.select( 'path' );
    const paths = {
      reset : pathEl.attr( 'd' ),
      active : ccc.getAttribute( 'data-morph-active' )
    };
    if (this.isOpen) {
      this.status = false;
    } else {
      setTimeout(this.status = true, 175);
    }
    pathEl.stop().animate( { 'path' : paths.active }, 150, mina.easein, () => {
      pathEl.stop().animate( { 'path' : paths.reset }, 800, mina.elastic );
    });
    this.isOpen = !this.isOpen;
  }
}
