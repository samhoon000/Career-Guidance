import { useState } from 'react';

interface MCQOption {
  label: string;
  value: string;
  isCorrect?: boolean;
}

interface MCQ {
  question: string;
  options: MCQOption[];
}

interface MCQGroupProps {
  questions: MCQ[];
}

export const MCQGroup = ({ questions }: MCQGroupProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const handleSelect = (questionIndex: number, value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: value,
    }));
  };

  return (
    <div className="space-y-6">
      {questions.map((mcq, index) => (
        <div key={index} className="bg-white rounded-card shadow-sm p-6">
          <h4 className="text-base font-semibold text-text mb-4">
            {index + 1}. {mcq.question}
          </h4>
          <div className="space-y-2">
            {mcq.options.map((option) => {
              const isSelected = selectedAnswers[index] === option.value;
              const isCorrect = option.isCorrect;
              
              // Determine styling based on selection and correctness
              let bgClass = 'bg-gray-100 text-gray-800';
              if (isSelected) {
                bgClass = isCorrect 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white';
              }

              return (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${bgClass}`}
                >
                  <input
                    type="radio"
                    name={`mcq-${index}`}
                    value={option.value}
                    checked={isSelected}
                    onChange={() => handleSelect(index, option.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">
                    {option.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

