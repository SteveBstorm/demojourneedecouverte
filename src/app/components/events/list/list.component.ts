import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/models/evenement.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list : Evenement[]
  constructor(
    private service : EventsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (data : Evenement[]) => this.list = data
    })
  }

  detail(id: number){
    this.router.navigate(['/detail/'+id])
  }

}
