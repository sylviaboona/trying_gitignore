function book(color, noOfpages, weight, owner, typeOfcover, title, author) {
    //this.color is a property for this function and value
    this.color = color;
    this.noOfpages = noOfpages;
    this.weight = weight;
    this.owner = owner;
    this.typeOfcover = typeOfcover;
    this.title = title;
    this.author = author;
    this.content = function () {
      console.log("Personal Development material about success");
    };
    this.publisher = function () {
      console.log("Sylvyz Publications");
    };
  }
  var book1 = new book(
    300,
    "White",
    "0.5lbs",
    "Sylvia",
    "Hard Cover",
    "Mindset",
    "Carol Dweck"
  );

  console.log(book1)