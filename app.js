const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const storage = supabase.createClient(
        "https://imytquncrtggtmcezwrm.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteXRxdW5jcnRnZ3RtY2V6d3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNDg0MTIsImV4cCI6MjA2NDcyNDQxMn0.rBzBpU-_ad6LbKrddl9EuonDHk8lrS45eQhQzHfkFgg"
        );



    const submission = {};

    for (let element of form.elements) {
        if (element.name) {
            if (element.type === "checkbox") {
                if (element.checked) {
                    submission[element.name] = element.value;
                    element.checked = false
                }
            } else {
                submission[element.name] = element.value;
            }
            element.value = "";
        }
    }

    const { error, data } = await storage
        .from("solac_visitor")
        .insert(submission);
    if (error) {
       console.error(error);
    }
    //     else {
    //         alert("Thank you for visiting us!  May God continue to bless you!");
    //     }

});