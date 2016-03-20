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
    var ArticleComponent;
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
            ArticleComponent = (function () {
                //public article: Article;
                //errorMessage: any;
                function ArticleComponent(_router, _routeParams, _service) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                ArticleComponent.prototype.ngOnInit = function () {
                    var slug = this._routeParams.get('slug');
                    this.getArticle(slug);
                };
                ArticleComponent.prototype.getArticle = function (slug) {
                    var _this = this;
                    this._service.getArticle(slug)
                        .subscribe(function (res) {
                        _this.article = JSON.parse(res._body)[0];
                    }, function (error) { return console.error('oops it did not work'); });
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'router-outlet',
                        template: "\n\t\t<div *ngIf=\"article\">\n\t\t\t<h1>{{ article.title.rendered }}</h1>\n\t\t\t<img src=\"{{article._embedded['https://api.w.org/featuredmedia'][0].media_details.sizes.medium_large.source_url}}\" />\n\t\t\t<div [innerHTML]=\"article.content.rendered\"> </div>\n\t\t</div>\n\t",
                        providers: [articles_service_1.ArticlesService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, articles_service_1.ArticlesService])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=article.component.js.map