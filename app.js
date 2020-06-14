const ans = ['A', 'C', 'C', 'C', 'A'];
const form = document.querySelector('.quiz-form');
const mark = document.querySelector('.mark');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    // check answer
    userAns.forEach((answer, index)=>{
        if(answer === ans[index]){
            score += 10
        }
});

console.log(score);

    //show marks
    scroll(0,0)

    mark.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
       mark.querySelector('span').textContent = `${output}`;
       if(output === score){
           clearInterval(timer);
       } else{
           output++;
       }
    }, 120);
    
});