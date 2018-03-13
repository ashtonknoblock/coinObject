var coin = {
    state: 0,
    flip: function() {
        // randomly set this.state to be either 0 or 1
         this.state = (Math.round(Math.random()));
         return this;
    },
    toString: function() {
        // return “H” or “T” depending on whether this.state is 0 or 1
        if (this.state === 0){
            return "H";
        } else {
            return "T";
        }
    },
    toHTML: function() {
        var img = document.createElement("img");
        // set the properties of the image element to show either heads or tails
        img.classList.add('coin', this.toString());
        return img;
    }
};

var div = document.getElementById("test");
var div2 = document.getElementById("test2");

for (let i = 0; i < 20; i++){
    var text = document.createTextNode(coin.flip().toString());
    div2.appendChild(text);
}

for (let j = 0; j < 20; j++) {
    div.appendChild(coin.flip().toHTML());
}

