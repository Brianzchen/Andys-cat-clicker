var model = {
	"cats": [
			{
				"name": "Kitty",
				"image": "images/cat_picture1.jpg",
				"click": 0,
				"list": 0
			},
			{
				"name": "Kitty",
				"image": "images/cat_picture2.jpg",
				"click": 0,
				"list": 1
			},
			{
				"name": "Kitty",
				"image": "images/cat_picture3.jpg",
				"click": 0,
				"list": 2
			},
			{
				"name": "Kitty",
				"image": "images/cat_picture4.jpg",
				"click": 0,
				"list": 3
			},
			{
				"name": "Kitty",
				"image": "images/cat_picture5.jpg",
				"click": 0,
				"list": 4
			},
			{
				"name": "Kitty",
				"image": "images/cat_picture6.jpg",
				"click": 0,
				"list": 5
			}
		],
		"currentCat": 1
};

var catList = {
	render: function() {
		for (i = 0; i < model.cats.length; i++) {
			var currentCat = model.cats[i];
			var button = '<button id="' + currentCat.list + '">' + currentCat.name + '</button>';
			$("#catList").append(button);
		}
	}

};

var catImage = {
	render: function() {
		var catSpace = document.getElementById("catImage");
		var catId = model.currentCat;
		var image = document.createElement("img");
		image.src = model.cats[catId].image;
		image.alt = "What a cute kitty";
		catSpace.appendChild(image);

	}

};

var octopus = {
	init: function() {
		catList.render();
		catImage.render();
	}
};

octopus.init();
