import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import '../dto/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles : Article[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("articlecomponent");
    this.dataService.sendGetRequest().subscribe((data:Article[])=>{
      //console.log(data);


      this.articles = data;
    })
  }

}
