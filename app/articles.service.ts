import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class ArticlesService {

		constructor(private http: Http) { }

		private _wpBase = 'http://<path-to-your-wordpress-site>/wp-json/wp/v2/';

		getArticles() {
				return this.http.get(this._wpBase + 'posts/?page=1');
		}

		getArticle(slug) {
				return this.http.get(this._wpBase + 'posts?filter[name]=' + slug + '&_embed');
		}

}

