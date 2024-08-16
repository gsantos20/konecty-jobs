import React, { useState } from 'react';
import { Input } from './ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const InputSearch: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6">
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        className="p-5 focus-visible:border-stone-400 border-stone-300 rounded-xl focus-visible:ring-transparent"
        placeholder="Buscar produtos..."
      />
    </div>
  );
};

export default InputSearch;