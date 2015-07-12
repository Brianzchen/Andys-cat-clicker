var model = {
	"cats": [
			{
				"name": "Wide eyed cat",
				"image": "images/cat_picture1.jpg",
				"click": 0,
				"list": 0
			},
			{
				"name": "Freaked out cat",
				"image": "images/cat_picture2.jpg",
				"click": 0,
				"list": 1
			},
			{
				"name": "Drugged up cat",
				"image": "images/cat_picture3.jpg",
				"click": 0,
				"list": 2
			},
			{
				"name": "Pouncable cat",
				"image": "images/cat_picture4.jpg",
				"click": 0,
				"list": 3
			},
			{
				"name": "Fanged cat",
				"image": "images/cat_picture5.jpg",
				"click": 0,
				"list": 4
			},
			{
				"name": "Unimpressed cat",
				"image": "images/cat_picture6.jpg",
				"click": 0,
				"list": 5
			}
		],
		"currentCat": 0
};

var catList = {
	render: function() {
		for (i = 0; i < model.cats.length; i++) {
			var currentCat = model.cats[i];
			var button = '<button id="' + currentCat.list + '" class="buttons">' + currentCat.name + '</button>';
			$("#catList").append(button);
		}
	}

};

var catImage = {
	render: function() {
		var catSpace = $("#catImage");
		catSpace.empty();
		var catId = model.currentCat;
		var image = '<img class="cat" src="' + model.cats[catId].image + '"></img>';
		catSpace.append(image);
	}
};

var catImageClicks = {
	render: function() {
		var catSpace = $("#catImageClicks");
		catSpace.empty();
		var catId = model.currentCat;
		var timesClicked = model.cats[catId].click;
		var formattedTimesClicked = "<p>" + timesClicked + "</p>";
		catSpace.append(formattedTimesClicked);
	}
};

var octopus = {
	init: function() {
		catList.render();
		catImage.render();
		catImageClicks.render();
	},
	click: function(data) {
		if (data.toElement.className === "cat") {
			model.cats[model.currentCat].click++;
			catImageClicks.render();
		}
	},
	buttonPress: function(data) {
		model.currentCat = data.toElement.id;
		catImage.render();
		catImageClicks.render();
	}
};

octopus.init();
$("#catImage").click(function(data) {
	octopus.click(data);
});
$(".buttons").click(function(data) {
	octopus.buttonPress(data);
});
