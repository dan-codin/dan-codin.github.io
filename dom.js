function showFilter(){
    let filter = document.getElementById('filterContent');
    if(filter.style.display == 'block'){
        filter.style.display = 'none';
    }    
    else{
        filter.style.display = 'block';
    }
}
function showAddNew(){
    let form = document.getElementById('newContent');
    if(form.style.display == 'none'){
        form.style.display = 'flex';
    }
    else{
        form.style.display = 'none';
    }
}
function addNewArticle() {
    let container = document.getElementById('articleList');
    let category = document.querySelector('input[type="radio"]:checked');
    let articleClass;
    let articleCount = document.querySelectorAll('article').length;
    let newId = 'a'+ (articleCount + 1);
    let spanText;
    if(category.id == 'opinionRadio'){
        articleClass ='opinion';
        spanText='Opinion';
        
    }
    if(category.id == 'recipeRadio'){
        articleClass ='recipe';
        spanText = 'Recipe';
    }
    if(category.id == 'lifeRadio'){
        articleClass ='update';
        spanText = 'Update';
    }
    let article = document.createElement('article');
    article.classList.add(articleClass);
    article.id = newId;
    let span = document.createElement('span');
    span.classList.add('marker');
    span.innerHTML = spanText;
    let heading = document.createElement('h2');
    heading.innerHTML = document.getElementById('inputHeader').value;
    let p1 = document.createElement('p');
    p1.innerHTML = document.getElementById('inputArticle').value;
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    a.href = 'moreDetails.html';
    a.innerHTML = 'Read more...';
    p2.appendChild(a);
    article.appendChild(span);
    article.appendChild(heading);
    article.appendChild(p1);
    article.appendChild(p2);
    container.appendChild(article);
    document.getElementById('newContent').reset();

}
function filterArticles(){
 //get all article type not checked
    let unchecked = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
        unchecked.forEach(element => {
            // check ID and set display to none on class for that article
            if(element.id =='opinionCheckbox'){
                const className = document.getElementsByClassName('opinion');
                Array.from(className).forEach(a =>{
                    a.style.display = 'none'
                }) 
            }
             if(element.id =='recipeCheckbox'){
                const className = document.getElementsByClassName('recipe');
                Array.from(className).forEach(a =>{
                    a.style.display = 'none'
                }) 
            }
             if(element.id =='updateCheckbox'){
                const className = document.getElementsByClassName('update');
                Array.from(className).forEach(a =>{
                    a.style.display = 'none'
                }) 
            }

        });
        //reset all checked
    let checked = document.querySelectorAll(':checked');
        checked.forEach(element => {
            // check ID and set display to none on class for that article
            if(element.id =='opinionCheckbox'){
                const className = document.getElementsByClassName('opinion');
                Array.from(className).forEach(a =>{
                    a.style.display = ''
                }) 
            }
             if(element.id =='recipeCheckbox'){
                const className = document.getElementsByClassName('recipe');
                Array.from(className).forEach(a =>{
                    a.style.display = ''
                }) 
            }
             if(element.id =='updateCheckbox'){
                const className = document.getElementsByClassName('update');
                Array.from(className).forEach(a =>{
                    a.style.display = ''
                }) 
            }

        });
}

