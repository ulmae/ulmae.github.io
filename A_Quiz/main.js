function testFunction() {
    console.log("Button works!");
};

function drawCategory(x) {

    // Creating the buttons
    var singleCategory = document.createElement('div');
    singleCategory.className = "btn btn-primary";
    singleCategory.onclick = testFunction();
    singleCategory.innerHTML = x.name;

    //Appending to container
    var categoryContainer = document.getElementById('workspace-area');
    categoryContainer.appendChild(singleCategory);

};

function start() {
    var container = document.getElementById('workspace-area');
    container.innerHTML = "";

    for (var i=0; i < categoryData.length; i++) {
        drawCategory(categoryData[i]);
    }
};