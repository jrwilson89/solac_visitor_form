const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    supabase = supabase.createClient(
        "https://xfxmqrvghvdqjtzxyvqa.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeG1xcnZnaHZkcWp0enh5dnFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NTMzMDgsImV4cCI6MjA2NDAyOTMwOH0.cHZiSlljOSxf6DNTBQGs6cQd1UXROUTQLZvcn8kMdyg"
    );



    const submission = {};
    for (let element of form.elements) {
        if (element.name) {
            submission[element.name] = element.value;
            element.value = "";
        }
    }

    const { error, data } = await supabase
        .from("solac_visitor")
        .insert(submission);
    if (error) {
        alert("Please fill out required fields.");
    }
        else {
            alert("Thank you for visiting us!  May God continue to bless you!");
        }

});