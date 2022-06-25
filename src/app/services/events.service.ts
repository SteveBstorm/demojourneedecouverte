import { CreateInscription, Inscription } from './../models/evenement.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../models/evenement.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private url : string = "https://appjourneemetierapi.azurewebsites.net/api/"
  constructor(
    private client: HttpClient
  ) { }

  getAll(): Observable<Evenement[]> {
    return this.client.get<Evenement[]>(this.url+"evenement")
  }

  getById(id: number) : Observable<Evenement> {
    return this.client.get<Evenement>(this.url+"evenement/"+id)
  }

  getSubscription(id: number) {
    return this.client.get<Inscription[]>(this.url+"evenement/"+id+"/inscriptions")
  }

  inscription(i : CreateInscription) {
    this.client.post(this.url+"inscription", i).subscribe({
      next : () => {}
    })
  }
}
