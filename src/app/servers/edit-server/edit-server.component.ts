import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate  {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private currentRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // Retrieve Query Params ?allowEdit
    this.currentRoute.queryParams.subscribe( 
      (queryParams: Params) =>{
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
    // Retrieve Fragment #loading
    this.currentRoute.fragment.subscribe();
    const id = +this.currentRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo: this.currentRoute});
  }

  
  canDeactivate(): boolean | import("rxjs").Observable<boolean> | Promise<boolean>{ 
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && 
    !this.changesSaved){
      return confirm('do you want to discard the changes?');
    }else{
      return true;
    }
  }
}
