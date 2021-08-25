import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  @Input() image: string;
  @Input() link: string;

  constructor() {
    this.image = '';
    this.link = '';
  }

  ngOnInit(): void {
  }

}
