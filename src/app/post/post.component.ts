import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

interface Post {
  id: number;
  body: string;
  title: string;
  userId: number;
  tags: string[];
  reactions: number;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private ps: PostService) {}

  posts: Post[] = [];

  ngOnInit() {
    this.ps.getPost().subscribe((res) => {
      this.posts = res.posts;
      console.log('posts', this.posts);
    });
  }
}
