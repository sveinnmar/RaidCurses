const tester3 = (target) => {
  console.log('tester3 function');

  const method = {
    el: {
      root: document.querySelector<HTMLElement>('.tester3'),
    },

    init(): void {
      console.log('init tester 3')

      if (target) {
        console.log('init tester 3 after check')
      }
    },
  }

  method.init()
}

export default tester3
