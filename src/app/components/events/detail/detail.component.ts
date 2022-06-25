import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evenement, EvenementDetail } from 'src/app/models/evenement.model';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentevent: EvenementDetail
  constructor(
    private service: EventsService,
    private ar : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.getById(this.ar.snapshot.params['id']).subscribe({
      next : (data: EvenementDetail) => {
        this.currentevent = data
        this.service.getSubscription(this.ar.snapshot.params['id']).subscribe({
          next: (sub) => this.currentevent.inscrit = sub
        })
      }
    })
  }

}
