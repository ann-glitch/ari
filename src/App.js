import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => {
        resetTranscript();
      },
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => {
        resetTranscript();
      },
    },
    {
      command: "open *",
      callback: (site) => {
        window.open(`https://${site}.com`);
      },
    },
    {
      command: "increase text size",
      callback: () => {
        document.getElementById("content").style.fontSize = "22px";
      },
    },
    {
      command: "decrease text size",
      callback: () => {
        document.getElementById("content").style.fontSize = "16px";
      },
    },
    {
      command: "change text color to *",
      callback: (color) => {
        document.getElementById("content").style.color = { color };
      },
    },
  ];

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(
    { commands }
  );
  SpeechRecognition.startListening({ continuous: true, language: "en-US" });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container">
      <div className="nav">
        <h3>
          Hi I'm Ari, your speech-recognition assistant! Please speak while I
          jot. I can open sites as well.
        </h3>
      </div>
      <div id="content" className="p-text app__flex">
        {transcript}
      </div>
    </div>
  );
};

export default App;
