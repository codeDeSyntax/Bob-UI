import React, { useState, useContext, useEffect } from 'react';
import { SermonContext } from '../components/GlobalState';
import { FaCog } from 'react-icons/fa';

const fontSizes = ['2', '3', '4', '5', '6', '7', '8'];
const fontFamilies = [
  'Arial',
  'Times New Roman',
  'Georgia',
  'Courier New',
  'Verdana',
  'Comic Sans MS',
  'Impact',
  'monospace'
];

const SettingsContent = () => {
  const { settings, updateSettings } = useContext(SermonContext);
  const [textSize, setTextSize] = useState(settings.textSize);
  const [textColor, setTextColor] = useState(settings.textColor);
  const [backgroundColor, setBackgroundColor] = useState(
    settings.backgroundColor
  );
  const [fontFamily, setFontFamily] = useState(settings.fontFamily);

  const handleReset = () => {
    setTextSize('3');
    setTextColor('');
    setBackgroundColor('');
    setFontFamily('monospace');
  };

  useEffect(() => {
    updateSettings({ textSize, textColor, backgroundColor, fontFamily });
  }, [textSize, textColor, backgroundColor, fontFamily, updateSettings]);

  return (
    <div className="settings-container bg-gray-800 p-8">
      <h2 className="font-bold text-text text-3xl mb-8">Settings</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="settings-grid flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-text">
            <div className="setting-item bg-background border-2 border-gray-700 p-6 rounded-lg">
              <label htmlFor="textSize" className="block mb-2">
                Text Size: {textSize}
              </label>
              <select
                id="textSize"
                value={textSize}
                onChange={(e) => setTextSize(e.target.value)}
                className="w-full border border-gray-300 text-gray-800 p-2 rounded-md"
              >
                {fontSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="setting-item bg-background border-2 border-gray-700 p-6 rounded-lg">
              <label htmlFor="textColor" className="block mb-2">
                Text Color:
              </label>
              <input
                type="color"
                id="textColor"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md"
              />
            </div>
            <div className="setting-item bg-background border-2 border-gray-700 p-6 rounded-lg">
              <label htmlFor="backgroundColor" className="block mb-2">
                Background Color:
              </label>
              <input
                type="color"
                id="backgroundColor"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md"
              />
            </div>
            <div className="setting-item bg-background border-2 border-gray-700 p-6 rounded-lg">
              <label htmlFor="fontFamily" className="block mb-2">
                Font Family:
              </label>
              <select
                id="fontFamily"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full border border-gray-300 text-gray-800 p-2 rounded-md"
              >
                {fontFamilies.map((family) => (
                  <option key={family} value={family}>
                    {family}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Reset to Default
          </button>
        </div>
        <div className="preview-panel flex-1 bg-background border-2 border-gray-700 p-8 rounded-lg">
          <h3 className="font-bold text-xl mb-4 text-text">Preview</h3>
          <div className="preview-container" style={{
            width: '100%',
            height: '300px',
            overflow: 'auto',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}>
            <div
              style={{
                fontSize: `${textSize}rem`,
                color: textColor,
                backgroundColor: backgroundColor,
                fontFamily: fontFamily,
                padding: '20px',
              }}
            >
              This is a preview of your text settings. You can see how your
              choices affect the appearance of the text.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
