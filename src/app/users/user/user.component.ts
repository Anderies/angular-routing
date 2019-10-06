import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
      // we retrieve id from users/:id user/:name app.module
      id: this.currentRoute.snapshot.params['id'],
      name: this.currentRoute.snapshot.params['name']
    }
    // this will be executed when params changed
    this.currentRoute.params.subscribe(
      // it will be fired whenever new data sent through observable(whenever parameters url change)
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

}
