var model = {
	"cats": [
			{
				"name": "Wide eyed cat",
				"image": "images/cat_picture1.jpg",
				"click": 0,
				"list": 0,
				"type": "newborn",
				"nickName": ["gangsta", "blh","fwef"]
			},
			{
				"name": "Freaked out cat",
				"image": "images/cat_picture2.jpg",
				"click": 0,
				"list": 1,
				"type": "newborn"
			},
			{
				"name": "Drugged up cat",
				"image": "images/cat_picture3.jpg",
				"click": 0,
				"list": 2,
				"type": "newborn"
			},
			{
				"name": "Pouncable cat",
				"image": "images/cat_picture4.jpg",
				"click": 0,
				"list": 3,
				"type": "newborn"
			},
			{
				"name": "Fanged cat",
				"image": "images/cat_picture5.jpg",
				"click": 0,
				"list": 4,
				"type": "newborn"
			},
			{
				"name": "Unimpressed cat",
				"image": "images/cat_picture6.jpg",
				"click": 0,
				"list": 5,
				"type": "newborn"
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

var myViewModel = {
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
	},
	catAge: ko.observable(model.cats[model.currentCat].click),
	clicker: function() {
		this.catAge(this.catAge()+1);
		if (this.catAge() > 5) {
			this.catType("pussy");
		} else {
			this.catType("newborn");
		}
	},
	catType: ko.observable(model.cats[model.currentCat].type)
};

myViewModel.init();
$("#catImage").click(function(data) {
	myViewModel.click(data);
});
$(".buttons").click(function(data) {
	myViewModel.buttonPress(data);
});

ko.applyBindings(myViewModel);
