


const user1 = document.querySelector('#dob1');
const user2 = document.querySelector('#dob2');

const submit = document.querySelector('#compare');
const diff = document.querySelector('#show-diff')

submit.addEventListener('click', showDiff);
function showDiff(e){
    e.preventDefault();
    const dob1 = new Date(user1.value);
    const dob2 = new Date(user2.value);
    const diffDate = Math.floor(dob2.getTime() - dob1.getTime());
    const day = 1000*60*60*24;
    const days = Math.floor(diffDate/day);
    const months = Math.floor(days/31);
    const years = Math.floor(months/12);
    const message = days + " days " +  " or " + months + " months" + " or " + years + " years";
    diff.innerHTML = message ;
}
