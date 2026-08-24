// -------------------------------------------------------------
// SVGs for the 12 cute animal faces
// -------------------------------------------------------------
const ANIMAL_SVGS = {
    lion: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" fill="#e67e22"/>
              <circle cx="50" cy="50" r="32" fill="#f1c40f"/>
              <circle cx="28" cy="28" r="10" fill="#e67e22"/>
              <circle cx="28" cy="28" r="6" fill="#f39c12"/>
              <circle cx="72" cy="28" r="10" fill="#e67e22"/>
              <circle cx="72" cy="28" r="6" fill="#f39c12"/>
              <circle cx="40" cy="45" r="4.5" fill="#2c3e50"/>
              <circle cx="60" cy="45" r="4.5" fill="#2c3e50"/>
              <circle cx="39" cy="43" r="1.5" fill="#ffffff"/>
              <circle cx="59" cy="43" r="1.5" fill="#ffffff"/>
              <circle cx="34" cy="54" r="4" fill="#ff7675" opacity="0.6"/>
              <circle cx="66" cy="54" r="4" fill="#ff7675" opacity="0.6"/>
              <polygon points="50,50 45,55 55,55" fill="#d35400"/>
              <path d="M 46 58 Q 50 62 50 58 Q 50 62 54 58" stroke="#d35400" stroke-width="2" fill="none" stroke-linecap="round"/>
           </svg>`,
    panda: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="12" fill="#2c3e50"/>
              <circle cx="72" cy="28" r="12" fill="#2c3e50"/>
              <circle cx="50" cy="52" r="34" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
              <ellipse cx="38" cy="48" rx="9" ry="12" fill="#2c3e50" transform="rotate(-15 38 48)"/>
              <ellipse cx="62" cy="48" rx="9" ry="12" fill="#2c3e50" transform="rotate(15 62 48)"/>
              <circle cx="38" cy="46" r="3.5" fill="#ffffff"/>
              <circle cx="39" cy="45" r="1.2" fill="#2c3e50"/>
              <circle cx="62" cy="46" r="3.5" fill="#ffffff"/>
              <circle cx="63" cy="45" r="1.2" fill="#2c3e50"/>
              <ellipse cx="50" cy="58" rx="5" ry="3.5" fill="#2c3e50"/>
              <path d="M 46 62 Q 50 65 54 62" stroke="#2c3e50" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>`,
    koala: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="36" r="18" fill="#94a3b8"/>
              <circle cx="24" cy="36" r="12" fill="#f8fafc"/>
              <circle cx="76" cy="36" r="18" fill="#94a3b8"/>
              <circle cx="76" cy="36" r="12" fill="#f8fafc"/>
              <circle cx="50" cy="54" r="32" fill="#cbd5e1"/>
              <circle cx="38" cy="48" r="4" fill="#1e293b"/>
              <circle cx="37" cy="46" r="1.5" fill="#ffffff"/>
              <circle cx="62" cy="48" r="4" fill="#1e293b"/>
              <circle cx="61" cy="46" r="1.5" fill="#ffffff"/>
              <circle cx="32" cy="56" r="3.5" fill="#fda4af" opacity="0.6"/>
              <circle cx="68" cy="56" r="3.5" fill="#fda4af" opacity="0.6"/>
              <ellipse cx="50" cy="58" rx="8" ry="13" fill="#1e293b"/>
            </svg>`,
    rabbit: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="36" cy="24" rx="9" ry="24" fill="#f8fafc" transform="rotate(-10 36 24)" stroke="#e2e8f0" stroke-width="1.5"/>
              <ellipse cx="36" cy="26" rx="5" ry="18" fill="#fecdd3" transform="rotate(-10 36 26)"/>
              <ellipse cx="64" cy="24" rx="9" ry="24" fill="#f8fafc" transform="rotate(10 64 24)" stroke="#e2e8f0" stroke-width="1.5"/>
              <ellipse cx="64" cy="26" rx="5" ry="18" fill="#fecdd3" transform="rotate(10 64 26)"/>
              <circle cx="50" cy="56" r="30" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
              <circle cx="38" cy="50" r="4" fill="#0f172a"/>
              <circle cx="37" cy="48" r="1.5" fill="#ffffff"/>
              <circle cx="62" cy="50" r="4" fill="#0f172a"/>
              <circle cx="61" cy="48" r="1.5" fill="#ffffff"/>
              <circle cx="32" cy="58" r="3.5" fill="#fecdd3"/>
              <circle cx="68" cy="58" r="3.5" fill="#fecdd3"/>
              <polygon points="50,56 46,60 54,60" fill="#fda4af"/>
              <path d="M 46 64 Q 50 67 50 64 Q 50 67 54 64" stroke="#fda4af" stroke-width="2" fill="none" stroke-linecap="round"/>
             </svg>`,
    fox: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,40 16,14 44,30" fill="#e67e22"/>
              <polygon points="23,37 20,19 39,30" fill="#34495e"/>
              <polygon points="80,40 84,14 56,30" fill="#e67e22"/>
              <polygon points="77,37 80,19 61,30" fill="#34495e"/>
              <circle cx="50" cy="54" r="30" fill="#e67e22"/>
              <path d="M 22 58 C 22 74, 45 74, 50 64 C 55 74, 78 74, 78 58 C 78 48, 22 48, 22 58 Z" fill="#ffffff"/>
              <ellipse cx="36" cy="48" rx="3.5" ry="4.5" fill="#2c3e50"/>
              <circle cx="35" cy="46" r="1.2" fill="#ffffff"/>
              <ellipse cx="64" cy="48" rx="3.5" ry="4.5" fill="#2c3e50"/>
              <circle cx="63" cy="46" r="1.2" fill="#ffffff"/>
              <circle cx="50" cy="62" r="5" fill="#2c3e50"/>
          </svg>`,
    cat: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="22,40 14,14 42,32" fill="#f39c12"/>
              <polygon points="25,37 19,20 38,31" fill="#fdcb6e"/>
              <polygon points="78,40 86,14 58,32" fill="#f39c12"/>
              <polygon points="75,37 81,20 62,31" fill="#fdcb6e"/>
              <circle cx="50" cy="54" r="32" fill="#f1c40f"/>
              <circle cx="36" cy="46" r="4.5" fill="#2c3e50"/>
              <circle cx="35" cy="44" r="1.5" fill="#ffffff"/>
              <circle cx="64" cy="46" r="4.5" fill="#2c3e50"/>
              <circle cx="63" cy="44" r="1.5" fill="#ffffff"/>
              <line x1="22" y1="56" x2="8" y2="54" stroke="#d35400" stroke-width="2" stroke-linecap="round"/>
              <line x1="22" y1="60" x2="6" y2="61" stroke="#d35400" stroke-width="2" stroke-linecap="round"/>
              <line x1="78" y1="56" x2="92" y2="54" stroke="#d35400" stroke-width="2" stroke-linecap="round"/>
              <line x1="78" y1="60" x2="94" y2="61" stroke="#d35400" stroke-width="2" stroke-linecap="round"/>
              <polygon points="50,52 46,56 54,56" fill="#ff7675"/>
              <path d="M 46 60 Q 50 64 50 60 Q 50 64 54 60" stroke="#d35400" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>`,
    dog: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="52" r="32" fill="#e5c290"/>
              <path d="M 18 36 C 10 36, 12 66, 22 66 C 26 66, 26 50, 26 36 Z" fill="#b88f5c"/>
              <path d="M 82 36 C 90 36, 88 66, 78 66 C 74 66, 74 50, 74 36 Z" fill="#b88f5c"/>
              <circle cx="38" cy="44" r="4.5" fill="#2d3748"/>
              <circle cx="37" cy="42" r="1.5" fill="#ffffff"/>
              <circle cx="62" cy="44" r="4.5" fill="#2d3748"/>
              <circle cx="63" cy="42" r="1.5" fill="#ffffff"/>
              <ellipse cx="50" cy="58" rx="10" ry="7" fill="#fdf2e9"/>
              <ellipse cx="50" cy="54" rx="5" ry="3.5" fill="#2d3748"/>
              <path d="M 48 59 Q 50 61 52 59" stroke="#b88f5c" stroke-width="2" fill="none"/>
              <path d="M 48 60 C 48 66, 52 66, 52 60 Z" fill="#ff8a8a"/>
          </svg>`,
    elephant: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="22" cy="48" rx="16" ry="22" fill="#a0aec0"/>
              <ellipse cx="23" cy="48" rx="10" ry="16" fill="#fbb6ce" opacity="0.6"/>
              <ellipse cx="78" cy="48" rx="16" ry="22" fill="#a0aec0"/>
              <ellipse cx="77" cy="48" rx="10" ry="16" fill="#fbb6ce" opacity="0.6"/>
              <circle cx="50" cy="54" r="28" fill="#cbd5e0"/>
              <circle cx="38" cy="48" r="3.5" fill="#2d3748"/>
              <circle cx="37" cy="46" r="1.2" fill="#ffffff"/>
              <circle cx="62" cy="48" r="3.5" fill="#2d3748"/>
              <circle cx="63" cy="46" r="1.2" fill="#ffffff"/>
              <path d="M 50 56 Q 50 78, 62 76" stroke="#cbd5e0" stroke-width="9" fill="none" stroke-linecap="round"/>
             </svg>`,
    monkey: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="50" r="12" fill="#8c583c"/>
              <circle cx="22" cy="50" r="7" fill="#ffd3b6"/>
              <circle cx="78" cy="50" r="12" fill="#8c583c"/>
              <circle cx="78" cy="50" r="7" fill="#ffd3b6"/>
              <circle cx="50" cy="50" r="32" fill="#8c583c"/>
              <path d="M 50 26 C 36 26, 32 38, 36 48 C 34 54, 38 68, 50 68 C 62 68, 66 54, 64 48 C 68 38, 64 26, 50 26 Z" fill="#ffd3b6"/>
              <circle cx="42" cy="42" r="3.5" fill="#2c3e50"/>
              <circle cx="58" cy="42" r="3.5" fill="#2c3e50"/>
              <ellipse cx="50" cy="50" rx="3" ry="2" fill="#8c583c"/>
              <path d="M 44 55 Q 50 60 56 55" stroke="#8c583c" stroke-width="2" fill="none" stroke-linecap="round"/>
             </svg>`,
    penguin: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="32" fill="#2d3748"/>
              <path d="M 50 24 C 36 24, 34 38, 38 48 C 36 56, 38 72, 50 72 C 62 72, 64 56, 62 48 C 66 38, 64 24, 50 24 Z" fill="#ffffff"/>
              <circle cx="42" cy="44" r="3.5" fill="#2d3748"/>
              <circle cx="58" cy="44" r="3.5" fill="#2d3748"/>
              <polygon points="50,48 45,55 55,55" fill="#ed8936"/>
              <circle cx="34" cy="54" r="3" fill="#fed7d7"/>
              <circle cx="66" cy="54" r="3" fill="#fed7d7"/>
             </svg>`,
    pig: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="26,34 16,16 38,24" fill="#fbb6ce"/>
              <polygon points="74,34 84,16 62,24" fill="#fbb6ce"/>
              <circle cx="50" cy="52" r="32" fill="#ffd1dc"/>
              <circle cx="38" cy="44" r="4" fill="#4a5568"/>
              <circle cx="37" cy="42" r="1.5" fill="#ffffff"/>
              <circle cx="62" cy="44" r="4" fill="#4a5568"/>
              <circle cx="63" cy="42" r="1.5" fill="#ffffff"/>
              <ellipse cx="50" cy="58" rx="9" ry="6" fill="#fbb6ce"/>
              <circle cx="46" cy="58" r="2.5" fill="#d53f8c"/>
              <circle cx="54" cy="58" r="2.5" fill="#d53f8c"/>
          </svg>`,
    bear: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="26" cy="32" r="11" fill="#78350f"/>
              <circle cx="26" cy="32" r="6" fill="#fef3c7"/>
              <circle cx="74" cy="32" r="11" fill="#78350f"/>
              <circle cx="74" cy="32" r="6" fill="#fef3c7"/>
              <circle cx="50" cy="54" r="31" fill="#92400e"/>
              <circle cx="38" cy="48" r="3.5" fill="#1e293b"/>
              <circle cx="37" cy="46" r="1.2" fill="#ffffff"/>
              <circle cx="62" cy="48" r="3.5" fill="#1e293b"/>
              <circle cx="63" cy="46" r="1.2" fill="#ffffff"/>
              <ellipse cx="50" cy="59" rx="8" ry="6" fill="#fde68a"/>
              <polygon points="50,56 46,59 54,59" fill="#1e293b"/>
          </svg>`
};

// -------------------------------------------------------------
// Web Audio API Synthesizer (No external assets required)
// -------------------------------------------------------------
const SoundSynth = {
    ctx: null,
    enabled: true,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },

    playFlip() {
        if (!this.enabled) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.1);
        
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    },

    playMatch() {
        if (!this.enabled) return;
        this.init();
        
        const now = this.ctx.currentTime;
        
        // Sweet double note (chime)
        const playNote = (freq, start, duration, volume) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, start);
            osc.frequency.exponentialRampToValueAtTime(freq * 1.2, start + duration);
            
            gain.gain.setValueAtTime(volume, start);
            gain.gain.exponentialRampToValueAtTime(0.01, start + duration);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(start);
            osc.stop(start + duration);
        };

        playNote(523.25, now, 0.15, 0.12); // C5
        playNote(659.25, now + 0.08, 0.25, 0.12); // E5
    },

    playMismatch() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(120, now + 0.25);
        
        // Lowpass filter to soften the sawtooth buzzer
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);
        
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start();
        osc.stop(now + 0.25);
    },

    playWin() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        
        // A happy little victory melody
        const notes = [
            { freq: 261.63, time: 0 },    // C4
            { freq: 329.63, time: 0.12 }, // E4
            { freq: 392.00, time: 0.24 }, // G4
            { freq: 523.25, time: 0.36 }, // C5
            { freq: 659.25, time: 0.52 }, // E5
            { freq: 783.99, time: 0.72 }  // G5 (held longer)
        ];
        
        notes.forEach((note) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(note.freq, now + note.time);
            
            const dur = note.time === 0.72 ? 0.6 : 0.2;
            gain.gain.setValueAtTime(0.12, now + note.time);
            gain.gain.exponentialRampToValueAtTime(0.01, now + note.time + dur);
            
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + note.time);
            osc.stop(now + note.time + dur);
        });
    }
};

// -------------------------------------------------------------
// Game Logic Class
// -------------------------------------------------------------
class Game {
    constructor() {
        this.cards = [];
        this.firstCard = null;
        this.secondCard = null;
        this.lockBoard = false;
        
        this.moves = 0;
        this.matchedPairs = 0;
        
        this.timerInterval = null;
        this.secondsElapsed = 0;
        this.gameStarted = false;
        
        this.bestScore = localStorage.getItem('bestScore') ? parseInt(localStorage.getItem('bestScore')) : null;
        this.bestTime = localStorage.getItem('bestTime') ? parseInt(localStorage.getItem('bestTime')) : null;

        this.initElements();
        this.bindEvents();
        this.updateBestScoreDisplay();
        this.resetGame();
    }

    initElements() {
        this.grid = document.getElementById('card-grid');
        this.timerDisplay = document.getElementById('timer');
        this.movesDisplay = document.getElementById('moves');
        this.bestScoreDisplay = document.getElementById('best-score');
        
        this.restartBtn = document.getElementById('restart-btn');
        this.soundToggle = document.getElementById('sound-toggle');
        this.playAgainBtn = document.getElementById('play-again-btn');
        
        this.modalOverlay = document.getElementById('win-modal-overlay');
        this.finalTimeDisplay = document.getElementById('final-time');
        this.finalMovesDisplay = document.getElementById('final-moves');
        this.newRecordBanner = document.getElementById('new-record-banner');
    }

    bindEvents() {
        this.restartBtn.addEventListener('click', () => {
            SoundSynth.init();
            this.resetGame();
        });
        
        this.soundToggle.addEventListener('click', () => {
            SoundSynth.init();
            this.toggleSound();
        });
        
        this.playAgainBtn.addEventListener('click', () => {
            SoundSynth.init();
            this.closeModal();
            this.resetGame();
        });
        
        // Enable Web Audio context on first interaction
        document.body.addEventListener('touchstart', () => SoundSynth.init(), { once: true });
        document.body.addEventListener('click', () => SoundSynth.init(), { once: true });
    }

    resetGame() {
        // Stop timer
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.secondsElapsed = 0;
        this.timerDisplay.textContent = '00:00';
        
        // Reset state
        this.moves = 0;
        this.matchedPairs = 0;
        this.gameStarted = false;
        this.movesDisplay.textContent = '0';
        this.firstCard = null;
        this.secondCard = null;
        this.lockBoard = false;
        
        // Clear grid
        this.grid.innerHTML = '';
        
        // Prepare card deck: 12 animals duplicated -> 24 cards
        const animalKeys = Object.keys(ANIMAL_SVGS);
        const deck = [...animalKeys, ...animalKeys];
        
        // Shuffle deck
        this.shuffle(deck);
        
        // Generate Cards
        deck.forEach((animal, index) => {
            const cardEl = this.createCardElement(animal, index);
            this.grid.appendChild(cardEl);
        });

        // Trigger brief shuffle appearance effect
        this.animateShuffle();
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    createCardElement(animal, index) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.animal = animal;
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="card-face card-back"></div>
            <div class="card-face card-front">
                ${ANIMAL_SVGS[animal]}
            </div>
        `;
        
        card.addEventListener('click', (e) => this.flipCard(card));
        return card;
    }

    animateShuffle() {
        const cardElements = this.grid.querySelectorAll('.card');
        cardElements.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8) translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.4s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.25)';
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
                // restore standard flip transition after initial fade-in
                setTimeout(() => {
                    card.style.transition = '';
                }, 500);
            }, index * 20); // clean staggered load effect
        });
    }

    flipCard(card) {
        if (this.lockBoard) return;
        if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
        if (card === this.firstCard) return;

        // Play flip sound
        SoundSynth.playFlip();

        // Start timer on first interaction
        if (!this.gameStarted) {
            this.startTimer();
            this.gameStarted = true;
        }

        card.classList.add('flipped');

        if (!this.firstCard) {
            this.firstCard = card;
            return;
        }

        this.secondCard = card;
        this.moves++;
        this.movesDisplay.textContent = this.moves;
        
        this.checkForMatch();
    }

    checkForMatch() {
        const isMatch = this.firstCard.dataset.animal === this.secondCard.dataset.animal;
        if (isMatch) {
            this.disableCards();
        } else {
            this.unflipCards();
        }
    }

    disableCards() {
        this.lockBoard = true;
        
        const card1 = this.firstCard;
        const card2 = this.secondCard;

        setTimeout(() => {
            SoundSynth.playMatch();
            
            card1.classList.add('matched');
            card2.classList.add('matched');
            
            card1.classList.add('matched-fx');
            card2.classList.add('matched-fx');
            
            this.matchedPairs++;
            
            // Clean up visual effect classes after animation runs
            setTimeout(() => {
                card1.classList.remove('matched-fx');
                card2.classList.remove('matched-fx');
            }, 600);

            this.resetBoardState();

            if (this.matchedPairs === 12) {
                setTimeout(() => this.winGame(), 600);
            }
        }, 300);
    }

    unflipCards() {
        this.lockBoard = true;
        
        const card1 = this.firstCard;
        const card2 = this.secondCard;

        setTimeout(() => {
            SoundSynth.playMismatch();
            
            card1.classList.add('shake-fx');
            card2.classList.add('shake-fx');
            
            setTimeout(() => {
                card1.classList.remove('flipped', 'shake-fx');
                card2.classList.remove('flipped', 'shake-fx');
                this.resetBoardState();
            }, 600);
        }, 400);
    }

    resetBoardState() {
        this.firstCard = null;
        this.secondCard = null;
        this.lockBoard = false;
    }

    // -------------------------------------------------------------
    // Timer System
    // -------------------------------------------------------------
    startTimer() {
        this.secondsElapsed = 0;
        this.timerInterval = setInterval(() => {
            this.secondsElapsed++;
            this.timerDisplay.textContent = this.formatTime(this.secondsElapsed);
        }, 1000);
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // -------------------------------------------------------------
    // Sound Manager
    // -------------------------------------------------------------
    toggleSound() {
        SoundSynth.enabled = !SoundSynth.enabled;
        const textNode = this.soundToggle.querySelector('.text');
        const iconNode = this.soundToggle.querySelector('.icon');
        
        if (SoundSynth.enabled) {
            textNode.textContent = 'เสียง: เปิด';
            iconNode.textContent = '🔊';
        } else {
            textNode.textContent = 'เสียง: ปิด';
            iconNode.textContent = '🔇';
        }
    }

    // -------------------------------------------------------------
    // Win Screen & High Score
    // -------------------------------------------------------------
    winGame() {
        clearInterval(this.timerInterval);
        
        // Play victory sound
        SoundSynth.playWin();
        
        // Fill out modal info
        this.finalTimeDisplay.textContent = this.formatTime(this.secondsElapsed);
        this.finalMovesDisplay.textContent = `${this.moves} ครั้ง`;
        
        // Evaluate high scores
        let isNewRecord = false;
        
        // Compare moves (bestScore)
        if (this.bestScore === null || this.moves < this.bestScore) {
            this.bestScore = this.moves;
            localStorage.setItem('bestScore', this.moves);
            isNewRecord = true;
        }

        // Compare time (bestTime)
        if (this.bestTime === null || this.secondsElapsed < this.bestTime) {
            this.bestTime = this.secondsElapsed;
            localStorage.setItem('bestTime', this.secondsElapsed);
            isNewRecord = true;
        }
        
        this.updateBestScoreDisplay();
        
        // Show record banner if applicable
        if (isNewRecord) {
            this.newRecordBanner.style.display = 'block';
        } else {
            this.newRecordBanner.style.display = 'none';
        }
        
        // Open Modal overlay
        this.modalOverlay.classList.add('active');
        
        // Trigger particles
        this.triggerConfetti();
    }

    closeModal() {
        this.modalOverlay.classList.remove('active');
    }

    updateBestScoreDisplay() {
        if (this.bestScore !== null && this.bestTime !== null) {
            this.bestScoreDisplay.textContent = `${this.bestScore} ครั้ง (${this.formatTime(this.bestTime)})`;
        } else {
            this.bestScoreDisplay.textContent = '--';
        }
    }

    triggerConfetti() {
        const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6'];
        const confettiCount = 120;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random properties
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.floor(Math.random() * 8) + 6; // 6px to 14px
            const left = Math.random() * 100; // 0% to 100%
            const animDuration = Math.random() * 2 + 2; // 2s to 4s
            const animDelay = Math.random() * 0.5; // Staggered delays
            
            confetti.style.left = `${left}vw`;
            confetti.style.backgroundColor = randomColor;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.animationDuration = `${animDuration}s`;
            confetti.style.animationDelay = `${animDelay}s`;
            
            // Shapes: mix circles and squares
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '0%';
            }
            
            document.body.appendChild(confetti);
            
            // Remove element after animation ends
            setTimeout(() => {
                confetti.remove();
            }, (animDuration + animDelay) * 1000);
        }
    }
}

// -------------------------------------------------------------
// Boot Game on load
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    new Game();
});
