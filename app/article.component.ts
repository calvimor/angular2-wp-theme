import {Component, OnInit} from 'angular2/core';
import {ArticlesService} from './articles.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
		selector: 'router-outlet',
		template: `
		<div *ngIf="article">
			<h1>{{ article.title.rendered }}</h1>
			<strong>this is a single post</strong><br />
			<div [innerHTML]="article.content.rendered"> </div>
		</div>
		<br /><br />
	`,
		providers: [ArticlesService]
})

export class ArticleComponent implements OnInit {

		//public article: Article;
		//errorMessage: any;

		constructor(
				private _router: Router,
				private _routeParams: RouteParams,
				private _service: ArticlesService) { }

		ngOnInit() {
				let slug = this._routeParams.get('slug');
				this.getArticle(slug);
		}

		getArticle(slug) {
				this._service.getArticle(slug)
						.subscribe(res => {
								this.article = JSON.parse(res._body)[0];
						},
						error => console.error('oops it did not work'));
		}

}