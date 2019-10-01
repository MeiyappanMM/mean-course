import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  enteredValue = '';
  postData: string = 'No Content';

  constructor() { }

  ngOnInit() {
  }

  onAddPost(){
    this.postData = this.enteredValue;
  }


}
