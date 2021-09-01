import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  favoriteColor = '';
  alert = 'ddd';

  profile: {
    name: string
  } = {
    name: 'user'
  }

  constructor() { }

  ngOnInit(): void {

  }

  changeName(): void {
    this.alert = '';
  }

  saveName(): void {
    this.alert = 'saved';
  }

}
