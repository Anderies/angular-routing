import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin(){
    this.authService.login();
    alert("you are logged in");
  }

  onLogout(){
    this.authService.logout();
    alert("you are logged out");
  }
  onLoadServers(id: number){
    // complex calculation
    // query params to add sign ?
    // fragment to add #
    this.router.navigate(['/servers', id , 'edit'], {queryParams: {allowEdit: id},fragment:'loading'});
  }


}
