import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coding = [
    {
      image: '/assets/features/stitch-code.png',
      link: '/cheese'
    },
    {
      image: '/assets/features/mb-code.png',
      link: '/magic-binder'
    },
    {
      image: '/assets/features/mb-com-code.png',
      link: '/magic-binder-com'
    },
    {
      image: '/assets/features/pi-code.png',
      link: '/prod-ind'
    },
    {
      image: '/assets/features/willflix-code.png',
      link: '/willflix'
    },
    {
      image: '/assets/features/catan-code.png',
      link: '/catan'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
