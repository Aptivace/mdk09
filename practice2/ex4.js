function getUniqueTags(posts) {
    // flatMap разворачивает теги всех постов в один плоский массив,
    // new Set убирает дубликаты, Array.from переводит Set обратно в массив
    return Array.from(new Set(posts.flatMap(post => post.tags)));
}

const posts = [
    { title: 'Post 1', tags: ['javascript', 'web'] },
    { title: 'Post 2', tags: ['javascript', 'react'] },
    { title: 'Post 3', tags: ['node', 'backend'] },
    { title: 'Post 4', tags: ['react', 'frontend'] }
];

console.log(getUniqueTags(posts));
// ['javascript', 'web', 'react', 'node', 'backend', 'frontend']