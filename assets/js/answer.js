  window.document.addEventListener('DOMContentLoaded', () => {
    const url = new URLSearchParams(window.location.search)
    const code = url.get('code')
    const progressBar = document.querySelector('.content-progress-bar')
    const target = document.querySelector('.main-content-section')
    const backBtn = document.querySelector('.backToListBtn')

    const xhr = new XMLHttpRequest()
    xhr.open("GET", `./answers/${code}.json`)
    xhr.responseType = 'json'
    xhr.addEventListener('progress', (e) => {
      if(e.lengthComputable) {
        let __total = ((e.total / e.loaded) * 100)
        progressBar.style.width = __total + '%'
        // hide progress
        if(__total >= 100) {
          setTimeout(() => {
            progressBar.style.display = "none"
            progressBar.style.width = '0%'
            setTimeout(() => {
              progressBar.style.display = "block"
            }, 100)
          },700)
        }
      } else {
        // show animation
        progressBar.style.width = "100%"
        setTimeout(() => {
          progressBar.style.display = "none"
          progressBar.style.width = '0%'
          setTimeout(() => {
            progressBar.style.display = "block"
          }, 100)
        },700)
        
      }
    })

    xhr.addEventListener('load', (_e) => {
      const res = xhr.response
      let div = document.createElement('div')
      div.classList.add('fade')

      if(!res) {
        target.innerHTML = ''
        target.innerHTML = `
        <section class="activity-sections fade">
          <div class="activity-section-wrapper no-bg">
            <div class="activity-section-content p-0">
              <div class="row w-100 mt-50">
                <div>
                  <h1>Oops! No Content Available</h1>
                  <p class="color-gray">There is no available answer for this question</p>
                </div>
              </div>
            </div>
          </div>
        </section>`
        return target.appendChild(div)
      }

      div.innerHTML = `<section class="activity-sections">
        <div class="activity-section-wrapper no-bg">
          <div class="activity-section-content p-0">
            <div class="row w-100">
              <div class="profile-image-section">
                <img src="./assets/img/pix.png" class="profile-image" alt="profile-image">
              </div>
              <div class="profile-image-name">
                <h1 class="profile-image-title">${res.q}</h1>
                <span class="profile-image-subtitle">${res.author.name}</span>
                <span class="profile-image-subtitle">${res.time} to read</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="activity-sections">
        <div class="activity-section-wrapper answer">
          <div class="activity-section-content">
            <h2>Answer</h2>
            <div>
              ${res.a ? res.a.replaceAll('\n', '<br/>') :  'N/A'}
            </div>
          </div>
        </div>
      </section>

      <section class="activity-sections">
        <div class="activity-section-wrapper no-bg">
          <div class="activity-section-content">
            <div class="content-image-section">
              <img src="${res.banner.image}" class="content-image" alt="profile-image">
            </div>
          </div>
        </div>
      </section>

      <section class="activity-sections">
        <div class="activity-section-wrapper no-bg">
          <div class="activity-section-content">
            <p>Internet Source(s):</p>
            <div class="source-section"></div>
          </div>
        </div>
      </section>
      `
      // sources
      const sourceSection = div.querySelector('.source-section')
      res.sources.forEach((el2,index2) => {
        sourceSection.innerHTML +=`<div class="text-small">
          <p>Source ${index2 + 1}: <a href="${el2.url}">${el2.title}</a></p>
        </div>`
      })

      target.innerHTML = ''
      target.appendChild(div)


    })

    xhr.send(null)

    backBtn.addEventListener('click', () => {
      window.location.href = './index.html'
    })
    
  })
