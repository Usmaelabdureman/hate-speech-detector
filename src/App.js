import React, { useState } from "react";
import axios from "axios";
import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";
import "./i18n/config";
import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState("");
  const [predictedLabel, setPredictedLabel] = useState("");
  const [error, setError] = useState("");
 

  const handlePrediction = async () => {
    try {
      const response = await axios.post("http://localhost:8000/predict", {
        text: inputText,
      });
      setPredictedLabel(response.data.label);
      setError("");
    } catch (error) {
      setError("Error occurred during prediction. Please try again.");
    }
  };
  return (
   
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="max-w-md w-full px-6 py-12 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-semibold mb-6 text-center">
              {t('Hate Speech Detection')}
            </h1>
            <textarea
              className="w-full h-32 px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t('Enter text here...')}
            />
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md mt-4 focus:outline-none"
              onClick={handlePrediction}
            >
             { t('Predict')}
            </button>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            {predictedLabel && (
              <div className="mt-4">
                <p className="text-green-500 font-semibold">Predicted Label:</p>
                <p className="bg-gray-100 rounded-md p-2">
                  {predictedLabel === "Hate" ? "የጥላቻ ንግግር" : predictedLabel}
                </p>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
     
 
  );
}

export default App;
