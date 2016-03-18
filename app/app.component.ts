import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ArticleComponent} from './article.component';
import {ArticlesComponent} from './articles.component';
import {ArticlesService} from './articles.service';

@Component({
		selector: 'my-app',
		template: `
			<h1>Angular 2 WP Theme</h1>
			<nav>
				<a [routerLink]="['Articles']">Home</a>
			</nav>
			<router-outlet></router-outlet>
		`,
		directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{	// Articles List
		path: '/',
		name: 'Articles',
		component: ArticlesComponent
	},
	{ // Single Article
		path: '/:slug',
		name: 'Article',
		component: ArticleComponent
	}
])

export class AppComponent { }