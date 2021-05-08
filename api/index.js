import matter from 'gray-matter'
import marked from 'marked'
import yaml from 'js-yaml'

export async function getAllPosts() {
    const context = require.context('../_posts', false, /\.md$/)
    const posts = []
    for(const key of context.keys()){
      const post = key.slice(2);
      const content = await import(`../_posts/${post}`);
      const meta = matter(content.default)
      const abstract = marked(meta.content.split(" ").slice(0, 15).join(" "))
        posts.push({
            slug: post.replace('.md',''),
            title: meta.data.title,
            cat: meta.data.cat,
            abstract: abstract,
        });
    }
    return posts;
}

export async function getPostsByCat(cat) {
  const context = require.context('../_posts', false, /\.md$/)
  const posts = []
  for(const key of context.keys()){
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default)
    const abstract = marked(meta.content.split(" ").slice(0, 15).join(" "))
    if (meta.data.cat == cat) {
      posts.push({
          slug: post.replace('.md',''),
          title: meta.data.title,
          cat: meta.data.cat,
          abstract: abstract,
      });
    }
  }
  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../_posts/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)    
  return {
    title: meta.data.title,
    user: meta.data.user,
    date: meta.data.date,
    cat: meta.data.cat,
    content: content
  }
}

export async function getConfig() {
    const config = await import(`../config.yml`)
    return yaml.load(config.default)
  }