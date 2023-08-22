document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        let liked = false;
        const likeCount = button.nextElementSibling;

        button.addEventListener('click', () => {
            if (liked) 
            {
                likeCount.textContent = parseInt(likeCount.textContent) - 1;
            } 
            else 
            {
                likeCount.textContent = parseInt(likeCount.textContent) + 1;
            }
            liked = !liked;
            button.classList.toggle('active', liked);
        });
    });
});
