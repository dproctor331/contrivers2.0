import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

// import { keystone } from 'keystone';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: any;

  constructor(private postsService: PostsService) {
    this.postsService = postsService;
    console.log("articles constructor started")
  }

  ngOnInit() {
    console.log("articles oninit started", this.articles)
    this.articles = this.postsService.fetchArticles();
    this.postsService.dataChanged.subscribe(
      () => {
        this.articles = this.postsService.allArticles;
      }
    );
  }
}
