import { Component, OnInit, inject } from '@angular/core';
import {NewsService} from '../../services/news.service'
import { Article} from '../../Interfaces/news-response';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-top-head-liners',
  standalone: true,
  imports: [CommonModule, RouterLink,MatCardModule],
  templateUrl: './top-head-liners.component.html',
  styleUrl: './top-head-liners.component.css'
})
export default class TopHeadLinersComponent implements OnInit{
    private newService = inject(NewsService);
    
    public articles: Article[] = [];

    ngOnInit(): void {
        this.newService.getTopHeadLiners()
        .subscribe( (articles) => {
          this.articles = articles;
          console.log(articles);
        });
    }
}
