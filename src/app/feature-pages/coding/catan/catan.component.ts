import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catan',
  templateUrl: './catan.component.html',
  styleUrls: ['./catan.component.scss']
})
export class CatanComponent implements OnInit {

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
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
