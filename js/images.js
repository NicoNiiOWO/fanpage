const png = 26;
const jpg = 33;
const jpeg = 9;
const total = png+jpg+jpeg;

function img(){
    let f=0;
    let x=1;
    let row=1;
    let div;
    let roww=1;
    for(let i=1; i<=total; i++){
        if(i%4==0){
            div = document.createElement("div");
            div.setAttribute("class", "row");
            div.setAttribute("id", "row"+row);
            document.getElementById("gallery").appendChild(div);
            row++;
        }

    }
    
    for(let i=1; i<=total; i++){
        let thumbnail = document.createElement("div");
        let img = document.createElement("img");
        thumbnail.setAttribute("class", "thumbnail");
        img.setAttribute("class", "thumbnail-image");
        let dir;
        if(f==0){
            dir = "images/img ("+i+").png";
        }else if(f==1){
            dir = "images/img ("+i+").jpg";
        }else if(f==2){
            dir = "images/img ("+i+").jpeg";
        }

        $.get(dir).done(function() { 
    	    img.setAttribute("src", dir);
    	    thumbnail.appendChild(img);
        }).then(function(){
            x++;
            if(x%4==0){
                roww++;
            }
            let e = document.getElementById("row"+roww);
            e.appendChild(thumbnail);
        });
        if(f==0 && i==png){
            i=0;
            f++;
        }else if(f==1 && i==jpg){
            i=0;
            f++;
        }if(f==2 && i==jpeg){
            i=0;
            f++;
        }
        if(f==3){
            break;
        }
    }
    
}