System.register(['angular2/core', './articles.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, articles_service_1, router_1;
    var ArticlesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (articles_service_1_1) {
                articles_service_1 = articles_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ArticlesComponent = (function () {
                //public articles: Article;
                function ArticlesComponent(_router, _articlesService) {
                    this._router = _router;
                    this._articlesService = _articlesService;
                }
                ArticlesComponent.prototype.ngOnInit = function () {
                    this.listArticles();
                };
                ArticlesComponent.prototype.listArticles = function () {
                    var _this = this;
                    this._articlesService.getArticles()
                        .subscribe(function (res) {
                        _this.articles = JSON.parse(res._body);
                    }, function (error) { return console.error('oops it did not work'); });
                };
                ArticlesComponent.prototype.onSelect = function (article) {
                    this._router.navigate(['Article', { slug: article.slug }]);
                    console.log('navigating...');
                };
                ArticlesComponent = __decorate([
                    core_1.Component({
                        selector: 'router-outlet',
                        template: "\n\t\t\t<h3>Articles</h3>\n\t\t\t<ul *ngIf=\"articles\">\n\t\t\t\t<li *ngFor=\"#article of articles\"\n\t\t\t\t\t\t(click)=\"onSelect(article)\">\n\t\t\t\t\t<span>{{ article.title.rendered }}</span>\n          <p [innerHTML]=\"article.excerpt.rendered\"></p>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t",
                        providers: [articles_service_1.ArticlesService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, articles_service_1.ArticlesService])
                ], ArticlesComponent);
                return ArticlesComponent;
            }());
            exports_1("ArticlesComponent", ArticlesComponent);
        }
    }
});
//# sourceMappingURL=articles.component.js.map