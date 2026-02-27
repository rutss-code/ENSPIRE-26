 const studentType = document.getElementById("studentType");
        const dmceFields = document.getElementById("dmceFields");
        const otherFields = document.getElementById("otherFields");

        studentType.addEventListener("change", function () {
            dmceFields.classList.add("hidden");
            otherFields.classList.add("hidden");

            if (this.value === "dmce") {
                dmceFields.classList.remove("hidden");
            } else if (this.value === "other") {
                otherFields.classList.remove("hidden");
            }
        });

        function login() {
            if (studentType.value === "dmce") {
                const id = document.getElementById("studentId").value;
                const pass = document.getElementById("dmcePassword").value;

                if (!id || !pass) {
                    alert("Please enter Student ID and Password");
                    return;
                }

                alert("DMCE Login Successful");
            } 
            else if (studentType.value === "other") {
                const email = document.getElementById("email").value;
                const pass = document.getElementById("otherPassword").value;

                if (!email || !pass) {
                    alert("Please enter Email and Password");
                    return;
                }

                alert("Other User Login Successful");
            } 
            else {
                alert("Please select an option");
            }
        }