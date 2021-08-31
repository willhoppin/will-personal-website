import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faux-feature',
  templateUrl: './faux-feature.component.html',
  styleUrls: ['./faux-feature.component.scss']
})
export class FauxFeatureComponent implements OnInit {
  @Input() image: string;
  @Input() link: string;

  constructor() {
    this.image = '';
    this.link = '';
  }

  ngOnInit(): void {
  }

}
