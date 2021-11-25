import 'polyfills'

import {
  tester, // like we do now (with a twist)
  tester2, // a cleaner way of doing Mikes/Marys approach
  tester3, //Mikes/Marys approach
} from 'components'

// * Mikes/Marys approach is quite messy for this file and can be approved, see Tester2.ts.
// * The normal way we do things does in fact load every init method but is stopped from going further than that.
// * while Mikes/Marys approach does not do anything unless the element is found (it does perform a foreach and queryselectorall 
// * for every single component so that might be a performance hit).
// * The perfomance of these two methods can be debated but the biggest difference
// * is that we're then moving away from truly OOP to FP and kinda OOP. Which is weird.
// * I added console.logs to the files so you can see when things do and do not load.

const app = {
  init(): void {
    // A way to stop the normal way from entering every single init method
    tester.el.root && tester.init()

    // Improved Mikes/Marys approach
    tester2()

    // Mikes/Marys approach (fixed to use Array.prototype since forEach is wonky and browser support is still a bit lacking)
    Array.prototype.forEach.call(
      document.querySelectorAll<HTMLElement>('.tester3'),
      target => new tester3(target)
    )
  }
}

document.addEventListener('DOMContentLoaded', (): void => {
  setTimeout((): void => {
    document.querySelector('.body').classList.remove('preload')
  }, 100)

  app.init()
})
