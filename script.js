// This is the script Udemy HW before Test 1
myFirstApp('Сергій', 39);

function myFirstApp(name, age) {
    console.log(`Привіт! Мене звуть ${name} і мені ${age} років!`);

    function showSkills() {
        let skills = ['HTML', 'CSS', 'JS'];
        // Я володію: HTML ы т.д.
        // console.log(`I have ${n} skills`);
        for (let i = 0; i < skills.length; i++) {
            console.log(`Я володію: ${skills[i]}`);
        }
    }
    showSkills();

    function checkAge() {
        // Age > 18
        // В тебе все вийде =)
        message = '';
        if (age >= 18) {
            console.log('В тебе все вийде, "старий" =)');
        }
        else
            console.log('В тебе все вийде =) адже ти дуже молодий');
    }
    checkAge();   

    // Возведение возраста в квадрат
    function calcPow() {
       return age * age;
    }
    console.log(calcPow());

}




