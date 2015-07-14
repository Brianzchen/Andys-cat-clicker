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

var myViewModel = {
	catAge: ko.observable(model.cats[model.currentCat].click),
	catType: ko.observable(model.cats[model.currentCat].type),
	catNickname: ko.observableArray(model.cats[model.currentCat].nickName),
	clicker: function() {
		this.catAge(this.catAge()+1);
		if (this.catAge() > 5) {
			this.catType("pussy");
		} else {
			this.catType("newborn");
		}
	}
};

ko.applyBindings(myViewModel);
