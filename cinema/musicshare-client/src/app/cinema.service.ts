import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Playlist } from './model/Playlist';
import { Song } from './model/Song';
import { Movie } from './model/movie';
import { Observable } from 'rxjs';
export const httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Request-Method': 'GET',
      
    })
  };
@Injectable()
export class CinemaService {

    movies:Movie[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }
/*
  getPlaylist(playlistId: number): Promise<Playlist> {
    const playlist = this.playlistItems.find(
      playlist => playlist.id === playlistId
    );
    if (playlist) {
      return Promise.resolve(playlist);
    } else {
      return this.httpClient
        .get<Playlist>(`/api/playlists/${playlistId}`)
        .toPromise()
        .then(playlist => { return playlist });
    }
  }

  filter(filterText: string): Playlist[] {
    const filteredPlaylistItems: Playlist[] = [];
    for (let playlistItem of this.playlistItems) {

      if (playlistItem.name.startsWith(filterText)) {

        filteredPlaylistItems.push(playlistItem);

      }

    }
    return filteredPlaylistItems;
  }


async allMovies()  {
    return await this.httpClient.get<Movie[]>('/api/movie').then(val =>this.movies = val );
      
      }
*/
      public allMovies(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>('/api/movie/all');
      }
     
}
