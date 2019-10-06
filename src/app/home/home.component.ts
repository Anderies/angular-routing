import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLoadServers(id: number){
    // complex calculation
    // query params to add sign ?
    // fragment to add #
    this.router.navigate(['/servers', id , 'edit'], {queryParams: {allowEdit: id},fragment:'loading'});
  }


}
