document.addEventListener('DOMContentLoaded',()=>{
    
    const button = document.getElementById('calculate-btn');

    button.addEventListener('click',(e)=>{
        e.preventDefault();

        const height = parseInt(document.getElementById('height').value);
        const weight = parseInt(document.getElementById('weight').value);
        const result = document.getElementById('result');
        const message = document.getElementById('message');
        
        if(height === '' || height < 0 || isNaN(height)){
            result.innerHTML = `Invalid Height: ${height}`;
        }else if(weight === '' || weight < 0 || isNaN(weight)){
            result.innerHTML = `Invalid Weight: ${weight}`;
        }else{
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);

            result.classList.add('result');
            result.innerHTML = `<span>Result: ${bmi} </span>`

            message.classList.add('result');
            if(bmi < 18.6){
                message.innerHTML = `<span>Under Weight</span>`
            }else if(bmi >= 18.6 && bmi <=24.9){
                message.innerHTML = `<span>Normal Weight</span>`
            }else{
                message.innerHTML = `<span>Over Weight</span>`
            }
        } 
        
    });

})