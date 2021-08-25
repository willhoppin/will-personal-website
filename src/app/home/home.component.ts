import { Component, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coding = [
    {
      image: '/assets/features/stitch-code.png'
    },
    {
      image: '/assets/features/mb-code.png'
    },
    {
      image: '/assets/features/mb-com-code.png'
    },
    {
      image: '/assets/features/pi-code.png'
    },
    {
      image: '/assets/features/willflix-code.png'
    },
    {
      image: '/assets/features/catan-code.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
