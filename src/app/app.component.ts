import { Component, OnInit } from '@angular/core';

interface totalOverview {
  bgColor: string;
  imgSrc: string;
  id: string;
  subCount: string;
  subLabel: string;
  icon: string;
  todaySub: string;
  todayLabelColor: string;
}

interface dayOverview {
  action: string;
  imgSrc: string;
  count: string;
  icon: string;
  perc: string;
  percColor: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'social-media-dashboard';
  isDarkTheme = true;
  darkTheme = 'hsl(230, 17%, 14%)';
  lightTheme = 'white';
  totalList: totalOverview[] = [];
  dayList: dayOverview[] = [];
  ngOnInit(): void {
    this.checkTheme();
    this.totalList = [
      {
        bgColor: 'hsl(208, 92%, 53%)',
        imgSrc: '../../assets/icon-facebook.svg',
        id: '@nathanf',
        subCount: '1987',
        subLabel: 'FOLLOWERS',
        icon: '../../assets/icon-up.svg',
        todaySub: '12 Today',
        todayLabelColor: 'hsl(163, 72%, 41%)',
      },
      {
        bgColor: 'hsl(203, 89%, 53%)',
        imgSrc: '../../assets/icon-twitter.svg',
        id: '@nathanf',
        subCount: '1044',
        subLabel: 'FOLLOWERS',
        icon: '../../assets/icon-up.svg',
        todaySub: '99 Today',
        todayLabelColor: 'hsl(163, 72%, 41%)',
      },
      {
        bgColor:
          'linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))',
        imgSrc: '../../assets/icon-instagram.svg',
        id: '@realnathanf',
        subCount: '11K',
        subLabel: 'FOLLOWERS',
        icon: '../../assets/icon-up.svg',
        todaySub: '1099 Today',
        todayLabelColor: 'hsl(163, 72%, 41%)',
      },
      {
        bgColor: 'hsl(348, 97%, 39%)',
        imgSrc: '../../assets/icon-youtube.svg',
        id: 'Nathan F.',
        subCount: '8239',
        subLabel: 'SUBSCRIBERS',
        icon: '../../assets/icon-down.svg',
        todaySub: '144 Today',
        todayLabelColor: 'hsl(356, 69%, 56%)',
      },
    ];

    this.dayList = [
      {
        action: 'Page Views',
        imgSrc: '../../assets/icon-facebook.svg',
        count: '87',
        icon: '../../assets/icon-up.svg',
        perc: '3%',
        percColor: 'hsl(163, 72%, 41%)',
      },
      {
        action: 'Likes',
        imgSrc: '../../assets/icon-facebook.svg',
        count: '52',
        icon: '../../assets/icon-down.svg',
        perc: '2%',
        percColor: 'hsl(356, 69%, 56%)',
      },
      {
        action: 'Likes',
        imgSrc: '../../assets/icon-instagram.svg',
        count: '5462',
        icon: '../../assets/icon-up.svg',
        perc: '2257%',
        percColor: 'hsl(163, 72%, 41%)',
      },
      {
        action: 'Page Views',
        imgSrc: '../../assets/icon-instagram.svg',
        count: '52K',
        icon: '../../assets/icon-up.svg',
        perc: '1375%',
        percColor: 'hsl(163, 72%, 41%)',
      },
      {
        action: 'Retweets',
        imgSrc: '../../assets/icon-twitter.svg',
        count: '117',
        icon: '../../assets/icon-up.svg',
        perc: '303%',
        percColor: 'hsl(163, 72%, 41%)',
      },
      {
        action: 'Likes',
        imgSrc: '../../assets/icon-twitter.svg',
        count: '507',
        icon: '../../assets/icon-up.svg',
        perc: '507%',
        percColor: 'hsl(163, 72%, 41%)',
      },
      {
        action: 'Likes',
        imgSrc: '../../assets/icon-youtube.svg',
        count: '107',
        icon: '../../assets/icon-down.svg',
        perc: '19%',
        percColor: 'hsl(356, 69%, 56%)',
      },
      {
        action: 'Total Views',
        imgSrc: '../../assets/icon-youtube.svg',
        count: '1407',
        icon: '../../assets/icon-down.svg',
        perc: '12%',
        percColor: 'hsl(356, 69%, 56%)',
      },
    ];
  }
  themeChange = () => {
    this.isDarkTheme = !this.isDarkTheme;
    this.checkTheme();
  };
  checkTheme = () => {
    if (this.isDarkTheme) {
      document.body.style.backgroundColor = this.darkTheme;
    } else {
      document.body.style.backgroundColor = this.lightTheme;
    }
  };
}
