var model = {
	"cats": [
			{
				"name": "Wide eyed cat",
				"image": "images/cat_picture1.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["gangsta", "blh","fwef"],
				"list": 0
			},
			{
				"name": "Freaked out cat",
				"image": "images/cat_picture2.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["gangsta", "blh","fwef"],
				"list": 1
			},
			{
				"name": "Drugged up cat",
				"image": "images/cat_picture3.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["gangsta", "blh","fwef"],
				"list": 2
			},
			{
				"name": "Pouncable cat",
				"image": "images/cat_picture4.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["gangsta", "blh","fwef"],
				"list": 3
			},
			{
				"name": "Fanged cat",
				"image": "images/cat_picture5.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["gangsta", "blh","fwef"],
				"list": 4
			},
			{
				"name": "Unimpressed cat",
				"image": "images/cat_picture6.jpg",
				"click": 0,
				"type": "newborn",
				"nickName": ["gangsta", "blh","fwef"],
				"list": 5
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
		if (this.catAge() > 5) {
			type = "pussy";
		} else {
			type = "newborn";
		}
		return type;
	}, this);
};

var myViewModel = function() {
	var self = this;
	self.catList = ko.observableArray();
	for (i = 0; i<model.cats.length; i++) {
		catList.push(model.cats[i]);
	}
	self.theCat = ko.observable(new Cat(catList()[0]));
	this.clicker = function() {
		this.catAge(this.catAge()+1);
	}
	self.buttoned = function(data) {
		self.theCat(new Cat(data));
	}
};

ko.applyBindings(myViewModel);
