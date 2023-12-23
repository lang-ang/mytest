const changeContentButton1 = document.getElementById('changeContentButton1');
const changeContentButton2 = document.getElementById('changeContentButton2');
const changeContentButton3 = document.getElementById('changeContentButton3');
const changeContentButton4 = document.getElementById('changeContentButton4');
const targetElement1 = document.getElementById('targetElement1');

changeContentButton2.addEventListener('click', function () {
    // 添加淡出效果
    targetElement1.classList.remove('fade1');
    targetElement1.classList.remove('fade-in-up-top-bg');
    targetElement1.classList.add('fade-out-1');

    // 在淡出动画完成后执行文本更改
    setTimeout(function () {
        targetElement1.innerHTML = `
        <table class="styled-table fade-in-up">
    <thead>
        <tr>
            <th>school</th>
            <th>Graduation time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Nongke Road Primary School</td>
            <td>2016</td>
        </tr>
        <tr>
            <td>Zhengzhou No. 76 Middle School</td>
            <td>2019</td>
        </tr>
        <tr>
            <td>Zhengzhou No. 7 Middle School</td>
            <td>2022</td>
        </tr>
        <tr>
            <td>Zhejiang Normal University</td>
            <td>-</td>
        </tr>
    </tbody>
</table>
        `;

        // 移除淡出类，并添加淡入类
        targetElement1.classList.remove('fade-out-1');
        targetElement1.classList.add('fade1');
    }, 1000); // 500毫秒对应CSS中的过渡时间
});

changeContentButton1.addEventListener('click', function () {
    // 添加淡出效果
    targetElement1.classList.remove('fade1');
    targetElement1.classList.remove('fade-in-up-top-bg');
    targetElement1.classList.add('fade-out-1');

    // 在淡出动画完成后执行文本更改
    setTimeout(function () {
        targetElement1.innerHTML = `
        <div class="photo-container fade-in-up-2">
            <img src="hds.png" alt="p2">
            <div class="caption">My fresh picture</div>
        </div>
        <h3 class="fade-in-up">Skills:</h3>
        <p class="fade-in-up">I am good at programming and problem solving. Likes to analyze complex situations and figure out the best solutions. I have some experience in writing code and working with data, and I like to use technology to solve practical problems.</p>
        <h3 class="fade-in-up">Interests:</h3>
        <p class="fade-in-up">I am very interested in areas such as artificial intelligence, machine learning, and cybersecurity. In the computer science course, I especially enjoyed learning about algorithms and data structures, and I was also interested in software development and network architecture.</p>
        <h3 class="fade-in-up">Experience:</h3>
        <p class="fade-in-up">I am actively involved in computer science societies on campus and have participated in several programming competitions and projects. These experiences made me realize that I love the process of working as a team and working with others to solve technical problems.</p>
        <p class="fade-in-up">Overall, I hope to work in the future related to artificial intelligence, data analytics, or cybersecurity. I love the innovation and challenges of technology, but also value teamwork and solving real problems.</p>
        `;

        // 移除淡出类，并添加淡入类
        targetElement1.classList.remove('fade-out-1');
        targetElement1.classList.add('fade1');
    }, 1000); // 500毫秒对应CSS中的过渡时间
});

changeContentButton3.addEventListener('click', function () {
    // 添加淡出效果
    targetElement1.classList.remove('fade1');
    targetElement1.classList.remove('fade-in-up-top-bg');
    targetElement1.classList.add('fade-out-1');

    // 在淡出动画完成后执行文本更改
    setTimeout(function () {
        targetElement1.innerHTML = `
        <table class="fade-in-up">
            <section>
            <h1>Research Interests</h1>
            <h3>Main research interests:</h3>
            <p>Passionate about game development and virtual reality technology, and is researching and exploring related fields.</p>
            <h3>Research Project:</h3>
            <p>Participated in a group project to develop a virtual reality-based game.</p>
            <h3>Programming skills</h3>
            <h3>Programming Languages:</h3>
            <p>Master of C++ and C# for game development, knowledge of Python.</p>
            <h3>Game Development:</h3>
            <p>Experience in game development, using Unity and Unreal Engine, and participating in small game projects.</p>
            <h3>Computer Graphics:</h3>
            <p>Knowledge of OpenGL and DirectX, with some understanding of real-time rendering and graphics algorithms.</p>
            <h1>Technical projects</h1>
            <h3>Game Development Project:</h3>
            <p>Developed a role-playing game (RPG) and was responsible for the development and UI design of game interactions.</p>
            <h1>Internship experience</h1>
            <h3>Internship Company:</h3>
            <p>During the winter break, I interned at a game development company and participated in the development of a large-scale open-world game, accumulating a wealth of practical project experience.</p>
            <h1>Hobbies</h1>
            <h3>Game Collection:</h3>
            <p>is a game enthusiast who likes to collect and research all kinds of games, learn about game design and development history.</p>
        </section>
        </table>
        `;

        // 移除淡出类，并添加淡入类
        targetElement1.classList.remove('fade-out-1');
        targetElement1.classList.add('fade1');
    }, 1000); // 500毫秒对应CSS中的过渡时间
});

changeContentButton4.addEventListener('click', function () {
    // 添加淡出效果
    targetElement1.classList.remove('fade1');
    targetElement1.classList.remove('fade-in-up-top-bg');
    targetElement1.classList.add('fade-out-1');

    // 在淡出动画完成后执行文本更改
    setTimeout(function () {
        targetElement1.innerHTML = `
        <section class="video-section">
        <h2>My self-introduction</h2>
            <video controls>
                <source src="self-introduction.mp4" type="video/mp4">
                Your browser does not support the video tag.
        </video>
        </section>

        <section class="audio-section" style="background-image: url('HQE1.png'); mix-blend-mode: multiply; background-size: 250px 250px; background-position: right; background-repeat: no-repeat; opacity: 0.9;">
            <h2>My favorite music</h2>
            <h4> The Tone of Desire </h4>
            <audio controls style="width: calc(100% - 250px)">
                <source src="The Tone of Desire.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </section>
        `;

        // 移除淡出类，并添加淡入类
        targetElement1.classList.remove('fade-out-1');
        targetElement1.classList.add('fade1');
    }, 1000); // 500毫秒对应CSS中的过渡时间
});

document.addEventListener('DOMContentLoaded', function () {
    const disableLink = changeContentButton1;

    disableLink.addEventListener('click', function (evt) {
        // 阻止默认的跳转行为
        evt.preventDefault();


        //alert('点击事件已阻止，不会跳转到新页面！');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const disableLink = changeContentButton2;

    disableLink.addEventListener('click', function (evt) {
        // 阻止默认的跳转行为
        evt.preventDefault();


        //alert('点击事件已阻止，不会跳转到新页面！');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const disableLink = changeContentButton3;

    disableLink.addEventListener('click', function (evt) {
        // 阻止默认的跳转行为
        evt.preventDefault();


        //alert('点击事件已阻止，不会跳转到新页面！');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const disableLink = changeContentButton4;

    disableLink.addEventListener('click', function (evt) {
        // 阻止默认的跳转行为
        evt.preventDefault();


        //alert('点击事件已阻止，不会跳转到新页面！');
    });
});