var ee = new window.Cream(function() {
    let css = 'html {-webkit-filter: invert(100%);' + '-moz-filter: invert(100%);' + '-o-filter: invert(100%);' + '-ms-filter: invert(100%); }';
    css += '.rain { background-image: repeating-linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red, violet); background-size: 800% 800%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: rainbow 5s ease infinite; } @keyframes rainbow { 0%{background-position:0% 50%} 50%{background-position:100% 25%} 100%{background-position:0% 50%} }';
    let head = document.head;

    if (!window.counter)
        window.counter = 1;
    else {
        window.counter++;
    }

    // enable effect
    if (window.counter % 2 === 1) {
        // confetti
        confetti.start();
        setInterval(() => confetti.stop(), 2000);

        // add new style
        let style = document.createElement('style');
        if (style.styleSheet) style.styleSheet.cssText = css;
        else style.appendChild(document.createTextNode(css));
        head.appendChild(style);

        // add glitch style
        let gstyle = document.createElement('link');
        gstyle.type = 'text/css';
        gstyle.href = 'css/glitch.css';
        gstyle.rel = 'stylesheet';
        gstyle.media = 'all';
        head.appendChild(gstyle);

        // glitch settings
        document.getElementById('glitch-main-text').innerHTML = 'SuperFola';
        document.getElementById('glitch-glow-text').innerHTML = 'SuperFola';
        document.getElementsByClassName('container-glitch')[0].classList.remove('title');
        document.getElementById('hero-container').classList.remove('is-primary');
        document.getElementById('hero-column-half').classList.remove('is-half');

        // add data somewhere
        let end = document.createElement('div');
        end.className = 'navbar-end';
        end.id = 'htwpt6';
        end.innerHTML = '<div class="navbar-item rain">Yahaha, you found me!</div>';
        document.getElementsByClassName('navbar-menu')[0].appendChild(end);

        // hide description
        document.getElementById('hero-description').style.display = 'none';

    } else { // disable effect
        // remove style
        let e = document.head.getElementsByTagName('style');
        head.removeChild(e[e.length - 1]);
        e = document.head.getElementsByTagName('link');
        head.removeChild(e[e.length - 1]);

        // remove data somewhere
        let x = document.getElementById('htwpt6');
        x.parentElement.removeChild(x);

        // show description
        document.getElementById('hero-description').style.display = '';

        // glitch settings
        document.getElementById('glitch-main-text').innerHTML = 'Alexandre (SuperFola) Plt';
        document.getElementById('glitch-glow-text').innerHTML = '';
        document.getElementsByClassName('container-glitch')[0].classList.add('title');
        document.getElementById('hero-container').classList.add('is-primary');
        document.getElementById('hero-column-half').classList.add('is-half');
    }

    // hide/show something in the footer
    let e = document.getElementsByClassName('footer')[0].getElementsByTagName('p');
    e[e.length - 1].className = window.counter % 2 === 0 ? 'is-hidden' : '';
});
