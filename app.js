var model = {
	"cats": [
			{
				"name": "Wide eyed cat",
				"image": "images/cat_picture1.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["Cutie", "Cutie Catty"]
			},
			{
				"name": "Freaked out cat",
				"image": "images/cat_picture2.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["Errrrmaagurdd"]
			},
			{
				"name": "Drugged up cat",
				"image": "images/cat_picture3.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["Forever Stoned", "Half Cast"]
			},
			{
				"name": "Marshmallow cat",
				"image": "images/cat_picture4.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["Drowing in cuteness", "Snowflake", "Kuteness Overload"]
			},
			{
				"name": "Fanged cat",
				"image": "images/cat_picture5.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["Dangerous", "Evil but still Cute"]
			},
			{
				"name": "Unimpressed cat",
				"image": "images/cat_picture6.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["Sharon Wang's Kitty Cat Cat"]
			}
		]
};

var Cat = function(data) {
	this.catName = ko.observable(data.name);
	this.catAge = ko.observable(data.click);
	this.catNickname =  ko.observableArray(data.nickName);
	this.catImage = ko.observable(data.image);
	this.catType = ko.computed(function() {
		var type = data.	type;
		if (this.catAge() < 5) {
			type = "Newborn";
		} else if (this.catAge() < 10) {
			type = "Infant";
		} else if (this.catAge() < 20) {
			type = "Teen";
		} else if (this.catAge() < 30) {
			type = "Young Adult";
		} else if (this.catAge() < 50) {
			type = "Adult";
		} else {
			type = "Old Kitty";
		}
		return type;
	}, this);
};

var myViewModel = function() {
	var self = this;
	self.catList = ko.observableArray();
	for (i = 0; i<model.cats.length; i++) {
		catList.push(ko.observable(new Cat(model.cats[i])));
	}
	self.theCat = ko.observable(catList()[0]);
	this.clicker = function() {
		this.catAge(this.catAge()+1);
	}
	self.buttoned = function(data) {
		self.theCat(data);
	}
};

ko.applyBindings(myViewModel);
