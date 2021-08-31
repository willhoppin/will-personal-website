import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-binder',
  templateUrl: './magic-binder.component.html',
  styleUrls: ['./magic-binder.component.scss']
})
export class MagicBinderComponent implements OnInit {

  related = [
    {
      image: '/assets/features/stitch-code.png',
      link: '/cheese'
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
