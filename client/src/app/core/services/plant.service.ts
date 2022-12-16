// Decorators
import { Injectable } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// HTTP
import { HttpClient } from '@angular/common/http';

// Models
import { ServerResponse } from '../models/server-response.model';
import { Plant } from '../models/plant.model';

const domain = 'http://localhost:8000';
const getSinglePlantEndpoint = domain + '/plant/details/';
const createPlantEndpoint = domain + '/plant/add';
const editPlantEndpoint = domain + '/plant/edit/';
const deletePlantEndpoint = domain + '/plant/delete/';
const ratePlantEndpoint = domain + '/plant/rate/';
const addToFavoritesEndpoint = domain + '/plant/addToFavorites/';
const searchPlantEndpoint = domain + '/plant/search';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) { }

  getSinglePlant(id: string): Observable<ServerResponse<Plant>> {
    return this.http.get<ServerResponse<Plant>>(getSinglePlantEndpoint + id);
  }

  createPlant(payload: Plant): Observable<ServerResponse<Plant>> {
    return this.http.post<ServerResponse<Plant>>(createPlantEndpoint, payload);
  }

  editPlant(id: string, payload: Plant): Observable<ServerResponse<Plant>> {
    return this.http.put<ServerResponse<Plant>>(editPlantEndpoint + id, payload);
  }

  deletePlant(id: string): Observable<ServerResponse<Plant>> {
    return this.http.delete<ServerResponse<Plant>>(deletePlantEndpoint + id);
  }

  ratePlant(id: string, payload: object): Observable<ServerResponse<Plant>> {
    return this.http.post<ServerResponse<Plant>>(ratePlantEndpoint + id, payload);
  }

  addToFavourites(id: string): Observable<ServerResponse<Plant>> {
    return this.http.post<ServerResponse<Plant>>(addToFavoritesEndpoint + id, {});
  }

  search(query: string): Observable<ServerResponse<Plant[]>> {
    return this.http.get<ServerResponse<Plant[]>>(searchPlantEndpoint + query);
  }
}
