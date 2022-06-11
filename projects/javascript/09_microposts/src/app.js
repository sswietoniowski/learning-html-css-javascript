// FIXES: https://dev.to/hulyakarakaya/how-to-fix-regeneratorruntime-is-not-defined-doj
import 'regenerator-runtime/runtime';
import { http } from './easyhttp';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => {
      ui.showPosts(data);
    })
    .catch((err) => console.log(err));
}
