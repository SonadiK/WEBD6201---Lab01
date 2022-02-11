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
     * Function to display the content in products page.
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