// test data///
const blogData = [
  {
    title: 'Post #1',
    url: '/blog/post-1',
    id: 101,
    date: '10.10.2010'
  },
  {
    title: 'Post #2',
    url: '/blog/post-2',
    id: 102,
    date: '11.10.2010'
  },
  {
    title: 'Post #3',
    url: '/blog/post-3',
    id: 103,
    date: '12.10.2010'
  }
]

// import the interface...
import {
  IPost,
} from 'interfaces'

const tester = {
  el: {
    root: document.querySelector<HTMLElement>('.test'),
  },
  init(): void {
    console.log('init tester')

    if (this.el.root) {
      console.log('tester init after check')

      this.renderPosts(blogData)
    }
  },

  // use the interface as the parameter type
  renderPosts(items: IPost[]): void {
    Array.prototype.forEach.call(items, item => {
      console.log(item)
    })
  },

}

export default tester
