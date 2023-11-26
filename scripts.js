// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
    // Sample video data (replace with your actual data)
    const videoData = [
        { id: 1, title: 'Video 1', description: 'Description for Video 1', url: 'video1.mp4' },
        { id: 2, title: 'Video 2', description: 'Description for Video 2', url: 'video2.mp4' },
        { id: 3, title: 'Video 3', description: 'Description for Video 3', url: 'video3.mp4' },
        { id: 4, title: 'Video 4', description: 'Description for Video 4', url: 'video4.mp4' },
        { id: 5, title: 'Video 5', description: 'Description for Video 5', url: 'video5.mp4' },
        { id: 6, title: 'Video 6', description: 'Description for Video 6', url: 'video6.mp4' },
        { id: 7, title: 'Video 7', description: 'Description for Video 7', url: 'video7.mp4' },
        { id: 8, title: 'Video 8', description: 'Description for Video 8', url: 'video8.mp4' },
    ];

    // Function to display streaming content on the page
    function displayStreamingContent(content) {
        const videoContainer = document.getElementById('video-container');
        const videoDetails = document.getElementById('video-details');
        const videoTitle = document.getElementById('video-title');
        const videoDescription = document.getElementById('video-description');

        // Clear previous content
        videoContainer.innerHTML = '';
        videoDetails.style.display = 'none'; // Hide video details initially

        // Iterate through the content and create video elements
        content.forEach(video => {
            const videoWrapper = document.createElement('div');
            videoWrapper.classList.add('video-wrapper');

            const videoElement = document.createElement('video');
            videoElement.controls = true;

            const sourceElement = document.createElement('source');
            sourceElement.src = video.url;
            sourceElement.type = 'video/mp4';

            // Add click event to show video details
            videoElement.addEventListener('click', function () {
                showVideoDetails(video);
            });

            videoElement.appendChild(sourceElement);
            videoWrapper.appendChild(videoElement);
            videoContainer.appendChild(videoWrapper);
        });
    }

    // Function to show video details
    function showVideoDetails(video) {
        const videoTitle = document.getElementById('video-title');
        const videoDescription = document.getElementById('video-description');

        // Update video details
        videoTitle.textContent = `Title: ${video.title}`;
        videoDescription.textContent = `Description: ${video.description}`;

        // Show video details
        videoDetails.style.display = 'block';
    }

    // Call the displayStreamingContent function when the page is loaded
    displayStreamingContent(videoData);
});
