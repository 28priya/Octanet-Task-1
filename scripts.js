document.addEventListener('DOMContentLoaded', function() {
    const programs = [
        { title: 'Computer Science', description: 'Learn about algorithms, data structures, and more.' },
        { title: 'Business Administration', description: 'Focus on management, marketing, and finance.' },
        { title: 'Mechanical Engineering', description: 'Explore the principles of mechanics, materials, and energy.' },
        { title: 'Psychology', description: 'Understand human behavior and mental processes.' },
        { title: 'Fine Arts', description: 'Develop your artistic skills and creativity.' }
    ];

    const programsContent = document.getElementById('programsContent');
    programs.forEach(program => {
        const programCard = document.createElement('div');
        programCard.classList.add('col-md-4', 'mb-3');
        programCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${program.title}</h5>
                    <p class="card-text">${program.description}</p>
                </div>
            </div>
        `;
        programsContent.appendChild(programCard);
    });

    document.getElementById('applicationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        if (name.length < 3) {
            document.getElementById('nameHelp').textContent = 'Name must be at least 3 characters long.';
            valid = false;
        } else {
            document.getElementById('nameHelp').textContent = '';
        }
        
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            document.getElementById('emailHelp').textContent = 'Please enter a valid email address.';
            valid = false;
        } else {
            document.getElementById('emailHelp').textContent = '';
        }
        
        if (valid) {
            alert('Form submitted successfully!');
            // Perform form submission (e.g., AJAX request)
        }
    });
});
