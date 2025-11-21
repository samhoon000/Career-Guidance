import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";
import { Quiz as QuizType } from "@/data/dataAnalystContent";
import { toast } from "sonner";

interface QuizProps {
  quiz: QuizType;
  onComplete: (score: number, passed: boolean) => void;
  previousResult?: {
    score: number;
    passed: boolean;
    attempts: number;
  };
}

export const Quiz = ({ quiz, onComplete, previousResult }: QuizProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setIsOpen(true);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const correctAnswers = selectedAnswers.filter(
      (answer, idx) => answer === quiz.questions[idx].correctAnswer
    ).length;

    const finalScore = Math.round((correctAnswers / quiz.questions.length) * 100);
    const passed = finalScore >= quiz.passingScore;

    setScore(finalScore);
    setShowResults(true);
    onComplete(finalScore, passed);

    if (passed) {
      toast.success("Congratulations! You passed the quiz! 🎉", {
        description: `Score: ${finalScore}%`,
      });
    } else {
      toast.error("Keep learning! Try again to pass.", {
        description: `Score: ${finalScore}% (Required: ${quiz.passingScore}%)`,
      });
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const question = quiz.questions[currentQuestion];

  return (
    <>
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h4 className="font-semibold text-sm mb-1">{quiz.title}</h4>
            <p className="text-xs text-muted-foreground">
              {quiz.questions.length} questions · Passing score: {quiz.passingScore}%
            </p>
          </div>
          {previousResult && (
            <Badge variant={previousResult.passed ? "default" : "secondary"}>
              {previousResult.passed ? (
                <CheckCircle2 className="w-3 h-3 mr-1" />
              ) : (
                <XCircle className="w-3 h-3 mr-1" />
              )}
              {previousResult.score}%
            </Badge>
          )}
        </div>

        <Button onClick={handleStart} className="w-full">
          {previousResult ? (
            <>
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </>
          ) : (
            <>
              <Trophy className="w-4 h-4 mr-2" />
              Take Quiz
            </>
          )}
        </Button>

        {previousResult && previousResult.attempts > 0 && (
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Attempts: {previousResult.attempts}
          </p>
        )}
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{quiz.title}</DialogTitle>
            <DialogDescription>
              Answer all questions to complete the quiz. Passing score: {quiz.passingScore}%
            </DialogDescription>
          </DialogHeader>

          {!showResults ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Question {currentQuestion + 1} of {quiz.questions.length}
                </span>
                <span>
                  {selectedAnswers.filter((a) => a !== undefined).length} answered
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">{question.question}</h3>

                <div className="space-y-2">
                  {question.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(idx)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        selectedAnswers[currentQuestion] === idx
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedAnswers[currentQuestion] === idx
                              ? "border-primary bg-primary"
                              : "border-border"
                          }`}
                        >
                          {selectedAnswers[currentQuestion] === idx && (
                            <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                          )}
                        </div>
                        <span className="text-sm">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  variant="outline"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="flex-1"
                >
                  {currentQuestion === quiz.questions.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center py-6">
                {score >= quiz.passingScore ? (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                      <Trophy className="w-8 h-8 text-success" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-success mb-2">
                        Congratulations!
                      </h3>
                      <p className="text-muted-foreground">
                        You passed the quiz with a score of {score}%
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
                      <XCircle className="w-8 h-8 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-destructive mb-2">
                        Keep Learning!
                      </h3>
                      <p className="text-muted-foreground">
                        You scored {score}%. You need {quiz.passingScore}% to pass.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Review Your Answers:</h4>
                {quiz.questions.map((q, idx) => {
                  const userAnswer = selectedAnswers[idx];
                  const isCorrect = userAnswer === q.correctAnswer;

                  return (
                    <Card key={idx} className="p-4">
                      <div className="flex items-start gap-3 mb-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-sm mb-2">{q.question}</p>
                          <p className="text-sm text-muted-foreground mb-1">
                            Your answer: {q.options[userAnswer]}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-success mb-2">
                              Correct answer: {q.options[q.correctAnswer]}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground italic">
                            {q.explanation}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button onClick={() => setIsOpen(false)} variant="outline" className="flex-1">
                  Close
                </Button>
                {score < quiz.passingScore && (
                  <Button onClick={handleRetry} className="flex-1">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
