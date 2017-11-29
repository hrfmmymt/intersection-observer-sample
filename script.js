const createObserver = () => {
  const target = document.getElementById('target')
  const observer = new IntersectionObserver(changes => {
    const wrapper = document.getElementById('wrapper')
    const newImg = document.createElement('img')
    newImg.src = '//unsplash.it/600/800?random&time=' + Date.now()
    wrapper.appendChild(newImg)
  })
  observer.observe(target)
}

if ('IntersectionObserver' in window) {
  createObserver()
} else {
  const polyfill = document.createElement('script')
  polyfill.src = '//polyfill.io/v2/polyfill.min.js?features=IntersectionObserver'
  document.head.appendChild(polyfill)
  polyfill.onload = () => {
    createObserver()
  }
}
