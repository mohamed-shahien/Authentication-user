
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
});
const loignBtn = document.getElementById('loignBtn');
loignBtn.onclick = () => {
        const model = document.getElementById('model');
        model.classList.toggle('hidden_model')
}
// start =============


axios.get("https://tarmeezacademy.com/api/v1/posts")
        .then((response) => {
                const posts = response.data.data
                document.getElementById('posts').innerHTML = ""
                for (post of posts) {
                        console.log(post);
                        let author = post.author ;
                        let titlePost = ""
                        if(post.title != null){
                                titlePost = post.tilte ;
                        }
                        let content = `
                                        <div id="post" class= "bg-white py-2 rounded-lg max-w-4xl mx-auto  flex flex-col items-center mt-16 shadow-xl">
                                <div class="flex items-center m-2 self-baseline">
                                        <img class="h-10 w-10 object-cover rounded"
                                                src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60"
                                                alt="image">
                                        <div class="pl-3 text-sm text-gray-600">
                                                <p class="truncate">${author.username}</p>
                                                <time>${author.updated_at}</time>
                                        </div>
                                </div>
                                <div id="img-div" class="mt-2 w-full">
                                        <img id="image" class="w-full h-auto object-cover " src="${post.image}">
                                </div>
                                <div
                                        class="w-full h-full p-6 pt-2 pb-10  bg-white rounded-lg rounded-t-none  flex-shrink-0">
                                        <h2 id="title" class="text-3xl font-medium text-blue-600 my-6">${titlePost}</h2>
                                        <p id="tribute-info">${post.body}</p>
                                </div>
                                <span class="self-baseline">coments ${post.comments_count}</span>
                        </div>
                        `
                        document.getElementById('posts').innerHTML += content
                }
        });