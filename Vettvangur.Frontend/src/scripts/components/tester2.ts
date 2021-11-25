const tester2 = () => {
  console.log('tester2 function')

  const method = {
    el: {
      root: document.querySelector<HTMLElement>('.tester2'),
    },

    init(): void {
      console.log('init tester 2')
    },
  }

  if (method.el.root) {
    console.log('tester 2 has root.. init the method')

    method.init()
  }
}

export default tester2
