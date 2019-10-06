import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  constructor(private serversService: ServersService,
              private currentRoute:ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    // + is making string 'id' converted to number
    const id = +this.currentRoute.snapshot.params['id'];
    console.log("bem",id);
    this.server = this.serversService.getServer(id);
    this.currentRoute.params.subscribe((params: Params)=>{ 
        this.server = this.serversService.getServer(+params['id']);
    })
  }

  onEdit(){
    // relativeTo getting current path you are right now and adding edit
    // queryParamsHandling taking string as value
    this.router.navigate(['edit'],{relativeTo: this.currentRoute , queryParamsHandling: 'preserve'});
    // or you can use this to navigate
    // this.router.navigate(['/servers' ,this.server.id,'edit']);
  }

}
