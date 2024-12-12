
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
