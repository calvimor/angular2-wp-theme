import {Component, OnInit} from 'angular2/core';
import {ArticlesService} from './articles.service';
import {Router} from 'angular2/router';

@Component({
		selector: 'router-outlet',
		template: `
			<h3>Articles</h3>
			<ul *ngIf="articles">
				<li *ngFor="#article of articles"
						(click)="onSelect(article)">
					<span>{{ article.title.rendered }}</span>
          <p [innerHTML]="article.excerpt.rendered"></p>
				</li>
			</ul>
		`,
		providers: [ArticlesService]
})
export class ArticlesComponent implements OnInit {

		//public articles: Article;

		constructor(
				private _router: Router,
				private _articlesService: ArticlesService
		) { }

		ngOnInit() {
				this.listArticles();
		}

		listArticles() {
				this._articlesService.getArticles()
						.subscribe(res => {
								this.articles = JSON.parse(res._body);
						},
						error => console.error('oops it did not work'));
		}

		onSelect(article) {
				this._router.navigate(['Article', { slug: article.slug }]);
				console.log('navigating...');
		}

}
