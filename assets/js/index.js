window.document.addEventListener('DOMContentLoaded', () => {
    const Questions = [
      {
        q: "What is HTTP?",
        time: "3 mins",
        author: {
          name: "John Kenneth Abella",
          image: "./assets/img/pix.png"
        },
        banner: {
          image: "./assets/img/http.png"
        },
        url: "./answer.html",
        code: 1
      },
      {
        q: "What is HTTPS and how does it differ from HTTP?",
        time: "5 mins",
        author: {
          name: "John Kenneth Abella",
          image: "./assets/img/pix.png"
        },
        banner: {
          image: "./assets/img/https.png"
        },
        url: "./answer.html",
        code: 2
      },
      {
        q: "What are the parts of an HTTP Request?",
        time: "5 mins",
        author: {
          name: "John Kenneth Abella",
          image: "./assets/img/pix.png"
        },
        banner: {
          image: "./assets/img/httpParts.webp"
        },
        url: "./answer.html",
        code: 3
      },
      {
        q: "What are the parts of an HTTP Response?",
        time: "5 mins",
        author: {
          name: "John Kenneth Abella",
          image: "./assets/img/pix.png"
        },
        banner: {
          image: "./assets/img/httpResponse.png"
        },
        url: "./answer.html",
        code: 4
      },
      {
        q: "What are HTTP Headers and what is their role in client-server communication?",
        time: "6 mins",
        author: {
          name: "John Kenneth Abella",
          image: "./assets/img/pix.png"
        },
        banner: {
          image: "./assets/img/httpHeaders.webp"
        },
        url: "./answer.html",
        code: 5
      },
      {
        q: "What are HTTP Status Codes and what is their role in client-server communication?",
        time: "5 mins",
        author: {
          name: "John Kenneth Abella",
          image: "./assets/img/pix.png"
        },
        banner: {
          image: "./assets/img/http.png"
        },
        url: "./answer.html",
        code: 6
      }
      
    ]

    const target = document.querySelector('.card-section')
    // clear content
    target.innerHTML = ''

    // new content
    Questions.map((el, index) => {
      let card = document.createElement('div')
      card.classList.add('cards')
      card.innerHTML = `
        <div class="card-content-wrapper">
          <div class="card-content-body">
            <div class="row">
              <div class="profile-image-section w-20">
                <img src="${el.author.image}" class="profile-image" alt="profile-image">
              </div>
              <div class="profile-image-name">
                <h3 class="profile-image-title">${el.q}</h3>
                <span class="profile-image-subtitle">${el.author.name}</span>
                <span class="profile-image-subtitle">${el.time} to read</span>
              </div>
            </div>

            <div class="row mt-30 article-image-section">
              <div>
                <img src="${el.banner.image}" class="content-image" alt="profile-image">
              </div>
            </div>
          </div>
        </div>
      `
      card.addEventListener('click', () => {
        window.location.href = el.url + `?code=${el.code}`
      })

      target.appendChild(card)
    })
  })