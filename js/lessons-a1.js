window.LESSONS_A1 = [
  {
    id: 1,
    level: 'A1',
    title: 'Hello! Greetings',
    subtitle: 'To be (am / is / are)',
    theory: `<h3>Приветствия и прощания</h3>
<p>В английском языке есть несколько способов поздороваться и попрощаться в зависимости от времени суток и ситуации.</p>
<div class="rule-box">
  <p><strong>Формальные:</strong> Good morning (Доброе утро), Good afternoon (Добрый день), Good evening (Добрый вечер).</p>
  <p><strong>Неформальные:</strong> Hello (Здравствуйте/Привет), Hi (Привет).</p>
</div>
<h3>Глагол to be (быть, являться)</h3>
<p>В английском языке предложение не может существовать без глагола. Если в русском мы говорим <span class="highlight">«Я студент»</span>, то по-английски нужно сказать <span class="highlight">«Я есть студент»</span> (I am a student).</p>
<table class="grammar-table">
  <tr><th>Местоимение</th><th>Утверждение (+)</th><th>Отрицание (-)</th><th>Вопрос (?)</th></tr>
  <tr><td>I (Я)</td><td>am ('m)</td><td>am not ('m not)</td><td>Am I?</td></tr>
  <tr><td>He/She/It (Он/Она/Оно)</td><td>is ('s)</td><td>is not (isn't)</td><td>Is he/she/it?</td></tr>
  <tr><td>We/You/They (Мы/Вы/Они)</td><td>are ('re)</td><td>are not (aren't)</td><td>Are we/you/they?</td></tr>
</table>
<div class="rule-box">
  <p>В разговорной речи часто используются сокращения: <strong>I'm, he's, they're</strong>.</p>
</div>`,
    vocabulary: [
      { en: 'hello', ru: 'здравствуйте, привет', transcription: '[həˈləʊ]' },
      { en: 'goodbye', ru: 'до свидания', transcription: '[ɡʊdˈbaɪ]' },
      { en: 'good morning', ru: 'доброе утро', transcription: '[ɡʊd ˈmɔːnɪŋ]' },
      { en: 'good evening', ru: 'добрый вечер', transcription: '[ɡʊd ˈiːvnɪŋ]' },
      { en: 'good night', ru: 'спокойной ночи', transcription: '[ɡʊd naɪt]' },
      { en: 'please', ru: 'пожалуйста (просьба)', transcription: '[pliːz]' },
      { en: 'thank you', ru: 'спасибо', transcription: '[θæŋk juː]' },
      { en: 'sorry', ru: 'извините (сожаление)', transcription: '[ˈsɒri]' },
      { en: 'excuse me', ru: 'простите (привлечение внимания)', transcription: '[ɪkˈskjuːz miː]' },
      { en: 'yes', ru: 'да', transcription: '[jes]' },
      { en: 'no', ru: 'нет', transcription: '[nəʊ]' },
      { en: 'nice to meet you', ru: 'приятно познакомиться', transcription: '[naɪs tuː miːt juː]' }
    ],
    examples: [
      { en: 'Hello, I am Anna.', ru: 'Привет, я Анна.' },
      { en: 'Good morning, how are you?', ru: 'Доброе утро, как дела?' },
      { en: 'He is my friend.', ru: 'Он мой друг.' },
      { en: 'We are not from London.', ru: 'Мы не из Лондона.' },
      { en: 'Are you a student?', ru: 'Вы студент?' },
      { en: 'Nice to meet you too.', ru: 'Мне тоже приятно познакомиться.' }
    ],
    exercises: [
      { type: 'quiz', question: 'Какая форма глагола to be подходит: I ___ a doctor.', options: ['is', 'are', 'am', 'be'], answer: 2 },
      { type: 'quiz', question: 'Как сказать "Добрый вечер"?', options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'], answer: 2 },
      { type: 'fill', sentence: 'She ___ my sister.', answer: 'is' },
      { type: 'fill', sentence: '___ you happy?', answer: 'Are' },
      { type: 'match', pairs: [
        { left: 'Hello', right: 'Здравствуйте' },
        { left: 'Goodbye', right: 'До свидания' },
        { left: 'Thank you', right: 'Спасибо' },
        { left: 'Sorry', right: 'Извините' },
        { left: 'Please', right: 'Пожалуйста' }
      ] },
      { type: 'truefalse', statement: 'Глагол to be для местоимения "They" — это "is".', answer: false },
      { type: 'truefalse', statement: 'Сокращение от "I am not" — это "I\'m not".', answer: true },
      { type: 'wordorder', words: ['student.', 'am', 'I', 'a'], answer: 'I am a student.' }
    ]
  },
  {
    id: 2,
    level: 'A1',
    title: 'What\'s your name?',
    subtitle: 'Personal pronouns',
    theory: `<h3>Личные местоимения</h3>
<p>Личные местоимения заменяют существительные, чтобы избежать повторений. В английском языке они обязательны.</p>
<table class="grammar-table">
  <tr><th>Единственное число</th><th>Множественное число</th></tr>
  <tr><td>I — Я</td><td>We — Мы</td></tr>
  <tr><td>You — Ты/Вы</td><td>You — Вы (множественное)</td></tr>
  <tr><td>He — Он, She — Она, It — Оно/Это</td><td>They — Они</td></tr>
</table>
<div class="rule-box">
  <p><strong>Важно:</strong> Местоимение <span class="highlight">I</span> всегда пишется с большой буквы. <span class="highlight">It</span> используется для неодушевленных предметов и животных.</p>
</div>
<h3>Знакомство и страны</h3>
<p>Для того чтобы спросить имя, используется фраза <strong>What is your name?</strong> (Как вас зовут?). Для вопроса о происхождении — <strong>Where are you from?</strong> (Откуда вы?).</p>`,
    vocabulary: [
      { en: 'name', ru: 'имя', transcription: '[neɪm]' },
      { en: 'country', ru: 'страна', transcription: '[ˈkʌntri]' },
      { en: 'nationality', ru: 'национальность', transcription: '[ˌnæʃəˈnæləti]' },
      { en: 'Russia', ru: 'Россия', transcription: '[ˈrʌʃə]' },
      { en: 'Russian', ru: 'русский', transcription: '[ˈrʌʃn]' },
      { en: 'USA', ru: 'США', transcription: '[juː es ˈeɪ]' },
      { en: 'American', ru: 'американец', transcription: '[əˈmerɪkən]' },
      { en: 'UK', ru: 'Великобритания', transcription: '[juː ˈkeɪ]' },
      { en: 'British', ru: 'британец', transcription: '[ˈbrɪtɪʃ]' },
      { en: 'Spain', ru: 'Испания', transcription: '[speɪn]' },
      { en: 'Spanish', ru: 'испанец', transcription: '[ˈspænɪʃ]' },
      { en: 'China', ru: 'Китай', transcription: '[ˈtʃaɪnə]' }
    ],
    examples: [
      { en: 'What is your name?', ru: 'Как тебя зовут?' },
      { en: 'My name is John.', ru: 'Меня зовут Джон.' },
      { en: 'Where are you from?', ru: 'Откуда ты?' },
      { en: 'I am from Russia.', ru: 'Я из России.' },
      { en: 'Is she American?', ru: 'Она американка?' },
      { en: 'They are British.', ru: 'Они британцы.' }
    ],
    exercises: [
      { type: 'quiz', question: 'Какое местоимение используется для предмета (например, стола)?', options: ['He', 'She', 'It', 'They'], answer: 2 },
      { type: 'quiz', question: 'What is your ___? — I am from Spain.', options: ['name', 'country', 'nationality', 'city'], answer: 1 },
      { type: 'fill', sentence: '___ is your name?', answer: 'What' },
      { type: 'fill', sentence: 'I ___ from the USA.', answer: 'am' },
      { type: 'match', pairs: [
        { left: 'Russia', right: 'Russian' },
        { left: 'USA', right: 'American' },
        { left: 'UK', right: 'British' },
        { left: 'Spain', right: 'Spanish' },
        { left: 'China', right: 'Chinese' }
      ] },
      { type: 'truefalse', statement: 'Слово "I" (я) всегда пишется с большой буквы.', answer: true },
      { type: 'truefalse', statement: 'Местоимение "They" используется только для людей.', answer: false },
      { type: 'wordorder', words: ['from?', 'Where', 'you', 'are'], answer: 'Where are you from?' }
    ]
  },
  {
    id: 3,
    level: 'A1',
    title: 'Numbers & Age',
    subtitle: 'Numbers 1–100, How old...?',
    theory: `<h3>Числительные 1-100</h3>
<p>Числительные от 13 до 19 образуются с помощью суффикса <span class="highlight">-teen</span> (например, six + teen = sixteen). Десятки образуются с помощью суффикса <span class="highlight">-ty</span> (например, six + ty = sixty).</p>
<table class="grammar-table">
  <tr><th>Единицы</th><th>Десятки</th></tr>
  <tr><td>1 - one, 2 - two, 3 - three</td><td>10 - ten, 20 - twenty, 30 - thirty</td></tr>
  <tr><td>4 - four, 5 - five, 6 - six</td><td>40 - forty, 50 - fifty, 60 - sixty</td></tr>
  <tr><td>7 - seven, 8 - eight, 9 - nine</td><td>70 - seventy, 80 - eighty, 90 - ninety</td></tr>
</table>
<h3>Возраст (Age)</h3>
<div class="rule-box">
  <p>Чтобы спросить о возрасте, используется фраза <strong>How old are you?</strong> (Сколько тебе лет?).</p>
  <p>Для ответа используется глагол to be: <strong>I am 25 years old.</strong> (Мне 25 лет).</p>
</div>`,
    vocabulary: [
      { en: 'number', ru: 'число, номер', transcription: '[ˈnʌmbə]' },
      { en: 'age', ru: 'возраст', transcription: '[eɪdʒ]' },
      { en: 'how old', ru: 'сколько лет', transcription: '[haʊ əʊld]' },
      { en: 'years old', ru: 'лет (о возрасте)', transcription: '[jɪəz əʊld]' },
      { en: 'one', ru: 'один', transcription: '[wʌn]' },
      { en: 'two', ru: 'два', transcription: '[tuː]' },
      { en: 'three', ru: 'три', transcription: '[θriː]' },
      { en: 'eleven', ru: 'одиннадцать', transcription: '[ɪˈlevn]' },
      { en: 'twelve', ru: 'двенадцать', transcription: '[twelv]' },
      { en: 'twenty', ru: 'двадцать', transcription: '[ˈtwenti]' },
      { en: 'thirty', ru: 'тридцать', transcription: '[ˈθɜːti]' },
      { en: 'forty', ru: 'сорок', transcription: '[ˈfɔːti]' },
      { en: 'fifty', ru: 'пятьдесят', transcription: '[ˈfɪfti]' },
      { en: 'hundred', ru: 'сто', transcription: '[ˈhʌndrəd]' },
      { en: 'child', ru: 'ребенок', transcription: '[tʃaɪld]' }
    ],
    examples: [
      { en: 'How old are you?', ru: 'Сколько тебе лет?' },
      { en: 'I am twenty years old.', ru: 'Мне двадцать лет.' },
      { en: 'How old is he?', ru: 'Сколько ему лет?' },
      { en: 'He is thirty-five.', ru: 'Ему тридцать пять.' },
      { en: 'My phone number is five-five-six.', ru: 'Мой номер телефона 5-5-6.' },
      { en: 'She is a child.', ru: 'Она ребенок.' }
    ],
    exercises: [
      { type: 'quiz', question: 'Как правильно написать число 40?', options: ['fourty', 'forty', 'forthy', 'fourte'], answer: 1 },
      { type: 'quiz', question: 'Как спросить "Сколько ей лет?"', options: ['How old is she?', 'How many years she has?', 'What is her age?', 'How old she is?'], answer: 0 },
      { type: 'fill', sentence: 'I am twenty-five ___ old.', answer: 'years' },
      { type: 'fill', sentence: 'Ten plus twenty is ___.', answer: 'thirty' },
      { type: 'match', pairs: [
        { left: '12', right: 'twelve' },
        { left: '20', right: 'twenty' },
        { left: '15', right: 'fifteen' },
        { left: '50', right: 'fifty' },
        { left: '100', right: 'one hundred' }
      ] },
      { type: 'truefalse', statement: 'Число 13 по-английски будет thirtee.', answer: false },
      { type: 'truefalse', statement: 'Мы используем глагол "have" (иметь), чтобы сказать о своем возрасте.', answer: false },
      { type: 'wordorder', words: ['old', 'you?', 'are', 'How'], answer: 'How old are you?' }
    ]
  },
  {
    id: 4,
    level: 'A1',
    title: 'My Family',
    subtitle: 'Possessive adjectives',
    theory: `<h3>Притяжательные прилагательные</h3>
<p>Они отвечают на вопрос «Чей?» и показывают принадлежность. Они всегда стоят <strong>перед</strong> существительным.</p>
<table class="grammar-table">
  <tr><th>Личное (кто?)</th><th>Притяжательное (чей?)</th></tr>
  <tr><td>I (Я)</td><td>My (Мой)</td></tr>
  <tr><td>You (Ты/Вы)</td><td>Your (Твой/Ваш)</td></tr>
  <tr><td>He / She / It</td><td>His (Его) / Her (Ее) / Its (Его/Ее для неодуш.)</td></tr>
  <tr><td>We (Мы)</td><td>Our (Наш)</td></tr>
  <tr><td>They (Они)</td><td>Their (Их)</td></tr>
</table>
<div class="rule-box">
  <p>Пример: <strong>This is my mother. Her name is Mary.</strong> (Это моя мама. Ее зовут Мэри.)</p>
</div>`,
    vocabulary: [
      { en: 'mother', ru: 'мать', transcription: '[ˈmʌðə]' },
      { en: 'father', ru: 'отец', transcription: '[ˈfɑːðə]' },
      { en: 'sister', ru: 'сестра', transcription: '[ˈsɪstə]' },
      { en: 'brother', ru: 'брат', transcription: '[ˈbrʌðə]' },
      { en: 'son', ru: 'сын', transcription: '[sʌn]' },
      { en: 'daughter', ru: 'дочь', transcription: '[ˈdɔːtə]' },
      { en: 'grandmother', ru: 'бабушка', transcription: '[ˈɡrænmʌðə]' },
      { en: 'grandfather', ru: 'дедушка', transcription: '[ˈɡrænfɑːðə]' },
      { en: 'husband', ru: 'муж', transcription: '[ˈhʌzbənd]' },
      { en: 'wife', ru: 'жена', transcription: '[waɪf]' },
      { en: 'uncle', ru: 'дядя', transcription: '[ˈʌŋkl]' },
      { en: 'aunt', ru: 'тетя', transcription: '[ɑːnt]' },
      { en: 'cousin', ru: 'двоюродный брат/сестра', transcription: '[ˈkʌzn]' },
      { en: 'parents', ru: 'родители', transcription: '[ˈpeərənts]' }
    ],
    examples: [
      { en: 'This is my brother.', ru: 'Это мой брат.' },
      { en: 'What is her name?', ru: 'Как ее зовут?' },
      { en: 'His father is a doctor.', ru: 'Его отец врач.' },
      { en: 'Our parents are at home.', ru: 'Наши родители дома.' },
      { en: 'Their house is big.', ru: 'Их дом большой.' },
      { en: 'I have a sister. Her name is Kate.', ru: 'У меня есть сестра. Ее зовут Кейт.' }
    ],
    exercises: [
      { type: 'quiz', question: 'She is my sister. ___ name is Anna.', options: ['His', 'Her', 'My', 'Your'], answer: 1 },
      { type: 'quiz', question: 'Брат моего отца — это мой...', options: ['brother', 'grandfather', 'uncle', 'cousin'], answer: 2 },
      { type: 'fill', sentence: 'We live in London. ___ house is small.', answer: 'Our' },
      { type: 'fill', sentence: 'This is John and ___ wife, Mary.', answer: 'his' },
      { type: 'match', pairs: [
        { left: 'Mother and father', right: 'Parents' },
        { left: 'Brother and sister', right: 'Siblings' },
        { left: 'Mother of your mother', right: 'Grandmother' },
        { left: 'Son of your brother', right: 'Nephew' },
        { left: 'Brother of your father', right: 'Uncle' }
      ] },
      { type: 'truefalse', statement: 'Притяжательное прилагательное для "They" — это "Their".', answer: true },
      { type: 'truefalse', statement: 'Слово "cousin" означает только "двоюродный брат".', answer: false },
      { type: 'wordorder', words: ['is', 'name', 'My', 'Tom.'], answer: 'My name is Tom.' }
    ]
  },
  {
    id: 5,
    level: 'A1',
    title: 'Daily Routine',
    subtitle: 'Present Simple',
    theory: `<h3>Present Simple (Простое настоящее время)</h3>
<p>Используется для описания регулярных действий, привычек и фактов.</p>
<div class="rule-box">
  <p><strong>Утверждение:</strong> Для I/You/We/They используется начальная форма глагола (I work). Для He/She/It добавляется окончание <span class="highlight">-s / -es</span> (He works, She goes).</p>
  <p><strong>Отрицание:</strong> Образуется с помощью <strong>don't</strong> (do not) и <strong>doesn't</strong> (does not). Окончание -s у основного глагола исчезает! (He doesn't work).</p>
  <p><strong>Вопрос:</strong> В начало выносится <strong>Do</strong> или <strong>Does</strong> (Do you work? Does he work?).</p>
</div>
<h3>Наречия частоты</h3>
<p>Показывают, как часто происходит действие: always (всегда), usually (обычно), often (часто), sometimes (иногда), never (никогда). Они ставятся <strong>перед</strong> основным глаголом: I <em>always</em> wake up early.</p>`,
    vocabulary: [
      { en: 'wake up', ru: 'просыпаться', transcription: '[weɪk ʌp]' },
      { en: 'get up', ru: 'вставать (с постели)', transcription: '[ɡet ʌp]' },
      { en: 'have breakfast', ru: 'завтракать', transcription: '[həv ˈbrekfəst]' },
      { en: 'go to work', ru: 'идти на работу', transcription: '[ɡəʊ tə wɜːk]' },
      { en: 'have lunch', ru: 'обедать', transcription: '[həv lʌntʃ]' },
      { en: 'come home', ru: 'приходить домой', transcription: '[kʌm həʊm]' },
      { en: 'cook dinner', ru: 'готовить ужин', transcription: '[kʊk ˈdɪnə]' },
      { en: 'watch TV', ru: 'смотреть телевизор', transcription: '[wɒtʃ tiː ˈviː]' },
      { en: 'go to bed', ru: 'ложиться спать', transcription: '[ɡəʊ tə bed]' },
      { en: 'take a shower', ru: 'принимать душ', transcription: '[teɪk ə ˈʃaʊə]' },
      { en: 'brush teeth', ru: 'чистить зубы', transcription: '[brʌʃ tiːθ]' },
      { en: 'read a book', ru: 'читать книгу', transcription: '[riːd ə bʊk]' },
      { en: 'do homework', ru: 'делать домашнее задание', transcription: '[du ˈhəʊmwɜːk]' },
      { en: 'clean', ru: 'убирать', transcription: '[kliːn]' }
    ],
    examples: [
      { en: 'I wake up at 7 o\'clock.', ru: 'Я просыпаюсь в 7 часов.' },
      { en: 'She usually has breakfast.', ru: 'Она обычно завтракает.' },
      { en: 'He doesn\'t watch TV.', ru: 'Он не смотрит телевизор.' },
      { en: 'Do you go to work everyday?', ru: 'Ты ходишь на работу каждый день?' },
      { en: 'We sometimes cook dinner.', ru: 'Мы иногда готовим ужин.' },
      { en: 'Does she clean the room?', ru: 'Она убирает комнату?' }
    ],
    exercises: [
      { type: 'quiz', question: 'Какая форма глагола правильная: He ___ to work everyday.', options: ['go', 'goes', 'going', 'is go'], answer: 1 },
      { type: 'quiz', question: 'Как правильно составить отрицание: I ___ watch TV.', options: ['am not', 'doesn\'t', 'don\'t', 'not'], answer: 2 },
      { type: 'fill', sentence: '___ she like coffee?', answer: 'Does' },
      { type: 'fill', sentence: 'They ___ not play football.', answer: 'do' },
      { type: 'match', pairs: [
        { left: 'always', right: 'всегда' },
        { left: 'usually', right: 'обычно' },
        { left: 'often', right: 'часто' },
        { left: 'sometimes', right: 'иногда' },
        { left: 'never', right: 'никогда' }
      ] },
      { type: 'truefalse', statement: 'В Present Simple к глаголу после He, She, It всегда добавляется окончание -ing.', answer: false },
      { type: 'truefalse', statement: 'Наречия частоты ставятся перед основным глаголом.', answer: true },
      { type: 'wordorder', words: ['breakfast.', 'usually', 'I', 'have'], answer: 'I usually have breakfast.' }
    ]
  },
  {
    id: 6,
    level: 'A1',
    title: 'Food & Drinks',
    subtitle: 'Countable / Uncountable nouns, some / any',
    theory: `<h3>Исчисляемые и неисчисляемые существительные</h3>
<p><strong>Исчисляемые</strong> (countable) можно посчитать (one apple, two apples). У них есть множественное число.</p>
<p><strong>Неисчисляемые</strong> (uncountable) нельзя посчитать (water, rice). У них нет множественного числа, и они используются с глаголом в единственном числе.</p>
<table class="grammar-table">
  <tr><th>Местоимение</th><th>Тип предложения</th><th>Пример</th></tr>
  <tr><td>Some (немного, несколько)</td><td>Утверждение (+)</td><td>I have some apples. I want some water.</td></tr>
  <tr><td>Any (сколько-нибудь)</td><td>Отрицание (-) и Вопрос (?)</td><td>I don't have any apples. Do you have any water?</td></tr>
</table>
<div class="rule-box">
  <p>Исключение: В просьбах и предложениях используется <strong>some</strong>. (Would you like some tea? — Не хотите ли чая?)</p>
</div>`,
    vocabulary: [
      { en: 'bread', ru: 'хлеб', transcription: '[bred]' },
      { en: 'milk', ru: 'молоко', transcription: '[mɪlk]' },
      { en: 'water', ru: 'вода', transcription: '[ˈwɔːtə]' },
      { en: 'coffee', ru: 'кофе', transcription: '[ˈkɒfi]' },
      { en: 'tea', ru: 'чай', transcription: '[tiː]' },
      { en: 'apple', ru: 'яблоко', transcription: '[ˈæpl]' },
      { en: 'banana', ru: 'банан', transcription: '[bəˈnɑːnə]' },
      { en: 'egg', ru: 'яйцо', transcription: '[eɡ]' },
      { en: 'cheese', ru: 'сыр', transcription: '[tʃiːz]' },
      { en: 'rice', ru: 'рис', transcription: '[raɪs]' },
      { en: 'meat', ru: 'мясо', transcription: '[miːt]' },
      { en: 'fish', ru: 'рыба', transcription: '[fɪʃ]' },
      { en: 'juice', ru: 'сок', transcription: '[dʒuːs]' },
      { en: 'sugar', ru: 'сахар', transcription: '[ˈʃʊɡə]' }
    ],
    examples: [
      { en: 'I have an apple and some bananas.', ru: 'У меня есть яблоко и немного бананов.' },
      { en: 'Do we have any milk?', ru: 'У нас есть (какое-нибудь) молоко?' },
      { en: 'There isn\'t any cheese in the fridge.', ru: 'В холодильнике нет сыра.' },
      { en: 'Would you like some tea?', ru: 'Не хотите ли чая?' },
      { en: 'I drink water every day.', ru: 'Я пью воду каждый день.' },
      { en: 'She doesn\'t eat meat.', ru: 'Она не ест мясо.' }
    ],
    exercises: [
      { type: 'quiz', question: 'Какое из этих слов НЕисчисляемое?', options: ['apple', 'egg', 'banana', 'water'], answer: 3 },
      { type: 'quiz', question: 'I don\'t have ___ sugar.', options: ['some', 'any', 'a', 'an'], answer: 1 },
      { type: 'fill', sentence: 'Would you like ___ coffee?', answer: 'some' },
      { type: 'fill', sentence: 'We need ___ apples for the pie.', answer: 'some' },
      { type: 'match', pairs: [
        { left: 'bread', right: 'хлеб' },
        { left: 'cheese', right: 'сыр' },
        { left: 'meat', right: 'мясо' },
        { left: 'fish', right: 'рыба' },
        { left: 'rice', right: 'рис' }
      ] },
      { type: 'truefalse', statement: 'Слово "milk" имеет множественное число "milks".', answer: false },
      { type: 'truefalse', statement: 'Мы используем "any" в отрицательных предложениях.', answer: true },
      { type: 'wordorder', words: ['like', 'some', 'you', 'Would', 'tea?'], answer: 'Would you like some tea?' }
    ]
  },
  {
    id: 7,
    level: 'A1',
    title: 'At Home',
    subtitle: 'There is / There are',
    theory: `<h3>Конструкция There is / There are</h3>
<p>Используется для указания на то, что кто-то или что-то находится в определенном месте (переводится с конца предложения).</p>
<div class="rule-box">
  <p><strong>There is</strong> — для единственного числа и неисчисляемых (There is a book on the table).</p>
  <p><strong>There are</strong> — для множественного числа (There are two books on the table).</p>
</div>
<h3>Предлоги места (Prepositions of place)</h3>
<ul>
  <li><strong>in</strong> — в, внутри</li>
  <li><strong>on</strong> — на (на поверхности)</li>
  <li><strong>under</strong> — под</li>
  <li><strong>next to</strong> — рядом с</li>
  <li><strong>between</strong> — между</li>
  <li><strong>in front of</strong> — перед</li>
  <li><strong>behind</strong> — позади</li>
</ul>`,
    vocabulary: [
      { en: 'room', ru: 'комната', transcription: '[ruːm]' },
      { en: 'kitchen', ru: 'кухня', transcription: '[ˈkɪtʃɪn]' },
      { en: 'bedroom', ru: 'спальня', transcription: '[ˈbedruːm]' },
      { en: 'bathroom', ru: 'ванная комната', transcription: '[ˈbɑːθruːm]' },
      { en: 'living room', ru: 'гостиная', transcription: '[ˈlɪvɪŋ ruːm]' },
      { en: 'table', ru: 'стол', transcription: '[ˈteɪbl]' },
      { en: 'chair', ru: 'стул', transcription: '[tʃeə]' },
      { en: 'bed', ru: 'кровать', transcription: '[bed]' },
      { en: 'sofa', ru: 'диван', transcription: '[ˈsəʊfə]' },
      { en: 'window', ru: 'окно', transcription: '[ˈwɪndəʊ]' },
      { en: 'door', ru: 'дверь', transcription: '[dɔː]' },
      { en: 'lamp', ru: 'лампа', transcription: '[læmp]' },
      { en: 'fridge', ru: 'холодильник', transcription: '[frɪdʒ]' },
      { en: 'wardrobe', ru: 'шкаф (для одежды)', transcription: '[ˈwɔːdrəʊb]' }
    ],
    examples: [
      { en: 'There is a sofa in the living room.', ru: 'В гостиной есть диван.' },
      { en: 'There are two chairs next to the table.', ru: 'Рядом со столом есть два стула.' },
      { en: 'Is there a TV in your bedroom?', ru: 'В твоей спальне есть телевизор?' },
      { en: 'There aren\'t any apples in the fridge.', ru: 'В холодильнике нет яблок.' },
      { en: 'The lamp is on the table.', ru: 'Лампа находится на столе.' },
      { en: 'My shoes are under the bed.', ru: 'Моя обувь под кроватью.' }
    ],
    exercises: [
      { type: 'quiz', question: '___ a lamp on the table.', options: ['There is', 'There are', 'Is there', 'Are there'], answer: 0 },
      { type: 'quiz', question: 'Где находится кот, если он "under the bed"?', options: ['на кровати', 'в кровати', 'под кроватью', 'рядом с кроватью'], answer: 2 },
      { type: 'fill', sentence: 'There ___ three windows in the room.', answer: 'are' },
      { type: 'fill', sentence: 'Is ___ a fridge in the kitchen?', answer: 'there' },
      { type: 'match', pairs: [
        { left: 'in', right: 'в' },
        { left: 'on', right: 'на' },
        { left: 'under', right: 'под' },
        { left: 'behind', right: 'позади' },
        { left: 'between', right: 'между' }
      ] },
      { type: 'truefalse', statement: 'Для слова "water" (вода) нужно использовать There are.', answer: false },
      { type: 'truefalse', statement: 'Предлог "next to" означает "рядом с".', answer: true },
      { type: 'wordorder', words: ['a', 'is', 'There', 'table.', 'cat', 'under', 'the'], answer: 'There is a cat under the table.' }
    ]
  },
  {
    id: 8,
    level: 'A1',
    title: 'What time is it?',
    subtitle: 'Prepositions of time',
    theory: `<h3>Как сказать время (Telling time)</h3>
<p>Для вопроса о времени используем: <strong>What time is it?</strong> (Который час?).</p>
<div class="rule-box">
  <p><strong>o'clock</strong> — ровно (It's five o'clock — Пять часов ровно).</p>
  <p><strong>half past</strong> — половина после (It's half past five — Половина шестого, 5:30).</p>
  <p><strong>quarter past</strong> — четверть после (15 минут).</p>
  <p><strong>quarter to</strong> — без четверти (без 15 минут).</p>
</div>
<h3>Предлоги времени (at, in, on)</h3>
<table class="grammar-table">
  <tr><th>Предлог</th><th>Случаи употребления</th><th>Пример</th></tr>
  <tr><td><strong>at</strong></td><td>Часы, точное время, ночь</td><td>at 5 o'clock, at night</td></tr>
  <tr><td><strong>in</strong></td><td>Месяцы, сезоны, годы, время суток</td><td>in May, in summer, in the morning</td></tr>
  <tr><td><strong>on</strong></td><td>Дни недели, даты</td><td>on Monday, on the 5th of May</td></tr>
</table>`,
    vocabulary: [
      { en: 'clock', ru: 'часы (настенные)', transcription: '[klɒk]' },
      { en: 'hour', ru: 'час', transcription: '[ˈaʊə]' },
      { en: 'minute', ru: 'минута', transcription: '[ˈmɪnɪt]' },
      { en: 'morning', ru: 'утро', transcription: '[ˈmɔːnɪŋ]' },
      { en: 'afternoon', ru: 'день (после полудня)', transcription: '[ˌɑːftəˈnuːn]' },
      { en: 'evening', ru: 'вечер', transcription: '[ˈiːvnɪŋ]' },
      { en: 'night', ru: 'ночь', transcription: '[naɪt]' },
      { en: 'today', ru: 'сегодня', transcription: '[təˈdeɪ]' },
      { en: 'tomorrow', ru: 'завтра', transcription: '[təˈmɒrəʊ]' },
      { en: 'yesterday', ru: 'вчера', transcription: '[ˈjestədeɪ]' },
      { en: 'week', ru: 'неделя', transcription: '[wiːk]' },
      { en: 'month', ru: 'месяц', transcription: '[mʌnθ]' }
    ],
    examples: [
      { en: 'What time is it?', ru: 'Который час?' },
      { en: 'It is half past ten.', ru: 'Половина одиннадцатого (10:30).' },
      { en: 'I wake up at 7 o\'clock.', ru: 'Я просыпаюсь в 7 часов.' },
      { en: 'We go to the park on Sunday.', ru: 'Мы ходим в парк в воскресенье.' },
      { en: 'My birthday is in June.', ru: 'Мой день рождения в июне.' },
      { en: 'He watches TV in the evening.', ru: 'Он смотрит телевизор вечером.' }
    ],
    exercises: [
      { type: 'quiz', question: 'Какой предлог используется с днями недели? (___ Monday)', options: ['in', 'at', 'on', 'to'], answer: 2 },
      { type: 'quiz', question: 'Как сказать "8:30" (половина девятого)?', options: ['half to eight', 'half past eight', 'quarter past eight', 'eight half'], answer: 1 },
      { type: 'fill', sentence: 'The meeting is ___ 10 o\'clock.', answer: 'at' },
      { type: 'fill', sentence: 'I don\'t work ___ Sundays.', answer: 'on' },
      { type: 'match', pairs: [
        { left: 'at', right: 'night' },
        { left: 'in', right: 'the morning' },
        { left: 'on', right: 'Friday' },
        { left: 'half past', right: 'половина' },
        { left: 'quarter to', right: 'без четверти' }
      ] },
      { type: 'truefalse', statement: 'С месяцами (например, May, June) используется предлог "on".', answer: false },
      { type: 'truefalse', statement: '"quarter past" означает 15 минут после часа.', answer: true },
      { type: 'wordorder', words: ['at', 'wake', 'up', 'I', 'seven.'], answer: 'I wake up at seven.' }
    ]
  },
  {
    id: 9,
    level: 'A1',
    title: 'I can swim!',
    subtitle: 'Can / Can\'t (ability)',
    theory: `<h3>Модальный глагол Can (уметь, мочь)</h3>
<p>Используется для выражения физической или умственной способности сделать что-либо.</p>
<div class="rule-box">
  <p><strong>Особенности глагола can:</strong></p>
  <ul>
    <li>Он одинаков для всех лиц (I can, he can, they can). Окончание -s <strong>не</strong> добавляется!</li>
    <li>После него всегда идет глагол в начальной форме <strong>без</strong> частицы to (I can swim).</li>
    <li>В вопросах can ставится на первое место (Can you swim?).</li>
    <li>В отрицаниях используется форма <strong>cannot</strong> или сокращенно <strong>can't</strong>.</li>
  </ul>
</div>
<table class="grammar-table">
  <tr><th>+</th><th>-</th><th>?</th></tr>
  <tr><td>I can dance</td><td>I can't dance</td><td>Can I dance?</td></tr>
  <tr><td>He can fly</td><td>He can't fly</td><td>Can he fly?</td></tr>
</table>`,
    vocabulary: [
      { en: 'swim', ru: 'плавать', transcription: '[swɪm]' },
      { en: 'run', ru: 'бегать', transcription: '[rʌn]' },
      { en: 'jump', ru: 'прыгать', transcription: '[dʒʌmp]' },
      { en: 'dance', ru: 'танцевать', transcription: '[dɑːns]' },
      { en: 'sing', ru: 'петь', transcription: '[sɪŋ]' },
      { en: 'play', ru: 'играть', transcription: '[pleɪ]' },
      { en: 'ride', ru: 'ездить верхом (или на велосипеде)', transcription: '[raɪd]' },
      { en: 'cook', ru: 'готовить', transcription: '[kʊk]' },
      { en: 'draw', ru: 'рисовать', transcription: '[drɔː]' },
      { en: 'drive', ru: 'водить машину', transcription: '[draɪv]' },
      { en: 'speak', ru: 'говорить, разговаривать', transcription: '[spiːk]' },
      { en: 'fly', ru: 'летать', transcription: '[flaɪ]' },
      { en: 'climb', ru: 'лазить, взбираться', transcription: '[klaɪm]' }
    ],
    examples: [
      { en: 'I can swim very well.', ru: 'Я очень хорошо умею плавать.' },
      { en: 'She can\'t speak Spanish.', ru: 'Она не умеет говорить по-испански.' },
      { en: 'Can you drive a car?', ru: 'Ты умеешь водить машину?' },
      { en: 'Yes, I can. / No, I can\'t.', ru: 'Да, умею. / Нет, не умею.' },
      { en: 'Birds can fly, but dogs can\'t.', ru: 'Птицы умеют летать, а собаки нет.' },
      { en: 'He can play the guitar.', ru: 'Он умеет играть на гитаре.' }
    ],
    exercises: [
      { type: 'quiz', question: 'Какая форма правильная?', options: ['He cans sing.', 'He can sings.', 'He can to sing.', 'He can sing.'], answer: 3 },
      { type: 'quiz', question: 'Как задать вопрос: "Ты умеешь плавать?"', options: ['Do you can swim?', 'Are you can swim?', 'Can you swim?', 'Can you to swim?'], answer: 2 },
      { type: 'fill', sentence: 'I ___ play the piano.', answer: 'can' },
      { type: 'fill', sentence: '___ you ride a bike?', answer: 'Can' },
      { type: 'match', pairs: [
        { left: 'play', right: 'the guitar' },
        { left: 'ride', right: 'a bike' },
        { left: 'drive', right: 'a car' },
        { left: 'speak', right: 'English' },
        { left: 'climb', right: 'a tree' }
      ] },
      { type: 'truefalse', statement: 'После глагола "can" частица "to" не ставится.', answer: true },
      { type: 'truefalse', statement: 'Глагол "can" изменяется по лицам: I can, He cans.', answer: false },
      { type: 'wordorder', words: ['can\'t', 'She', 'draw', 'well.'], answer: 'She can\'t draw well.' }
    ]
  },
  {
    id: 10,
    level: 'A1',
    title: 'Revision A1',
    subtitle: 'A1 Level Review',
    theory: `<h3>Повторение уровня A1 (Beginner)</h3>
<p>Поздравляем! Вы прошли основные темы начального уровня A1. Давайте вспомним главное:</p>
<ul>
  <li><strong>Глагол to be:</strong> am / is / are. Основа для описаний и состояний.</li>
  <li><strong>Местоимения:</strong> Личные (I, he, they) и притяжательные (my, his, their).</li>
  <li><strong>Present Simple:</strong> Регулярные действия (I work, he works, do you work?).</li>
  <li><strong>Существительные:</strong> Исчисляемые и неисчисляемые (some, any).</li>
  <li><strong>There is / There are:</strong> Для описания наличия чего-либо в определенном месте.</li>
  <li><strong>Предлоги:</strong> Места (in, on, under) и времени (at, in, on).</li>
  <li><strong>Глагол can:</strong> Для выражения способностей (I can swim).</li>
</ul>
<div class="rule-box">
  <p>В этом уроке мы проверим ваши знания всех этих тем в одном большом тесте!</p>
</div>`,
    vocabulary: [
      { en: 'revision', ru: 'повторение', transcription: '[rɪˈvɪʒn]' },
      { en: 'grammar', ru: 'грамматика', transcription: '[ˈɡræmə]' },
      { en: 'vocabulary', ru: 'словарный запас', transcription: '[vəˈkæbjələri]' },
      { en: 'level', ru: 'уровень', transcription: '[ˈlevl]' },
      { en: 'test', ru: 'тест', transcription: '[test]' },
      { en: 'question', ru: 'вопрос', transcription: '[ˈkwestʃən]' },
      { en: 'answer', ru: 'ответ', transcription: '[ˈɑːnsə]' },
      { en: 'rule', ru: 'правило', transcription: '[ruːl]' },
      { en: 'mistake', ru: 'ошибка', transcription: '[mɪˈsteɪk]' },
      { en: 'success', ru: 'успех', transcription: '[səkˈses]' }
    ],
    examples: [
      { en: 'I am a student and this is my book.', ru: 'Я студент, и это моя книга.' },
      { en: 'He lives in London but he doesn\'t like the weather.', ru: 'Он живет в Лондоне, но ему не нравится погода.' },
      { en: 'There are some apples on the table.', ru: 'На столе есть несколько яблок.' },
      { en: 'I can speak English a little.', ru: 'Я немного умею говорить по-английски.' },
      { en: 'We usually meet on Friday at 5 o\'clock.', ru: 'Мы обычно встречаемся в пятницу в 5 часов.' },
      { en: 'Are there any questions?', ru: 'Есть какие-нибудь вопросы?' }
    ],
    exercises: [
      { type: 'quiz', question: 'Глагол to be: My friends ___ from Spain.', options: ['is', 'am', 'are', 'be'], answer: 2 },
      { type: 'quiz', question: 'Притяжательные: She is a doctor. ___ name is Sarah.', options: ['His', 'Her', 'She', 'My'], answer: 1 },
      { type: 'quiz', question: 'Present Simple: Tom ___ in a bank.', options: ['work', 'working', 'works', 'is work'], answer: 2 },
      { type: 'quiz', question: 'Present Simple: ___ you like tea?', options: ['Are', 'Do', 'Does', 'Is'], answer: 1 },
      { type: 'quiz', question: 'Some/Any: I don\'t have ___ money.', options: ['some', 'any', 'a', 'an'], answer: 1 },
      { type: 'quiz', question: 'There is/are: ___ a dog in the garden.', options: ['There is', 'There are', 'Is there', 'Are there'], answer: 0 },
      { type: 'fill', sentence: 'I usually go to the gym ___ Mondays.', answer: 'on' },
      { type: 'fill', sentence: 'My brother ___ drive a car. He is only 10 years old.', answer: 'can\'t' },
      { type: 'match', pairs: [
        { left: 'to be (he)', right: 'is' },
        { left: 'present simple (-)', right: 'don\'t' },
        { left: 'ability', right: 'can' },
        { left: 'time preposition', right: 'at' },
        { left: 'possession (we)', right: 'our' }
      ] },
      { type: 'truefalse', statement: 'Мы говорим "in Monday".', answer: false },
      { type: 'truefalse', statement: '"There is" используется с неисчисляемыми существительными (например, milk).', answer: true },
      { type: 'wordorder', words: ['from?', 'Where', 'they', 'are'], answer: 'Where are they from?' }
    ]
  }
];
