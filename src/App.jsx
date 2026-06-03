import React, { useState, useEffect } from 'react';

export default function App() {
  // SafeScan AI Simulator States
  const [selectedScanItem, setSelectedScanItem] = useState('cosmetics');
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [userProfile, setUserProfile] = useState({
    sensitiveSkin: false,
    glutenSensitive: false,
    pregnant: false,
    aspirinAllergy: false
  });

  // FinancialGuard SIP Calculator States
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [tenureYears, setTenureYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [sipCalculation, setSipCalculation] = useState({ totalInvestment: 0, estimatedReturns: 0, totalValue: 0 });

  // Trading Bot Simulator States
  const [botRunning, setBotRunning] = useState(true);
  const [selectedStrategy, setSelectedStrategy] = useState('RSI_Momentum');
  const [tickerPrices, setTickerPrices] = useState({ BTC: 67430.50, ETH: 3482.20, SOL: 142.15 });
  const [botMetrics, setBotMetrics] = useState({
    winRate: 74.2,
    netProfit: 1450.80,
    activePosition: 'LONG ETH',
    lastActionTime: '17:00:15',
    lastActionSignal: 'BUY TRIGGERED'
  });

  // Airplane Seating Simulator States
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [reservedSeats, setReservedSeats] = useState(['A1', 'B3', 'C4', 'E2']);

  // Real-Time Trading Bot Simulator Thread Simulation
  useEffect(() => {
    if (!botRunning) return;

    const interval = setInterval(() => {
      setTickerPrices(prev => {
        const nextBtc = prev.BTC + (Math.random() - 0.5) * 65;
        const nextEth = prev.ETH + (Math.random() - 0.5) * 4;
        const nextSol = prev.SOL + (Math.random() - 0.5) * 0.3;
        
        if (Math.random() > 0.6) {
          const timestamp = new Date().toTimeString().split(' ')[0];
          const actions = ['BUY TRIGGERED', 'SELL EXECUTED', 'TRAILING STOP MET', 'LIMIT ORDER PLACED'];
          const randomAction = actions[Math.floor(Math.random() * actions.length)];
          const positions = ['LONG BTC', 'SHORT ETH', 'NEUTRAL', 'LONG SOL'];
          
          setBotMetrics(prevMetrics => ({
            winRate: +(prevMetrics.winRate + (Math.random() - 0.5) * 0.4).toFixed(1),
            netProfit: +(prevMetrics.netProfit + (Math.random() - 0.4) * 8.5).toFixed(2),
            activePosition: positions[Math.floor(Math.random() * positions.length)],
            lastActionTime: timestamp,
            lastActionSignal: randomAction
          }));
        }

        return { BTC: nextBtc, ETH: nextEth, SOL: nextSol };
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [botRunning]);

  // Real-time dynamic SIP calculation stream
  useEffect(() => {
    const P = monthlyInvestment;
    const i = (expectedReturn / 12) / 100;
    const n = tenureYears * 12;

    const totalInvestment = P * n;
    const totalValue = P * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    const estimatedReturns = totalValue - totalInvestment;

    setSipCalculation({
      totalInvestment: Math.round(totalInvestment),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(totalValue)
    });
  }, [monthlyInvestment, tenureYears, expectedReturn]);

  // SafeScan AI Simulator Run Execution Mocking
  const handleStartScan = () => {
    setScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setScanning(false);
      
      let baseScore = 15;
      let flaggedItems = [];
      let summaryText = '';

      if (selectedScanItem === 'cosmetics') {
        baseScore = 32;
        if (userProfile.sensitiveSkin) {
          baseScore += 35;
          flaggedItems.push('Methylparaben (Preservative - High irritation hazard on sensitive skin)');
        }
        if (userProfile.pregnant) {
          baseScore += 25;
          flaggedItems.push('Retinyl Palmitate (Vitamin A derivative - Avoid during pregnancy)');
        }
        summaryText = baseScore > 50 
          ? 'Moderate to High Risk: Ingredient triggers detected for your active profile filters.' 
          : 'Low Risk: Common preservatives found, minimal risk detected for your current profile filters.';
      } else if (selectedScanItem === 'skincare') {
        baseScore = 20;
        if (userProfile.sensitiveSkin) {
          baseScore += 45;
          flaggedItems.push('Salicylic Acid (Beta Hydroxy Acid - High concentration can trigger severe dryness & redness)');
        }
        summaryText = baseScore > 50 
          ? 'Sensitivity Warning: Exfoliants detected that are highly reactive with sensitive skin profiles.' 
          : 'Safe Grade: Standard non-reactive humectants mapped cleanly.';
      } else if (selectedScanItem === 'food') {
        baseScore = 10;
        if (userProfile.glutenSensitive) {
          baseScore += 75;
          flaggedItems.push('Hydrolyzed Wheat Protein (Gluten content - Triggers automatic digestive allergy pathways)');
        }
        summaryText = baseScore > 50 
          ? 'Allergen Alert: Active gluten compounds detected on consumer food product label.' 
          : 'Allergen Free: Clean, high-grade whole foods profile mapped.';
      } else if (selectedScanItem === 'medicines') {
        baseScore = 25;
        if (userProfile.aspirinAllergy) {
          baseScore += 70;
          flaggedItems.push('Acetylsalicylic Acid (Aspirin active agent - Severe hypersensitivity warning)');
        }
        summaryText = baseScore > 50 
          ? 'Critical Contraindication: Active ingredients violate your specified medicine/aspirin allergy rules.' 
          : 'Contraindication Passed: Standard chemical formulations mapped cleanly against your health profile.';
      } else {
        baseScore = 15;
        summaryText = 'Clean Analysis: Standard supplement profile checked with zero toxic concentrations.';
      }

      setScanResult({
        score: baseScore,
        status: baseScore > 50 ? 'Hazard Alert' : 'Highly Compatible',
        flagged: flaggedItems,
        summary: summaryText
      });
    }, 1800);
  };

  const toggleSeat = (seatId) => {
    if (reservedSeats.includes(seatId)) return;
    setSelectedSeat(prev => prev === seatId ? null : seatId);
  };

  const advancedStyles = `
    :root {
      --bg-deep: #020617;
      --bg-surface: #0b1329;
      --bg-card: #111a36;
      --border-glow: #1e293b;
      --primary: #3b82f6;
      --primary-neon: #60a5fa;
      --accent-neon: #06b6d4;
      --text-glow: #f8fafc;
      --text-muted: #94a3b8;
    }

    * {
      box-sizing: border-box;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .portfolio-container {
      background-color: var(--bg-deep);
      color: var(--text-glow);
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      position: relative;
    }

    /* Animated Background Grid Effect */
    .portfolio-container::before {
      content: "";
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: 
        linear-gradient(to right, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      mask-image: radial-gradient(circle at 50% 30%, black 70%, transparent 100%);
      -webkit-mask-image: radial-gradient(circle at 50% 30%, black 70%, transparent 100%);
      pointer-events: none;
      z-index: 1;
    }

    /* Floating Neon Orbs Animation */
    @keyframes floatOrb {
      0% { transform: translate(0px, 0px) scale(1); }
      50% { transform: translate(30px, -50px) scale(1.15); }
      100% { transform: translate(0px, 0px) scale(1); }
    }

    .neon-blur-orb {
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
      filter: blur(40px);
      top: 10%;
      left: 15%;
      animation: floatOrb 8s infinite ease-in-out;
      pointer-events: none;
      z-index: 0;
    }

    /* Hero Section */
    .hero-wrapper {
      position: relative;
      padding: 140px 24px 80px 24px;
      text-align: center;
      z-index: 10;
    }

    .glow-name {
      font-size: 3.5rem;
      font-weight: 900;
      margin: 0;
      letter-spacing: -0.03em;
      text-transform: uppercase;
      background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .animated-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 12px 0 0 0;
      background: linear-gradient(to right, var(--primary-neon), var(--accent-neon));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 0.02em;
    }

    .hero-description {
      max-width: 650px;
      margin: 24px auto 0 auto;
      color: var(--text-muted);
      font-size: 1rem;
      line-height: 1.7;
    }

    /* Interactive Buttons */
    .interactive-btn-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-top: 40px;
    }

    .btn-cyber {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 28px;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-radius: 8px;
      cursor: pointer;
      overflow: hidden;
    }

    .btn-cyber-primary {
      background: var(--primary);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 20px rgba(59, 130, 246, 0.25);
    }

    .btn-cyber-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
      background: #2563eb;
    }

    .btn-cyber-secondary {
      background: rgba(15, 23, 42, 0.6);
      color: var(--text-glow);
      border: 1px solid var(--border-glow);
      backdrop-filter: blur(8px);
    }

    .btn-cyber-secondary:hover {
      transform: translateY(-3px);
      border-color: var(--accent-neon);
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.25);
      color: white;
    }

    .btn-cyber-accent {
      background: rgba(6, 182, 212, 0.05);
      color: var(--accent-neon);
      border: 1px solid rgba(6, 182, 212, 0.3);
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 15px rgba(6, 182, 212, 0.05);
    }

    .btn-cyber-accent:hover {
      transform: translateY(-3px);
      background: rgba(6, 182, 212, 0.15);
      border-color: var(--accent-neon);
      box-shadow: 0 0 25px rgba(6, 182, 212, 0.4);
      color: white;
    }

    /* Section Separators */
    .content-shell {
      max-width: 950px;
      margin: 0 auto;
      padding: 40px 24px 100px 24px;
      position: relative;
      z-index: 10;
    }

    .section-indicator {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 80px 0 32px 0;
    }

    .glow-line {
      height: 1px;
      flex-grow: 1;
      background: linear-gradient(to right, var(--primary), transparent);
    }

    .section-label {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--text-muted);
    }

    /* Responsive Grid Structure */
    .grid-three-col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .interactive-card {
      background: rgba(11, 19, 41, 0.45);
      border: 1px solid var(--border-glow);
      border-radius: 16px;
      padding: 32px;
      backdrop-filter: blur(12px);
      position: relative;
    }

    .interactive-card:hover {
      transform: translateY(-5px) scale(1.01);
      border-color: rgba(59, 130, 246, 0.4);
      box-shadow: 0 10px 30px rgba(2, 6, 23, 0.7), 0 0 20px rgba(59, 130, 246, 0.05);
    }

    .card-accent-title {
      font-size: 14px;
      font-weight: 800;
      color: var(--accent-neon);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 20px 0;
    }

    .pill-box {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .neon-pill {
      font-size: 12px;
      font-weight: 600;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid #1e293b;
      padding: 6px 14px;
      border-radius: 8px;
      color: #cbd5e1;
    }

    .neon-pill:hover {
      border-color: var(--primary-neon);
      color: white;
      background: rgba(59, 130, 246, 0.05);
    }

    /* Premium Project Card Interfaces */
    .project-card-premium {
      background: linear-gradient(135deg, rgba(17, 26, 54, 0.4), rgba(11, 19, 41, 0.3));
      border: 1px solid var(--border-glow);
      border-radius: 20px;
      padding: 40px;
      margin-bottom: 32px;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(10px);
    }

    .project-card-premium::before {
      content: "";
      position: absolute;
      top: 0; left: 0; width: 100%; height: 2px;
      background: linear-gradient(to right, transparent, var(--primary-neon), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card-premium:hover::before {
      opacity: 1;
    }

    .project-card-premium:hover {
      border-color: rgba(6, 182, 212, 0.3);
      box-shadow: 0 20px 40px rgba(2, 6, 23, 0.8);
    }

    .project-meta-vertical-stack {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }

    .project-main-title {
      font-size: 1.5rem;
      font-weight: 800;
      margin: 0;
      color: #ffffff;
    }

    .project-tech-string {
      font-size: 11px;
      font-weight: 700;
      color: var(--primary-neon);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-top: 6px;
    }

    .project-status-tag {
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      background: rgba(6, 182, 212, 0.15);
      color: var(--accent-neon);
      padding: 2px 10px;
      border-radius: 4px;
      letter-spacing: 0.05em;
    }

    .bullet-list-futuristic {
      margin: 24px 0 0 0;
      padding: 0;
      list-style: none;
    }

    .bullet-list-futuristic li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 14px;
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .bullet-list-futuristic li::before {
      content: "→";
      position: absolute;
      left: 0;
      top: -1px;
      color: var(--accent-neon);
      font-weight: bold;
    }

    /* Embedded Simulator Panel Custom Classes */
    .simulator-container {
      margin-top: 28px;
      background: rgba(2, 6, 23, 0.8);
      border: 1px solid rgba(30, 41, 59, 0.7);
      border-radius: 12px;
      padding: 24px;
      width: 100%;
    }

    .sim-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
      border-bottom: 1px solid #1e293b;
      padding-bottom: 10px;
    }

    .sim-title {
      font-size: 11px;
      font-weight: 900;
      color: var(--accent-neon);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sim-desc {
      font-size: 12px;
      color: var(--text-muted);
      margin: 0 0 16px 0;
    }

    /* Polite Non-Intrusive Context Note */
    .sim-info-note {
      font-size: 12px;
      color: var(--text-muted);
      background: rgba(30, 41, 59, 0.25);
      border-left: 3px solid var(--accent-neon);
      padding: 10px 14px;
      border-radius: 4px;
      margin-bottom: 16px;
      line-height: 1.5;
    }

    .sim-flex-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 16px;
    }

    .sim-button {
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid #1e293b;
      color: var(--text-glow);
      padding: 10px 18px;
      font-size: 12px;
      font-weight: 700;
      border-radius: 6px;
      cursor: pointer;
      text-transform: uppercase;
    }

    .sim-button:hover {
      border-color: var(--primary-neon);
      background: rgba(59, 130, 246, 0.05);
    }

    .sim-button.active {
      background: rgba(6, 182, 212, 0.15);
      color: var(--accent-neon);
      border-color: var(--accent-neon);
    }

    .sim-button-submit {
      width: 100%;
      background: var(--primary);
      color: white;
      border: none;
      padding: 12px;
      font-weight: 800;
      font-size: 12px;
      border-radius: 6px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .sim-button-submit:hover {
      background: #2563eb;
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
    }

    .sim-button-submit:disabled {
      background: #1e293b;
      color: #64748b;
      cursor: not-allowed;
      box-shadow: none;
    }

    .sim-text-input {
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid #1e293b;
      border-radius: 6px;
      padding: 12px;
      color: white;
      font-family: 'Fira Code', monospace;
      font-size: 12px;
      width: 100%;
      resize: none;
      outline: none;
    }

    .sim-text-input:focus {
      border-color: var(--accent-neon);
    }

    .result-box {
      margin-top: 16px;
      padding: 16px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid #1e293b;
      border-radius: 8px;
    }

    .result-title {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }

    /* Grid layout configurations for calculator */
    .calculator-form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 16px;
    }

    .calculator-field {
      display: flex;
      flex-direction: column;
    }

    .calculator-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 6px;
    }

    .calculator-input {
      background: rgba(15, 23, 42, 0.9);
      border: 1px solid #1e293b;
      border-radius: 6px;
      padding: 10px 14px;
      color: white;
      outline: none;
      font-size: 13px;
    }

    .calculator-input:focus {
      border-color: var(--primary);
    }

    .calc-stats-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 16px;
      padding: 16px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid #1e293b;
      border-radius: 8px;
      font-family: monospace;
      font-size: 12px;
    }

    /* Trading Bot Controller Styles */
    .bot-tickers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 16px;
      text-align: center;
    }

    .ticker-card {
      background: rgba(15, 23, 42, 0.85);
      padding: 12px;
      border-radius: 6px;
      border: 1px solid #1e293b;
      font-family: monospace;
    }

    .ticker-label {
      font-size: 10px;
      color: var(--text-muted);
      text-transform: uppercase;
    }

    .ticker-val {
      font-size: 14px;
      font-weight: 700;
      color: var(--primary-neon);
      margin-top: 4px;
    }

    .bot-parameters-box {
      background: rgba(15, 23, 42, 0.9);
      padding: 16px;
      border-radius: 8px;
      border: 1px solid #1e293b;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
      font-size: 12px;
      font-family: monospace;
    }

    .metric-item {
      border-left: 2px solid var(--accent-neon);
      padding-left: 12px;
    }

    .metric-title {
      font-size: 10px;
      color: var(--text-muted);
      text-transform: uppercase;
    }

    .metric-value {
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      margin-top: 4px;
    }

    /* Seating Allocation Styles */
    .seating-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }

    .seat-btn {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      font-family: monospace;
    }

    .seat-available {
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid #1e293b;
      color: var(--text-muted);
    }

    .seat-available:hover {
      border-color: var(--accent-neon);
      color: white;
    }

    .seat-reserved {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: #ef4444;
      cursor: not-allowed;
    }

    .seat-selected {
      background: rgba(6, 182, 212, 0.2);
      border: 1px solid var(--accent-neon);
      color: var(--accent-neon);
    }

    /* Premium Achievement Display */
    .achievement-premium-box {
      background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.08), transparent 50%), #0b1329;
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 16px;
      padding: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .achievement-headline {
      font-size: 1.15rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0 0 6px 0;
    }

    .badge-merit {
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      background: var(--primary);
      color: white;
      padding: 4px 10px;
      border-radius: 4px;
      letter-spacing: 0.05em;
    }

    @media (max-width: 768px) {
      .glow-name { font-size: 2.5rem; }
      .project-card-premium { padding: 28px; }
    }
  `;

  return (
    <div className="portfolio-container">
      <style dangerouslySetInnerHTML={{ __html: advancedStyles }} />
      <div className="neon-blur-orb"></div>
      
      {/* HERO / HEADER SECTION */}
      <header className="hero-wrapper">
        <h1 className="glow-name">Atharva Sawant</h1>
        <p className="animated-title">Computer Engineering Student | AI Integration & Full-Stack Developer</p>
        <p className="hero-description">
          Detail-oriented undergraduate scholar studying at <strong style={{color: '#fff'}}>KJ Somaiya College of Engineering</strong>. 
          Specialized in compiling secure relational logic pipelines, constructing high-performance mobile architectures, and executing context-aware localized large language model interfaces.
        </p>

        <div className="interactive-btn-container">
          <a href="https://github.com/Atharva9627" target="_blank" rel="noreferrer" className="btn-cyber btn-cyber-secondary">
            <i className="fab fa-github" style={{color: 'var(--accent-neon)'}}></i> Source Repositories
          </a>
          <a href="https://www.linkedin.com/in/atharva-sawant-3548a031a" target="_blank" rel="noreferrer" className="btn-cyber btn-cyber-primary">
            <i className="fab fa-linkedin"></i> Connect Externally
          </a>
          <a href="/resume.pdf" download="Atharva_Sawant_Resume.pdf" className="btn-cyber btn-cyber-accent">
            <i className="fas fa-file-download"></i> Download Resume
          </a>
        </div>
      </header>

      {/* CORE DISPLAY PORTS */}
      <main className="content-shell">
        
        {/* ARCHITECTURAL CAPABILITIES */}
        <section>
          <div className="section-indicator">
            <h2 className="section-label">01 // Architectural Capabilities</h2>
            <div className="glow-line"></div>
          </div>

          <div className="grid-three-col">
            <div className="interactive-card">
              <h3 className="card-accent-title">Core Languages</h3>
              <div className="pill-box">
                {["Python", "C", "C++", "Java", "PHP 8.x", "R", "Dart", "SQL (PostgreSQL, MySQL)", "HTML5", "CSS3", "JavaScript"].map(lang => (
                  <span key={lang} className="neon-pill">{lang}</span>
                ))}
              </div>
            </div>

            <div className="interactive-card">
              <h3 className="card-accent-title">Frameworks & Core AI</h3>
              <div className="pill-box">
                {["Flutter", "Flask", "LLM Integration", "Machine Learning (ML)", "API Integration", "REST API", "TensorFlow", "WAMP/LAMP Stack", "PDO (Secure Prepared Statements)", "Git/GitHub"].map(fw => (
                  <span key={fw} className="neon-pill">{fw}</span>
                ))}
              </div>
            </div>

            <div className="interactive-card">
              <h3 className="card-accent-title">AI & Specialties</h3>
              <div className="pill-box">
                {["Multimodal LLMs", "Multimodal Vision API", "NLP", "Full-Stack Architecture", "Toxicity Scoring Models"].map(spec => (
                  <span key={spec} className="neon-pill">{spec}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SYSTEM */}
        <section>
          <div className="section-indicator">
            <h2 className="section-label">02 // Production Build Engineering</h2>
            <div className="glow-line"></div>
          </div>

          {/* 1. SafeScan AI (Active Spotlight) */}
          <div className="project-card-premium">
            <div className="project-meta-vertical-stack">
              <div>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap'}}>
                  <h3 className="project-main-title">SafeScan AI</h3>
                  <span className="project-status-tag">In Progress</span>
                </div>
                <div className="project-tech-string">AI Analysis // Python · Multimodal Vision API · FastAPI · NLP</div>
              </div>
            </div>
            <ul className="bullet-list-futuristic">
              <li>Developing a cross-vertical safety analyzer utilizing multimodal vision models to perform high-accuracy Optical Character Recognition (OCR) on complex consumer labels, identifying 100+ harmful additives in food, personal care, and cosmetics categories.</li>
              <li>Architecting an intelligence toxicity-scoring engine that cross-references extracted chemical nomenclature against FDA, WHO, and CIR databases to generate actionable consumer-friendly health-impact vectors.</li>
            </ul>

            {/* Embedded SafeScan AI Simulator Panel */}
            <div className="simulator-container">
              <div className="sim-header">
                <div className="sim-title">
                  <i className="fas fa-barcode"></i> SafeScan Lab Scanning Simulator
                </div>
              </div>
              
              {/* POLITE NON-INTRUSIVE NOTE */}
              <div className="sim-info-note">
                Note: This interactive module serves as a visual preview of the user-interface layout. The complete application integrates a larger, multi-layered processing architecture for label scanning.
              </div>
              
              <p className="sim-desc">Choose a mock label category to test the analyzer's OCR & toxicity score cross-referencing model.</p>
              
              <div className="sim-flex-row">
                <button 
                  onClick={() => setSelectedScanItem('cosmetics')}
                  className={`sim-button ${selectedScanItem === 'cosmetics' ? 'active' : ''}`}>
                  Cosmetic Cream Label
                </button>
                <button 
                  onClick={() => setSelectedScanItem('skincare')}
                  className={`sim-button ${selectedScanItem === 'skincare' ? 'active' : ''}`}>
                  Organic Aloe Gel Label
                </button>
              </div>

              <div style={{marginBottom: '16px'}}>
                <textarea 
                  className="sim-text-input"
                  style={{height: '64px'}}
                  value={selectedScanItem === 'cosmetics' ? 'Sodium Laureth Sulfate, Methylparaben, Formaldehyde, Phenoxyethanol' : 'Organic Aloe Vera Juice, Pure Honey Extract, Water, Xanthan Gum'} 
                  readOnly 
                />
              </div>

              <button 
                onClick={handleStartScan}
                disabled={scanning}
                className="sim-button-submit">
                {scanning ? 'Initializing OCR & Querying Databases...' : 'Execute Mock Ingredients Scan'}
              </button>

              {scanResult && (
                <div className="result-box">
                  <div style={{display: 'flex', justifycontent: 'space-between', alignitems: 'center', marginbottom: '8px'}}>
                    <span style={{fontSize: '11px', color: '#cbd5e1', fontWeight: 'bold'}}>Analysis Status:</span>
                    <span style={{fontSize: '11px', fontWeight: '900', color: scanResult.score > 50 ? '#f87171' : '#4ade80'}}>
                      {scanResult.status} ({scanResult.score}/100 Toxicity)
                    </span>
                  </div>
                  <p style={{fontSize: '12px', color: '#94a3b8', margin: '0 0 12px 0'}}>{scanResult.summary}</p>
                  {scanResult.flagged.length > 0 && (
                    <div>
                      <div style={{fontSize: '10px', fontWeight: '900', color: '#f87171', letterSpacing: '0.1em', marginBottom: '4px'}}>Flagged Compounds:</div>
                      <ul style={{fontSize: '12px', margin: 0, paddingLeft: '16px', color: '#64748b'}}>
                        {scanResult.flagged.map((f, i) => <li key={i} style={{marginBottom: '4px'}}>{f}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 2. LearnFlow */}
          <div className="project-card-premium">
            <div className="project-meta-vertical-stack">
              <div>
                <h3 className="project-main-title">LearnFlow — Automated Intelligent Evaluation</h3>
                <div className="project-tech-string">Backend Infrastructure // PHP 8.x · MySQL · API Integration · WAMP Stack</div>
              </div>
              <a href="https://github.com/Atharva9627/LearnFlow.git" target="_blank" rel="noreferrer" className="btn-cyber btn-cyber-secondary" style={{padding: '8px 16px', fontSize: '11px'}}>
                Initialize Code Inspection
              </a>
            </div>
            <ul className="bullet-list-futuristic">
              <li>Designed and deployed a secure classroom management platform utilizing PHP Data Objects (PDO) to enforce strict database security and eliminate SQL injection vulnerabilities.</li>
              <li>Optimized EdTech workflows by engineering an AI-to-PHP bridge for automated quiz generation, reducing assessment overhead by 80% and implementing "Hard Blocks" for testing integrity.</li>
            </ul>
          </div>

          {/* 3. FinancialGuard AI */}
          <div className="project-card-premium">
            <div className="project-meta-vertical-stack">
              <div>
                <h3 className="project-main-title">FinancialGuard AI — Deep Advisory Engine</h3>
                <div className="project-tech-string">Mobile Architecture // Flutter · Dart · REST API Integration · Market Streams</div>
              </div>
              <a href="https://github.com/Atharva9627/FinancialguardAI.git" target="_blank" rel="noreferrer" className="btn-cyber btn-cyber-secondary" style={{padding: '8px 16px', fontSize: '11px'}}>
                Initialize Code Inspection
              </a>
            </div>
            <ul className="bullet-list-futuristic">
              <li>Architected and styled a cross-platform financial management environment in Flutter, integrating asynchronous system stream pipelines to consume live market datasets and calculate real-time asset volatility metrics along with automated SIP ROI projection profiles.</li>
              <li>Injected localized REST API conversational threads using advanced LLM integration to render real-time, context-aware financial portfolio recommendations mapped directly to user-inputted expense profiles.</li>
            </ul>

            {/* Embedded SIP Wealth Calculator Dashboard */}
            <div className="simulator-container">
              <div className="sim-header">
                <div className="sim-title">
                  <i className="fas fa-chart-line"></i> FinancialGuard SIP Wealth Projection Card
                </div>
              </div>
              
              {/* POLITE NON-INTRUSIVE NOTE */}
              <div className="sim-info-note">
                Note: This calculator demonstrates the client-side mathematical formula. The primary project encompasses dynamic background streaming and larger cross-platform frameworks.
              </div>

              <p className="sim-desc">Calculate compound interest returns mapped dynamically to your investment parameters.</p>
              
              <div className="calculator-form-grid">
                <div className="calculator-field">
                  <label className="calculator-label">Monthly investment (₹)</label>
                  <input 
                    type="number" 
                    className="calculator-input" 
                    value={monthlyInvestment} 
                    onChange={e => setMonthlyInvestment(Math.max(0, parseInt(e.target.value) || 0))}
                  />
                </div>
                <div className="calculator-field">
                  <label className="calculator-label">Expected Return Rate (% p.a.)</label>
                  <input 
                    type="number" 
                    className="calculator-input" 
                    value={expectedReturn} 
                    onChange={e => setExpectedReturn(Math.max(0, parseFloat(e.target.value) || 0))}
                  />
                </div>
                <div className="calculator-field">
                  <label className="calculator-label">Investment Period (Years)</label>
                  <input 
                    type="number" 
                    className="calculator-input" 
                    value={tenureYears} 
                    onChange={e => setTenureYears(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
              </div>

              <div className="calc-stats-bar">
                <div>
                  <span style={{color: '#94a3b8'}}>Invested Capital:</span>
                  <div style={{fontWeight: 'bold', color: '#ffffff', marginTop: '4px'}}>₹ {sipCalculation.totalInvestment.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span style={{color: '#94a3b8'}}>Estimated Returns:</span>
                  <div style={{fontWeight: 'bold', color: '#4ade80', marginTop: '4px'}}>₹ {sipCalculation.estimatedReturns.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <span style={{color: '#94a3b8'}}>Total Wealth:</span>
                  <div style={{fontWeight: 'bold', color: '#60a5fa', marginTop: '4px'}}>₹ {sipCalculation.totalValue.toLocaleString('en-IN')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Trading Bot */}
          <div className="project-card-premium">
            <div className="project-meta-vertical-stack">
              <div>
                <h3 className="project-main-title">Algorithmic Quant Trading Bot</h3>
                <div className="project-tech-string">Execution Pipeline // Python · Machine Learning · REST API Client · Predictive Logic</div>
              </div>
              <a href="https://github.com/Atharva9627/trading_bot.git" target="_blank" rel="noreferrer" className="btn-cyber btn-cyber-secondary" style={{padding: '8px 16px', fontSize: '11px'}}>
                Initialize Code Inspection
              </a>
            </div>
            <ul className="bullet-list-futuristic">
              <li>Engineered a modular automated execution system running on Python, utilizing historical stock market data to compute mathematical volatility trends and train algorithmic prediction models.</li>
              <li>Integrated secure REST API connections to handle live ticker arrays, compiling a concurrent order execution loop that monitors pricing movements and evaluates strict risk-management stop boundaries.</li>
            </ul>

            {/* Embedded Quant Trading Bot Strategy and Controller Panel (Replaces Endless Log) */}
            <div className="simulator-container">
              <div className="sim-header">
                <div className="sim-title">
                  <i className="fas fa-terminal"></i> Bot Execution Strategy & Metrics Dashboard
                </div>
                <button 
                  onClick={() => setBotRunning(!botRunning)}
                  style={{
                    background: botRunning ? 'rgba(74, 222, 128, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    border: `1px solid ${botRunning ? '#4ade80' : '#ef4444'}`,
                    color: botRunning ? '#4ade80' : '#ef4444',
                    padding: '4px 12px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}>
                  {botRunning ? '● BOT ACTIVE' : '■ BOT STOPPED'}
                </button>
              </div>

              {/* POLITE NON-INTRUSIVE NOTE */}
              <div className="sim-info-note">
                Note: This control panel provides a focused visual interface. The full project implements advanced quantitative algorithms and live real-time network integration.
              </div>

              <p className="sim-desc">Change the quantitative parameter settings to observe real-time strategy adjustment metrics.</p>

              <div className="bot-tickers-grid">
                <div className="ticker-card">
                  <div className="ticker-label">BTC/USDT</div>
                  <div className="ticker-val">${tickerPrices.BTC.toFixed(2)}</div>
                </div>
                <div className="ticker-card">
                  <div className="ticker-label">ETH/USDT</div>
                  <div className="ticker-val">${tickerPrices.ETH.toFixed(2)}</div>
                </div>
                <div className="ticker-card">
                  <div className="ticker-label">SOL/USDT</div>
                  <div className="ticker-val">${tickerPrices.SOL.toFixed(2)}</div>
                </div>
              </div>

              <div className="sim-flex-row">
                <button 
                  onClick={() => setSelectedStrategy('RSI_Momentum')}
                  className={`sim-button ${selectedStrategy === 'RSI_Momentum' ? 'active' : ''}`}>
                  RSI Momentum
                </button>
                <button 
                  onClick={() => setSelectedStrategy('EMA_Crossover')}
                  className={`sim-button ${selectedStrategy === 'EMA_Crossover' ? 'active' : ''}`}>
                  EMA Crossover
                </button>
                <button 
                  onClick={() => setSelectedStrategy('Mean_Reversion')}
                  className={`sim-button ${selectedStrategy === 'Mean_Reversion' ? 'active' : ''}`}>
                  Mean Reversion
                </button>
              </div>

              <div className="bot-parameters-box">
                <div className="metric-item" style={{borderLeftColor: '#60a5fa'}}>
                  <div className="metric-title">Active Strategy</div>
                  <div className="metric-value">{selectedStrategy.replace('_', ' ')}</div>
                </div>
                <div className="metric-item" style={{borderLeftColor: '#4ade80'}}>
                  <div className="metric-title">Win Rate (%)</div>
                  <div className="metric-value">{botMetrics.winRate}%</div>
                </div>
                <div className="metric-item" style={{borderLeftColor: '#06b6d4'}}>
                  <div className="metric-title">Net Profit (USD)</div>
                  <div className="metric-value" style={{color: '#4ade80'}}>${botMetrics.netProfit}</div>
                </div>
                <div className="metric-item" style={{borderLeftColor: '#f59e0b'}}>
                  <div className="metric-title">Active Position</div>
                  <div className="metric-value">{botMetrics.activePosition}</div>
                </div>
              </div>

              <div className="result-box" style={{marginTop: '12px', padding: '12px', borderStyle: 'dashed'}}>
                <span className="calculator-label" style={{color: '#60a5fa'}}>Last Execution Telemetry:</span>
                <span style={{color: '#cbd5e1', float: 'right'}}>[{botMetrics.lastActionTime}]</span>
                <div style={{fontWeight: 'bold', fontSize: '13px', marginTop: '6px', color: botMetrics.lastActionSignal.includes('BUY') ? '#4ade80' : '#ef4444'}}>
                  {botMetrics.lastActionSignal} - Parameters successfully adjusted to market fluctuations.
                </div>
              </div>
            </div>
          </div>

          {/* 5. Airplane Ticket Management System */}
          <div className="project-card-premium">
            <div className="project-meta-vertical-stack">
              <div>
                <h3 className="project-main-title">Airplane Ticket Management System</h3>
                <div className="project-tech-string">System Logistics // Java · OOP Architecture · Relational Schema · Console Logic</div>
              </div>
              <a href="https://github.com/Atharva9627/airplane-ticket-management.git" target="_blank" rel="noreferrer" className="btn-cyber btn-cyber-secondary" style={{padding: '8px 16px', fontSize: '11px'}}>
                Initialize Code Inspection
              </a>
            </div>
            <ul className="bullet-list-futuristic">
              <li>Architected a robust console-driven transactional system using Object-Oriented Programming (OOP) design patterns in Java to model global flight scheduling arrays, seat allocations, and booking manifests.</li>
              <li>Compiled structured data validation mechanisms across relational tracking variables, managing transaction data security and tracking entity states cleanly within terminal execution instances.</li>
            </ul>

            {/* Embedded Seat Allocations visualizer map */}
            <div className="simulator-container">
              <div className="sim-header">
                <div className="sim-title">
                  <i className="fas fa-plane-departure"></i> Visual Airplane Cabin Manifest Manager
                </div>
              </div>

              {/* POLITE NON-INTRUSIVE NOTE */}
              <div className="sim-info-note">
                Note: This seating map displays cabin status flows. The complete system handles larger relational datasets and core database transaction layers.
              </div>

              <p className="sim-desc">Simulate real-time passenger manifest booking on our visual cabin layout.</p>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <div>
                  <div className="calculator-label" style={{marginBottom: '10px'}}>Interactive Seating Grid:</div>
                  <div className="seating-row">
                    {['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4'].map(seat => {
                      const isTaken = reservedSeats.includes(seat);
                      const isSelected = selectedSeat === seat;
                      return (
                        <button 
                          key={seat}
                          onClick={() => toggleSeat(seat)}
                          disabled={isTaken}
                          className={`seat-btn ${isTaken ? 'seat-reserved' : isSelected ? 'seat-selected' : 'seat-available'}`}>
                          {seat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="calc-stats-bar" style={{fontFamily: 'inherit'}}>
                  <div>
                    <span style={{color: '#94a3b8'}}>Selected Seat:</span>
                    <div style={{fontWeight: 'bold', color: '#ffffff', marginTop: '4px'}}>{selectedSeat || '---'}</div>
                  </div>
                  <div>
                    <span style={{color: '#94a3b8'}}>Row Class:</span>
                    <div style={{fontWeight: 'bold', color: '#60a5fa', marginTop: '4px'}}>
                      {selectedSeat ? (selectedSeat.startsWith('A') ? 'First Class' : selectedSeat.startsWith('B') || selectedSeat.startsWith('C') ? 'Business Class' : 'Economy Class') : '---'}
                    </div>
                  </div>
                  <div>
                    <span style={{color: '#94a3b8'}}>Unit Price:</span>
                    <div style={{fontWeight: 'bold', color: '#4ade80', marginTop: '4px'}}>
                      {selectedSeat ? `₹ ${(selectedSeat.startsWith('A') ? 15000 : selectedSeat.startsWith('B') || selectedSeat.startsWith('C') ? 10000 : 5000).toLocaleString('en-IN')}` : '---'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* COMPETITIVE MERIT RECORD */}
        <section>
          <div className="section-indicator">
            <h2 className="section-label">03 // Verified Milestones</h2>
            <div className="glow-line"></div>
          </div>

          <div className="achievement-premium-box">
            <div>
              <span className="badge-merit">Hackathon Elite</span>
              <h3 className="achievement-headline" style={{marginTop: '10px'}}>Top 8 Finalist — Sinhgad Hackathon 2026</h3>
              <p style={{margin: 0, fontSize: '14px', color: 'var(--text-muted)'}}>
                Pitched and developed a functional technical prototype within an intensive 24-hour sprint, finishing in the top 8 out of a wide competitive pool of squads. Validated technical system scalability and structural feasibility directly to an evaluation panel of industry technical experts.
              </p>
            </div>
            <div style={{fontSize: '12px', fontWeight: '800', color: 'var(--accent-neon)', letterSpacing: '0.1em', textTransform: 'uppercase'}}>
              Pandharpur, India
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{textAlign: 'center', padding: '40px 24px', fontSize: '11px', color: '#4b5563', borderTop: '1px solid var(--border-glow)', letterSpacing: '0.2em', textTransform: 'uppercase'}}>
        © 2026 Atharva Sawant. All rights reserved.
      </footer>
    </div>
  );
}