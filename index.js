// Créer un événément au scroll
const navBar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    let scrollt = window.scrollY;
    console.log(scrollt);
    console.log(window.scrollY);
    window.addEventListener('scroll', () => {
        if (scrollt > window.scrollY) {
            navBar.style.top = "0";
        }else {
            navBar.style.top = "-60px";
        }
        
    })
})

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
