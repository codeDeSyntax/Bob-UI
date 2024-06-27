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
  const [backgroundColor, setBackgroundColor] = useState(settings.backgroundColor);
  const [fontFamily, setFontFamily] = useState(settings.fontFamily);

  const handleReset = () => {
    setTextSize('3');
    setTextColor('#000000');
    setBackgroundColor('#ffffff');
    setFontFamily('Arial');
  };

  useEffect(() => {
    updateSettings({ textSize, textColor, backgroundColor, fontFamily });
  }, [textSize, textColor, backgroundColor, fontFamily, updateSettings]);

  return (
    <div className="settings-container bg-gray-100 w-full p-8 rounded-lg shadow-lg  mx-auto">
      <h2 className="font-semibold text-4xl text-gray-800 mb-8">Settings</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="settings-grid flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <div className="setting-item bg-white border border-gray-300 p-6 rounded-lg shadow-sm">
              <label htmlFor="textSize" className="block mb-2 font-medium">
                Text Size: {textSize}
              </label>
              <select
                id="textSize"
                value={textSize}
                onChange={(e) => setTextSize(e.target.value)}
                className="w-full border border-gray-300 text-gray-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {fontSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="setting-item bg-white border border-gray-300 p-6 rounded-lg shadow-sm">
              <label htmlFor="textColor" className="block mb-2 font-medium">
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
            <div className="setting-item bg-white border border-gray-300 p-6 rounded-lg shadow-sm">
              <label htmlFor="backgroundColor" className="block mb-2 font-medium">
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
            <div className="setting-item bg-white border border-gray-300 p-6 rounded-lg shadow-sm">
              <label htmlFor="fontFamily" className="block mb-2 font-medium">
                Font Family:
              </label>
              <select
                id="fontFamily"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full border border-gray-300 text-gray-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Reset to Default
          </button>
        </div>
        <div className="preview-panel flex-1 bg-white border border-gray-300 p-8 rounded-lg shadow-sm">
          <h3 className="font-semibold text-2xl mb-4 text-gray-800">Preview</h3>
          <div
            className="preview-container"
            style={{
              width: '100%',
              height: '300px',
              overflow: 'auto',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: backgroundColor,
              color: textColor,
              fontFamily: fontFamily,
              fontSize: `${textSize}rem`,
            }}
          >
            This is a preview of your text settings. You can see how your choices affect the appearance of the text.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
