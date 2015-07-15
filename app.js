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

var Cat = function() {
	this.catAge = ko.observable(0);
	this.catNickname =  ko.observableArray(model.cats[model.currentCat].nickName);
	this.catImage = ko.observable(model.cats[model.currentCat].image);
	this.catType = ko.computed(function() {
		var type = model.cats[model.currentCat].type;
		if (this.catAge() > 5) {
			type = "pussy";
		} else {
			type = "newborn";
		}
		return type;
	}, this);
};

var myViewModel = function() {
	this.theCat = ko.observable(new Cat());
	this.clicker = function() {
		this.catAge(this.catAge()+1);
	}
};

ko.applyBindings(myViewModel);
