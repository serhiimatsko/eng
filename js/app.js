const ALL_LESSONS = [
  ...(window.LESSONS_A1 || []),
  ...(window.LESSONS_A2 || []),
  ...(window.LESSONS_B1 || [])
];

const levelsData = {
  A1: { title: 'Beginner', colorClass: 'a1', desc: 'Основы английского языка. Научитесь простым фразам и базовой грамматике.' },
  A2: { title: 'Elementary', colorClass: 'a2', desc: 'Базовый уровень. Рассказывайте о себе, хобби и повседневных делах.' },
  B1: { title: 'Intermediate', colorClass: 'b1', desc: 'Средний уровень. Поддерживайте беседу на большинство общих тем.' }
};

let exerciseResults = [];
let currentLessonId = null;

// ==========================================
// THEME
// ==========================================
function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('englishTheme') || 'light';
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }
  
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('englishTheme', isDark ? 'dark' : 'light');
    toggle.textContent = isDark ? '☀️' : '🌙';
  });
}

// ==========================================
// PROGRESS
// ==========================================
function getProgress() {
  const saved = localStorage.getItem('englishProgress');
  return saved ? JSON.parse(saved) : { completed: {} };
}

function saveProgress(lessonId, score) {
  const progress = getProgress();
  if (score >= 70) {
    // Save only if score is improved or first time
    if (!progress.completed[lessonId] || progress.completed[lessonId] < score) {
      progress.completed[lessonId] = score;
      localStorage.setItem('englishProgress', JSON.stringify(progress));
    }
  }
}

function isCompleted(lessonId) {
  const progress = getProgress();
  return !!progress.completed[lessonId];
}

function getScore(lessonId) {
  const progress = getProgress();
  return progress.completed[lessonId] || 0;
}

function getLevelProgress(level) {
  const levelLessons = ALL_LESSONS.filter(l => l.level === level);
  if (levelLessons.length === 0) return 0;
  const completed = levelLessons.filter(l => isCompleted(l.id)).length;
  return Math.round((completed / levelLessons.length) * 100);
}

function getOverallProgress() {
  if (ALL_LESSONS.length === 0) return 0;
  const progress = getProgress();
  const completed = Object.keys(progress.completed).length;
  return Math.round((completed / 30) * 100); // Assumed total 30 lessons
}

// ==========================================
// ROUTER & BREADCRUMB
// ==========================================
function updateBreadcrumb(parts) {
  const bc = document.getElementById('breadcrumb');
  let html = '<a href="#home">🏠 Главная</a>';
  
  if (parts.level) {
    html += ` <span>/</span> <a href="#level-${parts.level}">${parts.level} ${levelsData[parts.level].title}</a>`;
  }
  
  if (parts.vocab) {
    html += ` <span>/</span> 📚 Словарь`;
  }
  
  if (parts.lesson) {
    html += ` <span>/</span> Урок ${parts.lesson.id}: ${parts.lesson.title}`;
  }
  
  bc.innerHTML = html;
}

function handleRoute() {
  const hash = window.location.hash || '#home';
  const app = document.getElementById('app');
  app.innerHTML = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  exerciseResults = []; // Reset exercise results

  if (hash === '#home') {
    renderHome(app);
  } else if (hash.startsWith('#level-')) {
    const level = hash.split('-')[1];
    renderLevel(app, level);
  } else if (hash.startsWith('#vocab-')) {
    const level = hash.split('-')[1];
    renderVocabulary(app, level);
  } else if (hash.startsWith('#lesson-')) {
    const id = parseInt(hash.split('-')[1], 10);
    renderLesson(app, id);
  } else {
    renderHome(app);
  }
}

// ==========================================
// RENDER PAGES
// ==========================================
function renderHome(container) {
  updateBreadcrumb({});
  
  const progress = getOverallProgress();
  
  container.innerHTML = `
    <div class="home-page">
      <h1 class="home-title">Изучай английский шаг за шагом</h1>
      <p class="home-subtitle">От начинающего до уверенного. 30 уроков от A1 до B1.</p>
      
      <div class="overall-progress">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem">
          <span style="font-weight: 500">Общий прогресс</span>
          <span style="font-weight: 500">${progress}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>
      
      <div class="levels-grid">
        ${['A1', 'A2', 'B1'].map(level => {
          const data = levelsData[level];
          const lvlProg = getLevelProgress(level);
          const totalLessons = ALL_LESSONS.filter(l => l.level === level).length || 10;
          return `
            <div class="level-card ${data.colorClass}" onclick="location.hash='#level-${level}'">
              <span class="level-badge">${level}</span>
              <h2 class="level-name">${data.title}</h2>
              <p class="level-desc">${data.desc}</p>
              <div class="level-progress">
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${lvlProg}%"></div>
                </div>
                <span class="progress-text">${lvlProg}% (${Math.round((lvlProg/100)*totalLessons)}/${totalLessons} уроков)</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderLevel(container, level) {
  updateBreadcrumb({ level });
  const data = levelsData[level];
  const levelLessons = ALL_LESSONS.filter(l => l.level === level);
  const prog = getLevelProgress(level);
  
  let html = `
    <div class="level-page">
      <button class="btn btn-outline" style="margin-bottom: 1.5rem" onclick="location.hash='#home'">← Назад</button>
      
      <div class="level-header">
        <h1>Уровень ${level}: ${data.title}</h1>
        <p>${data.desc}</p>
        
        <div style="margin-top: 1.5rem">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${prog}%; background-color: var(--primary)"></div>
          </div>
          <span class="progress-text">${prog}% пройдено</span>
        </div>
      </div>
      
      <div class="vocab-banner" onclick="location.hash='#vocab-${level}'">
        <div class="vocab-banner-icon">📚</div>
        <div class="vocab-banner-info">
          <div class="vocab-banner-title">Словарь уровня ${level}</div>
          <div class="vocab-banner-desc">Самые важные слова, которые нужно знать</div>
        </div>
        <div class="lesson-arrow">→</div>
      </div>
      
      <div class="lessons-list">
  `;
  
  if (levelLessons.length === 0) {
    html += `<p>Уроки для этого уровня пока не загружены.</p>`;
  } else {
    levelLessons.forEach(l => {
      const completed = isCompleted(l.id);
      const score = getScore(l.id);
      
      html += `
        <div class="lesson-item ${completed ? 'completed' : ''}" onclick="location.hash='#lesson-${l.id}'">
          <div class="lesson-number">${completed ? '✓' : l.id}</div>
          <div class="lesson-info">
            <div class="lesson-title">${l.title}</div>
            <div class="lesson-subtitle">${l.subtitle}</div>
          </div>
          ${completed ? `<div class="lesson-score">${score}%</div>` : ''}
          <div class="lesson-arrow">→</div>
        </div>
      `;
    });
  }
  
  html += `
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

function renderLesson(container, id) {
  const lesson = ALL_LESSONS.find(l => l.id === id);
  if (!lesson) {
    container.innerHTML = `<h1>Урок не найден</h1><button class="btn btn-primary" onclick="location.hash='#home'">На главную</button>`;
    return;
  }
  
  currentLessonId = id;
  updateBreadcrumb({ level: lesson.level, lesson });
  exerciseResults = new Array(lesson.exercises.length).fill(null);
  
  const levelData = levelsData[lesson.level];
  
  let html = `
    <div class="lesson-page">
      <div class="lesson-header">
        <h1>Урок ${lesson.id}: ${lesson.title}</h1>
        <div class="lesson-meta">
          <span class="level-badge" style="background: var(--${levelData.colorClass}-light); color: var(--${levelData.colorClass})">${lesson.level}</span>
          <span>${lesson.subtitle}</span>
        </div>
      </div>
  `;
  
  // Theory
  if (lesson.theory) {
    html += `
      <div class="theory-section">
        <div class="section-title">📖 Теория</div>
        ${lesson.theory}
      </div>
    `;
  }
  
  // Vocabulary
  if (lesson.vocabulary && lesson.vocabulary.length > 0) {
    html += `
      <div class="vocabulary-section">
        <div class="section-title">📝 Словарь</div>
        <div class="vocab-grid">
          ${lesson.vocabulary.map(v => `
            <div class="vocab-item">
              <div>
                <span class="vocab-en">${v.en}</span>
                ${v.transcription ? `<span class="vocab-transcription">[${v.transcription}]</span>` : ''}
              </div>
              <span class="vocab-ru">${v.ru}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // Examples
  if (lesson.examples && lesson.examples.length > 0) {
    html += `
      <div class="examples-section">
        <div class="section-title">💬 Примеры</div>
        ${lesson.examples.map(ex => `
          <div class="example-item">
            <div class="example-en">${ex.en}</div>
            <div class="example-ru">${ex.ru}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Exercises
  if (lesson.exercises && lesson.exercises.length > 0) {
    html += `
      <div class="exercises-section">
        <div class="section-title">✏️ Упражнения</div>
        <div id="exercises-container"></div>
      </div>
      
      <div id="score-summary-container" style="display: none;"></div>
    `;
  }
  
  // Nav buttons
  const currentIndex = ALL_LESSONS.findIndex(l => l.id === id);
  const prevLesson = currentIndex > 0 ? ALL_LESSONS[currentIndex - 1] : null;
  const nextLesson = currentIndex < ALL_LESSONS.length - 1 ? ALL_LESSONS[currentIndex + 1] : null;
  
  html += `
      <div class="nav-buttons">
        ${prevLesson ? `<button class="btn btn-outline" onclick="location.hash='#lesson-${prevLesson.id}'">← Предыдущий урок</button>` : '<div></div>'}
        ${nextLesson ? `<button class="btn btn-primary" onclick="location.hash='#lesson-${nextLesson.id}'">Следующий урок →</button>` : '<div></div>'}
      </div>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Render exercises dynamically to attach event listeners easily
  if (lesson.exercises && lesson.exercises.length > 0) {
    const exContainer = document.getElementById('exercises-container');
    lesson.exercises.forEach((ex, idx) => {
      const exWrapper = document.createElement('div');
      exWrapper.className = 'exercise';
      exWrapper.id = `exercise-${idx}`;
      exContainer.appendChild(exWrapper);
      
      renderExercise(exWrapper, ex, idx);
    });
  }
}

// ==========================================
// VOCABULARY PAGE
// ==========================================
function getVocabData(level) {
  const map = {
    'A1': window.VOCAB_A1 || [],
    'A2': window.VOCAB_A2 || [],
    'B1': window.VOCAB_B1 || []
  };
  return map[level] || [];
}

function getVocabTotalWords(level) {
  return getVocabData(level).reduce((sum, cat) => sum + cat.words.length, 0);
}

function renderVocabulary(container, level) {
  updateBreadcrumb({ level, vocab: true });
  const data = levelsData[level];
  const vocabData = getVocabData(level);
  const totalWords = getVocabTotalWords(level);
  
  const levelDescriptions = {
    'A1': 'Базовые слова для начинающих. Эти слова встречаются в повседневной речи чаще всего.',
    'A2': 'Расширенный словарь. Эти слова помогут вам говорить на более широкий круг тем.',
    'B1': 'Продвинутый словарь. Эти слова необходимы для свободного общения.'
  };
  
  let html = `
    <div class="vocab-page">
      <button class="btn btn-outline" style="margin-bottom: 1.5rem" onclick="location.hash='#level-${level}'">← Назад к урокам</button>
      
      <div class="vocab-header">
        <h1>📚 Словарь уровня ${level}</h1>
        <p>${levelDescriptions[level] || ''}</p>
        <div class="vocab-stats">
          <span class="vocab-stat">${totalWords} слов</span>
          <span class="vocab-stat">${vocabData.length} категорий</span>
        </div>
      </div>
      
      <div class="vocab-search-container">
        <input type="text" id="vocab-search" class="vocab-search-input" placeholder="🔍 Поиск слова..." autocomplete="off">
      </div>
      
      <div id="vocab-categories">
  `;
  
  if (vocabData.length === 0) {
    html += `<p>Словарь для этого уровня пока не загружен.</p>`;
  } else {
    vocabData.forEach((cat, catIdx) => {
      html += `
        <div class="vocab-category" data-category="${catIdx}">
          <div class="vocab-category-header" onclick="this.parentElement.classList.toggle('collapsed')">
            <h3>${cat.category} <span class="vocab-count">(${cat.words.length})</span></h3>
            <span class="vocab-toggle">▼</span>
          </div>
          <div class="vocab-category-body">
            <div class="vocab-grid">
              ${cat.words.map(w => `
                <div class="vocab-item" data-en="${w.en.toLowerCase()}" data-ru="${w.ru.toLowerCase()}">
                  <div>
                    <span class="vocab-en">${w.en}</span>
                    ${w.transcription ? `<span class="vocab-transcription">[${w.transcription}]</span>` : ''}
                  </div>
                  <span class="vocab-ru">${w.ru}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    });
  }
  
  html += `
      </div>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Search functionality
  const searchInput = document.getElementById('vocab-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const allItems = document.querySelectorAll('.vocab-item');
      const allCategories = document.querySelectorAll('.vocab-category');
      
      allItems.forEach(item => {
        const en = item.dataset.en || '';
        const ru = item.dataset.ru || '';
        const match = !query || en.includes(query) || ru.includes(query);
        item.style.display = match ? '' : 'none';
      });
      
      // Hide empty categories
      allCategories.forEach(cat => {
        const visibleItems = cat.querySelectorAll('.vocab-item[style=""], .vocab-item:not([style])');
        const hasVisible = Array.from(cat.querySelectorAll('.vocab-item')).some(item => item.style.display !== 'none');
        cat.style.display = hasVisible ? '' : 'none';
        // Expand categories when searching
        if (query) cat.classList.remove('collapsed');
      });
    });
  }
}

// ==========================================
// EXERCISE RENDERERS
// ==========================================
function renderExercise(container, exercise, index) {
  let html = `<div class="exercise-type">Упражнение ${index + 1}: ${getExerciseTypeName(exercise.type)}</div>`;
  
  if (exercise.type === 'quiz') {
    html += `<div class="exercise-question">${exercise.question}</div><div class="quiz-options" id="quiz-options-${index}"></div>`;
    container.innerHTML = html;
    
    const optsContainer = document.getElementById(`quiz-options-${index}`);
    exercise.options.forEach((opt, optIdx) => {
      const optDiv = document.createElement('div');
      optDiv.className = 'quiz-option';
      optDiv.textContent = opt;
      optDiv.onclick = () => {
        if (exerciseResults[index] !== null) return; // already answered
        
        const isCorrect = optIdx === exercise.answer;
        optDiv.classList.add(isCorrect ? 'correct' : 'wrong');
        
        // Show correct answer if wrong
        Array.from(optsContainer.children).forEach((child, i) => {
          child.classList.add('disabled');
          if (i === exercise.answer) child.classList.add('correct');
        });
        
        recordResult(index, isCorrect);
      };
      optsContainer.appendChild(optDiv);
    });
    
  } else if (exercise.type === 'fill') {
    const parts = exercise.sentence.split('___');
    html += `
      <div class="exercise-question">Впишите пропущенное слово:</div>
      <div class="fill-container" id="fill-container-${index}">
        <span>${parts[0]}</span>
        <input type="text" class="fill-input" id="fill-input-${index}" autocomplete="off">
        <span>${parts[1] || ''}</span>
      </div>
      <button class="btn btn-primary btn-check" id="fill-btn-${index}">Проверить</button>
      <div id="fill-result-${index}" class="fill-correct-answer" style="display:none"></div>
    `;
    container.innerHTML = html;
    
    const btn = document.getElementById(`fill-btn-${index}`);
    const input = document.getElementById(`fill-input-${index}`);
    const resultDiv = document.getElementById(`fill-result-${index}`);
    
    const normalizeText = (t) => (t || '').replace(/[’‘`]/g, "'").replace(/[.,?!]/g, '').trim().toLowerCase();
    
    const checkFill = () => {
      if (exerciseResults[index] !== null) return;
      const val = normalizeText(input.value);
      const expected = normalizeText(exercise.answer);
      const isCorrect = val === expected;
      
      input.classList.add(isCorrect ? 'correct' : 'wrong');
      input.disabled = true;
      btn.disabled = true;
      
      if (!isCorrect) {
        resultDiv.textContent = `Правильный ответ: ${exercise.answer}`;
        resultDiv.style.display = 'block';
      }
      recordResult(index, isCorrect);
    };

    btn.onclick = checkFill;
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        checkFill();
      }
    });
    
  } else if (exercise.type === 'match') {
    html += `<div class="exercise-question">Сопоставьте английские и русские слова:</div>
      <div class="match-container" id="match-container-${index}">
        <div class="match-column" id="match-left-${index}"></div>
        <div class="match-column" id="match-right-${index}"></div>
      </div>
    `;
    container.innerHTML = html;
    
    const leftCol = document.getElementById(`match-left-${index}`);
    const rightCol = document.getElementById(`match-right-${index}`);
    
    // Setup state
    let selectedLeft = null;
    let matchesMade = 0;
    const totalPairs = exercise.pairs.length;
    let mistakes = 0; // Simple scoring: 0 mistakes = correct
    
    // Shuffle right items
    const rightItems = exercise.pairs.map((p, i) => ({ text: p.right, id: i }));
    rightItems.sort(() => Math.random() - 0.5);
    
    exercise.pairs.forEach((p, i) => {
      // Left item
      const lDiv = document.createElement('div');
      lDiv.className = 'match-item';
      lDiv.textContent = p.left;
      lDiv.onclick = () => {
        if (lDiv.classList.contains('matched')) return;
        Array.from(leftCol.children).forEach(c => c.classList.remove('selected'));
        lDiv.classList.add('selected');
        selectedLeft = { div: lDiv, id: i };
      };
      leftCol.appendChild(lDiv);
    });
    
    rightItems.forEach(r => {
      // Right item
      const rDiv = document.createElement('div');
      rDiv.className = 'match-item';
      rDiv.textContent = r.text;
      rDiv.onclick = () => {
        if (rDiv.classList.contains('matched') || !selectedLeft) return;
        
        if (selectedLeft.id === r.id) {
          // Match!
          rDiv.classList.add('matched');
          selectedLeft.div.classList.remove('selected');
          selectedLeft.div.classList.add('matched');
          selectedLeft = null;
          matchesMade++;
          
          if (matchesMade === totalPairs) {
            recordResult(index, mistakes === 0); // Correct if no mistakes
          }
        } else {
          // Wrong
          mistakes++;
          rDiv.classList.add('wrong');
          setTimeout(() => rDiv.classList.remove('wrong'), 400);
          selectedLeft.div.classList.remove('selected');
          selectedLeft = null;
        }
      };
      rightCol.appendChild(rDiv);
    });
    
  } else if (exercise.type === 'truefalse') {
    html += `
      <div class="exercise-question">${exercise.statement}</div>
      <div class="tf-buttons">
        <button class="tf-btn" id="tf-true-${index}">✓ True</button>
        <button class="tf-btn" id="tf-false-${index}">✗ False</button>
      </div>
    `;
    container.innerHTML = html;
    
    const btnTrue = document.getElementById(`tf-true-${index}`);
    const btnFalse = document.getElementById(`tf-false-${index}`);
    
    const handleAnswer = (val) => {
      if (exerciseResults[index] !== null) return;
      const isCorrect = val === exercise.answer;
      
      btnTrue.disabled = true;
      btnFalse.disabled = true;
      
      if (val === true) btnTrue.classList.add(isCorrect ? 'correct' : 'wrong');
      if (val === false) btnFalse.classList.add(isCorrect ? 'correct' : 'wrong');
      
      if (!isCorrect) {
        if (exercise.answer === true) btnTrue.classList.add('correct');
        else btnFalse.classList.add('correct');
      }
      
      recordResult(index, isCorrect);
    };
    
    btnTrue.onclick = () => handleAnswer(true);
    btnFalse.onclick = () => handleAnswer(false);
    
  } else if (exercise.type === 'wordorder') {
    html += `
      <div class="exercise-question">Составьте предложение из слов:</div>
      <div class="word-bank" id="word-bank-${index}"></div>
      <div class="word-sentence" id="word-sentence-${index}"></div>
      <button class="btn btn-primary btn-check" id="wo-btn-${index}">Проверить</button>
    `;
    container.innerHTML = html;
    
    const bank = document.getElementById(`word-bank-${index}`);
    const sentence = document.getElementById(`word-sentence-${index}`);
    const btn = document.getElementById(`wo-btn-${index}`);
    let currentWords = [];
    
    // Create chips
    exercise.words.forEach((w, i) => {
      const chip = document.createElement('div');
      chip.className = 'word-chip';
      chip.textContent = w;
      chip.dataset.id = i;
      
      chip.onclick = () => {
        if (chip.classList.contains('used') || exerciseResults[index] !== null) return;
        chip.classList.add('used');
        
        // Add to sentence
        const sentChip = document.createElement('div');
        sentChip.className = 'word-chip';
        sentChip.textContent = w;
        sentChip.onclick = () => {
          if (exerciseResults[index] !== null) return;
          sentence.removeChild(sentChip);
          chip.classList.remove('used');
          currentWords = currentWords.filter(cw => cw !== sentChip);
        };
        sentence.appendChild(sentChip);
        currentWords.push(sentChip);
      };
      
      bank.appendChild(chip);
    });
    
    btn.onclick = () => {
      if (exerciseResults[index] !== null) return;
      
      const answerStr = currentWords.map(c => c.textContent).join(' ');
      const cleanStr = (s) => (s || '').replace(/[.,?!]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
      const isCorrect = (answerStr.toLowerCase() === exercise.answer.toLowerCase()) || 
                        (cleanStr(answerStr) === cleanStr(exercise.answer));
      
      sentence.classList.add(isCorrect ? 'correct' : 'wrong');
      btn.disabled = true;
      
      if (!isCorrect) {
        const p = document.createElement('p');
        p.className = 'fill-correct-answer';
        p.textContent = `Правильный ответ: ${exercise.answer}`;
        p.style.display = 'block';
        container.appendChild(p);
      }
      
      recordResult(index, isCorrect);
    };
  }
}

function getExerciseTypeName(type) {
  const map = {
    'quiz': 'Выбор ответа',
    'fill': 'Заполнить пропуск',
    'match': 'Найти пару',
    'truefalse': 'Правда / Ложь',
    'wordorder': 'Порядок слов'
  };
  return map[type] || 'Упражнение';
}

// ==========================================
// SCORING
// ==========================================
function recordResult(index, isCorrect) {
  exerciseResults[index] = isCorrect;
  checkAllCompleted();
}

function checkAllCompleted() {
  if (exerciseResults.includes(null)) return; // not all finished
  
  const correctCount = exerciseResults.filter(r => r === true).length;
  const total = exerciseResults.length;
  const score = Math.round((correctCount / total) * 100);
  
  saveProgress(currentLessonId, score);
  showScoreSummary(score, correctCount, total);
}

function showScoreSummary(score, correct, total) {
  const container = document.getElementById('score-summary-container');
  container.style.display = 'block';
  
  const isPass = score >= 70;
  const msg = isPass ? 'Отлично! Урок пройден! 🎉' : 'Попробуйте ещё раз';
  const circleClass = isPass ? 'success' : 'danger';
  
  container.innerHTML = `
    <div class="score-summary">
      <div class="score-circle ${circleClass}">${score}%</div>
      <div class="score-message">${msg}</div>
      <div class="score-details">Правильных ответов: ${correct} из ${total}</div>
      ${!isPass ? `<button class="btn btn-outline" onclick="renderLesson(document.getElementById('app'), currentLessonId); window.scrollTo({top: 0, behavior: 'smooth'})">Пройти заново</button>` : ''}
    </div>
  `;
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  handleRoute();
});
window.addEventListener('hashchange', handleRoute);
