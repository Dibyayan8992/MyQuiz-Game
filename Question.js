class Question {

    constructor() {
      this.input1 = createInput("Type your name here...");
      this.input2 = createInput("Enter your answer number");
      this.button = createButton('Submit');
      this.question = createElement('h2');
      this.title = createElement('h2');
      this.option1 = createElement('h3');
      this.option2 = createElement('h3');
      this.option3 = createElement('h3');
      this.option4 = createElement('h3');
    }
    hide(){
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
    }
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350, 0);

      this.question.html("QUESTION- What starts and ends with the letter 'E', but only has one letter?");
      this.question.position(60, 80);
      this.option1.html("1: Everyone ");
      this.option1.position(60, 120);
      this.option2.html("2: Envelope ");
      this.option2.position(60, 140);
      this.option3.html("3: Estimate ");
      this.option3.position(60, 160);
      this.option4.html("4: Example ");
      this.option4.position(60, 180);

      this.input1.position(150,250);
      this.input2.position(320,250);

      this.button.position(450,290);

      this.button.mousePressed(()=>{
        this.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);

      });
    }
  }
  



