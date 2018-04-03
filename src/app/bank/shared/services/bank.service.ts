import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Clients } from '../model/clients';

@Injectable()
export class BankService {

  constructor(private http : HttpClient) { }

  urlclient = 'http://localhost:3000/clients';

  getClients():Observable<Clients[]>{
    return this.http.get<Clients[]>(this.urlclient);
  }

  getClient(id: string):Observable<Clients>{
    return this.http.get<Clients>(this.urlclient+'/'+id);
  }

  deleteClient(id: string): Observable<Clients>{
    return this.http.delete<Clients>(this.urlclient+'/'+id);
  }

  postClient(client : Clients): Observable<Clients>{
    return this.http.post<Clients>(this.urlclient, client);
  }

  putClient(client : Clients): Observable<Clients>{
    return this.http.put<Clients>(this.urlclient+'/'+client.id, client);
  }

}
