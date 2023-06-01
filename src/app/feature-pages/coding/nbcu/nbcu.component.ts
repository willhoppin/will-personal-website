import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbcu',
  templateUrl: './nbcu.component.html',
  styleUrls: ['./nbcu.component.scss']
})
export class NbcuComponent implements OnInit {

  related = [
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