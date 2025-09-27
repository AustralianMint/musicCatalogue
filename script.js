const embedData = {
    1: `
        <iframe
            class="heater-iframe"
            width="100%" 
            height="300" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2127122499&color=%2358cf39&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
        </iframe> 
    `,
    2: ` 
        <iframe 
        class="banger-iframe"
        width="100%" 
        height="300" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/258600617&color=%23b018e3&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
        </iframe>
    `,
    3: ` 
        <iframe 
        class="banger-iframe"
        width="100%" 
        height="300" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/306426044&color=%23b018e3&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
        </iframe>
    `,
    4: `
        <iframe 
            class="banger-iframe"
            width="100%" 
            height="300" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/196527408&color=%23b018e3&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
        </iframe> 
    `,
    5: ` 
        <iframe 
            class="yearly-iframe"
            width="100%" 
            height="200" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1059865402&color=%23a73d24&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
        </iframe>
    `,
    6: ` 
        <iframe 
            class="yearly-iframe"
            width="100%" 
            height="200" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1329351931&color=%23a73d24&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
        </iframe>
    `,
    7: ` 
        <iframe 
            class="yearly-iframe"
            width="100%" 
            height="200" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1128758584&color=%23a73d24&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
        </iframe>
    `,
    8: ` 

        <iframe 
            class="yearly-iframe"
            width="100%" 
            height="200" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/375692348&color=%23a73d24&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
        </iframe>
    `,
    9: ` 
        <iframe 
            class="playlist-iframe"
            width="100%" 
            height="450" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/272741983&color=%2358cf39&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false">
        </iframe>
    `,
    10: `
        <iframe 
            class="playlist-iframe"
            width="100%" 
            height="450" 
            scrolling="no" 
            frameborder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1404003556&color=%2358cf39&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false">
        </iframe> 
    `
}

function loadAllMusic() {
    // Hide consent banner
    document.getElementById('consent-banner').style.display = 'none';
    // Show music content fully
    document.getElementById('music-content').classList.add('loaded');
    // Load all embeds
    Object.keys(embedData).forEach(embedId => {
        const placeholder = document.getElementById(`embed-${embedId}`);
        if (placeholder) {
            // Replace the entire placeholder div with the iframe
            placeholder.outerHTML = embedData[embedId];
        }
    });
    console.log('All music players loaded with tracking consent');
}

function declineAllMusic() {
    // Hide consent banner
    document.getElementById('consent-banner').style.display = 'none';

    // Show no-tracking message
    document.getElementById('no-tracking-message').style.display = 'block';

    // Show content but keep placeholders
    document.getElementById('music-content').classList.add('loaded');

    console.log('Music players declined - no tracking');
}