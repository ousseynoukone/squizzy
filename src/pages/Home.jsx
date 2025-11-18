import React, { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import { themes } from "../data/quizData";
import { useNavigate } from "react-router-dom";

// Composant pour la carte de thème
const ThemeCard = ({ theme, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    borderTop: `5px solid ${theme.color}`,
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(theme)}
    >
      <div>
        <h3 style={{ margin: "0 0 10px 0" }}>{theme.title}</h3>
        <p style={{ fontSize: "0.9em", color: "#555" }}>
          {isHovered ? theme.description : "Cliquez pour jouer"}
        </p>
      </div>
      <button style={buttonStyle}>Jouer</button>
    </div>
  );
};

// Composant principal de la page d'accueil
const Home = () => {
  const { pseudo, setPseudo, setSelectedTheme, history } = useContext(QuizContext);
  const [isPseudoEntered, setIsPseudoEntered] = useState(!!pseudo);
  const navigate = useNavigate();

  const handlePseudoSubmit = (e) => {
    e.preventDefault();
    if (pseudo.trim()) {
      localStorage.setItem("quizPseudo", pseudo.trim());
      setIsPseudoEntered(true);
    }
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    navigate("/quiz"); // Naviguer vers la page de quiz/difficulté
  };

  if (!isPseudoEntered || !pseudo) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
        <div style={{ padding: "40px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)", textAlign: "center", maxWidth: "400px", width: "100%" }}>
          <h1 style={{ color: "#007bff", marginBottom: "5px" }}>SQ SQUIZZY</h1>
          <p style={{ color: "#666", marginBottom: "30px" }}>Le quiz moderne pour apprendre en s'amusant.</p>
          <form onSubmit={handlePseudoSubmit}>
            <label htmlFor="pseudo" style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>Qui êtes-vous ?</label>
            <input
              type="text"
              id="pseudo"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              placeholder="Léa, Hugo, Amira"
              style={{ width: "100%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }}
              required
            />
            <button type="submit" style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "10px 30px", borderRadius: "5px", cursor: "pointer", fontSize: "1em" }}>
              Valider
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <div style={{ color: "#007bff", fontSize: "1.5em", fontWeight: "bold" }}>SQ SQUIZZY</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px", fontWeight: "bold" }}>{pseudo}</span>
          {/* Placeholder pour l'avatar */}
          <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#ccc" }}></div>
        </div>
      </header>

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Choisissez un thème pour commencer</h2>
      {history.length > 0 && (
        <div style={{ marginBottom: "40px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)", maxWidth: "1200px", margin: "0 auto 40px auto" }}>
          <h3 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px", marginBottom: "15px" }}>Historique de {pseudo}</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eee" }}>
                <th style={{ padding: "8px", textAlign: "left" }}>Thème</th>
                <th style={{ padding: "8px", textAlign: "left" }}>Difficulté</th>
                <th style={{ padding: "8px", textAlign: "left" }}>Score</th>
                <th style={{ padding: "8px", textAlign: "left" }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {history.slice(-5).reverse().map((result) => (
                <tr key={result.id} style={{ borderBottom: "1px solid #f9f9f9" }}>
                  <td style={{ padding: "8px" }}>{result.theme}</td>
                  <td style={{ padding: "8px" }}>{result.difficulty}</td>
                  <td style={{ padding: "8px", fontWeight: "bold" }}>{result.score}</td>
                  <td style={{ padding: "8px", fontSize: "0.9em", color: "#777" }}>{result.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ textAlign: "right", marginTop: "10px", fontSize: "0.8em", color: "#999" }}>Affichage des 5 derniers résultats.</p>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        {themes.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} onSelect={handleThemeSelect} />
        ))}
      </div>
    </div>
  );
};

export default Home;
