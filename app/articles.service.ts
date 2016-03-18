import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
//import {Observable} from 'rxjs/Observable';

/*export class Article {
		constructor(public id: number, link: string, title: string) { }
}*/

@Injectable()
export class ArticlesService {

		constructor(private http: Http) { }

		private _wpBase = 'http://ng2-wp.liquifiedmedia.com/wp-json/wp/v2/';

		getArticles() {
				return this.http.get(this._wpBase + 'posts/?page=1');
		}

		getArticle(slug) {
				return this.http.get(this._wpBase + 'posts?filter[name]=' + slug);
		}

		/*private handleError(error: Response) {
				// in a real world app, we may send the server to some remote logging infrastructure
				// instead of just logging it to the console
				console.error(error);
				return Observable.throw(error.json().error || 'Server error');
		}*/
}

