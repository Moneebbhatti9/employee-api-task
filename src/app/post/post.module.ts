import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'post',
        component: PostComponent,
      },
    ]),
  ],
  declarations: [PostComponent],
})
export class PostModule {}
