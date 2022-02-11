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