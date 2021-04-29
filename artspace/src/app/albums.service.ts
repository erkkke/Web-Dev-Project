import { Injectable } from '@angular/core';
import {Album, Photo} from './models';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  BASE_URL1 = 'https://picsum.photos';

  baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.baseUrl}/albums`);
  }
  getPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.baseUrl}/albums/${id}/photo`);
  }
  getPhoto(albumId: number, id: number): Observable<Photo>{
    return this.client.get<Photo>(`${this.baseUrl}/albums/${albumId}/photo/${id}/`);
  }
  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.baseUrl}/albums/${id}`);
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.baseUrl}/albums/${album.id}/`, album);
  }
  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.baseUrl}/albums`, album);
  }
}
