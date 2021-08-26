import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catan',
  templateUrl: './catan.component.html',
  styleUrls: ['./catan.component.scss']
})
export class CatanComponent implements OnInit {

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
