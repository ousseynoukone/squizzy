## 🗺️ Conceptual Routing and Page Transitions

The application's pages are the core views, and **routing** manages the transitions between them. Since this is a single-page application (SPA), likely using React Router, here's the planned navigation:

1.  **Home/Landing Page** (`home.jsx`) 🏠
    * **Transition to:** **Theme Selection** (via a prominent "Start Quiz" button).
    * **Transition to:** **Profile Page** (via a navigation link/icon).

2.  **Theme Selection Page** (`theme-selection.jsx`) 📚
    * **Transition to:** **Theme Info Page** (to view a theme's description).
    * **Transition to:** **Difficulty Selection** (after choosing a theme).

3.  **Difficulty Selection Page** (`difficulty-select.jsx`) ⚙️
    * **Transition to:** **Quiz Game Page** (after selecting a difficulty, starting the timer).

4.  **Quiz Game Page** (`quiz-game.jsx`) 🧠
    * **Internal Transition:** Transitions between questions.
    * **Transition to:** **Quiz Result Page** (upon answering the final question or the timer expiring).

5.  **Quiz Result Page** (`quiz-result.jsx`) 🏆
    * **Transition to:** **Home/Landing Page** (via a "Play Again" or "Go Home" button).

6.  **Profile Page** (`profile.jsx`) 👤
    * **Transition to:** **Home/Landing Page** (via a navigation link).
    * **Transition to:** **Quiz History** (potentially a sub-view within the profile).

---

## 🎣 Key React Hooks Usage

In a React application like Squizzy, **React Hooks** are essential for managing the dynamic state, fetching initial data, and handling side effects.

### 1. `useState` (State Management)

This hook would be used to manage all dynamic data that changes during the user's session:

* **Quiz Game Page**:
    * `[currentQuestion, setCurrentQuestion]` (Index or object of the question being displayed).
    * `[userAnswers, setUserAnswers]` (An array storing the user's response for each question).
    * `[timer, setTimer]` (The countdown value).
* **Results Page**:
    * `[finalScore, setFinalScore]` (The calculated final score).
* **Theme Selection Page**:
    * `[availableThemes, setAvailableThemes]` (The list of themes retrieved from a data source).
* **Profile Page**:
    * `[userData, setUserData]` (Information like pseudo, quiz history).

### 2. `useEffect` (Side Effects)

This hook is crucial for performing operations that interact with the outside world or need to run at specific points in the component lifecycle:

* **Data Loading**: Used on the **Theme Selection** and **Profile** pages to **load quiz themes** or **fetch user data** when the component first mounts.
* **Timer Logic**: Used on the **Quiz Game Page** to set up, start, and clear the countdown timer (`chrono`) that enforces the time limit.
* **State Persistence**: Used in conjunction with **`storage.js`** to save or retrieve user progress and settings from local storage.
* **Evaluation Trigger**: Used on the **Quiz Result Page** to trigger the calculation of the `finalScore` and the descriptive **Evaluation** after all answers are collected.

### 3. `useContext` (Global State, if implemented)

If user authentication and profile details (`pseudo`) are needed across many components, a **Context** could be set up for global access, managed via `useContext`:

* **User Context**: Holds the current user's login status and basic profile information, avoiding the need to pass props through many layers.

---

## 🗄️ Conceptual Data Structures

The conceptual objects defined in the original notes would be implemented as JavaScript objects/arrays, often managed by `useState`.

| Object | Key Properties (Conceptual) | Example Use Case |
| :--- | :--- | :--- |
| **Theme** | `id`, `title`, `description`, `questions` (Array of Question IDs) | Displayed on **Theme Selection Page**. |
| **Question** | `id`, `text`, `answers` (Array of strings), `correctAnswerIndex`, `difficulty` | Used on the **Quiz Game Page**. |
| **Difficulty** | `level` (e.g., "Easy"), `numQuestions`, `timeLimit`, `pointsPerCorrectAnswer` | Configured on the **Difficulty Selection Page** and informs the **Game Page**. |

Would you like me to elaborate on the conceptual logic within a specific utility file, such as how the **evaluation** might be calculated in `evaluation.js`?