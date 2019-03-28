import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
apiKey='638c3f49059b4093b611faac02f905b0';
apiUrl='https://newsapi.org/v2/'
  constructor() { }
}
