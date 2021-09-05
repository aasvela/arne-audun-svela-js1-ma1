const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1:

const cat = {
    complain: function() {
        console.log("meow!");
    }
};

cat.complain();

//Question 2:

const heading = document.querySelector("h3");

heading.innerHTML = "Update heading";

//Question 3:

heading.style.fontSize = "2em";

//Question 4:

heading.classList.add("subheading");

//Question 5:

const paragraphs  = document.querySelectorAll("p");



// console.log(paragraphs);


for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
    }



//Question 6:

resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;

resultsContainer.style.backgroundColor = "yellow";

//Question 7:

function createList(list) {

    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

createList(cats);

//Question 8:

function createCats(cats) {

    let catList = ""; 

    for(let i = 0; i < cats.length; i++) {
        //console.log(cats[i])
        catName = cats[i].name;
        catAge = "Age unknown";

        if (cats[i].age) {
            catAge = cats[i].age;
        }

        catList = catList + `<h5>"${catName}</h5>
                             <p>"${catAge}"</p>`;  
    }
    const newCatList = "<div>" + catList + "</div>";

    console.log(newCatList);

    return newCatList;
}

const test = createCats(cats)

console.log(createCats(cats));

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = test;