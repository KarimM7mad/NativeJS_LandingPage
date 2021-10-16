// randomLongTxt to assign to sections Bodies
let txtForParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur est nunc, pharetra tempor quam sed, finibus porta magna. Phasellus et eros gravida, egestas urna in, venenatis orci. In semper efficitur fringilla. Nunc et ante augue. Donec efficitur nisl et purus feugiat, nec efficitur elit fermentum. Proin molestie accumsan velit, sit amet posuere sapien ornare ut. Phasellus hendrerit vestibulum elit, sed blandit nisi porta ut.
In posuere nibh nec ligula ullamcorper elementum. Morbi ut nisl consequat, varius turpis vitae, placerat nisl. Ut ac ex sapien. Mauris a aliquam turpis, luctus molestie dui. Maecenas finibus volutpat elit ac congue. Ut feugiat massa eget ex lobortis congue. Suspendisse vel metus eget nunc dapibus fermentum in ut tortor. Proin at risus sed elit mattis ultrices. Duis vitae nulla in turpis facilisis mattis. Aliquam leo diam, laoreet vel posuere a, facilisis sagittis diam. Maecenas eleifend purus vel felis egestas, sed sollicitudin risus ullamcorper. Vivamus id imperdiet velit, maximus mollis nulla. Donec ac porttitor quam. Nunc sed mauris auctor, vehicula sapien vitae, elementum odio.
Integer vel ullamcorper neque, nec vulputate est. Morbi id sem in nisl hendrerit sollicitudin. Nam at placerat risus, in convallis libero. Vestibulum hendrerit luctus est dignissim sollicitudin. Nam ullamcorper finibus scelerisque. Vestibulum at lacus tortor. Sed non vestibulum metus, et pellentesque nibh. Vivamus fringilla quam id elit convallis pretium. Vivamus a metus eu ex tempus finibus.
Vivamus nec venenatis arcu. Praesent porta vestibulum neque vel fringilla. Vestibulum purus nisl, rhoncus eu sem id, placerat condimentum justo. Donec pulvinar metus nunc, in fringilla nibh convallis vel. Nam feugiat mauris augue, ut lacinia est tempor eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas at massa lorem. Nulla velit nisi, elementum sit amet facilisis et, auctor vitae tellus. Nam luctus molestie tincidunt. Morbi vel risus in eros feugiat efficitur vel quis nulla. Vivamus gravida tincidunt nulla ac mollis. Curabitur lacinia condimentum sapien aliquet pellentesque. Integer laoreet scelerisque diam, at feugiat eros viverra vel. Suspendisse ut mi ac nisi eleifend pretium in nec diam.
In posuere magna in sapien sagittis, nec efficitur neque fringilla. Ut id velit a libero laoreet tempor. Praesent ac sem vitae orci feugiat sagittis a at mauris. In maximus semper faucibus. Quisque pharetra porta bibendum. Donec auctor volutpat nisl, at aliquam magna faucibus id. Cras in lacus nec orci auctor porta. Fusce ultrices arcu nec mi hendrerit cursus ac at orci.`;

const numberOfSections = 4;

const highlightSection = function (ev) {
    const sections = document.querySelectorAll("section , .active");
    // debugger;;
    if (sections !== null && sections.length > 0) {
        for (let section of sections)
            section.classList.remove("active");
    }
    ev.target.parentElement.classList.toggle("active");
};

const navBarBtns_scrollToDesiredLocation = function (ev) {
    console.log(ev);

    const sectionsDiv = document.getElementById("sectionDiv");
    const highlightedSection = document.getElementById(ev.target.textContent);
    highlightedSection.scrollTo({
        behavior: "smooth",
        top: highlightedSection.offsetTop
    });
}


let docFrag = document.createDocumentFragment();

// loop to create the section and it's content
for (let i = 0; i < numberOfSections; i++) {
    // create section element
    const sectionn = document.createElement('section');

    if (i === 0) {
        sectionn.classList.add('active');
    }
    sectionn.addEventListener('click', highlightSection);
    sectionn.id = `Section ${i + 1}`;


    // create h1 element to add to 
    const head1ToAdd = document.createElement('h1');
    head1ToAdd.textContent = `Section ${i + 1}`;
    sectionn.appendChild(head1ToAdd);

    const preToAdd = document.createElement('pre');
    preToAdd.textContent = txtForParagraph;
    sectionn.appendChild(preToAdd);

    docFrag.appendChild(sectionn);
}
document.getElementById("sectionDiv").appendChild(docFrag);


const navBarBtns = document.querySelectorAll(".navbar-brand");

for (navBarBtn of navBarBtns) {
    navBarBtn.addEventListener("click", navBarBtns_scrollToDesiredLocation);
}
