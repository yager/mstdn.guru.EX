window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        if (document.querySelector('#mastodon') != null) {
            renderHTML();
            clearInterval(jsInitCheckTimer);
        }
    }
}

function renderHTML() {
    // 上級者向け UI
    if ( document.querySelector('.drawer__inner__mastodon') != null ) {
        document.querySelector('.drawer__inner__mastodon').innerHTML
            = '<iframe id="ytIF" width="285" height="160" src="https://www.youtube.com/embed/?list=UUTfta7Ult6yLu7ru-WInOGg" frameborder="0" allowfullscreen></iframe>'
            + '<iframe src="https://player.twitch.tv/?channel=backspacefm&parent=mstdn.guru" frameborder="0" allowfullscreen="true" scrolling="no" height="150" width="100%"></iframe>';
    }
    // 通常 UI
    else if ( document.querySelector('.getting-started__footer') != null ) {
        document.querySelector('.getting-started__footer p').innerHTML
            = '<iframe id="ytIF" width="265" height="149" src="https://www.youtube.com/embed/?list=UUTfta7Ult6yLu7ru-WInOGg" frameborder="0" allowfullscreen></iframe>'
            + '<iframe src="https://player.twitch.tv/?channel=backspacefm&parent=mstdn.guru" frameborder="0" allowfullscreen="true" scrolling="no" height="150" width="100%"></iframe>';
    }

    
}