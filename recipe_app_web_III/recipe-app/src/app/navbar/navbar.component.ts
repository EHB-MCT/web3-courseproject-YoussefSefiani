import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  headElements = [{ title: 'Add recipe', route: '/add-recipe' }];

  constructor() {}

  ngOnInit(): void {}
}
