fetch(`${url}${music}`)

.then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        results.innerHTML =''
          data.results.forEach(function(a) {

            // here we are creating a new div for each result we populate in the search

            let bigdiv = document.createElement('div')
            bigdiv.classList.add('eachResult')
              let allResults = `
              <div class ='albumCover'><img src='${a.artworkUrl100}'></div>
              <div class ='info'>
              <div class ='songName'> ${a.trackName}</div>
              <div class ='albumName'> ${a.collectionName}</div>
              <div class ='name'> ${a.artistName}</div>
              </div>`
              bigdiv.innerHTML = allResults
              results.appendChild(bigdiv)
              bigdiv.addEventListener('click', function() {
                player.src = a.previewUrl
              })
            })
          })
      })
      });
