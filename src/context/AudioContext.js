import React, {
  createContext,
  useState,
  FunctionComponent,
  useEffect,
  SetStateAction,
} from "react";

const defaultAudioContext = {
  playAudio: () => {},
  pauseAudio: () => {},
  timestamps: [],
  setTimestamps: () => {},
  transcript: "", // default value for transcript
  setTranscript: () => {}, // adjust setter
  selectedOption: false,
  setSelectedOption: () => {},
};

export const AudioManagerContext = createContext(defaultAudioContext);

export const AudioManagerProvider = ({ children }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [timestamps, setTimestamps] = useState([]);
  const [transcript, setTranscript] = useState(""); // adjust useState
  const [selectedOption, setSelectedOption] = useState({
    0: "dsfsgsdgsf",
  });
  const playAudio = (audio) => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }
    setCurrentAudio(audio);
    audio.play();
  };

  const pauseAudio = () => {
    if (currentAudio) {
      currentAudio.pause();
    }
  };

  return (
    <AudioManagerContext.Provider
      value={{
        timestamps,
        setTimestamps,
        playAudio,
        pauseAudio,
        transcript,
        setTranscript,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </AudioManagerContext.Provider>
  );
};
