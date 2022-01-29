window.onload = function(){

window.addEventListener("scroll", function(){
    if(window.scrollY>=700){
        document.getElementById("scrollupbtn").style.visibility="visible";
        document.getElementById("scrollupbtn").style.opacity="100%";
    }
    else{
        document.getElementById("scrollupbtn").style.visibility="hidden";
        document.getElementById("scrollupbtn").style.opacity="0%";
    }
})

var closePW = document.getElementById("close-popup");
closePW.addEventListener("click", function(){closePopUp()});

var storyLink = document.getElementsByClassName("story");
for(var i = 0; i < storyLink.length; i++){
    storyLink[i].addEventListener("click", function(){showPopUp("story");});
}

var designLink = document.getElementsByClassName("design");
for(var i = 0; i < designLink.length; i++){
    designLink[i].addEventListener("click", function(){showPopUp("design");});
}

var lookBookLink = document.getElementsByClassName("lookbook");
for(var i = 0; i < lookBookLink.length; i++){
    lookBookLink[i].addEventListener("click", function(){showPopUp("lookbook");});
}

var faqLink = document.getElementsByClassName("faq");
for(var i = 0; i < faqLink.length; i++){
    faqLink[i].addEventListener("click", function(){showPopUp("faq");});
}

var autLink = document.getElementsByClassName("authenticityValid");
for(var i = 0; i < autLink.length; i++){
    autLink[i].addEventListener("click", function(){showPopUp("av");});
}

var shipLink = document.getElementsByClassName("shipping");
for(var i = 0; i < shipLink.length; i++){
    shipLink[i].addEventListener("click", function(){showPopUp("shipping");});
}
var returnLink = document.getElementsByClassName("returns")
for(var i = 0; i < returnLink.length; i++){
    returnLink[i].addEventListener("click", function(){showPopUp("returns");});
}

function showPopUp(theme){
    var pw = document.getElementsByClassName("popup-window")[0];
    if(document.getElementById("cat")){
        var cat = document.getElementById("cat");
        pw.removeChild(cat);
    }
    if(document.getElementById("inp")){
        var inp = document.getElementById("inp");
        pw.removeChild(inp);
    }
    if(document.getElementById("btn")){
        var btn = document.getElementById("btn");
        pw.removeChild(btn);
    }
    if(document.getElementById("form")){
        var form = document.getElementById("form");
        pw.removeChild(form);
    }
    pw.style.display="flex";
    pw.style.flexDirection="column";
    pw.style.top=(window.pageYOffset + 150) + 'px';
    pw.style.width="75%";
    pw.style.height="fit-content";
    pw.style.opacity="100%";
    pw.style.transition="1s";
    document.getElementById("main-content").style.transition="1s";
    document.getElementById("main-content").style.opacity="30%";

    var div = document.getElementById("popup-banner");
    var h1 = document.getElementById("popup-h1");
    var span = document.getElementById("popup-span");

    switch(theme){
        case "story":
            div.style.background="none";
            div.style.background=`url("img/story banner.png")`;
            div.style.backgroundSize = "100%";
            div.style.backgroundRepeat="no-repeat";
            h1.textContent="OUR STORY";
            span.textContent=`That's the "Il Principio del classici". Founded by brothers Vittorio & Andriano Centena who 
            were unusual hronological enthusiasts with a passion for unique timepieces. They've been
            scouring the globe since 1920 discovering obscure, unusual brands that you've probably
            never heard of as well as carefully curating the brands you love. Purveyors of wrist-borne
            time machines, Il Principio del classici is a singular source for unusual classic watches from Italy. 
            A watch says a lot about you and helps you stand out. It's time for you to be different. Just like 
            these two brothers. We believe that the classical watch represents more than just a functional mechanism
             to tell time. The watch is an unique form of art, design and personal expression. We've had a long-standing mission
            of providing unique and affordable timepieces to adventurous enthusiasts as yourself. As the number
            one selling independent online watch store, we plan to stay true to our core mission.`;
            break;
        
        case "design":
            div.style.background="none";
            div.style.background=`url("img/design collage.jpg")`;
            div.style.backgroundSize = "100%";
            div.style.backgroundRepeat="no-repeat";
            h1.textContent="OUR DESIGN";
            h1.style.color="#E4E4E4";
            h1.style.textShadow="2px 2px 3px #1C1C1C";
            span.textContent=`A watch is something personal. Everyone has their own taste in design and style. Therefore,
            we do not want to say what a good or bad watch is, but what the signs of a quality watch are in general. 
            And how these signs are easily identifiable. A little side note is that we are mainly looking at an affordable
             watch. Furthermore, Il Principio dei classici is important to ensure that a gold, rosegold, silver or black watch 
             reserves its color. A watch without coating may discolor within a year by frequent use. The used materials
              are often displayed on the back of a watch. Note: Stainless steel (watch) back indicates that only the watch
               back is made of stainless steel.`;
               break;
        
        case "lookbook":
            div.style.background="none";
            div.style.background=`url("img/watches collage.png")`;
            div.style.backgroundSize = "100%";
            div.style.backgroundRepeat="no-repeat";
            h1.textContent="OUR LOOKBOOK";
            span.textContent="";
            var imgs = new Array;
            for(var i = 0; i < 10; i++){
                imgs.push(document.createElement("img"));
                imgs[i].style.width="90%";
                imgs[i].style.maxWidth="300px";
                imgs[i].style.minWidth="150px";
                imgs[i].style.height="450px";
                imgs[i].style.margin="0"
            }
            imgs[0].setAttribute("src", "img/watch1 small.png");
            imgs[1].setAttribute("src", "img/watch2 small.png");
            imgs[2].setAttribute("src", "img/watch3 small.png");
            imgs[3].setAttribute("src", "img/watchw1-small.png");
            imgs[4].setAttribute("src", "img/watchw2-small.png");
            imgs[5].setAttribute("src", "img/watchw3-small.png");
            imgs[6].setAttribute("src", "img/watch11 small.png");
            imgs[7].setAttribute("src", "img/watch5-small.png");
            imgs[8].setAttribute("src", "img/watch7 small.png");
            imgs[9].setAttribute("src", "img/watch4 small.png");

            var cat = document.createElement("div");
            cat.id="cat";
            cat.style.display="flex";
            cat.style.flexDirection="row";
            cat.style.flexWrap = "wrap";
            cat.style.justifyContent="center";
            cat.style.width="80%";
            cat.style.height="fit-content";
            pw.appendChild(cat);
            for(var i = 0; i < 10; i++){
                cat.appendChild(imgs[i]);
            }
            break;
      
        case "faq":
            div.style.background="none";
            div.style.background=`url("img/straps interchangable.jpg")`;
            div.style.backgroundSize = "100%";
            div.style.backgroundRepeat="no-repeat";
            h1.textContent="FREQUENTLY ASKED QUESTIONS";
            h1.style.color="#1C1C1C";
            h1.style.textShadow="2px 2px 3px #1C1C1C";
            span.style.textAlign="left";
            span.innerHTML=`WHAT IS A CHRONOMETER?<br><br>
                Chronometer is a Greek word meaning “timekeeper”. Today, only precision watches with a high level of accuracy
                may call themselves a chronometer, a designation that is subject to strict international test conditions. The
                independent Swiss monitoring organisation Contrôle Officiel Suisse des Chronomètres (COSC) tests watches for
                15 days in five different positions and at three temperature levels.<br><br>
                WHAT IS A CHRONOGRAPH?<br><br>
                Chronograph literally means “time writer”. You can both tell the time with a chronograph and use it to measure
                intervals of time.<br><br>
                CAN SAPPHIRE GLASS BE SCRATCHED?<br><br>
                Yes, even sapphire glass can be scratched. Sapphire ranks as a 9 on a hardness scale ranging from 1 to 10. Only
                diamonds, ranking at 10, are harder. This means that sapphire glass can be scratched by a diamond or by an 
                equally hard material. Concrete, for example, contains corundum, which also ranks as a 9 on the hardness 
                scale, meaning it can also cause damage to sapphire glass.<br><br>
                HOW LONG IS MY WATCH WATER-RESISTANT?<br><br>
                A watch is considered to be water-resistant when the seals on the glass, crown and case back are able to 
                protect the fine high-precision movement inside from moisture and water. Water-resistant watches that are 
                regularly exposed to water should have their seals checked at least once every two years at an authorised 
                specialist retailer. The elasticity of the seals may start to deteriorate after two years. External elements
                such as hand lotion, perfume and soap may also weaken the seals.<br><br>
                WHEN DO I HAVE TO GET MY WATCH SERVICED?<br><br>
                All machines require care and maintenance, even very small ones like watches. A watch movement, a fine 
                machine consisting of up to 200 individual components, is lightly oiled and greased in certain parts. 
                This small amount of oil and grease dries out or is used up by the running of the watch movement. If 
                the movement gets dirty and dry, the accuracy and/or power reserve of the watch may suffer. These are 
                the first signs that maintenance may be necessary. Treat your mechanical or electronic watch to 
                professional servicing every four to six years so that it keeps displaying the hours, minutes and 
                seconds accurately again.<br><br>
                DOES AN AUTOMATIC WATCH HAVE TO BE WOUND?<br><br>
                If an automatic watch is worn every day and subject to an average amount of hand motion, it will 
                not need to also be wound manually. However, if you are preparing an automatic watch to be worn 
                again after it has been left in storage for some time, simply shaking and setting it will not 
                suffice. We therefore recommend that you wind the crown of your automatic wristwatch several times
                to support power supply before wearing it again.<br><br>
                Our tip: when adjusting the hands, please make sure the time is set properly to day or night – 
                otherwise, your date display could already jump to the next day at lunchtime.`
                break;
       
        case "av":
            div.style.background="none";
            div.style.background=`url("img/design3.jpg")`;
            div.style.backgroundSize = "100%";
            div.style.backgroundRepeat="no-repeat";
            h1.textContent="AUTHENTICITY VALIDATION";
            h1.style.color="#1C1C1C";
            span.textContent=`To ensure that your timepiece is genuine, you have been given a 10-digit warranty code. 
            Please enter the code below to activate the warranty & verify the authenticity of your watch.`;
            var cat = document.createElement("div");
            cat.id = "cat";

            var btn = document.createElement("button");
            btn.id = "btn";

            var inp = document.createElement("input");
            inp.id = "inp";

            var form = document.createElement("form");
            form.id = "form";

            cat.style.display="flex";
            cat.style.flexDirection="column";
            cat.style.textAlign="center";
            cat.style.width="100%";
            cat.style.height="fit-content";
            
            btn.style.background="#1C1C1C";
            btn.style.border="3px solid #A37D20";
            btn.style.color="#D1B675";
            btn.style.margin="2vh auto 2vh auto";
            btn.style.padding="10px";
            btn.style.width="fit-content"
            btn.style.fontSize="3vw";
            btn.style.fontWeight="500";
            btn.style.fontFamily="Zilla Slab, serif";
            btn.style.cursor="pointer";
            btn.textContent="VALIDATE";
            btn.type="button";

            inp.style.width="60vw";
            inp.style.height="3vh";
            inp.style.margin="2vh auto 2vh auto"
            inp.placeholder="Varranty number"
            inp.type="number";

            form.style.display="flex";
            form.style.flexDirection="column";
            form.style.fontFamily="Zilla Slab, serif";



            pw.appendChild(cat);
            cat.appendChild(form);
            form.appendChild(inp)
            form.appendChild(btn);
            break;

        case "shipping":
            div.style.background="none";
            div.style.background=`url("img/delivery.jpg")`;
            div.style.backgroundSize = "100%";
            div.style.backgroundRepeat="no-repeat";
            h1.textContent="SHIPPING & DELIVERY";
            h1.style.color="#1C1C1C";
            span.textAlign="left";
            span.innerHTML=`HOW FAST DO YOU PROCESS ORDERS?<br><br>
                            All orders received before 4pm EST will be dispatched to a courier within 12 hours.<br><br>
                            CAN I TRACK MY ORDER?<br><br>
                            All shipments include a tracking number, allowing you to track your order directly 
                            from our website. We also insure all our shipments, so you're completely covered.<br><br>
                            WHERE IS MY ORDER BEING SHIPPED FROM?<br><br>
                            We have multiple shipping centers across the globe, and we'll ship from the nearest 
                            one to you. Our current centers are located in the USA, Australia, Italy and Sweden.`;
            break;

        case "returns": {
            div.style.background="none";
            div.style.background=`url("img/mens.jpg")`;
            div.style.backgroundSize = "100%";
            div.style.backgroundRepeat="no-repeat";
            div.style.backgroundPosition="50% 50%";
            h1.textContent="RETURNS & EXCHANGES";
            h1.style.color="#E4E4E4";
            span.textAlign="left";
            span.innerHTML=`WHAT IS THE RETURN POLICY?<br><br>
                            We offer an industry-leading return policy, giving you up to 60 days to try out your new watch. 
                            If you're not in love with it, simply send it back to us, and get a full refund. No hard feelings, and 
                            no questions asked.<br><br>
                            WHAT IS THE WARRANTY?<br><br>
                            We offer a 10 year warranty from the date of purchase. Our comprehensive warranty covers all manufacturing
                            defects of the movement, case and crystal. Other components, subject to wear & tear (such as glass) are
                            not covered by the warranty.<br><br>
                            WHAT IS THE EXCHANGE POLICY?<br><br>
                            Feel free to exchange your watch for other products up to 60 days from the date of purchase. Additional 
                            shipping costs may apply depending on your location.<br><br>
                            HOW DO I RETURN MY WATCH?<br><br>
                            Just reach out to us via our contact form and we'll send you the detailed return instructions.`
            break;
        }
        }
}

function closePopUp(){
    var pw = document.getElementsByClassName("popup-window")[0];
    if(document.getElementById("cat")){
        var cat = document.getElementById("cat");
        pw.removeChild(cat);
    }
    if(document.getElementById("inp")){
        var inp = document.getElementById("inp");
        pw.removeChild(inp);
    }
    if(document.getElementById("btn")){
        var btn = document.getElementById("btn");
        pw.removeChild(btn);
    }
    if(document.getElementById("form")){
        var form = document.getElementById("form");
        pw.removeChild(form);
    }
    pw.style.display="none";
    document.getElementById("main-content").style.opacity="100%";
    pw.style.top=(0) + 'px';
    
}

}