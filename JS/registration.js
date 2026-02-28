  const typeSelect = document.getElementById('collegeType');
    const internal = document.getElementById('internalSection');
    const external = document.getElementById('externalSection');

    // Toggle Sections
    typeSelect.addEventListener('change', function() {
        internal.classList.remove('show');
        external.classList.remove('show');
        const intInputs = internal.querySelectorAll('input, select');
        const extInputs = external.querySelectorAll('input, select');
        
        [...intInputs, ...extInputs].forEach(el => el.required = false);

        if (this.value === 'internal') {
            internal.classList.add('show');
            intInputs.forEach(el => el.required = true);
        } else if (this.value === 'external') {
            external.classList.add('show');
            extInputs.forEach(el => el.required = true);
        }
    });

    // Password Matching Logic
    document.getElementById('regForm').addEventListener('submit', (e) => {
        const pass = document.getElementById('mainPass').value;
        const confirm = document.getElementById('confirmPass').value;

        if (pass !== confirm) {
            e.preventDefault();
            alert("Passwords do not match!");
            return;
        }
        
        alert("Registration Data Captured Successfully!");
    });