import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-binder-com',
  templateUrl: './magic-binder-com.component.html',
  styleUrls: ['./magic-binder-com.component.scss']
})
export class MagicBinderComComponent implements OnInit {

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