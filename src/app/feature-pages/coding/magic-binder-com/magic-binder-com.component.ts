import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-binder-com',
  templateUrl: './magic-binder-com.component.html',
  styleUrls: ['./magic-binder-com.component.scss']
})
export class MagicBinderComComponent implements OnInit {

  related = [
    {
      image: '/assets/features/stitch-code.png',
      link: '/cheese'
    },
    {
      image: '/assets/features/mb-code.png',
      link: '/magic-binder'
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
