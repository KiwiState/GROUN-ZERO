const search = document.getElementById('search');
const search = document.getElementById('match-list');

const searchState = async searchText =>{
    const res = await fetch('../data/states.json')
    const states = await res.json();
    console.log(state);
    let matches = states.filter(state =>{
        const regex = new RegExp(`^${searchText}`,'gi');
        return state.name.match(reges) || state.abbr.match(reges);
        
    });
    if(searchText.length == 0){
        matches = [];
    }

    outputHtml(matches);
};

//show result in Html
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match =>`
         <div class="card card-body mb-1">
         <h4>${match.name} (${match.abrr}) <span class="text-primary">${match.capital}</span></h4>
         <small>lat: ${match.lat} / long: ${match.long}</small>
         </div>
         `)
         .join('');
    
       matchList.innerHTML = html
    }
}

search.addEventListener('input',() => searchStates(search.value));