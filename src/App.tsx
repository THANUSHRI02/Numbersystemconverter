import { useState } from 'react';

interface NumberSystemConverterProps {}

const NumberSystemConverter: React.FC<NumberSystemConverterProps> = () => {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [octal, setOctal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

  const handleBinaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[01]*$/;
    if (regex.test(value)) {
      setBinary(value);
      if (value !== '') {
        setDecimal(parseInt(value, 2).toString());
        setOctal(parseInt(value, 2).toString(8));
        setHexadecimal(parseInt(value, 2).toString(16).toUpperCase());
      } else {
        setDecimal('');
        setOctal('');
        setHexadecimal('');
      }
    }
  };

  const handleDecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[0-9]*$/;
    if (regex.test(value)) {
      setDecimal(value);
      if (value !== '') {
        setBinary(parseInt(value).toString(2));
        setOctal(parseInt(value).toString(8));
        setHexadecimal(parseInt(value).toString(16).toUpperCase());
      } else {
        setBinary('');
        setOctal('');
        setHexadecimal('');
      }
    }
  };

  const handleOctalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[0-7]*$/;
    if (regex.test(value)) {
      setOctal(value);
      if (value !== '') {
        setBinary(parseInt(value, 8).toString(2));
        setDecimal(parseInt(value, 8).toString());
        setHexadecimal(parseInt(value, 8).toString(16).toUpperCase());
      } else {
        setBinary('');
        setDecimal('');
        setHexadecimal('');
      }
    }
  };

  const handleHexadecimalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex = /^[0-9A-Fa-f]*$/;
    if (regex.test(value)) {
      setHexadecimal(value.toUpperCase());
      if (value !== '') {
        setBinary(parseInt(value, 16).toString(2));
        setDecimal(parseInt(value, 16).toString());
        setOctal(parseInt(value, 16).toString(8));
      } else {
        setBinary('');
        setDecimal('');
        setOctal('');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Number System Converter</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-600 mb-2">Binary</label>
          <input
            type="text"
            value={binary}
            onChange={handleBinaryChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Decimal</label>
          <input
            type="text"
            value={decimal}
            onChange={handleDecimalChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Octal</label>
          <input
            type="text"
            value={octal}
            onChange={handleOctalChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-2">Hexadecimal</label>
          <input
            type="text"
            value={hexadecimal}
            onChange={handleHexadecimalChange}
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NumberSystemConverter;