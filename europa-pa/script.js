document.addEventListener('DOMContentLoaded', () => {
    const countries = [ // Matrix of properties (correct answers) for all 49 countries
        {
            name:"Albania", capital:"Tirana", flag:"&#127462;&#127473;",
            landlocked:false, EU:false, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Andorra", capital:"Andorra de la Villa", flag:"&#127462;&#127465;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:true, eurovision:false, blue: true
        },
        {
            name:"Armenia", capital:"Yerevan", flag:"&#127462;&#127474;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:false, blue: true
        },
        {
            name:"Austria", capital:"Vienna", flag:"&#127462;&#127481;",
            landlocked:true, EU:true, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:false, eurovision:true, blue: false
        },
        {
            name:"Azerbaijan", capital:"Baku", flag:"&#127462;&#127487;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:true, blue: true
        },
        {
            name:"Belarus", capital:"Minsk", flag:"&#127463;&#127486;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Belgium", capital:"Brussels", flag:"&#127463;&#127466;",
            landlocked:false, EU:true, Medit:false, Baltic:false, NorthSea:true, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:true, eurovision:true, blue: false
        },
        {
            name:"Bosnia and Herzegovina", capital:"Sarajevo", flag:"&#127463;&#127462;",
            landlocked:false, EU:false, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:true, 
            Rus:false, olympic:true, monarchy:false, eurovision:false, blue: true
        },
        {
            name:"Bulgaria", capital:"Sofia", flag:"&#127463;&#127468;",
            landlocked:false, EU:true, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Croatia", capital:"Zagreb", flag:"&#127469;&#127479;",
            landlocked:false, EU:true, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:true, 
            Rus:false, olympic:false, monarchy:false, eurovision:true, blue: true
        },
        {
            name:"Cyprus", capital:"Nicosia", flag:"&#127464;&#127486;",
            landlocked:false, EU:true, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Czech Republic (Czechia)", capital:"Prague", flag:"&#127464;&#127487;",
            landlocked:true, EU:true, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: true
        },
        {
            name:"Denmark", capital:"Copenhagen", flag:"&#127465;&#127472;",
            landlocked:false, EU:true, Medit:false, Baltic:true, NorthSea:true, Nordic:true, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:true, eurovision:true, blue: false
        },
        {
            name:"Estonia", capital:"Tallinn", flag:"&#127466;&#127466;",
            landlocked:false, EU:true, Medit:false, Baltic:true, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:true, blue: true
        },
        {
            name:"Finland", capital:"Helsinki", flag:"&#127467;&#127470;",
            landlocked:false, EU:true, Medit:false, Baltic:true, NorthSea:false, Nordic:true, after90:false, Yug:false, 
            Rus:true, olympic:true, monarchy:false, eurovision:true, blue: true
        },
        {
            name:"France", capital:"Paris", flag:"&#127464;&#127477;",
            landlocked:false, EU:true, Medit:true, Baltic:false, NorthSea:true, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:false, eurovision:true, blue: true
        },
        {
            name:"Georgia", capital:"Tbilisi", flag:"&#127468;&#127466;",
            landlocked:false, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Germany", capital:"Berlin", flag:"&#127465;&#127466;",
            landlocked:false, EU:true, Medit:false, Baltic:true, NorthSea:true, Nordic:false, after90:true, Yug:false, 
            Rus:false, olympic:true, monarchy:false, eurovision:true, blue: false
        },
        {
            name:"Greece", capital:"Athens", flag:"&#127468;&#127479;",
            landlocked:false, EU:true, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:false, eurovision:true, blue: true
        },
        {
            name:"Hungary", capital:"Budapest", flag:"&#127469;&#127482;",
            landlocked:true, EU:true, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Iceland", capital:"Rejkjavik", flag:"&#127470;&#127480;",
            landlocked:false, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:true, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: true
        },
        {
            name:"Ireland", capital:"Dublin", flag:"&#127470;&#127466;",
            landlocked:false, EU:true, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:true, blue: false
        },
        {
            name:"Italy", capital:"Rome", flag:"&#127470;&#127481;",
            landlocked:false, EU:true, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:false, eurovision:true, blue: false
        },
        {
            name:"Latvia", capital:"Riga", flag:"&#127473;&#127483;",
            landlocked:false, EU:true, Medit:false, Baltic:true, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:true, blue: false
        },
        {
            name:"Liechtenstein", capital:"Vaduz", flag:"&#127473;&#127470;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:true, eurovision:false, blue: true
        },
        {
            name:"Lithuania", capital:"Vilnius", flag:"&#127473;&#127481;",
            landlocked:false, EU:true, Medit:false, Baltic:true, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Luxemburg", capital:"Luxemburg", flag:"&#127473;&#127482;",
            landlocked:true, EU:true, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:true, eurovision:true, blue: true
        },
        {
            name:"Malta", capital:"Valetta", flag:"&#127474;&#127481;",
            landlocked:false, EU:true, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Moldova", capital:"Chisinau", flag:"&#127474;&#127465;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:false, blue: true
        },
        {
            name:"Monaco", capital:"Monaco", flag:"&#127474;&#127464;",
            landlocked:false, EU:false, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:true, eurovision:true, blue: false
        },
        {
            name:"Montenegro", capital:"Podhorica", flag:"&#127474;&#127466;",
            landlocked:false, EU:false, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:true, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: true
        },
        {
            name:"Netherlands", capital:"Amsterdam", flag:"&#127475;&#127473;",
            landlocked:false, EU:true, Medit:false, Baltic:false, NorthSea:true, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:true, eurovision:true, blue: true
        },
        {
            name:"North Macedonia", capital:"Skopje", flag:"&#127474;&#127472;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:true, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Norway", capital:"Oslo", flag:"&#127475;&#127476;",
            landlocked:false, EU:false, Medit:false, Baltic:false, NorthSea:true, Nordic:true, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:true, eurovision:true, blue: true
        },
          {
            name:"Poland", capital:"Warsaw", flag:"&#127477;&#127473;",
            landlocked:false, EU:true, Medit:false, Baltic:true, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:false, blue: false
        },
        {
            name:"Portugal", capital:"Lisbon", flag:"&#127477;&#127481;",
            landlocked:false, EU:true, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:true, blue: false
        },
        {
            name:"Romania", capital:"Bucharest", flag:"&#127479;&#127476;",
            landlocked:false, EU:true, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: true
        },
        {
            name:"Russia", capital:"Moscow", flag:"&#127479;&#127482;",
            landlocked:false, EU:false, Medit:false, Baltic:true, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:true, monarchy:false, eurovision:true, blue: true
        },
          {
            name:"San Marino", capital:"San Marino", flag:"&#127480;&#127474;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: true
        },
        {
            name:"Serbia", capital:"Belgrade", flag:"&#127479;&#127480;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:true, 
            Rus:false, olympic:false, monarchy:false, eurovision:true, blue: true
        },
        {
            name:"Slovakia", capital:"Bratislava", flag:"&#127480;&#127472;",
            landlocked:true, EU:true, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: true
        },
        {
            name:"Slovenia", capital:"Lubljana", flag:"&#127480;&#127470;",
            landlocked:false, EU:true, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:true, 
            Rus:false, olympic:false, monarchy:false, eurovision:false, blue: true
        },
          {
            name:"Spain", capital:"Madrid", flag:"&#127466;&#127462;",
            landlocked:false, EU:true, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:true, eurovision:true, blue: false
        },
        {
            name:"Sweden", capital:"Stockholm", flag:"&#127480;&#127466;",
            landlocked:false, EU:true, Medit:false, Baltic:true, NorthSea:false, Nordic:true, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:true, eurovision:true, blue: true
        },
        {
            name:"Switzerland", capital:"Bern", flag:"&#127464;&#127469;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:true, blue: false
        },
        {
            name:"Turkey", capital:"Ankara", flag:"&#127481;&#127479;",
            landlocked:false, EU:false, Medit:true, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:false, eurovision:true, blue: false
        },
          {
            name:"Ukraine", capital:"Kiev", flag:"&#127482;&#127462;",
            landlocked:false, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:true, Yug:false, 
            Rus:true, olympic:false, monarchy:false, eurovision:true, blue: true
        },
        {
            name:"United Kingdom", capital:"London", flag:"&#127468;&#127463;",
            landlocked:false, EU:false, Medit:false, Baltic:false, NorthSea:true, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:true, monarchy:true, eurovision:true, blue: true
        },
        {
            name:"Vatican City", capital:"Vatican City", flag:"&#127483;&#127462;",
            landlocked:true, EU:false, Medit:false, Baltic:false, NorthSea:false, Nordic:false, after90:false, Yug:false, 
            Rus:false, olympic:false, monarchy:true, eurovision:false, blue: false
        }
    ];

    const questions = [
        'Is it a landlocked country?',               // 0
        'Is it a member of European Union?',         // 1
        'Does it have an access to Mediterranian sea?', // 2
        'Does it have an access to Baltic sea?',        // 3
        'Does it have an access to North sea?',         // 4
        'Is it a Nordic country?',                   // 5
        'Was it formed within its current borders after Jan 1, 1990?', // 6
        'Was it part of former Yugoslavia?',                         // 7
        'Was it part of USSR or Russian empire?',                    // 8
        'Was Olympic games ever took place on its territory?',       // 9
        'Is it a monarchy now?',                                     // 10   
        'Was Eurovision Song Contest ever took place on its territory?',  // 11
        'Does it have a blue color on its national flag?',                          // 12 
        'Does its capital starts with a letter '  // 13
    ];

    const questionImage = document.getElementById('question-image'); 
    const questionText = document.getElementById('question-text');   
    const answersContainer = document.getElementById('answers-container');
    const submitBtn = document.getElementById('submit-btn');
    const startRestartBtn = document.getElementById('start-restart-btn');
    const yesRadio = document.getElementById('yesOption');
    const noRadio = document.getElementById('noOption');
    const emoji = document.getElementById('emoji');

    let questionIndex = 0; 
    let fitCountries = [];      // This array represents countries that fit user's answers 

    function startGuessing(){
        questionIndex = 0;
        fitCountries = countries; // In the begining it matches the original array of countries
        emoji.classList.add('hidden');  // Hidden in the process of guessing
        submitBtn.classList.remove('hidden');    // Shows up after we start guessing
        answersContainer.classList.remove('hidden');
        startRestartBtn.textContent = 'New start'; 
        startRestartBtn.classList.add('hidden');
        displayQuestion();
    };

    function displayQuestion()  // Shows questions one by one
    {
        submitBtn.disabled = true;
        questionText.innerHTML = `${questions[questionIndex]}`;
        questionImage.src = `images/${questionIndex}.png`;
        yesRadio.checked = false;
        noRadio.checked = false;
        if (questionIndex == 13)  // If we are on 14th question app asks about first letter in caopital's name
            {
            questionText.textContent = questions[questionIndex] + fitCountries[0].capital[0]+"?";
        }
    };

    function takeAnswer() // Filtering array of countries and changing of question index
    {
        let answer = false;
        if (yesRadio.checked){
            answer = true
        }
        if (noRadio.checked){
            answer = false
        };

        switch (questionIndex) {
    case 0: // Landlocked
        fitCountries = fitCountries.filter(country => country.landlocked === answer);
            questionIndex++;
        break; 
    case 1: // EU member
        fitCountries = fitCountries.filter(country => country.EU === answer);
            if (fitCountries[0].landlocked){
                questionIndex = 6 
            }
            else {
                questionIndex++
            }
        break;
    case 2: // Mediterranian
        fitCountries = fitCountries.filter(country => country.Medit === answer);
            if (answer){
                if (fitCountries[0].EU){
                questionIndex = 4
                }
                else {
                questionIndex = 6    
                }
            }
            else {
                questionIndex++
            }
        break;
    case 3: // Baltic
        fitCountries = fitCountries.filter(country => country.Baltic === answer);
                questionIndex++
        break;
    case 4: // North sea
        fitCountries = fitCountries.filter(country => country.NorthSea === answer);
                if (fitCountries[0].Baltic || fitCountries[0].NorthSea){
                questionIndex++
            }
            else {
                questionIndex = 6
            }
        break;
    case 5: // Nordic
        fitCountries = fitCountries.filter(country => country.Nordic === answer);
                if (answer){
                questionIndex = 8
            }
            else {
                questionIndex = 11
            }
        break;
    case 6: // Country borders after 1990
        fitCountries = fitCountries.filter(country => country.after90 === answer);
                if (answer){
                questionIndex++
            }
            else {
                questionIndex = 9
            }
        break;
    case 7: // Former Yugoslavia
        fitCountries = fitCountries.filter(country => country.Yug === answer);
                if (answer){
                questionIndex = 9
            }
            else {
                questionIndex++
            }
        break;
    case 8: // Former part of Russia
        fitCountries = fitCountries.filter(country => country.Rus === answer);
                questionIndex = 11;
        break;
    case 9: // Olympic
        fitCountries = fitCountries.filter(country => country.olympic === answer);
                questionIndex++
        break;
    case 10: // Monarchy
        fitCountries = fitCountries.filter(country => country.monarchy === answer);
                questionIndex++
        break;
    case 11: // Eurovision
        fitCountries = fitCountries.filter(country => country.eurovision === answer);
                questionIndex++
        break;
    case 12: // Blue color
        fitCountries = fitCountries.filter(country => country.blue === answer);
                questionIndex++
    break;
    case 13: // Capital
        if (answer){
        fitCountries = fitCountries.filter(country => country.capital[0] === fitCountries[0].capital[0])  
        }
        else {
        fitCountries = fitCountries.filter(country => country.capital[0] != fitCountries[0].capital[0]) 
        }
        questionIndex++
    break;
}
    };

    function showAnswer() // when there's only 1 countrt fit all answers app shows its name and emoji
    {
        answersContainer.classList.add('hidden');
        questionImage.src = `images/end.png`;
        submitBtn.classList.add('hidden'); 
        startRestartBtn.classList.remove('hidden');
        questionText.innerHTML = `Got it! You were thinking about ${fitCountries[0].name} `;
        emoji.classList.remove('hidden');
        emoji.innerHTML = `${fitCountries[0].flag} ${fitCountries[0].flag} ${fitCountries[0].flag}`;
    };

    function noAnswer() // if there's no country that fits answers app says it to user
    {
        answersContainer.classList.add('hidden');
        submitBtn.classList.add('hidden'); 
        startRestartBtn.classList.remove('hidden');
        questionImage.src = `images/error.png`;
        questionText.textContent = `Maybe you chose a wrong answer. There is no such country in Europe. Try again.`;
    };

    startRestartBtn.addEventListener('click', startGuessing);

    submitBtn.addEventListener('click', () => {
        takeAnswer();
        if (fitCountries.length == 0) {
            noAnswer();
        }
        if (fitCountries.length == 1) {
            showAnswer();
        }
        if (fitCountries.length > 1) {
        displayQuestion();
        }
    });
    
    submitBtn.classList.add('hidden'); // Hidden in the begining

    yesRadio.addEventListener('change', () => {
        submitBtn.disabled = false;
    });

    noRadio.addEventListener('change', () => {
        submitBtn.disabled = false;
    });
});

