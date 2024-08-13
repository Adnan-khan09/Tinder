// Get the data
var users =[
    {
        profilePic: "C:/Users/HP/Desktop/Tinder/razi.jpg", pendingMsg:4, location: "Bokaro, India", name:"Razi", age:23,
        displayPic:"C:/Users/HP/Desktop/Tinder/razi.jpg",
        interest:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"painting"
        }
    ],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum esse dolor hic iure explicabo quis optio sint molestiae modi!",
        isFriend:null
    },
    {
        profilePic: "C:/Users/HP/Desktop/Tinder/addy.jpg", pendingMsg:14, location: "Kolkata, India", name:"Adnan", age:23,
        displayPic:"C:/Users/HP/Desktop/Tinder/addy.jpg",
        interest:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"painting"
        }
    ],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum esse dolor hic iure explicabo quis optio sint molestiae modi!",
        isFriend:null
    },
    {
        profilePic: "C:/Users/HP/Desktop/Tinder/dani.jpg", pendingMsg:8, location: "Delhi, India", name:"Danish", age:20,
        displayPic:"C:/Users/HP/Desktop/Tinder/dani.jpg",
        interest:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"painting"
        }
    ],
            bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum esse dolor hic iure explicabo quis optio sint molestiae modi!",
        isFriend:null
    },
    {
        profilePic: "C:/Users/HP/Desktop/Tinder/tousif.jpg", pendingMsg:7, location: "Bhilai, India", name:"Tousif", age:22,
        displayPic:"C:/Users/HP/Desktop/Tinder/tousif.jpg",
        interest:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"painting"
        }
    ],
            bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum esse dolor hic iure explicabo quis optio sint molestiae modi!",
        isFriend:null
    },
    {
        profilePic: "C:/Users/HP/Desktop/Tinder/sahil.jpg", pendingMsg:3, location: "Sivan, India", name:"Sahil", age:19,
        displayPic:"C:/Users/HP/Desktop/Tinder/sahil.jpg",
        interest:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"painting"
        }
    ],
            bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum esse dolor hic iure explicabo quis optio sint molestiae modi!",
        isFriend:null
    },
    {
        profilePic: "C:/Users/HP/Desktop/Tinder/asad.jpg", pendingMsg:4, location: "Punjab, India", name:"Asad", age:22,
        displayPic:"C:/Users/HP/Desktop/Tinder/asad.jpg",
        interest:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"painting"
        }
    ],
            bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum esse dolor hic iure explicabo quis optio sint molestiae modi!",
        isFriend:null
    },
    {
        profilePic: "C:/Users/HP/Desktop/Tinder/assu.jpg", pendingMsg:4, location: "Durg, India", name:"Imran", age:19,
        displayPic:"C:/Users/HP/Desktop/Tinder/assu.jpg",
        interest:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"painting"
        }
    ],
            bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum esse dolor hic iure explicabo quis optio sint molestiae modi!",
        isFriend:null
    },
    {
        profilePic: "C:/Users/HP/Desktop/Tinder/billu.jpg", pendingMsg:5, location: "Kolkata, India", name:"Bilal", age:18,
        displayPic:"C:/Users/HP/Desktop/Tinder/billu.jpg",
        interest:[{
            icon:`<i class="ri-music-2-fill"></i>`,
            interest:"Music"
        },
        {
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"painting"
        }
    ],
            bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laborum esse dolor hic iure explicabo quis optio sint molestiae modi!",
        isFriend:null
    }
]

function select(elem){
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prflImg img").src =  users[index].profilePic
    select(".badge h5").textContent = users[index].pendingMsg
    select(".location h3").textContent = users[index].location
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    var clutter = "";
    users[curr].interest.forEach(function(interest){
        clutter += `<div class="tag flex items-center bg-white/40 px-3 py-1 rounded-full gap-4">
                                ${interest.icon}
                                <h3 class="text-xl tracking-tighter capitalize">${interest.interest}</h3>
                            </div>`
    })

    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[curr].bio;
}

(function setInitials(){
    select(".mainCard img").src = users[curr].displayPic;
    select(".incomingCard img").src = users[curr+1]?.displayPic; 

    setData(curr);
    curr = 2;

})();


function imageChange(){
    if (!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = select(".mainCard");
                let incoming = select(".incomingCard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingCard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale: 1,
                    opacity: 1
                })
                if(curr === users.length) curr = 0;
                select(".mainCard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("mainCard");
                incoming.classList.add("mainCard");
                main.classList.add("incomingCard");
            }
        });

       tl.to(".mainCard",{
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: .9
       }, "a")
       .from(".incomingCard",{
        scale: .9,
        opacity: 0,
        ease: Circ,
        duration: 1.1
       }, "a")
    }
 }
    




let deny = select(".deny");
   let accept = select(".accept");

   deny.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
    y:"100%",
    stagger: .06,
    ease: Power4.easeInOut,
    duration: 1.5
})
});

accept.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
    y:"100%",
    stagger: .06,
    ease: Power4.easeInOut,
    duration: 1.5
})
});




(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container` , 'overflow-hidden');
        div.appendChild(element);   
        select(".details").appendChild(div);
    })
})();
