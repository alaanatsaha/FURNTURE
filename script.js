

       
        function showTabContent(index) {
            var contents = document.querySelectorAll('.tab-content');
            var tabs = document.querySelectorAll('.tab');

            for (var i = 0; i < contents.length; i++) {
                contents[i].classList.remove('active-content');
                tabs[i].classList.remove('active-tab');
            }

            contents[index].classList.add('active-content');
            tabs[index].classList.add('active-tab');
        }
   

        let currentIndex = 0;
        const stories = document.querySelectorAll('.story');
        
        function showStory(index) {
               
            stories.forEach((story, i) => {
                if (i === index) {
                    story.style.left = '0';
                } else {
                    story.style.left = '100%';
                }
            });
        }
        
         
        document.querySelector('.next').addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % stories.length;
            showStory(currentIndex);
        });
        
        
        document.querySelector('.prev').addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + stories.length) % stories.length;
            showStory(currentIndex);
        });
        
        showStory(currentIndex);
        
