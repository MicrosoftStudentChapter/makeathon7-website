import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Tracks.module.css";

// Resource URL mappings for linking to external resources
const resourceURLs = {
  // Predictive Intelligence resources
  "Applications of Artificial Intelligence in Disaster Management (ACM)": "https://dl.acm.org/doi/abs/10.1145/3564516",
  "AI for Disaster Response and Management | GeeksforGeeks": "https://www.geeksforgeeks.org/ai-for-disaster-response-and-management/",
  "How Can AI Be Used for Disaster Management? | Digital Defynd": "https://digitaldefynd.com/ai-in-disaster-management/",
  "AI in Disaster Management: How Artificial Intelligence is Saving Lives in Emergencies | HashStudioz": "https://www.hashstudioz.com/blog/ai-in-disaster-management",
  "The Role of AI in Disaster Management | CentralSquare": "https://www.centralsquare.com/blog/the-role-of-ai-in-disaster-management",
  "AI in Disaster Management: Predict, Respond, Prepare | Ultralytics": "https://www.ultralytics.com/blog/ai-in-disaster-management",
  "Toward an Integrated Disaster Management Approach | MDPI": "https://www.mdpi.com/2071-1050/14/9/5240",
  "Disease Prediction Using Machine Learning | Kaggle": "https://www.kaggle.com/datasets/kaushil268/disease-prediction-using-machine-learning",
  "Lifestyle and Chronic Disease Data | Kaggle": "https://www.kaggle.com/datasets/cdc/behavioral-risk-factor-surveillance-system",
  "Deepfake Detection Challenge Dataset | Kaggle": "https://www.kaggle.com/c/deepfake-detection-challenge",
  "Real-Time Deepfake Detection with TensorFlow Lite | TensorFlow Blog": "https://blog.tensorflow.org/2020/03/detecting-covid-19-using-chest-x-ray-images.html",
  "Deepware Scanner (Browser Integration Inspiration)": "https://deepware.ai/",
  "140k Real and Fake Faces Dataset": "https://www.kaggle.com/datasets/xhlulu/140k-real-and-fake-faces",
  "Find Open Datasets and Machine Learning Projects | Kaggle": "https://www.kaggle.com/datasets",
  "Open Government Data (OGD) Platform India": "https://data.gov.in/",
  "Google Maps API for Geo-Visualization": "https://developers.google.com/maps",
  "PlantVillage Dataset | Kaggle": "https://www.kaggle.com/datasets/abdallahalidev/plantvillage-dataset",
  "Crop Disease Detection using Deep Learning | Towards Data Science": "https://towardsdatascience.com/plant-disease-detection-using-deep-learning-9b58188dafd",
  "OpenWeatherMap API": "https://openweathermap.org/api",
  "CIC‑IDS2017": "https://www.unb.ca/cic/datasets/ids-2017.html",
  "Threat of Adversarial AI": "https://www.darpa.mil/program/guaranteeing-ai-robustness-against-deception",
  "Risks and Mitigation Strategies for Adversarial Artificial Intelligence Threats": "https://www.nist.gov/publications/adversarial-machine-learning",

  // FinTech & CyberSecurity resources
  "Voice AI for Accessibility | Microsoft AI Blog": "https://blogs.microsoft.com/ai/microsoft-ai-accessibility/",
  "Plaid API for Expense Tracking": "https://plaid.com/docs/",
  "Google Speech-to-Text API": "https://cloud.google.com/speech-to-text",
  "Cyber Threat Intelligence Platforms | VirusTotal": "https://www.virustotal.com/",
  "Shodan: The Search Engine for IoT Devices": "https://www.shodan.io/",
  "MITRE ATT&CK Framework": "https://attack.mitre.org/",
  "Have I Been Pwned API": "https://haveibeenpwned.com/API/v3",
  "Google Alerts or Threat Intelligence Feeds": "https://www.google.com/alerts",
  "Transformers for Text Classification": "https://huggingface.co/tasks/text-classification",
  "Cyberbullying Detection Dataset": "https://www.kaggle.com/datasets/mrmorj/hate-speech-and-offensive-language-dataset",
  "UNICEF Guidelines on Child Online Protection": "https://www.unicef.org/media/106731/file/Child%20Online%20Safety%20Assessment%20Tool.pdf",

  // IoT Track resources
  "IoT Prototyping with Raspberry Pi | Raspberry Pi Blog": "https://www.raspberrypi.org/blog/iot-prototyping/",
  "Twilio SMS and GPS APIs": "https://www.twilio.com/docs/sms",
  "ESP32 Microcontroller Documentation": "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/",
  "IoT Sensors for Road Monitoring | Arduino Blog": "https://blog.arduino.cc/category/iot/",
  "Geo-tagging with GPS Integration | Google Maps API": "https://developers.google.com/maps/documentation/geolocation/overview",
  "OpenStreetMap for Road Data": "https://www.openstreetmap.org/",
  "Arduino for IoT Prototyping": "https://www.arduino.cc/en/IoT/HomePage",
  "Bluetooth Low Energy (BLE) Communication Guides": "https://learn.adafruit.com/introduction-to-bluetooth-low-energy",
  "Google Firebase for Real-Time Data Logging": "https://firebase.google.com/docs/database",
  "Twilio for Notification Alerts": "https://www.twilio.com/docs/notify",

  // Web3 Track resources
  "Building DAOs with Ethereum | ConsenSys Blog": "https://consensys.net/blog/blockchain-explained/what-is-a-dao-and-how-do-they-work/",
  "Smart Contract Programming with Solidity": "https://docs.soliditylang.org/",
  "Snapshot Voting Platform": "https://snapshot.org/",
  "Blockchain-based KYC Solutions | Hyperledger Blog": "https://www.hyperledger.org/",
  "Using Smart Contracts for Fund Disbursement | Ethereum Blog": "https://ethereum.org/en/developers/docs/smart-contracts/",
  "Polygon Network for Low-Cost Transactions": "https://polygon.technology/",
  "Air Quality Sensor Datasets | OpenAQ": "https://openaq.org/",
  "Smart Contracts for Environmental Compliance | Ethereum Blog": "https://blog.ethereum.org/",
  "Arduino/ESP32 for IoT Sensor Integration": "https://www.arduino.cc/reference/en/libraries/esp32/",
  "NFT and SBT Standards | Ethereum Improvement Proposals": "https://eips.ethereum.org/",
  "Geo-tagging APIs | Google Maps API": "https://developers.google.com/maps/documentation/javascript/overview",
  "DAO Governance Tools | Aragon, DAOstack": "https://aragon.org/",
};

// Track data with tooltips
const trackData = {
  1: {
    name: "Predictive Intelligence",
    tooltip: "AI-powered solutions for forecasting and data analysis",
    problems: [
      {
        id: 1,
        title: "Disaster Management System",
        description: "Natural disasters like floods, earthquakes, and wildfires often leave authorities struggling to quickly identify affected zones, stranded individuals, and the extent of structural damage. The lack of timely, actionable information from satellite or drone imagery hampers efficient rescue and relief operations, potentially increasing casualties and resource misallocation. There is a need for a system that can rapidly and accurately analyze real-time imagery to support emergency response teams.",
        resources: [
          "Applications of Artificial Intelligence in Disaster Management (ACM)",
          "AI for Disaster Response and Management | GeeksforGeeks",
          "How Can AI Be Used for Disaster Management? | Digital Defynd",
          "AI in Disaster Management: How Artificial Intelligence is Saving Lives in Emergencies | HashStudioz",
          "The Role of AI in Disaster Management | CentralSquare",
          "AI in Disaster Management: Predict, Respond, Prepare | Ultralytics",
          "Toward an Integrated Disaster Management Approach | MDPI"
        ]
      },
      {
        id: 2,
        title: "Health Risk Prediction Tool",
        description: "Chronic diseases and health risks frequently go undetected due to limited access to early screening and a lack of personalized monitoring. Many individuals are unaware of how their daily lifestyle choices impact their long-term health, resulting in preventable complications and increased healthcare costs. A tool is needed to help users understand and predict potential health risks based on their lifestyle patterns, enabling earlier interventions and improved health outcomes.",
        resources: [
          "Disease Prediction Using Machine Learning | Kaggle",
          "Lifestyle and Chronic Disease Data | Kaggle"
        ]
      },
      {
        id: 3,
        title: "Deepfake Detection",
        description: "The proliferation of deepfake videos on social media platforms poses significant risks to personal privacy, public trust, and the spread of misinformation. Current detection methods are often too slow or resource-intensive for real-time use, allowing manipulated content to circulate widely before being flagged. There is a pressing need for a solution that can efficiently and accurately detect deepfake videos as they are shared, helping platforms and users identify manipulated media and reduce misinformation.",
        resources: [
          "Deepfake Detection Challenge Dataset | Kaggle",
          "Real-Time Deepfake Detection with TensorFlow Lite | TensorFlow Blog",
          "Deepware Scanner (Browser Integration Inspiration)",
          "140k Real and Fake Faces Dataset"
        ]
      },
      {
        id: 4,
        title: "Public Grievance Visualization Dashboard",
        description: "Municipal authorities often struggle to address public grievances related to urban infrastructure due to the high volume and scattered nature of complaints. Issues like drainage, sanitation, and streetlight failures can go unresolved for extended periods, leading to citizen dissatisfaction and public health risks. A system is needed to visualize, cluster, and prioritize geo-tagged complaints, enabling authorities to allocate resources more effectively and respond to urgent issues in a timely manner.",
        resources: [
          "Find Open Datasets and Machine Learning Projects | Kaggle",
          "Open Government Data (OGD) Platform India",
          "Google Maps API for Geo-Visualization"
        ]
      },
      {
        id: 5,
        title: "Crop Disease Prediction System",
        description: "Farmers face significant crop losses each year due to undetected or late-identified plant diseases, which can spread rapidly and devastate yields. Limited access to timely and accurate disease information makes it difficult for farmers to take preventive action. There is a need for a system that can analyze crop images and environmental data to predict disease outbreaks, supporting farmers in making informed decisions to protect their crops and livelihoods.",
        resources: [
          "PlantVillage Dataset | Kaggle",
          "Crop Disease Detection using Deep Learning | Towards Data Science",
          "OpenWeatherMap API"
        ]
      },
      {
        id: 6,
        title: "Securing Permissionless AI Networks",
        description: "Decentralized AI networks like those using Internet Computer Protocol (ICP) are open to everyone—but that also makes them vulnerable. Hackers can poison the training data, trick the AI with fake inputs, spread malware, or flood the system with fake users. We need smart, real-time tools that can catch and stop these threats to keep AI systems safe, trustworthy, and secure.",
        resources: [
          "CIC‑IDS2017",
          "Threat of Adversarial AI",
          "Risks and Mitigation Strategies for Adversarial Artificial Intelligence Threats"
        ]
      }
    ]
  },
  2: {
    name: "FinTech & CyberSecurity",
    tooltip: "Secure financial technologies and cyber defense solutions",
    problems: [
      {
        id: 7,
        title: "Expense Categorization for Visually Impaired Users",
        description: "Visually impaired individuals often face challenges in managing and categorizing their financial transactions due to inaccessible interfaces and the lack of hands-free solutions. This can lead to difficulties in budgeting, tracking expenses, and maintaining financial independence. There is a need for a voice-enabled financial assistant that can accurately categorize expenses and provide actionable spending insights through an accessible, hands-free interface.",
        resources: [
          "Voice AI for Accessibility | Microsoft AI Blog",
          "Plaid API for Expense Tracking",
          "Google Speech-to-Text API"
        ]
      },
      {
        id: 8,
        title: "Proactive Cybersecurity System for Startups",
        description: "Startups are increasingly targeted by sophisticated cyberattacks but often lack the resources and expertise to predict and prevent security breaches. Existing cybersecurity solutions may not provide proactive threat detection or tailored protection for small businesses, leaving digital assets vulnerable. A system is needed to help startups anticipate and mitigate cyber threats, safeguarding their data and operations.",
        resources: [
          "Cyber Threat Intelligence Platforms | VirusTotal",
          "Shodan: The Search Engine for IoT Devices",
          "MITRE ATT&CK Framework"
        ]
      },
      {
        id: 9,
        title: "Data Breach Awareness and Response for Small Businesses",
        description: "Micro, Small, and Medium Enterprises (MSMEs) are increasingly becoming targets of cyberattacks due to their limited cybersecurity infrastructure and lack of dedicated IT teams. Unlike larger organizations, small businesses often remain unaware when their confidential data—such as employee credentials, customer information, or internal documents—gets leaked on the dark web. This delay in detection can result in severe consequences, including financial loss, reputational damage, and legal liability. There is a pressing need for solutions that help these businesses stay informed about potential data breaches affecting them. By identifying compromised data early and providing actionable insights, small businesses can take swift steps to mitigate risks and enhance their overall cyber resilience.",
        resources: [
          "Have I Been Pwned API",
          "Google Alerts or Threat Intelligence Feeds",
          "MITRE ATT&CK Framework"
        ]
      },
      {
        id: 10,
        title: "Cyberbullying and Threat Detection on Social Media",
        description: "Online platforms are rife with hate speech, threats, and cyberbullying—especially affecting teenagers and vulnerable users. Platforms may not detect all threats in real-time, allowing harm to escalate. There's a need for an AI-powered browser plugin or parental tool that can monitor posts, messages, and comments in real-time for signs of cyberbullying, sending alerts to guardians or moderators when patterns of abuse are detected.",
        resources: [
          "Transformers for Text Classification",
          "Cyberbullying Detection Dataset",
          "UNICEF Guidelines on Child Online Protection"
        ]
      }
    ]
  },
  3: {
    name: "IoT Track",
    tooltip: "Connected device solutions for real-world challenges",
    problems: [
      {
        id: 11,
        title: "Tap-to-Alert Personal Safety Device",
        description: "In emergency situations, individuals may be unable to make phone calls or send messages to seek help. Existing personal safety devices can be cumbersome or slow to activate, reducing their effectiveness in critical moments. There is a need for a discreet, easy-to-use device that enables users to send immediate emergency alerts and location data with a simple gesture, improving personal safety outcomes.",
        resources: [
          "IoT Prototyping with Raspberry Pi | Raspberry Pi Blog",
          "Twilio SMS and GPS APIs",
          "ESP32 Microcontroller Documentation"
        ]
      },
      {
        id: 12,
        title: "Pothole and Road Damage Detection",
        description: "Road damage such as potholes poses safety risks and increases vehicle maintenance costs, yet timely detection and repair remain a challenge for city authorities. Manual reporting is inconsistent, and existing monitoring systems may not provide real-time, geo-tagged data. A solution is needed to automatically detect and report road damage using vehicle sensor data, enabling efficient maintenance and safer roads.",
        resources: [
          "IoT Sensors for Road Monitoring | Arduino Blog",
          "Geo-tagging with GPS Integration | Google Maps API",
          "OpenStreetMap for Road Data"
        ]
      },
      {
        id: 13,
        title: "Medication Adherence Monitoring",
        description: "Patients with chronic illnesses often struggle to adhere to complex medication regimens, leading to missed doses, reduced treatment effectiveness, and increased hospitalizations. Caregivers and healthcare providers lack real-time visibility into patients' adherence, hindering timely interventions. There is a need for a system that can monitor medication intake, provide reminders, and alert caregivers to missed doses, supporting better health outcomes.",
        resources: [
          "Arduino for IoT Prototyping",
          "Bluetooth Low Energy (BLE) Communication Guides",
          "Google Firebase for Real-Time Data Logging",
          "Twilio for Notification Alerts"
        ]
      }
    ]
  },
  4: {
    name: "Web3 Track",
    tooltip: "Decentralized applications and blockchain technologies",
    problems: [
      {
        id: 14,
        title: "DAO-Based Local Governance Platform",
        description: "Citizen engagement in local governance is often limited by lack of transparency and inefficient participation mechanisms. Traditional platforms may not provide secure, auditable ways for community members to propose and vote on local issues. There is a need for a decentralized platform that enables transparent, inclusive, and tamper-proof participation in local governance through digital identities and smart contracts.",
        resources: [
          "Building DAOs with Ethereum | ConsenSys Blog",
          "Smart Contract Programming with Solidity",
          "Snapshot Voting Platform"
        ]
      },
      {
        id: 15,
        title: "Decentralized Scholarship Distribution",
        description: "The process of distributing scholarships can be opaque, slow, and susceptible to fraud, making it difficult to ensure funds reach deserving recipients. Manual verification and record-keeping further hinder transparency and trust. A blockchain-based platform is needed to manage scholarship applications, verify identities, and disburse funds in a transparent, auditable, and efficient manner.",
        resources: [
          "Blockchain-based KYC Solutions | Hyperledger Blog",
          "Using Smart Contracts for Fund Disbursement | Ethereum Blog",
          "Polygon Network for Low-Cost Transactions"
        ]
      },
      {
        id: 16,
        title: "IoT-Blockchain Environmental Compliance",
        description: "Industrial pollution monitoring often suffers from delayed reporting, lack of transparency, and potential data tampering, undermining environmental accountability. Regulatory authorities struggle to enforce compliance and apply penalties in real time. There is a need for a system that integrates IoT sensors and blockchain to monitor emissions, automatically record violations, and ensure tamper-proof enforcement of environmental regulations.",
        resources: [
          "Air Quality Sensor Datasets | OpenAQ",
          "Smart Contracts for Environmental Compliance | Ethereum Blog",
          "Arduino/ESP32 for IoT Sensor Integration"
        ]
      },
      {
        id: 17,
        title: "Social Good Verification and Impact Funding",
        description: "Efforts to incentivize and verify social good activities are hampered by the lack of transparent tracking and reliable proof of real-world impact. Traditional systems struggle to allocate funding based on verified contributions, reducing trust among donors and participants. A platform is needed to verify social actions using geo-tagged evidence and allocate impact funding transparently through community governance.",
        resources: [
          "NFT and SBT Standards | Ethereum Improvement Proposals",
          "Geo-tagging APIs | Google Maps API",
          "DAO Governance Tools | Aragon, DAOstack"
        ]
      }
    ]
  },
  5: {
    name: "Open Innovation",
    tooltip: "Creative solutions that don't fit into predefined tracks",
    problems: [
      {
        id: 18,
        title: "Open Innovation Track",
        description: "Have a brilliant idea that doesn't fit into any of our predefined tracks? This is the place for you! The Open Innovation track welcomes all creative solutions addressing real-world problems. Showcase your innovative thinking and technical skills by bringing your unique project to life.",
        // resources: [
        //   "Choose your own resources based on your project idea"
        // ]
      }
    ]
  }
};

// Update tooltips for track buttons
const trackButtons = {
  1: { tooltip: "Predictive Intelligence Track", image: "Compass.png" },
  2: { tooltip: "FinTech & CyberSecurity Track", image: "Search_Magnifying_Glass.png" },
  3: { tooltip: "IoT Track", image: "Close_Square.png" },
  4: { tooltip: "Web3 Track", image: "Swatches_Palette.png" },
  5: { tooltip: "Open Innovation Track", image: "Clock.png" }
};

const Tracks = () => {
  const [trackText, setTrackText] = useState("TRACKS");
  const [clickedButton, setClickedButton] = useState(null);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [lineWidth, setLineWidth] = useState("100%");
  const [lineLeft, setLineLeft] = useState("50%");
  const [selectedTrackData, setSelectedTrackData] = useState(null);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  
  // Handle card animations
  useEffect(() => {
    if (selectedTrackData) {
      const cards = document.querySelectorAll(`.${styles.problemCard}`);
      cards.forEach((card, index) => {
        card.classList.add(styles.cardAppear);
      });
    }
  }, [selectedTrackData]);

  // Track selection animation and loading state
  const handleButtonClick = (trackNumber) => {
    setFadeClass("fade-out");
    setIsLoading(true);
    
    setTimeout(() => {
      setTrackText(`TRACK ${trackNumber}`);
      setClickedButton(trackNumber);
      setSelectedTrackData(trackData[trackNumber]);
      setFadeClass("fade-in");
      
      // Set line position based on track
      if (trackNumber === 1) {
        setLineWidth("10%");
        setLineLeft("22.5%");
      } else if (trackNumber === 2) {
        setLineWidth("10%");
        setLineLeft("37%");
      } else if (trackNumber === 3) {
        setLineWidth("10%");
        setLineLeft("50%");
      } else if (trackNumber === 4) {
        setLineWidth("10%");
        setLineLeft("64%");
      } else if (trackNumber === 5) {
        setLineWidth("10%");
        setLineLeft("77.5%");
      }
      
      setIsLoading(false);
    }, 500);
  };

  const handleReset = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setTrackText("TRACKS");
      setClickedButton(null);
      setSelectedTrackData(null);
      setFadeClass("fade-in");
      setLineWidth("100%");
      setLineLeft("50%");
    }, 500);
  };

  // Enhanced modal functionality with accessibility improvements
  const openModal = (problem) => {
    setSelectedProblem(problem);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus trap for accessibility
    setTimeout(() => {
      const closeButton = document.querySelector(`.${styles.closeButton}`);
      if (closeButton) closeButton.focus();
    }, 100);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle clicks outside modal to close
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  // Handle keyboard navigation and accessibility
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    
    // Handle tab key trap within modal for accessibility
    const handleTabKey = (event) => {
      if (!showModal || !modalRef.current) return;
      
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length === 0) return;
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    document.addEventListener('keydown', handleTabKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.removeEventListener('keydown', handleTabKey);
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  // Handle card keyboard navigation for accessibility
  const handleCardKeyDown = (e, problem) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Space') {
      e.preventDefault();
      openModal(problem);
    }
  };

  // Get URL for a resource if available
  const getResourceUrl = (resource) => {
    return resourceURLs[resource] || "#";
  };

  // Check if a resource has a valid URL
  const hasValidUrl = (resource) => {
    return resourceURLs[resource] && resourceURLs[resource] !== "#";
  };

  // Handle resource button click
  const handleResourceClick = (resource) => {
    const url = getResourceUrl(resource);
    if (url && url !== "#") {
      window.open(url, '_blank');
    }
  };

  return (
    <div className={styles.tracksContainer}>
      <div className={styles.tracks}>
        {clickedButton === null ? (
          <>
            <h1 className={`${styles.text} ${styles[fadeClass]}`}>
              {trackText}
            </h1>
            <div
              className={`${styles.line} ${styles[fadeClass]}`}
              style={{ width: lineWidth, left: lineLeft }}
            ></div>
            <div className={`${styles.buttonContainer} ${styles[fadeClass]}`}>
              {[1, 2, 3, 4, 5].map((trackNum) => (
                <button
                  key={trackNum}
                  className={styles[`button${trackNum}`]}
                  aria-label={trackButtons[trackNum].tooltip}
                  onClick={() => handleButtonClick(trackNum)}
                  data-tooltip={trackButtons[trackNum].tooltip}
                ></button>
              ))}
            </div>
            <div className={`${styles.box1} ${styles[fadeClass]}`}>
              <div className={styles.removebgPreview}></div>
              <div className={`${styles.text1} ${styles[fadeClass]}`}>
                <p>Greetings Agent!</p>
                <p>Choose Your Mission</p>
              </div>
            </div>
          </>
        ) : (
          <>
            {isLoading ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyStateIcon}>⏳</div>
                <p className={styles.emptyStateText}>Loading track information...</p>
              </div>
            ) : (
              <>
                <span className={styles.trackBadge}>
                  {selectedTrackData ? trackButtons[clickedButton].tooltip : ""}
                </span>
                {/* Fixed title position to avoid collision with track buttons */}
                <h1
                  className={`${styles.text} ${styles[fadeClass]}`}
                  style={{
                    position: "relative",
                    top: "150px" // Increased from 100px to avoid collision
                  }}
                >
                  {selectedTrackData ? selectedTrackData.name : trackText}
                </h1>
                <div className={`${styles.line} ${styles[fadeClass]}`}
                  style={{
                    position: "absolute",
                    top: "182px", // Adjusted to match new title position
                    left: lineLeft,
                    transform: "translateX(-50%)",
                    width: lineWidth
                  }}
                ></div>
                {/* Moved track buttons above the title */}
                <div
                  className={styles.buttonContainer}
                  style={{
                    position: "absolute",
                    top: "30px", // Moved up to avoid collision with title
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                >
                  {[1, 2, 3, 4, 5].map((trackNum) => (
                    <button
                      key={trackNum}
                      className={styles[`button${trackNum}`]}
                      aria-label={trackButtons[trackNum].tooltip}
                      onClick={() => handleButtonClick(trackNum)}
                      data-tooltip={trackButtons[trackNum].tooltip}
                    ></button>
                  ))}
                </div>
                
                {/* Adjusted container position to be closer to the title */}
                <div className={`${styles.problemsContainer} ${styles[fadeClass]}`}>
                  {selectedTrackData && selectedTrackData.problems.map((problem) => (
                    <div 
                      key={problem.id} 
                      className={`${styles.problemCard} ${styles.cardAppear}`}
                      onClick={() => openModal(problem)}
                      onKeyDown={(e) => handleCardKeyDown(e, problem)}
                      tabIndex="0"
                      role="button"
                      aria-label={`View details of ${problem.title}`}
                    >
                      <h2 className={styles.problemTitle}>{problem.title}</h2>
                      <p className={styles.problemPreview}>
                        {problem.description.length > 150 
                          ? `${problem.description.substring(0, 150)}...` 
                          : problem.description}
                      </p>
                      <button 
                        className={styles.viewMoreButton}
                        aria-hidden="true" // This is visually presented but semantically part of the card
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
        {clickedButton !== null && (
          <button 
            className={styles.button6} 
            onClick={handleReset}
            aria-label="Return to track selection"
          ></button>
        )}
      </div>

      {/* Enhanced modal for problem details with clickable resource buttons */}
      {showModal && selectedProblem && (
        <div 
          className={styles.modalOverlay} 
          onClick={handleOutsideClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${selectedProblem.id}`}
        >
          <div 
            className={styles.modalContent} 
            onClick={e => e.stopPropagation()}
            ref={modalRef}
            tabIndex="-1"
          >
            <div className={styles.modalHeader}>
              <h2 
                className={styles.modalTitle}
                id={`modal-title-${selectedProblem.id}`}
              >
                {selectedProblem.title}
              </h2>
              <button 
                className={styles.closeButton} 
                onClick={closeModal}
                aria-label="Close details"
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>{selectedProblem.description}</p>
              
              {/* Only show resources section if resources are available */}
              {selectedProblem.resources && selectedProblem.resources.length > 0 ? (
                <>
                  <h3 className={styles.resourcesTitle}>Resources:</h3>
                  <div className={styles.resourcesList}>
                    {selectedProblem.resources.map((resource, index) => (
                      <button 
                        key={index}
                        className={styles.resourceButton}
                        onClick={() => handleResourceClick(resource)}
                        disabled={!hasValidUrl(resource)}
                        aria-label={`Open resource: ${resource}`}
                      >
                        {resource.split('|')[0].trim()}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className={styles.noResources}>
                  No specific resources are provided for this challenge.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tracks;