import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})


export class AlbumService {

  constructor(private client: HttpClient) { }

  getAlbums(){
    return this.client.get('https://jsonplaceholder.typicode.com/posts')
  }
}

