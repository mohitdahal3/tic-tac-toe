class Cell{
    constructor(i,j){
        this.i = i
        this.j = j
        this.cross = undefined
    }

    show(){
        stroke(125);
        strokeWeight(1)
       fill(0);
       let x,y,mx,my
        x = this.i * w
        mx = x+w
        y = this.j * w
        my = y + w
       rect(this.i*w, this.j*w, w, w)
       if(this.cross === true){
           stroke(0,0,255)
           strokeWeight(3)
           line(x+40,y+40,mx-40,my-40)
           line(mx-40,y+40,x+40,my-40)
       }else if(this.cross === false){
        stroke(255,0,0)
        strokeWeight(3)
        ellipse((x+mx)/2, (y+my)/2, 50)
       }
    }

    includesmouse(){
        let x,y,mx,my
        x = this.i * w
        mx = x+w
        y = this.j * w
        my = y + w
        return(mouseX > x && mouseX<mx && mouseY>y && mouseY < my)
    }
}