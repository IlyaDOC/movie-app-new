import {Component, input} from '@angular/core';
import {NewsItemType} from '@entities/news/news.types';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.scss',
  standalone: true
})
export class NewsCard {
  newsItem = input.required<NewsItemType>();
}
