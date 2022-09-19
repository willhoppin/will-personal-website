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
      image: '/assets/features/hml.jpeg',
      link: 'https://drive.google.com/file/d/1giEcbAh_84XYlSP1kVMV3y_I4E0j8gPt/view?usp=sharing',
      awards: ['Nominee: Best Student Film - Indie Short Fest by LAIFF 2022','Official Selection - Middlebury New Filmmakers Festival 2022']
    },
    {
      image: '/assets/features/lazarus.png',
      link: 'https://youtu.be/m3ILEWTkHVg',
      awards: []
    },
    {
      image: '/assets/features/popstar.png',
      link: 'https://www.youtube.com/watch?v=lHSf9RJlSRM',
      awards: ['Contest Winner - WRIF Emerging Filmmakers Showcase 2022','Official Selection - VTIFF: Made Here Film Festival 2022','Official Selection - Trinity Film Festival 2022']
    },
    {
      image: '/assets/features/amphetateens.png',
      link: 'https://vimeo.com/240400929',
      awards: []
    },
    {
      image: '/assets/features/waynflete.png',
      link: 'https://vimeo.com/341240445',
      awards: []
    },
    {
      image: '/assets/features/piper.png',
      link: 'https://vimeo.com/294267879',
      awards: []
    },
  ]

  design = [
    {
      image: '/assets/features/ux.jpg',
      link: 'https://app.magicbinder.com/binders/b278c056-0bfe-4ab4-8086-6445c032cfa3',
      awards: []
    },
    {
      image: '/assets/features/videoads.jpg',
      link: 'https://app.magicbinder.com/binders/56023a36-9b33-4c71-8592-6c37a2ce9dfe',
      awards: []
    },
    {
      image: '/assets/features/motion.jpg',
      link: 'https://vimeo.com/449430742',
      awards: []
    }
  ]

  photography = [
    {
      image: '/assets/features/photosite.jpg',
      link: 'https://willhoppin.wixsite.com/images',
      awards: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
