var images = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fcartoon-man.html&psig=AOvVaw2TLLl7bwGdiq1ep1iE00oU&ust=1616244014958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKju5r-wvO8CFQAAAAAdAAAAABAH;",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngkey.com%2Fdetail%2Fu2e6u2q8e6r5e6o0_animated-faces-my-hero-design-clip-art-woman%2F&psig=AOvVaw2Y5iMg6yRkJ2F0gcbprzyL&ust=1616244105794000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDX_s6xvO8CFQAAAAAdAAAAABAD;",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fhappy-little-girl-cartoon-vector-21517457&psig=AOvVaw2tx68eNfz0IaAeq7UkqrH-&ust=1616244387402000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLD0yfOxvO8CFQAAAAAdAAAAABAD;"
]
var i = 0;

function nextimage() {
    if (i == 9) {
        i = 0;

    }
    document.getElementById("monkey").src = images[i];
    i++;
}