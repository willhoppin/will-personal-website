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

  films = [
    {
      image: '/assets/features/waynflete.jpg',
      link: 'https://vimeo.com/341240445'
    },
    {
      image: '/assets/features/piper.jpg',
      link: 'https://vimeo.com/294267879'
    },
    {
      image: '/assets/features/amphetateens.jpg',
      link: 'https://vimeo.com/240400929'
    },
    {
      image: '/assets/features/lonely.jpg',
      link: 'https://vimeo.com/379926015'
    },
    {
      image: '/assets/features/dance.jpg',
      link: 'https://vimeo.com/411583775'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
