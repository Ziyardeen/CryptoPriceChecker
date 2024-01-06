const checkBtn = document.getElementById('checkBtn');


checkBtn.addEventListener('click', ()=> {
    let coin = document.getElementById('crypto').value.toLowerCase();

    const apiURL = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&x_cg_demo_api_key=CG-quBUoDvtFBooi36ei2gRD4mP`

    fetch(apiURL)
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not Ok.')
            }
            return response.json()
        })

        .then(data => {
            let price = data[coin].usd
            document.getElementById('result').textContent = price;
            console.log(price);
            document.getElementById('text').textContent = `The Price of ${coin} is:`
            price = ''

            
        })

        .catch(error => {
            console.log('Error:', error)
            document.getElementById('result').textContent = '______';
            document.getElementById('text').textContent = `Please Enter A valid Crypto Name`;

        })

        document.getElementById('crypto').value = ''

        

    
    });



// const key ='CG-quBUoDvtFBooi36ei2gRD4mP';
// let coin = 'bitcoin'


