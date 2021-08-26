import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-binder',
  templateUrl: './magic-binder.component.html',
  styleUrls: ['./magic-binder.component.scss']
})
export class MagicBinderComponent implements OnInit {

  related = [
    {
      image: '/assets/features/mb-code.png',
      link: '/cheese'
    },
    {
      image: '/assets/features/mb-com-code.png',
      link: '/cheese'
    },
    {
      image: '/assets/features/pi-code.png',
      link: '/cheese'
    },
    {
      image: '/assets/features/willflix-code.png',
      link: '/cheese'
    },
    {
      image: '/assets/features/catan-code.png',
      link: '/cheese'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
