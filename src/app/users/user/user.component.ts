import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      // we retrieve id from users/:id app.module
      id: this.currentRoute.snapshot.params['id'],
      name: this.currentRoute.snapshot.params['name']
    }
  }

}
