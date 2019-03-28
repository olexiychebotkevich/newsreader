import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsService {
apiKey='638c3f49059b4093b611faac02f905b0';
apiUrl='https://newsapi.org/v2/'
  constructor(private client:HttpClient) {

   }

   initSources(){
     return this.client.get(this.apiUrl+'sources?/language=en&apiKey='+this.apiKey);
   }


   initArticles(){
    return this.client.get(this.apiUrl+'top-headlines?sources=techcrunch&apiKey='+this.apiKey);
   }


   getArticlesById(source:string){
    return this.client.get(this.apiUrl+'top-headlines?sources='+source+'&apiKey='+this.apiKey);
   }
}
