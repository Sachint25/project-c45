class Pieces{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.text = "" 
        this.textSize = 0; 
    }
  
    display(){
        textSize(this.textSize);
        fill(128);
        text(this.text, this.x, this.y);
    }
  
    move(){

    }
}

class king extends Pieces{
    constructor(){
        super();
        this.textSize = 25;
        this.text = "KI";
    }
    
}

class queen extends Pieces{
    constructor(){
        super();
        this.textSize = 25;
        this.text = "Q";
    }
    
}

class bishub extends Pieces{
    constructor(){
        super();
        this.textSize = 25;
        this.text = "B";
    }
    
}

class knight extends Pieces{
    constructor(){
        super();
        this.textSize = 25;
        this.text = "KN";
    }
    
}

class rook extends Pieces{
    constructor(){
        super();
        this.textSize = 25;
        this.text = "R";
    }
    
}

class pawn extends Pieces{
    constructor(){
        super();
        this.textSize = 25;
        this.text = "P";
    }
    
}

class point extends Pieces{
    constructor(){
        super();
        this.textSize = 50;
        this.text = ".";
    }
}