// randomLongTxt to assign to sections Bodies
const txtForParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est nunc, pharetra tempor quam sed, finibus porta magna. Phasellus et eros gravida, egestas urna in, venenatis orci. In semper efficitur fringilla. Nunc et ante augue. Donec efficitur nisl et purus feugiat, nec efficitur elit fermentum. Proin molestie accumsan velit, sit amet posuere sapien ornare ut. Phasellus hendrerit vestibulum elit, sed blandit nisi porta ut.
In posuere nibh nec ligula ullamcorper elementum. Morbi ut nisl consequat, varius turpis vitae, placerat nisl. Ut ac ex sapien. Mauris a aliquam turpis, luctus molestie dui. Maecenas finibus volutpat elit ac congue. Ut feugiat massa eget ex lobortis congue. Suspendisse vel metus eget nunc dapibus fermentum in ut tortor. Proin at risus sed elit mattis ultrices. Duis vitae nulla in turpis facilisis mattis. Aliquam leo diam, laoreet vel posuere a, facilisis sagittis diam. Maecenas eleifend purus vel felis egestas, sed sollicitudin risus ullamcorper. Vivamus id imperdiet velit, maximus mollis nulla. Donec ac porttitor quam. Nunc sed mauris auctor, vehicula sapien vitae, elementum odio.
Integer vel ullamcorper neque, nec vulputate est. Morbi id sem in nisl hendrerit sollicitudin. Nam at placerat risus, in convallis libero. Vestibulum hendrerit luctus est dignissim sollicitudin. Nam ullamcorper finibus scelerisque. Vestibulum at lacus tortor. Sed non vestibulum metus, et pellentesque nibh. Vivamus fringilla quam id elit convallis pretium. Vivamus a metus eu ex tempus finibus.
Vivamus nec venenatis arcu. Praesent porta vestibulum neque vel fringilla. Vestibulum purus nisl, rhoncus eu sem id, placerat condimentum justo. Donec pulvinar metus nunc, in fringilla nibh convallis vel. Nam feugiat mauris augue, ut lacinia est tempor eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas at massa lorem. Nulla velit nisi, elementum sit amet facilisis et, auctor vitae tellus. Nam luctus molestie tincidunt. Morbi vel risus in eros feugiat efficitur vel quis nulla. Vivamus gravida tincidunt nulla ac mollis. Curabitur lacinia condimentum sapien aliquet pellentesque. Integer laoreet scelerisque diam, at feugiat eros viverra vel. Suspendisse ut mi ac nisi eleifend pretium in nec diam.
In posuere magna in sapien sagittis, nec efficitur neque fringilla. Ut id velit a libero laoreet tempor. Praesent ac sem vitae orci feugiat sagittis a at mauris. In maximus semper faucibus. Quisque pharetra porta bibendum. Donec auctor volutpat nisl, at aliquam magna faucibus id. Cras in lacus nec orci auctor porta. Fusce ultrices arcu nec mi hendrerit cursus ac at orci.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est nunc, pharetra tempor quam sed, finibus porta magna. Phasellus et eros gravida, egestas urna in, venenatis orci. In semper efficitur fringilla. Nunc et ante augue. Donec efficitur nisl et purus feugiat, nec efficitur elit fermentum. Proin molestie accumsan velit, sit amet posuere sapien ornare ut. Phasellus hendrerit vestibulum elit, sed blandit nisi porta ut.
In posuere nibh nec ligula ullamcorper elementum. Morbi ut nisl consequat, varius turpis vitae, placerat nisl. Ut ac ex sapien. Mauris a aliquam turpis, luctus molestie dui. Maecenas finibus volutpat elit ac congue. Ut feugiat massa eget ex lobortis congue. Suspendisse vel metus eget nunc dapibus fermentum in ut tortor. Proin at risus sed elit mattis ultrices. Duis vitae nulla in turpis facilisis mattis. Aliquam leo diam, laoreet vel posuere a, facilisis sagittis diam. Maecenas eleifend purus vel felis egestas, sed sollicitudin risus ullamcorper. Vivamus id imperdiet velit, maximus mollis nulla. Donec ac porttitor quam. Nunc sed mauris auctor, vehicula sapien vitae, elementum odio.
Integer vel ullamcorper neque, nec vulputate est. Morbi id sem in nisl hendrerit sollicitudin. Nam at placerat risus, in convallis libero. Vestibulum hendrerit luctus est dignissim sollicitudin. Nam ullamcorper finibus scelerisque. Vestibulum at lacus tortor. Sed non vestibulum metus, et pellentesque nibh. Vivamus fringilla quam id elit convallis pretium. Vivamus a metus eu ex tempus finibus.
Vivamus nec venenatis arcu. Praesent porta vestibulum neque vel fringilla. Vestibulum purus nisl, rhoncus eu sem id, placerat condimentum justo. Donec pulvinar metus nunc, in fringilla nibh convallis vel. Nam feugiat mauris augue, ut lacinia est tempor eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas at massa lorem. Nulla velit nisi, elementum sit amet facilisis et, auctor vitae tellus. Nam luctus molestie tincidunt. Morbi vel risus in eros feugiat efficitur vel quis nulla. Vivamus gravida tincidunt nulla ac mollis. Curabitur lacinia condimentum sapien aliquet pellentesque. Integer laoreet scelerisque diam, at feugiat eros viverra vel. Suspendisse ut mi ac nisi eleifend pretium in nec diam.
In posuere magna in sapien sagittis, nec efficitur neque fringilla. Ut id velit a libero laoreet tempor. Praesent ac sem vitae orci feugiat sagittis a at mauris. In maximus semper faucibus. Quisque pharetra porta bibendum. Donec auctor volutpat nisl, at aliquam magna faucibus id. Cras in lacus nec orci auctor porta. Fusce ultrices arcu nec mi hendrerit cursus ac at orci.`;

// configuration for defining number of sections to create
const numberOfSections = 5;

alert("You can modify the number of sections on the upcoming screen\nby changing the value in the Variable \"numberOfSections\"\nwhich is currently=" + numberOfSections + ".");

/**
    @desciption add active class to navbar button or section and remove from the previously active one.
    @param {HTMLElement} element - element to set active.
*/
function makeAHighlight(element) {
    let activeElement = null;

    // check for nodeName in order to define how to get current active element to deactivate it.
    if (element.nodeName.toLowerCase() === "a") {
        activeElement = document.querySelector("nav").querySelector("a.active");
    } else if (element.nodeName.toLowerCase() === "section") {
        activeElement = document.querySelector("section.active");
    }
    // deactivate element
    if (activeElement != null) {
        activeElement.classList.remove("active");
    }
    // activate the desired element
    element.classList.add("active");
}

/**
    @desciption event handler to section click, highlight the section clicked
    @param {EventTarget} ev - event object to get target from.
*/
function onSectionClickHandler(ev) {
    makeAHighlight(document.getElementById(ev.target.parentElement.id + "_"));
    makeAHighlight(ev.target.parentElement);
}

/**
    @desciption event handler to navBar Btn click, scroll to desired section and make A highlight to the btn and the section corresponding to it.
    @param {EventTarget} ev - event object to get target from.
*/
function onNavBarBtnClickHandler(ev) {

    // navbar btns ids are following the structure of "section.id_" and text content is "section.id"
    const elSection = document.getElementById(ev.target.textContent);

    //scroll to the section top and consider the sticky navbar for positioning
    window.scrollTo({
        top: elSection.offsetTop - document.getElementById("navBarr").offsetHeight - 20,
        behavior: "smooth"
    });

    makeAHighlight(ev.target);
    makeAHighlight(elSection);
}

/**
    @desciption handle the scroll event of the viewport by defining the current section and highlighting it.
    @param {EventTarget} ev - event object to get target from.
*/
window.visualViewport.addEventListener("scroll", function (ev) {

    // since all section have the same size , then get one of them
    const section1Element = document.getElementById("Section 1");
    // get the navbar for accquiring the length from it
    const navBarr = document.getElementById("navBarr");

    // this calculation is used to define the current section visible in the visual viewport and highlight if more than 25% of the top is present.
    // this calculation helps in getting section number without looping through "#SectionDiv" children.
    let numerator = (ev.target.pageTop + navBarr.offsetHeight) - (section1Element.offsetTop + 0.25 * section1Element.offsetHeight);
    let denominator = section1Element.offsetHeight + (section1Element.offsetTop - navBarr.offsetHeight);
    let n = Math.ceil(numerator / denominator) + 1;

    // get elements to be highlighted
    const sectionToHighlight = document.getElementById("Section " + n);
    const navBarBtnToHighlight = document.getElementById("Section " + n + "_");

    makeAHighlight(sectionToHighlight);
    makeAHighlight(navBarBtnToHighlight);
});

//TODO: need to be enhanced
/**
    @desciption to maintain the margin from the navBar whatever it's height.
*/
window.visualViewport.addEventListener("resize", (ev) => {
    const elSection = document.querySelector("section.active");
    window.scrollTo({
        top: elSection.offsetTop - document.getElementById("navBarr").offsetHeight - 20,
        behavior: "smooth"
    });
    ev.stopImmediatePropagation();
});

// create document frags for adding the sections and the navbar Btns
let sectionDocFrag = document.createDocumentFragment();
let navBarDocFrag = document.createDocumentFragment();

// elements creation loop
for (let i = 0; i < numberOfSections; i++) {

    // create section element
    const sectionn = document.createElement('section');
    sectionn.classList.add('container');
    sectionn.addEventListener('click', onSectionClickHandler, true);
    sectionn.id = `Section ${i + 1}`;

    // create h1 element to add to section
    const head1ToAdd = document.createElement('h1');
    head1ToAdd.textContent = sectionn.id;
    sectionn.appendChild(head1ToAdd);

    // create pre tag with it's content to add to section
    const preToAdd = document.createElement('pre');
    preToAdd.textContent = txtForParagraph;
    sectionn.appendChild(preToAdd);

    //adding section to the sectionFrag
    sectionDocFrag.appendChild(sectionn);

    // create anchor element
    const anchorr = document.createElement('a');
    anchorr.classList.add("nav-link");
    anchorr.textContent = sectionn.id;
    // making anchor ids similar to sections ids 
    // in order for easier search in event handlers
    // instead of looping throught the #sectionDiv children 
    anchorr.id = sectionn.id + "_";
    anchorr.addEventListener("click", onNavBarBtnClickHandler);
    navBarDocFrag.appendChild(anchorr);

    // set element number 1 to be the default active element
    if (i === 0) {
        sectionn.classList.add('active');
        anchorr.classList.add('active');
    }
}

// add the frag pieces to the DOM in order to appear on page
document.getElementById("sectionDiv").appendChild(sectionDocFrag);
document.getElementById("navBarr").appendChild(navBarDocFrag);
