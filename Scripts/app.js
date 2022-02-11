/** 
 * Student 1 
 * Name: Sonadi Kannangara
 * ID: 100778336
 * 
 * Student 2
 * Name: Devanshi Patel
 * ID: 100805085
 * 
 * Date Completed: 11th February, 2022
 */

/** 
 * Main function 
 */
(function()
{
    /**
    * Change the Products link in the Navbar to Projects
    */
    //get an entry point(s) reference 
    let Links = document.getElementsByClassName("nav-link");
    // Add / Insert the new element
    Links[1].innerHTML = "<i class ='fa-solid fa-table-cells-large'> </i> Projects";

    /**
    * Add another link to Navbar between About Us link and Contact Us link.
    */ 
    // create an element(s) to insert
    let HRList = document.createElement("li");
    let HRLink = document.createElement("a");
    let HRIcon = document.createElement("i");

    // configure the new element
    HRLink.setAttribute("class", "nav-link");
    HRIcon.setAttribute("class", "fa-solid fa-address-card");
    let HRNode = document.createTextNode(" Human Resources");
    HRLink.setAttribute("href", "#");

    // Add / Insert the new element
    HRLink.appendChild(HRIcon);
    HRLink.appendChild(HRNode);
    HRList.appendChild(HRLink)
    //get an entry point(s) reference
    let list = document.getElementById("myList");
    list.insertBefore(HRList, list.childNodes[8]);

    /**
    * Function to display the content in home page.
    */
    function DisplayHomePage()
    {
        console.log("Home Page");

        //get an entry point(s) reference 
        let MainContent = document.getElementsByTagName("main")[0];
    
        // create an element(s) to insert
        let MainHeading1 = document.createElement("h1");
        let MainHeading2 = document.createElement("h3");
        let MainHeading3 = document.createElement("h3");

        // configure the new element
        MainHeading1.setAttribute("id", "HPHeading");
        MainHeading1.textContent = "Welcome";

        MainHeading2.setAttribute("id", "HPHeading1");
        MainHeading2.setAttribute("class", "mt-5");
        MainHeading2.textContent = ("WEBD 6201");

        MainHeading3.setAttribute("id", "HPHeading2");
        MainHeading3.setAttribute("class", "mt-5");
        MainHeading3.textContent = ("Lab 01");

        // Add / Insert the new element
        MainContent.appendChild(MainHeading1);
        MainContent.appendChild(MainHeading2);
        MainContent.appendChild(MainHeading3);
    }

    /**
    * Function to display the content in products page. The projects we did will be displayed in this page.
    */
    function DisplayProductsPage()
    {
        console.log("Products Page");
        //get an entry point(s) reference 
        let MainContent = document.getElementsByTagName("main")[0];

        // create an element(s) to insert
        let MainHeading1 = document.createElement("h1");
        let MainHeading2 = document.createElement("h3");
        let MainHeading3 = document.createElement("h3");
        let MainHeading4 = document.createElement("h3");
        let MainParagraph1 = document.createElement("p");
        let MainParagraph2 = document.createElement("p");
        let MainParagraph3 = document.createElement("p");
        let MainImage1 = document.createElement("img");
        let MainImage2 = document.createElement("img");
        let MainImage3 = document.createElement("img");

        // configure the new element
        MainHeading1.setAttribute("id", "PPHeading1");
        MainHeading1.setAttribute("class", "mt-3");
        MainHeading1.textContent = "Our Products";
        MainHeading2.setAttribute("id", "PPHeading2");
        MainHeading2.setAttribute("class", "mt-3");
        MainHeading2.textContent = "Book Store website";
        MainHeading3.setAttribute("id", "PPHeading2");
        MainHeading3.textContent = "Company website";
        MainHeading4.setAttribute("id", "PPHeading2");
        MainHeading4.textContent = "Animal care website";

        MainParagraph1.setAttribute("id", "PPPara1");
        MainParagraph1.textContent = ("A website for a college book store. This website display the products with the image, name, description, available options and price of the products.");
        MainParagraph2.setAttribute("id", "PPPara1");
        MainParagraph2.textContent = ("A website for a company which allows users and agents of the company to sign in and register clients and their class.");
        MainParagraph3.setAttribute("id", "PPPara1");
        MainParagraph3.textContent = ("This website is based on an animal care company. It allows the users to register as a new patient by including details about the pet and owner. Finally show the registered patients at the bottom of the web page.");

        MainImage1.setAttribute("src", "images/bgImg6.jpg");
        MainImage1.setAttribute("id", "PPImage1");
        MainImage2.setAttribute("src", "images/bgImg4.jpg");
        MainImage2.setAttribute("id", "PPImage1");
        MainImage3.setAttribute("src", "images/bgImg5.jpg");
        MainImage3.setAttribute("id", "PPImage1");

        // Add / Insert the new element
        MainContent.appendChild(MainHeading1);
        MainContent.appendChild(MainHeading2);
        MainContent.appendChild(MainParagraph1);
        MainContent.appendChild(MainImage1);
        MainContent.appendChild(MainHeading3);
        MainContent.appendChild(MainParagraph2);
        MainContent.appendChild(MainImage2);
        MainContent.appendChild(MainHeading4);
        MainContent.appendChild(MainParagraph3);
        MainContent.appendChild(MainImage3);
    }

    /**
    * The DisplayServicesPage() function loads the Services pages which consists of text and Images.
    * It gives description about what different types of services we are providing.
    */
    function DisplayServicesPage()
    {
        // Step1: Get an entry point
        console.log("Services Page");
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
    
        // Step2: Create elemnts for Heading, Paragraph and Image
        let MainHeading1 = document.createElement("h1");
        let MainHeading2 = document.createElement("h3");
        let MainHeading3 = document.createElement("h3");
        let MainHeading4 = document.createElement("h3");
        let MainParagraph1 = document.createElement("p");
        let MainParagraph2 = document.createElement("p");
        let MainParagraph3 = document.createElement("p");
        let MainImage1 = document.createElement("img");
        let MainImage2 = document.createElement("img");
        let MainImage3 = document.createElement("img");
        
        // Step3: Configure elements for heading
        MainHeading1.setAttribute("id", "MainHeading1"); 
        MainHeading1.setAttribute("class", "mt-3");
        MainHeading1.textContent = "Our Services";
        MainHeading2.setAttribute("id", "MainHeading2");
        MainHeading2.setAttribute("class", "mt-4");
        MainHeading2.textContent = "Web & Front-end Development";
        MainHeading3.setAttribute("id", "MainHeading3");
        MainHeading3.setAttribute("class", "mt-5");
        MainHeading3.textContent = ".Net Development";
        MainHeading4.setAttribute("id", "MainHeading4");
        MainHeading4.setAttribute("class", "mt-5");
        MainHeading4.textContent = "Database";

        // Step4: Configure elements for Paragraph
        MainParagraph1.setAttribute("id", "MainParagraph1");
        MainParagraph1.textContent = ("To create a website which is creative as well as attractive or to upgrade already existing website, ");
        MainParagraph1.textContent += ("we are providing the service which makes it possible by using different tools.");
        MainParagraph2.setAttribute("id", "MainParagraph2");
        MainParagraph2.textContent = (".Net Development is a open-source framework, used to develop form based as well as web-based applications.");
        MainParagraph3.setAttribute("id", "MainParagraph3");
        MainParagraph3.textContent = ("Database Development helps to assign data in a good way and organized.");

        // Step5: Configure elements for Image
        MainImage1.setAttribute("src", "./Images/webImg.jpg");
        MainImage1.setAttribute("id", "MainImage1");
        MainImage2.setAttribute("src", "./Images/net.jpg");
        MainImage2.setAttribute("id", "MainImage2");
        MainImage3.setAttribute("src", "./Images/database2.jpg");
        MainImage3.setAttribute("id", "MainImage3"); 

        // Step6: Insert all the elements to MainContent using appendChild
        MainContent.appendChild(MainHeading1); 
        MainContent.appendChild(MainHeading2);
        MainContent.appendChild(MainParagraph1);
        MainContent.appendChild(MainImage1);
        MainContent.appendChild(MainHeading3);
        MainContent.appendChild(MainParagraph2);
        MainContent.appendChild(MainImage2);
        MainContent.appendChild(MainHeading4);
        MainContent.appendChild(MainParagraph3);
        MainContent.appendChild(MainImage3); 
    }

    /**
    * This DisplayAboutPage() function loads the About Us page.
    * It gives information about the us, which includes our name, qualification, image and resume link.
    */
    function DisplayAboutPage()
    {
        // Step1: Get an entry point
        console.log("About Page");
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;

        // Step2: Create elemnts for Heading, Paragraph and Image
        let MainHeading5 = document.createElement("h1");
        let MainHeading6 = document.createElement("h3");
        let MainHeading7 = document.createElement("h3");
        let MainParagraph4 = document.createElement("p");
        let MainParagraph5 = document.createElement("p");
        let MainImage4 = document.createElement("img");
        let MainImage5 = document.createElement("img");
        let MainLink1 = document.createElement("a");
        let MainLink2 = document.createElement("a");

        // Step3: Configure elements for heading
        MainHeading5.setAttribute("id", "MainHeading1"); 
        MainHeading5.setAttribute("class", "mt-3");
        MainHeading5.textContent = "About Us";
        MainHeading6.setAttribute("id", "MainHeading2");
        MainHeading6.setAttribute("class", "mt-4");
        MainHeading6.textContent = "Sonadi Kannangara";
        MainHeading7.setAttribute("id", "MainHeading3");
        MainHeading7.setAttribute("class", "mt-5");
        MainHeading7.textContent = "Devanshi Patel";

        // Step4: Configure elements for Paragraph
        MainParagraph4.setAttribute("id", "MainParagraph1");
        MainParagraph4.textContent = ("2nd Year Student");
        MainParagraph4.textContent += ("  Computer Programming and Analysis");
        MainParagraph5.setAttribute("id", "MainParagraph2");
        MainParagraph5.textContent = ("2nd Year Student");
        MainParagraph5.textContent += ("  Computer Programming and Analysis");

        // Step5: Configure elements for Image
        MainImage4.setAttribute("src", "./Images/sonadi.jpeg");
        MainImage4.setAttribute("id", "MainImage4");
        MainImage5.setAttribute("src", "./Images/devanshi.jpeg");
        MainImage5.setAttribute("id", "MainImage5");

        // Step6: Configure elements for Link
        MainLink1.setAttribute("href", "./Resume/SonadiResume.docx");
        MainLink1.setAttribute("id", "MainLink1");
        MainLink1.textContent = ("Sonadi's Resume");
        MainLink2.setAttribute("href", "./Resume/SonadiResume.docx");
        MainLink2.setAttribute("id", "MainLink2");
        MainLink2.textContent = ("Devanshi's Resume");

        // Step6: Insert all the elements to MainContent using appendChild
        MainContent.appendChild(MainHeading5); 
        MainContent.appendChild(MainHeading7);
        MainContent.appendChild(MainLink2);
        MainContent.appendChild(MainParagraph5);
        MainContent.appendChild(MainImage5);
        MainContent.appendChild(MainHeading6);
        MainContent.appendChild(MainLink1);
        MainContent.appendChild(MainParagraph4);
        MainContent.appendChild(MainImage4);
    }

    /**
     * The DisplayContactPage() function is used to get all the contact information from the customer.
    */
    function DisplayContactPage()
    {
        console.log("Contact Page");

        // Create element 
        let submit = document.getElementById("submitButton");
        submit.addEventListener("click", function(){
            var fullNameInput = document.getElementById("fullName").value;
            var contactInput = document.getElementById("contactNumber").value;
            var emailInput = document.getElementById("emailAddress").value;
            console.log("Full Name: " + fullNameInput);
            console.log("Contact Number: " + contactInput);
            console.log("Email Address: " + emailInput);
        });
    }
    
    // named function option
    function Start()
    {
        console.log("App Started!");

        // Using the title of the document call the above created functions
        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;  
        }        
    }

    window.addEventListener("load", Start);

})();