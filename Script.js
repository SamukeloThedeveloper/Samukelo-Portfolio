
  fetch('skills.json')
    .then(response => response.json())
    .then(data => {
      const skillsSection = document.querySelector('.skills-grid');
      data.skills.forEach(category => {
        // Create category container
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('skill-category');
        
        // Add category title
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        // Add skill items
        category.items.forEach(skill => {
          const skillItem = document.createElement('div');
          skillItem.classList.add('skill-item');
          
          skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
            <div class="progress-bar">
              <div class="progress" style="width: ${skill.progress}%;"></div>
            </div>
            <span class="progress-value">${skill.progress}%</span>
          `;
          
          categoryDiv.appendChild(skillItem);
        });

        skillsSection.appendChild(categoryDiv);
      });
    })
    .catch(error => console.error('Error loading skills:', error));


// Fetch the projects data from the JSON file
fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
        const projectsContainer = document.querySelector('.projects-container');

        projects.forEach(project => {
            // Create project card container
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.id = project.id;

            // Add project thumbnail
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('project-thumbnail');
            projectCard.appendChild(thumbnail);

            // Add project info
            const projectInfo = document.createElement('div');
            projectInfo.classList.add('project-info');

            // Add project title
            const title = document.createElement('h3');
            title.textContent = project.title;
            projectInfo.appendChild(title);

            // Add project description
            const description = document.createElement('p');
            description.classList.add('project-description');
            description.textContent = project.description;

            // Add project details if any
            if (project.details.length > 0) {
                const detailsList = document.createElement('ul');
                project.details.forEach(detail => {
                    const listItem = document.createElement('li');
                    listItem.textContent = detail;
                    detailsList.appendChild(listItem);
                });
                description.appendChild(detailsList);
            }
            projectInfo.appendChild(description);

            // Add project tech stack
            const techStack = document.createElement('p');
            techStack.textContent = `Tech Stack: ${project.techStack}`;
            projectInfo.appendChild(techStack);

            // Add view project button
            const viewButton = document.createElement('button');
            viewButton.classList.add('view-project-btn');
            viewButton.textContent = 'View Project';
            projectInfo.appendChild(viewButton);

            projectCard.appendChild(projectInfo);
            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.error('Error fetching projects:', error));


// Fetch the work experience data from the JSON file
fetch('work_experience.json')
    .then(response => response.json())
    .then(workExperience => {
        const timeline = document.querySelector('.timeline');

        workExperience.forEach(job => {
            // Create timeline item container
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');

            // Add timeline content container
            const timelineContent = document.createElement('div');
            timelineContent.classList.add('timeline-content');

            // Add job role
            const role = document.createElement('h3');
            role.textContent = job.role;
            timelineContent.appendChild(role);

            // Add job date
            const date = document.createElement('p');
            date.classList.add('timeline-date');
            date.textContent = job.date;
            timelineContent.appendChild(date);

            // Add job description list
            if (job.description && job.description.length > 0) {
                const descriptionList = document.createElement('ul');
                job.description.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item;
                    descriptionList.appendChild(listItem);
                });
                timelineContent.appendChild(descriptionList);
            }

            // Add technologies used
            const technologies = document.createElement('p');
            technologies.innerHTML = `<strong>Technologies Used:</strong> ${job.technologies}`;
            timelineContent.appendChild(technologies);

            timelineItem.appendChild(timelineContent);
            timeline.appendChild(timelineItem);
        });
    })
    .catch(error => console.error('Error fetching work experience:', error));


